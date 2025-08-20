import { useState } from "react";
import {
  Button,
  Field,
  Flex,
  HStack,
  Icon,
  Stack,
  Switch,
  Textarea,
} from "@chakra-ui/react";
import { Label } from "../texts/label";
import { xls } from "../../../assets/svgs";

export const TextArea = ({ name, value, onChange, hide, required, text }) => {
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
      gap="16px"
    >
      <Field.Root required={required} gap={"16px"}>
        <Field.Label as={Flex} w="100%" justify={"space-between"}>
          <HStack>
            <Field.RequiredIndicator />
            <Label text={text} />
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
          h={name === "participation" ? "66px" : "90px"}
          resize={"none"}
          name={name}
          value={value}
          onChange={onChange}
          disabled={!checked}
        />
      </Field.Root>

      {name === "participation" && (
        <Button
          color={"#6B7280"}
          variant="ghost"
          w="fit-content"
          disabled={!checked}
        >
          <Icon>{xls.icon}</Icon>
          Export to Excel (available after publishing)
        </Button>
      )}
    </Stack>
  );
};
