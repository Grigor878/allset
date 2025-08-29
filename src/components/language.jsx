import {
  Flex,
  For,
  Icon,
  Image,
  Menu,
  Portal,
  Spinner,
} from "@chakra-ui/react";
import cookies from "js-cookie";
import { languages } from "../utils/constants";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { navigateWithLocal } from "../utils/helpers";
import { down } from "../assets/svgs";

export const Language = ({ isPending }) => {
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const { language } = useParams();

  const selected = languages.find(({ code }) => code === language);

  const handleChangeLng = (code) => {
    i18n.changeLanguage(code);
    cookies.set("i18next", code);
    navigate(`/${code}${navigateWithLocal(pathname)}`);
  };

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Flex
          align="center"
          // px={2}
          // py={1}
          // borderRadius="sm"
          cursor="pointer"
          // _hover={{ bg: "gray.100" }}
        >
          {isPending ? (
            <Spinner />
          ) : (
            <>
              <Image
                src={`https://flagcdn.com/${selected?.flag}.svg`}
                boxSize="24px"
                borderRadius={"4px"}
                alt={selected?.name}
                // borderRadius="sm"
              />
              <Icon size={"lg"}>{down.icon}</Icon>
            </>
          )}
        </Flex>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content w="auto" minW="unset">
            <For each={languages.filter(({ flag }) => flag !== selected?.flag)}>
              {({ code, flag }) => (
                <Menu.Item
                  key={code}
                  onClick={() => handleChangeLng(code)}
                  cursor="pointer"
                >
                  <Image
                    src={`https://flagcdn.com/${flag}.svg`}
                    boxSize="24px"
                    borderRadius={"4px"}
                    alt={t(code)}
                    // borderRadius="sm"
                  />
                  {t(code)}
                </Menu.Item>
              )}
            </For>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

// const currentPath = window.location.pathname;

// const pathParts = currentPath.split("/");
// pathParts[1] = code;

// const newPath = pathParts.join("/");
// navigate(newPath, { replace: true });
