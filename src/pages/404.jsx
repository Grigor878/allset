import { Box } from "@chakra-ui/react";
import img from "../assets/404.png";

const NotFound = () => {
  return (
    <Box
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "90vh",
      }}
    ></Box>
  );
};

export default NotFound;
