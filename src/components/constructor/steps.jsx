import { Flex, Slider, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { getStepInfo } from "../../utils/helpers";

export const Steps = () => {
  const { pathname } = useLocation();

  const { step, value } = getStepInfo(pathname);

  return (
    <Flex align="center" gap="8px">
      <Text color={"#6B7280"} fontWeight={"400"} fontSize={"14px"}>
        Step {step} of 4
      </Text>

      <Slider.Root width="128px" colorPalette="pink" value={[value]} >
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          {/* <Slider.Thumbs /> */}
        </Slider.Control>
      </Slider.Root>
    </Flex>
  );
};
