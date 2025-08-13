import { Box, Container, Flex } from "@chakra-ui/react";
import { useTanstack } from "../../hooks/useTanstack";
import { useNuqsCookie } from "../../hooks/useNuqsCookie";

const Customisations = () => {
  const { data } = useTanstack("templates");
  const [template] = useNuqsCookie("template");

  const filteredData = data?.filter((item) => item.id === template) || [];
console.log(filteredData);

  return (
    <Box>
      <Container maxW="container.md"></Container>
    </Box>
  );
};

export default Customisations;
