import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import {
  createListCollection,
  Field,
  Flex,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { Label } from "./texts/label";
import { Selector } from "./ui/selector";
import { schemes, styles } from "../../utils/constants";
import { LngSwitcher } from "./ui/lngSwitcher";
import { Switcher } from "./ui/switcher";

export const Dresscode = ({
  name,
  value,
  onChange,
  hide,
  required,
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

  // const handleNestedChange = (e) => {
  //   const { name, value: inputValue } = e.target;
  //   onChange({
  //     target: {
  //       name: "dressCode",
  //       value: {
  //         ...value,
  //         [name]: inputValue,
  //       },
  //     },
  //   });
  // };

  const handleNestedChange = (e, lang) => {
    if (e?.target) {
      const { name, value: inputValue } = e.target;

      if (name === "description") {
        onChange({
          target: {
            name: "dressCode",
            value: {
              ...value,
              description: {
                ...value?.description,
                [lang]: inputValue,
              },
            },
          },
        });
      } else {
        onChange({
          target: {
            name: "dressCode",
            value: {
              ...value,
              [name]: inputValue,
            },
          },
        });
      }
    }
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
        <Field.Label as={Flex} w="100%" justify={"space-between"}>
          <Flex align={"center"} gap={"4px"}>
            <Field.RequiredIndicator fontSize="18px" />
            <Label text="dresscode" />
          </Flex>
          <Flex gap={"25px"}>
            <LngSwitcher
              activeLang={activeLang}
              setActiveLang={setActiveLang}
              languages={languages}
              disabled={!checked}
            />
            {!required && (
              <Switcher checked={checked} onChange={handleSwitchChange} />
            )}
          </Flex>
        </Field.Label>
        <Textarea
          h={"66px"}
          resize={"none"}
          name="description"
          value={value?.description?.[activeLang] ?? ""}
          onChange={(e) => handleNestedChange(e, activeLang)}
          disabled={!checked || !activeLang}
          placeholder={t("dresscode_placeholder")}
        />
      </Field.Root>
      <Flex w="100%" gap="24px" justify={"space-between"}>
        <Selector
          name="style"
          value={value?.style}
          onChange={handleNestedChange}
          collection={createListCollection({ items: styles })}
          disabled={!checked}
        />
        <Selector
          name="color_palette_id"
          value={value?.colorPaletteId}
          onChange={handleNestedChange}
          collection={createListCollection({ items: schemes })}
          disabled={!checked}
        />
      </Flex>
    </Stack>
  );
};
