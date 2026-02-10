import { FloatingLabelSelect } from "@/shared/ui/floating-label-select";
import clsx from "clsx";

interface Props {
  className?: string;
}

export const LanguageSelect = ({ className }: Props) => {
  return (
    <FloatingLabelSelect
      className={clsx("max-w-xs", className)}
      label="Language"
    >
      <FloatingLabelSelect.Trigger>
        <FloatingLabelSelect.Value />
      </FloatingLabelSelect.Trigger>

      <FloatingLabelSelect.Content>
        <FloatingLabelSelect.SelectGroup>
          <FloatingLabelSelect.SelectItem value="en">
            English
          </FloatingLabelSelect.SelectItem>
          <FloatingLabelSelect.SelectItem value="es">
            Russian
          </FloatingLabelSelect.SelectItem>
        </FloatingLabelSelect.SelectGroup>
      </FloatingLabelSelect.Content>
    </FloatingLabelSelect>
  );
};
