import { useState } from "react";
import {
  Box,
  createListCollection,
  Field,
  Flex,
  HStack,
  Stack,
  Switch,
  Textarea,
} from "@chakra-ui/react";
import { Label } from "./texts/label";
import { Selector } from "./ui/selector";
import { schemes, styles } from "../../utils/constants";

export const Dresscode = ({ name, value, onChange, hide, required }) => {
  const [checked, setChecked] = useState(true);

  const handleSwitchChange = (e) => {
    setChecked(e.checked);
    hide(name, !e.checked);
  };

  const handleNestedChange = (e) => {
    const { name, value: inputValue } = e.target;
    onChange({
      target: {
        name: "dresscode",
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
      <Field.Root required={required} gap={"16px"}>
        <Field.Label as={Flex} w="100%" justify={"space-between"}>
          <HStack>
            <Field.RequiredIndicator />
            <Label text="Dress Code" />
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
        <Textarea
          h={"66px"}
          resize={"none"}
          name="description"
          value={value?.description}
          onChange={handleNestedChange}
          disabled={!checked}
          placeholder="Short dress code description"
        />
      </Field.Root>
      <Flex w="100%" gap="24px" justify={"space-between"}>
        <Selector
          name="style"
          value={value?.style}
          onChange={handleNestedChange}
          collection={createListCollection({ items: styles })}
          disabled={!checked}
        />
        <Selector
          name="scheme"
          value={value?.scheme}
          onChange={handleNestedChange}
          collection={createListCollection({ items: schemes })}
          disabled={!checked}
        />
      </Flex>
    </Stack>
  );
};
