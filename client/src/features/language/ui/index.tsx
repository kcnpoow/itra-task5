import { FloatingLabelSelect } from "@/shared/ui/floating-label-select";

export const LanguageSelect = () => {
  return (
    <FloatingLabelSelect className="max-w-xs" label="Language">
      <FloatingLabelSelect.Trigger >
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
