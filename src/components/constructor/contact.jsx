import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Field, Flex, HStack, Input, Stack } from "@chakra-ui/react";
import { Label } from "./texts/label";
import { Switcher } from "./ui/switcher";

export const Contact = ({ name, value, onChange, hide, required }) => {
  const { t } = useTranslation();
  
  const [checked, setChecked] = useState(true);

  const handleSwitchChange = (e) => {
    setChecked(e.checked);
    hide(name, !e.checked);
  };

  const handleNestedChange = (e) => {
    const { name, value: inputValue } = e.target;
    onChange({
      target: {
        name: "connectWithUs",
        value: {
          ...value,
          [name]: inputValue,
        },
      },
    });
  };

  return (
    <Stack
      borderRadius={"8px"}
      border={"1px solid"}
      borderColor={"#E5E7EB"}
      bg="white"
      p="25px"
      gap="16px"
    >
      <Field.Root required={required}>
        <Field.Label as={Flex} w="100%" justify={"space-between"}>
          <HStack>
            <Field.RequiredIndicator />
            <Label text="contact" />
          </HStack>
          {!required && (
            <Switcher checked={checked} onChange={handleSwitchChange} />
          )}
        </Field.Label>
      </Field.Root>
      {/* 
      <Textarea
        h={"66px"}
        resize={"none"}
        name="description"
        value={value?.description}
        onChange={handleNestedChange}
        disabled={!checked}
        placeholder="Short description"
      /> */}

      <Flex gap="15px">
        <Input
          type="text"
          name="name"
          variant="outline"
          value={value?.name ?? ""}
          required={required}
          onChange={handleNestedChange}
          borderRadius="8px"
          placeholder={t("name")}
          disabled={!checked}
        />
        <Input
          type="tel"
          name="phone"
          variant="outline"
          value={value?.phone ?? ""}
          required={required}
          onChange={handleNestedChange}
          borderRadius="8px"
          placeholder={t("phone")}
          disabled={!checked}
        />
        <Input
          type="email"
          name="email"
          variant="outline"
          value={value?.email ?? ""}
          required={required}
          onChange={handleNestedChange}
          borderRadius="8px"
          placeholder={t("email")}
          disabled={!checked}
        />
      </Flex>
    </Stack>
  );
};
