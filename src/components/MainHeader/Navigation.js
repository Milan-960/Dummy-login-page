import React, { useContext } from "react";
import AuthContext from "../../Store/AuthContext";

import classes from "./Navigation.module.css";

const Navigation = () => {

  // This useContext looks more elegant
  const ctx = useContext(AuthContext)

  return (
    // <AuthContext.Consumer> if you want to use you can use this way as well 
        <nav className={classes.nav}>
          <ul>
            {ctx.isLoggedIn && (
              <li>
                <a href="https://www.Milansportfolio.com">Users</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <a href="https://www.Milansportfolio.com">Admin</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <button onClick={ctx.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>)
     
    // </AuthContext.Consumer>s
};

export default Navigation;
