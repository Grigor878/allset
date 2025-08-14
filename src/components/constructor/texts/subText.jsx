import { Text } from "@chakra-ui/react";

export const SubText = ({ text }) => {
  return (
    <Text
      fontWeight={400}
      color="#4B5563"
      lineHeight={"24px"}
      letterSpacing={0}
    >
      {text}
    </Text>
  );
};
