import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Portal, Select } from "@chakra-ui/react";

export const Selector = ({ name, value, onChange, collection, disabled }) => {
  const { t } = useTranslation();
  
  const [selected, setSelected] = useState(value || "");

  return (
    <Select.Root
      disabled={disabled}
      collection={collection}
      width="100%"
      value={selected ? [selected] : []}
      onValueChange={(el) => {
        const newValue = el?.value?.[0] || "";

        setSelected(newValue);
        onChange({
          target: {
            name,
            value: newValue,
          },
        });
      }}
    >
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={`${t("select")} ${t(name)}`} />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {collection?.items?.map((item) => (
              <Select.Item item={item} key={item.value}>
                {item.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};
