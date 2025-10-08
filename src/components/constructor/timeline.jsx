import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Checkbox, Field, Flex, Icon, Input, Stack } from "@chakra-ui/react";
import { Label } from "./texts/label";
import { Switcher } from "./ui/switcher";
import { agenda } from "../../utils/constants";
import { useParams } from "react-router-dom";
import { checked } from "../../assets/svgs";

export const Timeline = ({ name, value, hide, onChange, required }) => {
  const { t } = useTranslation();
  const { language } = useParams();

  const [disabled, setDisabled] = useState(true);

  const handleSwitchChange = (e) => {
    setDisabled(e.checked);
    hide(name, !e.checked);
  };

  // find if current agenda item is selected
  const getItem = (venueKey) =>
    value?.find((item) => item.venueKey === venueKey);

  const handleCheckboxChange = (venueKey, isChecked, venueName) => {
    let newTimeline = [...value];

    if (isChecked) {
      if (!newTimeline?.find((item) => item.venueKey === venueKey)) {
        newTimeline.push({
          venueKey,
          venueName,
          time: "",
          venueLocation: "",
        });
      }
    } else {
      newTimeline = newTimeline.filter((item) => item.venueKey !== venueKey);
    }

    onChange(newTimeline);
  };

  const handleInputChange = (venueKey, field, val) => {
    const newTimeline = value.map((item) =>
      item.venueKey === venueKey ? { ...item, [field]: val } : item
    );
    onChange(newTimeline);
  };

  return (
    <Stack
      borderRadius="8px"
      border="1px solid"
      borderColor="#E5E7EB"
      bg="white"
      p="25px"
      gap="14px"
    >
      <Field.Root required={required} gap="16px">
        <Field.Label as={Flex} w="100%" justify="space-between">
          <Flex align="center" gap="4px">
            <Field.RequiredIndicator fontSize="18px" />
            <Label text="agenda" />
          </Flex>
          <Flex gap="25px">
            {!required && (
              <Switcher checked={disabled} onChange={handleSwitchChange} />
            )}
          </Flex>
        </Field.Label>
      </Field.Root>

      {agenda.map(({ icon, venueName }) => {
        const venueKey = venueName.en;
        const item = getItem(venueKey);
        const isChecked = !!item;

        return (
          <Checkbox.Root
            key={venueKey}
            checked={isChecked}
            onCheckedChange={(e) =>
              handleCheckboxChange(
                venueKey,
                e.checked === true,
                venueName[language] || venueName.en
              )
            }
            w="100%"
            justifyContent="space-between"
            cursor="pointer"
            bg="#F9FAFB"
            py="15px"
            px="12px"
            borderRadius="4px"
            disabled={!disabled}
          >
            <Flex align="center" gap="12px">
              <Checkbox.HiddenInput />
              <Checkbox.Control
                w="18px"
                h="18px"
                _checked={{ border: "none", bg: "transparent" }}
              >
                {isChecked && <Icon>{checked.icon}</Icon>}
              </Checkbox.Control>
              <Checkbox.Label
                as={Flex}
                gap={"8px"}
                alignItems={"center"}
                fontSize={"14px"}
                fontWeight={"400"}
                lineHeight={"24px"}
              >
                <Icon>{icon.icon}</Icon>
                {venueName[language] || venueName.en}
              </Checkbox.Label>
            </Flex>

            <Flex gap="8px">
              <Input
                value={item?.time}
                onChange={(e) =>
                  handleInputChange(venueKey, "time", e.target.value)
                }
                placeholder={t("time")}
                variant="outline"
                bg="white"
                w="128px"
                h="30px"
                borderRadius="4px"
                //   disabled={!isChecked}
              />
              <Input
                value={item?.venueLocation}
                onChange={(e) =>
                  handleInputChange(venueKey, "venueLocation", e.target.value)
                }
                placeholder={t("location")}
                variant="outline"
                bg="white"
                w="128px"
                h="30px"
                borderRadius="4px"
                //   disabled={!isChecked}
              />
            </Flex>
          </Checkbox.Root>
        );
      })}
    </Stack>
  );
};
