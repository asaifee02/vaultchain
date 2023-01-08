import { useAuth0 } from "@auth0/auth0-react";
import React from 'react'

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/dashboard",
      },
    });
  };

  return (
    <li className="nav-item">
      <button className="btn btn-neutral" onClick={handleLogin}>
        Sign In
      </button>
    </li>
  );
};

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      screen_hint: "signup",
      appState: {
        returnTo: "/dashboard",
      },
    });
  };

  return (
    <li className="nav-item">
    <button className="btn btn-neutral" onClick={handleSignUp}>
      Sign Up
    </button>
    </li>
  );
};

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin,
    });
  };

  return (
    <button type="button" className="btn btn-danger" onClick={handleLogout}>
      Log Out
    </button>
  );
};
// export default function Buttons(props) {
//   return (
//     <li className="nav-item">
//             <a className="btn btn-neutral" href={props.link}  target="_self">
//               <span className="nav-link-inner--text">{props.name}</span>
//             </a>
//           </li>
//   )
// }
