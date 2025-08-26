import { useState } from "react";
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

export const Dresscode = ({ name, value, onChange, hide, required }) => {
  const [checked, setChecked] = useState(true);
  const [activeLang, setActiveLang] = useState("hy");

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
        <Field.Label
          as={Flex}
          w="100%"
          align={"start"}
          justify={"space-between"}
        >
          <Stack>
            <Flex align={"center"} gap={"4px"}>
              <Field.RequiredIndicator fontSize="18px" />
              <Label text={`Dress Code (${activeLang.toUpperCase()})`} />
            </Flex>
            <LngSwitcher
              activeLang={activeLang}
              setActiveLang={setActiveLang}
            />
          </Stack>
          {!required && (
            <Switcher checked={checked} onChange={handleSwitchChange} />
          )}
        </Field.Label>
        <Textarea
          h={"66px"}
          resize={"none"}
          name="description"
          value={value?.description?.[activeLang] ?? ""}
          onChange={(e) => handleNestedChange(e, activeLang)}
          disabled={!checked}
          placeholder="Short dress code description"
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
          name="colorPaletteId"
          value={value?.colorPaletteId}
          onChange={handleNestedChange}
          collection={createListCollection({ items: schemes })}
          disabled={!checked}
        />
      </Flex>
    </Stack>
  );
};
