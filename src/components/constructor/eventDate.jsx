import { Box, Field, Icon, Input, Stack } from "@chakra-ui/react";
import { Label } from "./texts/label";
import { date } from "../../assets/svgs";
import { SubText } from "./texts/subText";

export const EventDate = () => {
  return (
    <Stack
      borderRadius={"8px"}
      border={"1px solid"}
      borderColor={"#E5E7EB"}
      bg="white"
      p="25px"
      gap="16px"
    >
      <Field.Root gap="16px">
        <Field.Label gap="16px">
          <Icon>{date.icon}</Icon>
          <Label text="Important: Date Cannot Be Changed After Publishing" />
        </Field.Label>

        <Stack w="100%" gap="12px" pl="40px">
          <SubText
            fs="14px"
            text="Once you publish your invitation, the event date will be permanently locked and cannot be modified. Please ensure your date is correct:"
          />
          <Input
            type="date"
            name="name"
            variant="outline"
            defaultValue='2026-05-29'
            borderRadius="8px"
          />
          <SubText
            fs="14px"
            text="If you need to change the date, please go back and update it before publishing."
          />
        </Stack>
      </Field.Root>
    </Stack>
  );
};
