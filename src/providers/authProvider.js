import { Auth0Provider } from "@auth0/auth0-react";

export function AuthProvider({ children }) {
    const { VITE_DOMAIN, VITE_CLIENT_ID } = import.meta.env;

    return (
        <Auth0Provider
            domain={VITE_DOMAIN}
            clientId={VITE_CLIENT_ID}
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}>
            {children}
        </Auth0Provider>
    )
}
