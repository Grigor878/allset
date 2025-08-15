import { Button } from "@chakra-ui/react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { getNextRoute, hasMultipleWords } from "../../utils/helpers";
import { useNuqs } from "../../hooks/useNuqs";
import { isContinueDisabled } from "../../utils/checkers";

export const Continue = () => {
  const [template] = useNuqs("template");
  const [palette] = useNuqs("palette");

  const { pathname } = useLocation();
  const { language } = useParams();

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
      disabled={isContinueDisabled(pathname, language, { template, palette })}
    >
      {hasMultipleWords(name) ? name : `Continue to ${name}`}
    </Button>
  );
};
