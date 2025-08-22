import { Box, Field, Icon, Input, Stack } from "@chakra-ui/react";
import { Label } from "./texts/label";
import { promo } from "../../assets/svgs";

export const Promocode = () => {
  return (
    <Stack
      borderRadius={"8px"}
      border={"1px solid"}
      borderColor={"#E5E7EB"}
      bg="white"
      p="25px"
    >
      <Field.Root gap="16px">
        <Field.Label gap="16px">
          <Icon>{promo.icon}</Icon>
          <Label text="Promocode" />
        </Field.Label>

        <Box w="100%" pl="40px">
          <Input
            type="text"
            name="name"
            variant="outline"
            borderRadius="8px"
            placeholder="Apply promocode"
          />
        </Box>
      </Field.Root>
    </Stack>
  );
};
