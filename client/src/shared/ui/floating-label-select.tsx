import { useState, type ComponentProps, type ReactNode } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/shadcn/components/ui/select";
import { Label } from "@/shared/shadcn/components/ui/label";
import clsx from "clsx";

interface RootProps {
  className?: string;
  children: ReactNode;
  label?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

type TriggerProps = ComponentProps<typeof SelectTrigger>;

type ContentProps = ComponentProps<typeof SelectContent>;

type ValueProps = Omit<ComponentProps<typeof SelectValue>, "placeholder">;

const Root = ({
  className,
  children,
  label,
  value,
  onValueChange,
}: RootProps) => {
  const [isFloating, setIsFloating] = useState(!!value);

  const handleValueChange = (newValue: string) => {
    setIsFloating(!!newValue);

    onValueChange?.(newValue);
  };

  return (
    <Select value={value} onValueChange={handleValueChange}>
      <div className={clsx("relative w-full! h-14!", className)}>
        {children}

        <Label
          className={clsx(
            "absolute top-1 left-3 text-muted-foreground font-semibold transition-all pointer-events-none",
            isFloating ? "text-sm" : "text-base translate-y-3",
          )}
        >
          {label}
        </Label>
      </div>
    </Select>
  );
};

const Trigger = ({ className, children, ...props }: TriggerProps) => {
  return (
    <SelectTrigger
      className={clsx("size-full! [&>span]:mt-6 [&>span]:text-base", className)}
      {...props}
    >
      {children}
    </SelectTrigger>
  );
};

const Content = ({ children, ...props }: ContentProps) => {
  return (
    <SelectContent position="popper" {...props}>
      {children}
    </SelectContent>
  );
};

const Value = ({ children, ...props }: ValueProps) => {
  return (
    <SelectValue placeholder=" " {...props}>
      {children}
    </SelectValue>
  );
};

export const FloatingLabelSelect = Object.assign(Root, {
  Trigger,
  Content,
  Value,
  SelectGroup,
  SelectItem,
});
