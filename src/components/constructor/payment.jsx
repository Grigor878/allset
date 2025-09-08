import { Button, Field, Flex, For, Icon, Image, Stack } from "@chakra-ui/react";
import { payment } from "../../assets/svgs";
import { useNuqs } from "../../hooks/useNuqs";
import { Label } from "./texts/label";
import { paymentMethods } from "../../utils/constants";

export const Payment = () => {
  const [pay, setPay] = useNuqs("payment_method");

  return (
    <Stack
      borderRadius={"8px"}
      border={"1px solid"}
      borderColor={"#E5E7EB"}
      bg="white"
      p="25px"
    >
      <Field.Root gap="24px">
        <Field.Label gap="16px">
          <Icon>{payment.icon}</Icon>
          <Label text="payment_method" />
        </Field.Label>

        <Flex pl="40px" gap="16px">
          <For each={paymentMethods}>
            {({ value, src }) => (
              <Button
                key={value}
                w="48px"
                h="48px"
                p="3px"
                variant={pay === value ? "surface" : "ghost"}
                onClick={() => setPay(value)}
              >
                <Image src={src} alt={value} />
              </Button>
            )}
          </For>
        </Flex>
      </Field.Root>
    </Stack>
  );
};
