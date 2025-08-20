import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button } from "@chakra-ui/react";

export const Auth = () => {
  const { user, isAuthenticated, loginWithPopup, logout } = useAuth0();
  console.log(user);

  return (
    <Box>
      {user && (
        <Box>
          {user.given_name}
          {user.family_name}
        </Box>
      )}
      {isAuthenticated ? (
        <Button onClick={logout}>Log-Out</Button>
      ) : (
        <Button onClick={loginWithPopup}>Log-In</Button>
        // <Button onClick={loginWithRedirect}>Log-In</Button>
      )}
    </Box>
  );
};
