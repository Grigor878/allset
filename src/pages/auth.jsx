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
          <Button variant="ghost" p="0 8px">
            <Avatar.Root size="xs">
              <Avatar.Fallback name={user?.given_name} />
              <Avatar.Image src={user?.picture || ""} />
              <Float>
                <Circle size="2" bg="green" />
              </Float>
            </Avatar.Root>
          </Button>
        ) : (
          <Button p="0 8px" variant="ghost" onClick={loginWithPopup}>
            {isLoading ? <Spinner /> : "Log-In"}
          </Button>
        )}
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Show when={user}>
            <Menu.Content w="auto" minW="unset" autoFocus>
              <Menu.Item p="0">
                <Button as={NavLink} to="profile" variant="ghost" w="100%">
                  Profile
                </Button>
              </Menu.Item>
              <Menu.Item p="0">
                <Button  onClick={logout} variant="ghost" w="100%">
                  Log-Out
                </Button>
              </Menu.Item>
            </Menu.Content>
          </Show>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
