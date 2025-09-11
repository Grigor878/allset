import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Button, Field, Flex, Icon, Stack, Textarea } from "@chakra-ui/react";
import { Label } from "../texts/label";
import { xls } from "../../../assets/svgs";
import { LngSwitcher } from "./lngSwitcher";
import { Switcher } from "./switcher";

export const TextArea = ({
  name,
  value,
  onChange,
  hide,
  required,
  text,
  placeholder,
  languages,
}) => {
  const { t } = useTranslation();

  const [checked, setChecked] = useState(true);
  const [activeLang, setActiveLang] = useState("");

  useEffect(() => {
    languages?.length ? setActiveLang(languages[0]) : setActiveLang("");
  }, [languages]);

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
      gap="16px"
    >
      <Field.Root required={required} gap={"16px"}>
        <Field.Label
          as={Flex}
          w="100%"
          justify={"space-between"}
        >
          <Flex align={"center"} gap={"4px"}>
            <Field.RequiredIndicator fontSize="18px" />
            <Label text={t(text)} />
          </Flex>
          <Flex gap={"25px"}>
            <LngSwitcher
              activeLang={activeLang}
              setActiveLang={setActiveLang}
              languages={languages}
            />
            {!required && (
              <Switcher checked={checked} onChange={handleSwitchChange} />
            )}
          </Flex>
        </Field.Label>

        <Textarea
          name={name}
          placeholder={t(placeholder)}
          value={value?.[activeLang] ?? ""}
          onChange={(e) => onChange(name, activeLang, e.target.value)}
          disabled={!checked || !activeLang}
          h={name === "closingText" ? "66px" : "90px"}
          resize={"none"}
        />
      </Field.Root>

      {name === "closingText" && (
        <Button
          color={"#6B7280"}
          variant="ghost"
          w="fit-content"
          disabled={!checked}
        >
          <Icon>{xls.icon}</Icon>
          {t("export")}
        </Button>
      )}
    </Stack>
  );
};
