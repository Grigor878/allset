import { useTranslation } from "react-i18next";
import { Heading } from "@chakra-ui/react";
import Typewritter from "typewriter-effect";

export const Title = ({ text }) => {
  const { t } = useTranslation();

  return (
    <Heading as="h1" fontWeight={"700"} size="3xl" letterSpacing={"0"}>
      {/* {t(text)} */}
      <Typewritter
        options={{
          delay: 80,
          strings: t(text),
          autoStart: true,
          loop: false,
          cursor: "",
        }}
      />
    </Heading>
  );
};
