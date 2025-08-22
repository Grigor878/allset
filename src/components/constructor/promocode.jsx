import { useState } from "react";
import {
  Box,
  Button,
  Field,
  Flex,
  HStack,
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
  const [promocode, setPromocode] = useState("");
  const [applied, setApplied] = useState(false);

  const { mutate, isPending } = usePostTanstack("promocode", {
    onSuccess: (data) => success(`Aplied! Discount: ${data.discount}%`),
    onError: (err) => error(err?.response?.data?.error || "Invalid promocode"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!promocode) return;
    mutate({ promocode });
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
            <Label text="Promocode" />
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
                placeholder="Apply promocode"
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
              Apply
            </Button>
          </Flex>
          {applied && !isPending && (
            <Stack>
              <Flex w="100%" justify={"space-between"}>
                <Text
                  fontSize={"13px"}
                  color={"#4B5563"}
                  lineHeight={"20px"}
                  fontWeight={"400"}
                >
                  Original Price:
                </Text>
                <Text textStyle="sm" lineHeight={"20px"}>
                  $49.99
                </Text>
              </Flex>
              <Flex w="100%" justify={"space-between"}>
                <Text
                  fontSize={"13px"}
                  color={"#4B5563"}
                  lineHeight={"20px"}
                  fontWeight={"400"}
                >
                  Discount ({discount}%):
                </Text>
                <Text textStyle="sm" fontWeight={"400"}>
                  -$10.00
                </Text>
              </Flex>
              <Separator />
              <Flex w="100%" justify={"space-between"}>
                <Text
                  fontSize={"13px"}
                  color={"#4B5563"}
                  lineHeight={"20px"}
                  fontWeight={"400"}
                >
                  Final Price:
                </Text>
                <Text>$39.99</Text>
              </Flex>
            </Stack>
          )}
        </Stack>
      </Field.Root>
    </Stack>
  );
};
