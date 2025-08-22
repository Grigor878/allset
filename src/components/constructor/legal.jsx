import { Checkbox, Link } from "@chakra-ui/react";
import { NavLink, useParams } from "react-router-dom";
import { useNuqs } from "../../hooks/useNuqs";

export const Legal = () => {
  const { language } = useParams();

  const [accept, setAccept] = useNuqs("accept");

  const handleChange = (value) => {
    const checked =
      typeof value === "object" && "checked" in value ? value.checked : value;
    setAccept(checked);
  };

  return (
    <Checkbox.Root
      size="sm"
      colorPalette="pink"
      // defaultChecked={Boolean(accept)}
      defaultChecked={accept == "true" ? true : false}
      onCheckedChange={handleChange}
      // onCheckedChange={(e) => setAccept(!!e.accept)}
      // defaultChecked={accept}
      // onCheckedChange={setAccept}
    >
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label
        fontSize={"15px"}
        lineHeight={"24px"}
        fontWeight={"400"}
        pl={"8px"}
      >
        I agree to the{" "}
        <Link
          as={NavLink}
          color={"#F43F5E"}
          to={`/${language}/terms-of-service`}
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link as={NavLink} color={"#F43F5E"} to={`/${language}/privacy-policy`}>
          Privacy Policy
        </Link>{" "}
        . I understand that the invitation date cannot be changed after
        publishing and that my invitation will expire 6 months after
        publication.
      </Checkbox.Label>
    </Checkbox.Root>
  );
};
