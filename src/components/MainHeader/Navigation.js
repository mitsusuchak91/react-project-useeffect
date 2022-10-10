import { React, useContex, useContext } from 'react';
import AuthContext from '../../store/auth-context';

import classes from './Navigation.module.css';

//2nd step is call/listen to that AuthContext by consumer or you can do it by state also
const Navigation = () => {
    const ctx = useContext(AuthContext);

        return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    );
    };

export default Navigation;
