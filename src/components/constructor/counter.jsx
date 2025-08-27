import { t } from "i18next";
import { useState } from "react";
import { Field, Flex, HStack, Show, Stack, Text } from "@chakra-ui/react";
import { Label } from "./texts/label";
import { getTimeUntil } from "../../utils/helpers";
import { isNotEmptyObject } from "../../utils/checkers";
import { Switcher } from "./ui/switcher";

export const Counter = ({ name, value, hide, required }) => {
  const [checked, setChecked] = useState(true);
  const remaining = getTimeUntil(value);

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
      gap="14px"
    >
      <Field.Root required={required} gap={"16px"}>
        <Field.Label as={Flex} w="100%" justify={"space-between"}>
          <HStack>
            <Field.RequiredIndicator />
            <Label text="countdown" />
          </HStack>
          {!required && (
            <Switcher checked={checked} onChange={handleSwitchChange} />
          )}
        </Field.Label>

        <Show
          when={isNotEmptyObject(remaining) && checked}
          fallback={
            <Text textStyle="sm" color="#6B7280">
              {t("countdown_desc")}
            </Text>
          }
        >
          {!remaining?.expired && (
            <Flex gap="5px">
              <Text textStyle="sm" color="#6B7280">
                {remaining?.days} {t("days")}
              </Text>
              <Text textStyle="sm" color="#6B7280">
                {remaining?.hours} {t("hours")}
              </Text>
              <Text textStyle="sm" color="#6B7280">
                {remaining?.minutes} {t("minutes")}
              </Text>
            </Flex>
          )}

          {remaining?.expired && (
            <Text textStyle="sm" color="#6B7280">
              {t("expired")}
            </Text>
          )}
        </Show>
      </Field.Root>
    </Stack>
  );
};
