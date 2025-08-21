// import { useAuth0 } from "@auth0/auth0-react";
// import { Box, Button } from "@chakra-ui/react";

// export const Auth = () => {
//   const { user, isAuthenticated, loginWithPopup, logout } = useAuth0();
//   console.log(user);

//   return (
//     <Box>
//       {user && (
//         <Box>
//           {user.given_name}
//           {user.family_name}
//         </Box>
//       )}
//       {isAuthenticated ? (
//         <Button onClick={logout}>Log-Out</Button>
//       ) : (
//         <Button onClick={loginWithPopup}>Log-In</Button>
//         // <Button onClick={loginWithRedirect}>Log-In</Button>
//       )}
//     </Box>
//   );
// };

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
          <Button variant="plain" p={0}>
            <Avatar.Root size="xs">
              <Avatar.Fallback name={user?.given_name} />
              <Avatar.Image src={user?.picture || ""} />
              <Float>
                <Circle size="2" bg="green" />
              </Float>
            </Avatar.Root>
          </Button>
        ) : (
          <Button variant="outline" onClick={loginWithPopup}>
            {isLoading ? <Spinner /> : "Log-In"}
          </Button>
        )}
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Show when={user}>
            <Menu.Content w="auto" minW="unset">
              <Menu.Item>
                <Button w="100%" as={NavLink} variant="outline" to="profile">
                  Profile
                </Button>
              </Menu.Item>
              <Menu.Item>
                <Button w="100%" variant="outline" onClick={logout}>
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
