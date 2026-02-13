import { useState, type MouseEvent } from "react";
import {
  Volume1Icon,
  Volume2Icon,
  VolumeIcon,
  VolumeOffIcon,
} from "lucide-react";

import { Button } from "@/shared/shadcn/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/shadcn/components/ui/popover";
import { Slider } from "@/shared/shadcn/components/ui/slider";

interface Props {
  volume: number[];
  onVolumeChange: (volume: number[]) => void;
}

export const VolumeControl = ({ volume, onVolumeChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastVolume, setLastVolume] = useState([50]);

  const volumePercent = volume[0];

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleToggle = (event: MouseEvent) => {
    event.preventDefault();

    if (volumePercent === 0) {
      onVolumeChange(lastVolume);
    } else {
      setLastVolume(volume);

      onVolumeChange([0]);
    }
  };

  return (
    <div
      className="p-2 -m-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild onClick={handleToggle}>
          <Button className="rounded-full" size="icon-xs" variant="outline">
            {volumePercent > 0.66 ? (
              <Volume2Icon />
            ) : volumePercent > 0.33 ? (
              <Volume1Icon />
            ) : volumePercent > 0 ? (
              <VolumeIcon />
            ) : (
              <VolumeOffIcon />
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="max-w-px p-2.5" align="center">
          <Slider
            className="min-h-14!"
            orientation="vertical"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onValueChange={onVolumeChange}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
