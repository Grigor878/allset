import { useQueryState } from "nuqs";
import {
  Box,
  Button,
  Flex,
  For,
  HStack,
  Image,
  Separator,
  Stack,
} from "@chakra-ui/react";
import { MidText } from "./texts/midText";
import { SubText } from "./texts/subText";
import { responsive } from "../../utils/constants";
import img from "../../assets/customisations.png";

export const Preview = () => {
  const [device, setDevice] = useQueryState("device");

  return (
    <Box
      w="100%"
      minH="100%"
      bg="white"
      border="1px solid"
      borderRadius={"8px"}
      // p={"16px 25px"}
      borderColor={"#E5E7EB"}
    >
      <Flex justify={"space-between"} p={"16px 25px"}>
        <Stack gap={"0px"}>
          <MidText text="Template Preview" />
          <SubText
            fs="14px"
            text="See how your wedding invitation will look with the selected color palette"
          />
        </Stack>

        <HStack>
          <For each={responsive}>
            {({ id, name, icon }) => (
              <Button
                key={id}
                variant={device === name ? "subtle" : "ghost"}
                onClick={() => setDevice(name)}
              >
                {icon}
              </Button>
            )}
          </For>
        </HStack>
      </Flex>

      <Separator />

      <Image
        w="100%"
        h="685px"
        objectFit={"contain"}
        src={img}
        p={"60px 25px 0 25px"}
      />
    </Box>
  );
};
