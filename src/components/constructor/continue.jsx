import { Button } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { getNextRoute } from "../../utils/helpers";
import { useQueryState } from "nuqs";

export const Continue = () => {
  const [template] = useQueryState("template");
  const { pathname } = useLocation();

  if (pathname === "/confirm") return;

  const { path, name } = getNextRoute(pathname);

  return (
    <Button
      as={NavLink}
      to={template ? path : undefined}
      fontWeight={"400"}
      fontSize={"14px"}
      borderRadius={"8px"}
      bg="#F43F5E"
      disabled={!template}
    >
      Continue to {name}
    </Button>
  );
};
