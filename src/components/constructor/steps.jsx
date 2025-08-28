import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { getStepInfo } from "../../utils/helpers";
import { Flex, Slider, Text } from "@chakra-ui/react";

export const Steps = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { step, value, show } = getStepInfo(pathname);

  if (!show) return null;

  return (
    <Flex align="center" gap="8px">
      <Text color={"#6B7280"} fontWeight={"400"} fontSize={"14px"}>
        {t("step")} {step} of 4
      </Text>

      <Slider.Root width="128px" colorPalette="pink" value={[value]}>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range bg="#F43F5E" />
          </Slider.Track>
          {/* <Slider.Thumbs /> */}
        </Slider.Control>
      </Slider.Root>
    </Flex>
  );
};
