import { useState } from "react";
import { Field, Flex, HStack, Input, Stack, Switch } from "@chakra-ui/react";
import { Label } from "../texts/label";

export const AlbumLink = ({ name, value, onChange, hide, required }) => {
  const [checked, setChecked] = useState(true);

  const handleSwitchChange = (e) => {
    setChecked(e.checked);
    hide(name, !e.checked);
  };

  return (
    <Stack
      borderRadius={"8px"}
      border={"1px solid"}
      borderColor={"#E5E7EB"}
      bg="white"
      p="25px"
      gap="14px"
    >
      <Field.Root required={required} gap={"16px"}>
        <Field.Label as={Flex} w="100%" justify={"space-between"}>
          <HStack>
            <Field.RequiredIndicator />
            <Label text="Wedding Photos and Video" />
          </HStack>
          {!required && (
            <Switch.Root
              checked={checked}
              onCheckedChange={handleSwitchChange}
              size="lg"
              colorPalette="pink"
            >
              <Switch.HiddenInput />
              <Switch.Control />
            </Switch.Root>
          )}
        </Field.Label>

        <Input
          name={name}
          variant="outline"
          value={value ?? ""}
          onChange={onChange}
          borderRadius={"8px"}
          placeholder="Google Drive / shared folder link"
          required={required}
          disabled={!checked}
          // disabled={true}
        />
      </Field.Root>
    </Stack>
  );
};
