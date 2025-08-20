import { Field, Flex, Input, Stack } from "@chakra-ui/react";
import { Label } from "./texts/label";

export const Info = ({ value, onChange, required }) => {
  const handleNestedChange = (e) => {
    const { name, value: inputValue } = e.target;
    onChange({
      target: {
        name: "information",
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
        <Field.Label>
          <Field.RequiredIndicator />
          <Label text="Contact Information" />
        </Field.Label>
      </Field.Root>

      <Flex gap="15px">
        <Input
          type="text"
          name="name"
          variant="outline"
          value={value.name}
          required={required}
          onChange={handleNestedChange}
          borderRadius="8px"
          placeholder="Name (Optional)"
        />
        <Input
          type="tel"
          name="phone"
          variant="outline"
          value={value.phone}
          required={required}
          onChange={handleNestedChange}
          borderRadius="8px"
          placeholder="Phone (Optional)"
        />
        <Input
          type="email"
          name="email"
          variant="outline"
          value={value.email}
          required={required}
          onChange={handleNestedChange}
          borderRadius="8px"
          placeholder="Email (Optional)"
        />
      </Flex>
    </Stack>
  );
};
