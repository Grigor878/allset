import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  Button,
  DataList,
  Field,
  Flex,
  Icon,
  Input,
  InputGroup,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Label } from "./texts/label";
import { promo } from "../../assets/svgs";
import { error, success } from "../alerts";
import { usePostTanstack } from "../../hooks/useTanstack";

export const Promocode = () => {
  const discount = 20;

  const { t } = useTranslation();

  const [promocode, setPromocode] = useState("");
  const [applied, setApplied] = useState(false);

  const { mutate, isPending } = usePostTanstack("promocode", {
    onSuccess: (data) => success(`Aplied! Discount: ${data.discount}%`),
    onError: (err) => error(err?.response?.data?.error || "Invalid promocode"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!promocode) return;
    // mutate({ promocode });
    setApplied(true); // test case
  };

  return (
    <Stack
      borderRadius={"8px"}
      border={"1px solid"}
      borderColor={"#E5E7EB"}
      bg="white"
      p="25px"
      as="form"
      onSubmit={handleSubmit}
    >
      <Field.Root gap="16px">
        <Flex w="100%" justify={"space-between"}>
          <Field.Label gap="16px">
            <Icon>{promo.icon}</Icon>
            <Label text="promocode" />
          </Field.Label>

          {applied && !isPending && (
            <Text
              textStyle="sm"
              fontWeight={"500"}
              lineHeight={"28px"}
              color={"#16A34A"}
            >
              Aplied
            </Text>
          )}
        </Flex>

        <Stack w="100%" pl="40px" gap="16px">
          <Flex gap="16px">
            <InputGroup
              endElement={
                applied &&
                !isPending && (
                  <Text
                    fontSize={"16px"}
                    fontWeight={"700"}
                    lineHeight={"24px"}
                    color={"#16A34A"}
                  >
                    {discount}% OFF
                  </Text>
                )
              }
            >
              <Input
                type="text"
                name="promocode"
                value={promocode}
                onChange={(e) => setPromocode(e.target.value)}
                variant="outline"
                borderRadius="8px"
                placeholder={t("promocode_placeholder")}
                // placeholder="Add promocode"
                disabled={isPending}
                fontSize="14px"
                fontWeight="700"
                lineHeight="24px"
                _placeholder={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "24px",
                }}
              />
            </InputGroup>
            <Button
              type="submit"
              colorScheme="pink"
              borderRadius="8px"
              loading={isPending}
            >
              {t("apply")}
            </Button>
          </Flex>
          {applied && !isPending && (
            <DataList.Root
              orientation="horizontal"
              gap="8px"
              // maxW="md"
            >
              <DataList.Item>
                <DataList.ItemLabel
                  color={"#4B5563"}
                  fontSize={"14px"}
                  lineHeight={"20px"}
                  fontWeight={"400"}
                >
                  {t("original_price")}
                </DataList.ItemLabel>
                <DataList.ItemValue
                  as="s"
                  fontSize={"14px"}
                  lineHeight={"20px"}
                  justifyContent={"flex-end"}
                >
                  $49.99
                </DataList.ItemValue>
              </DataList.Item>
              <DataList.Item>
                <DataList.ItemLabel
                  color={"#4B5563"}
                  fontSize={"14px"}
                  lineHeight={"20px"}
                  fontWeight={"400"}
                >
                  {t("discount")} ({discount}%):
                </DataList.ItemLabel>
                <DataList.ItemValue
                  fontSize={"14px"}
                  lineHeight={"20px"}
                  justifyContent={"flex-end"}
                >
                  -$10.00
                </DataList.ItemValue>
              </DataList.Item>
              <Separator />
              <DataList.Item w="100%">
                <DataList.ItemLabel
                  fontSize={"14px"}
                  fontWeight={"700"}
                  lineHeight={"20px"}
                  // color={"#4B5563"}
                  // fontWeight={"400"}
                >
                  {t("final_price")}
                </DataList.ItemLabel>
                <DataList.ItemValue
                  fontSize={"14px"}
                  fontWeight={"700"}
                  lineHeight={"20px"}
                  justifyContent={"flex-end"}
                >
                  $39.99
                </DataList.ItemValue>
              </DataList.Item>
            </DataList.Root>
          )}
        </Stack>
      </Field.Root>
    </Stack>
  );
};

// {/* <Stack>
//   <Flex w="100%" justify={"space-between"}>
//     <Text
//       fontSize={"13px"}
//       color={"#4B5563"}
//       lineHeight={"20px"}
//       fontWeight={"400"}
//     >
//       {t("original_price")}
//     </Text>
//     <Text textStyle="sm" lineHeight={"20px"}>
//       $49.99
//     </Text>
//   </Flex>
//   <Flex w="100%" justify={"space-between"}>
//     <Text
//       fontSize={"13px"}
//       color={"#4B5563"}
//       lineHeight={"20px"}
//       fontWeight={"400"}
//     >
//       {t("discount")} ({discount}%):
//     </Text>
//     <Text textStyle="sm" fontWeight={"400"}>
//       -$10.00
//     </Text>
//   </Flex>
//   <Separator />
//   <Flex w="100%" justify={"space-between"}>
//     <Text
//       fontSize={"13px"}
//       color={"#4B5563"}
//       lineHeight={"20px"}
//       fontWeight={"400"}
//     >
//       {t("final_price")}
//     </Text>
//     <Text>$39.99</Text>
//   </Flex>
// </Stack> */}
