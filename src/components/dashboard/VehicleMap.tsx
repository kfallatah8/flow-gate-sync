
import React from 'react';
import { Compass, Maximize2, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const VehicleMap: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-md font-medium">Vehicle Locations</CardTitle>
        <div className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <Compass className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Center Map</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <Maximize2 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Fullscreen</TooltipContent>
          </Tooltip>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0 pb-4">
        <div className="relative h-[300px] w-full overflow-hidden rounded-md bg-muted/20">
          {/* Map placeholder */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted/10 bg-[url('/placeholder.svg')] bg-cover">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="rounded-full bg-background/80 p-3 backdrop-blur-sm">
                <Compass className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="bg-background/80 px-4 py-2 text-sm backdrop-blur-sm rounded-md">
                Map visualization will appear here
              </div>
            </div>
            {/* Vehicle indicators */}
            <div className="absolute top-1/3 left-1/4 h-3 w-3 animate-pulse-slow rounded-full bg-flowgate-500 ring-4 ring-flowgate-500/20"></div>
            <div className="absolute top-2/3 left-1/2 h-3 w-3 animate-pulse-slow rounded-full bg-flowgate-500 ring-4 ring-flowgate-500/20"></div>
            <div className="absolute top-1/4 left-2/3 h-3 w-3 animate-pulse-slow rounded-full bg-flowgate-500 ring-4 ring-flowgate-500/20"></div>
            <div className="absolute top-1/2 left-1/3 h-3 w-3 animate-pulse-slow rounded-full bg-flowgate-500 ring-4 ring-flowgate-500/20"></div>
          </div>
        </div>
        <div className="px-4 pt-3">
          <div className="flex justify-between text-sm">
            <div>
              <span className="text-muted-foreground">Active vehicles:</span>
              <span className="ml-1 font-medium">12</span>
            </div>
            <div>
              <span className="text-muted-foreground">Status:</span>
              <span className="ml-1 font-medium text-green-500">Live</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleMap;
