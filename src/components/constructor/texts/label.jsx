import { Text } from "@chakra-ui/react";

export const Label = ({ text }) => {
  return (
    <Text textStyle="md" fontWeight={700} lineHeight={"28px"} letterSpacing={0}>
      {text}
    </Text>
  );
};
