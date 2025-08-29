import { useTranslation } from "react-i18next";
import { Field, Stack, Text } from "@chakra-ui/react";
import { Label } from "./texts/label";
import { Calendar } from "./ui/calendar";

export const EventDate = ({ name, value, onChange, required }) => {
  const { t } = useTranslation();
  
  return (
    <Stack
      borderRadius={"8px"}
      border={"1px solid"}
      borderColor={"#E5E7EB"}
      bg="white"
      p="25px"
    >
      <Field.Root required={required} gap={"16px"}>
        <Field.Label>
          <Field.RequiredIndicator fontSize="18px" />
          <Label text="event_date" />
        </Field.Label>
      </Field.Root>
      <Calendar
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
      <Text textStyle="xs" color={"#6B7280"}>
        {t("edit_date")}
      </Text>
    </Stack>
  );
};
