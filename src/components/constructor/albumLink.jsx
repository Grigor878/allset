import { t } from "i18next";
import { useState } from "react";
import { Field, Flex, HStack, Input, Stack } from "@chakra-ui/react";
import { Label } from "./texts/label";
import { Switcher } from "./ui/switcher";

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
            <Label text="photo_video" />
          </HStack>
          {!required && (
            <Switcher checked={checked} onChange={handleSwitchChange} />
          )}
        </Field.Label>

        <Input
          name={name}
          variant="outline"
          value={value ?? ""}
          onChange={onChange}
          borderRadius={"8px"}
          placeholder={t("photo_video_placeholder")}
          required={required}
          disabled={!checked}
          // disabled={true}
        />
      </Field.Root>
    </Stack>
  );
};
