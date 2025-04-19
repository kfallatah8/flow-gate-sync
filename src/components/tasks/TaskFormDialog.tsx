
import React, { useState, useRef } from 'react';
import { Camera, Upload, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

interface TaskFormDialogProps {
  type: 'arrival' | 'departure';
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: TaskFormData) => void;
}

export interface TaskFormData {
  id: string;
  type: 'arrival' | 'departure';
  location: string;
  status: 'ok' | 'issue' | 'critical';
  note: string;
  photo: string | null;
  timestamp: Date;
}

const TaskFormDialog: React.FC<TaskFormDialogProps> = ({ 
  type, 
  isOpen, 
  onClose,
  onSubmit 
}) => {
  const { t } = useLanguage();
  const [location, setLocation] = useState('Gate 4');
  const [status, setStatus] = useState<'ok' | 'issue' | 'critical'>('ok');
  const [note, setNote] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const { toast } = useToast();
  
  const handleStartCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Camera Error",
        description: "Unable to access camera. Please check permissions.",
      });
    }
  };
  
  const handleTakePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      // Set canvas dimensions to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      // Draw the video frame to the canvas
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Add timestamp to the photo
        context.fillStyle = "rgba(0, 0, 0, 0.5)";
        context.fillRect(0, canvas.height - 30, canvas.width, 30);
        context.fillStyle = "white";
        context.font = "14px Arial";
        
        const now = new Date();
        const timestamp = now.toLocaleString();
        context.fillText(timestamp, 10, canvas.height - 10);
        
        // Convert canvas to data URL
        const dataUrl = canvas.toDataURL('image/jpeg');
        setPhoto(dataUrl);
        
        // Stop the camera stream
        const stream = video.srcObject as MediaStream;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        
        setIsCameraActive(false);
      }
    }
  };
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        // Create an image to get dimensions
        const img = new Image();
        img.onload = () => {
          if (canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            if (context) {
              // Set canvas size to match image
              canvas.width = img.width;
              canvas.height = img.height;
              
              // Draw image on canvas
              context.drawImage(img, 0, 0);
              
              // Add timestamp to the photo
              context.fillStyle = "rgba(0, 0, 0, 0.5)";
              context.fillRect(0, canvas.height - 30, canvas.width, 30);
              context.fillStyle = "white";
              context.font = "14px Arial";
              
              const now = new Date();
              const timestamp = now.toLocaleString();
              context.fillText(timestamp, 10, canvas.height - 10);
              
              // Convert canvas to data URL
              const dataUrl = canvas.toDataURL('image/jpeg');
              setPhoto(dataUrl);
            }
          }
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmitForm = () => {
    if (!photo) {
      toast({
        variant: "destructive",
        title: "Photo Required",
        description: "Please take or upload a photo to submit the form.",
      });
      return;
    }
    
    const formData: TaskFormData = {
      id: Date.now().toString(),
      type,
      location,
      status,
      note,
      photo,
      timestamp: new Date()
    };
    
    onSubmit(formData);
    
    // Reset form
    setLocation('Gate 4');
    setStatus('ok');
    setNote('');
    setPhoto(null);
    
    toast({
      title: "Form Submitted",
      description: `${t(type === 'arrival' ? 'arrivalForm' : 'departureForm')} submitted successfully!`,
    });
    
    onClose();
  };
  
  const handleCancelCamera = () => {
    if (videoRef.current) {
      const stream = videoRef.current.srcObject as MediaStream;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
      setIsCameraActive(false);
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {t(type === 'arrival' ? 'arrivalForm' : 'departureForm')}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          {/* Location field */}
          <div className="grid gap-2">
            <Label htmlFor="location">{t('location')}</Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter gate or location"
            />
          </div>
          
          {/* Status selection */}
          <div className="grid gap-2">
            <Label>{t('status')}</Label>
            <RadioGroup
              value={status}
              onValueChange={(value) => setStatus(value as 'ok' | 'issue' | 'critical')}
              className="flex space-x-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ok" id="status-ok" />
                <Label htmlFor="status-ok" className="text-green-500">{t('ok')}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="issue" id="status-issue" />
                <Label htmlFor="status-issue" className="text-amber-500">{t('issue')}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="critical" id="status-critical" />
                <Label htmlFor="status-critical" className="text-red-500">{t('critical')}</Label>
              </div>
            </RadioGroup>
          </div>
          
          {/* Notes */}
          <div className="grid gap-2">
            <Label htmlFor="note">{t('notes')}</Label>
            <Textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder={t('addNotes')}
              className="min-h-[100px]"
            />
          </div>
          
          {/* Photo capture/upload */}
          <div className="space-y-2">
            <Label>{t('photoEvidence')}</Label>
            
            {photo ? (
              <div className="relative">
                <img 
                  src={photo} 
                  alt="Captured" 
                  className="w-full h-auto rounded-md border"
                />
                <Button
                  type="button"
                  size="icon"
                  variant="destructive"
                  className="absolute top-2 right-2 h-8 w-8"
                  onClick={() => setPhoto(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : isCameraActive ? (
              <div className="space-y-2">
                <div className="relative border rounded-md overflow-hidden">
                  <video 
                    ref={videoRef} 
                    autoPlay 
                    playsInline 
                    className="w-full h-auto"
                  />
                  <Button
                    type="button"
                    size="icon"
                    variant="destructive"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={handleCancelCamera}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <Button 
                  type="button"
                  className="w-full" 
                  onClick={handleTakePhoto}
                >
                  {t('capturePhoto')}
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  type="button"
                  variant="outline" 
                  onClick={handleStartCamera}
                  className="w-full"
                >
                  <Camera className="mr-2 h-4 w-4" />
                  {t('takePhoto')}
                </Button>
                
                <Button 
                  type="button"
                  variant="outline" 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  {t('uploadPhoto')}
                </Button>
                
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileUpload}
                />
              </div>
            )}
            
            <canvas ref={canvasRef} className="hidden" />
          </div>
        </div>
        
        <DialogFooter className="sm:justify-end">
          <Button type="button" variant="secondary" onClick={onClose}>
            {t('cancel')}
          </Button>
          <Button type="button" onClick={handleSubmitForm}>
            {t('submit')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TaskFormDialog;
