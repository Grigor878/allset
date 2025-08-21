import { Field, Input, Stack, Text } from "@chakra-ui/react";
import { Label } from "../texts/label";

export const Datepicker = ({ name, value, onChange, required }) => {
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
          <Field.RequiredIndicator fontSize="18px" />
          <Label text="Event Date" />
        </Field.Label>
        <Input
          type="date"
          name={name}
          variant="outline"
          value={value ?? ""}
          onChange={onChange}
          placeholder="Choose date"
          borderRadius={"8px"}
          required
        />
      </Field.Root>

      <Text textStyle="xs" color={"#6B7280"}>
        You can edit the date until the invitation is published.
      </Text>
    </Stack>
  );
};
