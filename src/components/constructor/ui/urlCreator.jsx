import { Field, Flex, Input, Stack, Text } from "@chakra-ui/react";
import { BASE_URL } from "../../../services/api/config";
import { Label } from "../texts/label";

export const UrlCreator = ({ value, onChange, required }) => {
  return (
    <Stack
      borderRadius={"8px"}
      border={"1px solid"}
      borderColor={"#E5E7EB"}
      bg="white"
      p="25px"
      gap="14px"
    >
      <Field.Root required={required}  gap={"16px"}>
        <Field.Label>
          <Field.RequiredIndicator />
          <Label text="Invitation Title" />
        </Field.Label>
        <Input
          //   type="url"
          name="url"
          variant="outline"
          value={value}
          required
          onChange={onChange}
          borderRadius={"8px"}
          placeholder="Enter your invitation title"
        />
      </Field.Root>

      <Flex borderRadius={"4px"} p="12px" bg="#F9FAFB">
        <Text textStyle="sm" color={"#6B7280"}>
          URL Preview: {BASE_URL}/
        </Text>
        <Text textStyle="sm" color={"#E85A6B"}>
          {value}
        </Text>
      </Flex>
    </Stack>
  );
};
