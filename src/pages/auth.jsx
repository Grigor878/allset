import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button } from "@chakra-ui/react";

export const Auth = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Box>
      {user && <User user={user} />}
      {isAuthenticated ? (
        <Button onClick={logout}>Log-Out</Button>
      ) : (
        // <button onClick={loginWithPopup}>Log-In</button>
        <Button onClick={loginWithRedirect}>Log-In</Button>
      )}
    </Box>
  );
};

const User = ({ user }) => {
  return (
    <Box>
      {user.given_name}
      {user.family_name}
    </Box>
  );
};
