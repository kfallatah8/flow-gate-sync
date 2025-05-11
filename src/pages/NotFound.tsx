
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center p-4">
      <div className="space-y-4">
        <div className="flex justify-center">
          <div className="rounded-full bg-muted/50 p-6">
            <MapPin className="h-12 w-12 text-muted-foreground" />
          </div>
        </div>
        <h1 className="text-4xl font-bold">Page Not Found</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="pt-6">
          <Button asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t('dashboard')}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
