import { type ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

import { FloatingLabelSelect } from "@/shared/ui/floating-label-select";
import { useTranslation } from "react-i18next";

interface Props extends Omit<
  ComponentPropsWithoutRef<typeof FloatingLabelSelect>,
  "children"
> {
  className?: string;
}

export const LanguageSelect = ({
  className,
  onValueChange,
  ...props
}: Props) => {
  const { t } = useTranslation();

  return (
    <FloatingLabelSelect
      className={clsx("max-w-xs", className)}
      onValueChange={onValueChange}
      {...props}
    >
      <FloatingLabelSelect.Trigger>
        <FloatingLabelSelect.Value />
      </FloatingLabelSelect.Trigger>

      <FloatingLabelSelect.Content>
        <FloatingLabelSelect.SelectItem value="en">
          {t("locales.en")}
        </FloatingLabelSelect.SelectItem>
        <FloatingLabelSelect.SelectItem value="ru">
          {t("locales.ru")}
        </FloatingLabelSelect.SelectItem>
      </FloatingLabelSelect.Content>
    </FloatingLabelSelect>
  );
};
