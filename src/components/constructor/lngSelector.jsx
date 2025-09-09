import {
  Checkbox,
  Field,
  Flex,
  Icon,
  Image,
  Stack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Label } from "./texts/label";
import { languages } from "../../utils/constants";
import { checked } from "../../assets/svgs";

export const LngSelector = ({ name, value, onChange, required }) => {
  const { t } = useTranslation();

  const toggleLanguage = (code) => {
    const updated = value.includes(code)
      ? value.filter((c) => c !== code)
      : [...value, code];

    onChange({
      target: {
        name,
        value: updated,
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
          <Field.RequiredIndicator fontSize="18px" />
          <Label text="select_languages" />
        </Field.Label>
      </Field.Root>

      <Flex gap="32px">
        {languages.map(({ code, flag }) => (
          <Checkbox.Root
            key={code}
            checked={value.includes(code)}
            onCheckedChange={() => toggleLanguage(code)}
            cursor={"pointer"}
          >
            <Checkbox.HiddenInput />
            <Checkbox.Control
              w="18px"
              h="18px"
              _checked={{ border: "none", bg: "transparent" }}
            >
              {value.includes(code) && <Icon>{checked.icon}</Icon>}
            </Checkbox.Control>
            <Checkbox.Label
              as={Flex}
              gap={"8px"}
              alignItems={"center"}
              fontSize={"14px"}
              fontWeight={"400"}
              lineHeight={"24px"}
            >
              <Image
                src={`https://flagcdn.com/${flag}.svg`}
                boxSize="24px"
                borderRadius="4px"
                alt={t(code)}
              />
              {t(code)}
            </Checkbox.Label>
          </Checkbox.Root>
        ))}
      </Flex>
    </Stack>
  );
};
