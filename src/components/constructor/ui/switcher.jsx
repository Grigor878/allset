import { Switch } from "@chakra-ui/react";

export const Switcher = ({ checked, onChange }) => {
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <Switch.Root
      checked={checked}
      onCheckedChange={handleChange}
      size="lg"
      //   colorPalette="pink"
    >
      <Switch.HiddenInput />
      <Switch.Control
        _checked={{
          bg: "#F43F5E",
          borderColor: "#F43F5E",
        }}
      />
    </Switch.Root>
  );
};
