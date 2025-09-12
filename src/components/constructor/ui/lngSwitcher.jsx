import { Button, ButtonGroup, Image } from "@chakra-ui/react";
import { getFlagCode } from "../../../utils/helpers";

export const LngSwitcher = ({
  activeLang,
  setActiveLang,
  languages,
  disabled,
}) => {
  return (
    <ButtonGroup size="sm" variant="outline">
      {languages?.map((lng) => (
        <Button
          key={lng}
          onClick={() => setActiveLang(lng)}
          p="0"
          variant="plain"
          border={activeLang === lng ? "2px solid #111827" : "none"}
          borderRadius={activeLang === lng && "8px"}
          disabled={disabled}

          // variant={activeLang === lng ? "subtle" : "ghost"}
        >
          <Image
            src={`https://flagcdn.com/${getFlagCode(lng)}.svg`}
            boxSize="24px"
            borderRadius={"4px"}
            alt={lng}
            // borderRadius="sm"
          />
          {/* {lng?.toUpperCase()} */}
        </Button>
      ))}
    </ButtonGroup>
  );
};
