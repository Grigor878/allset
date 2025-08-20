import { Field, Input, Stack, Text } from "@chakra-ui/react";
import { Label } from "../texts/label";

export const Datepicker = ({ value, onChange, required }) => {
  return (
    <Stack
      borderRadius={"8px"}
      border={"1px solid"}
      borderColor={"#E5E7EB"}
      bg="white"
      p="25px"
      //   gap="9px"
    >
      <Field.Root required={required} gap={"16px"}>
        <Field.Label>
          <Field.RequiredIndicator />
          <Label text="Event Date" />
        </Field.Label>
        <Input
          type="date"
          name="date"
          variant="outline"
          value={value}
          required
          onChange={onChange}
          borderRadius={"8px"}
          placeholder="Choose date"
        />
      </Field.Root>

      <Text textStyle="xs" color={"#6B7280"}>
        You can edit the date until the invitation is published.
      </Text>
    </Stack>
  );
};
