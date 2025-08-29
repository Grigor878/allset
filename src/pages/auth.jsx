import { useTranslation } from "react-i18next";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Avatar,
  Button,
  Circle,
  Float,
  Menu,
  Portal,
  Show,
  Spinner,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Auth = () => {
  const { t } = useTranslation();
  const { isLoading, user, loginWithPopup, logout } = useAuth0();

  return (
    <Menu.Root>
      {/* <Menu.Trigger asChild>
        <Button variant="plain" p={0}>
          <Show
            when={user}
            fallback={
              isLoading ? (
                <Spinner />
              ) : (
                <Button variant="outline" onClick={loginWithPopup}>
                  Log-In
                </Button>
              )
            }
          >
              <Avatar.Root size="xs">
                <Avatar.Fallback name={user?.given_name} />
                <Avatar.Image src={user?.picture || ""} />
                <Float>
                  <Circle size="2" bg="green" />
                </Float>
              </Avatar.Root>
          </Show>
        </Button>
      </Menu.Trigger> */}
      <Menu.Trigger asChild>
        {user ? (
          <Button variant="plain" p="0">
            <Avatar.Root size="xs">
              <Avatar.Fallback name={user?.given_name} />
              <Avatar.Image src={user?.picture || ""} />
              <Float>
                <Circle size="2" bg="green" />
              </Float>
            </Avatar.Root>
          </Button>
        ) : (
          <Button
            border="1px solid"
            borderColor="#F43F5E"
            bg="white"
            color="#F43F5E"
            fontWeight="400"
            fontSize="14px"
            borderRadius="8px"
            lineHeight="24px"
            _hover={{ bg: "#F43F5E", color: "white" }}
            onClick={loginWithPopup}
          >
            {isLoading ? <Spinner /> : t("login")}
          </Button>
        )}
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Show when={user}>
            <Menu.Content w="auto" minW="unset" autoFocus>
              <Menu.Item p="0">
                <Button
                  as={NavLink}
                  to="profile"
                  border="1px solid"
                  borderColor="#F43F5E"
                  bg="white"
                  color="#F43F5E"
                  fontWeight="400"
                  fontSize="14px"
                  borderRadius="8px"
                  lineHeight="24px"
                  w="100%"
                  _hover={{ bg: "#F43F5E", color: "white" }}
                >
                  {t("profile")}
                </Button>
              </Menu.Item>
              <Menu.Item p="0" mt="12px">
                <Button
                  onClick={logout}
                  border="1px solid"
                  borderColor="#F43F5E"
                  bg="white"
                  color="#F43F5E"
                  fontWeight="400"
                  fontSize="14px"
                  borderRadius="8px"
                  lineHeight="24px"
                  w="100%"
                  _hover={{ bg: "#F43F5E", color: "white" }}
                >
                  {t("logout")}
                </Button>
              </Menu.Item>
            </Menu.Content>
          </Show>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
