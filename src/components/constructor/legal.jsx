import { Checkbox, Link } from "@chakra-ui/react";
import cookies from "js-cookie";
import { NavLink, useParams } from "react-router-dom";

export const Legal = () => {
  const { language } = useParams();

  const handleChange = (e) => {
    if (e.checked) {
      cookies.set("allset_legal_accept", true);
    } else {
      cookies.remove("allset_legal_accept");
    }
  };

  return (
    <Checkbox.Root size="sm" colorPalette="pink" onCheckedChange={handleChange}>
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
