import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
//As we know AuthContext is not an componenet so we can't write it like any custome componenet
//But with a dot we can access a property on this AuthContext object that contains a componenet
//that's the provider line-35
//All the componenets now wraped between this AuthContext, All have access too
//after providing we need to listen it by using consumer (check-navigation.js)
  return (
      <AuthContext.Provider /*here we have default value,but in big application this value can change*/ 
        value={{                           
          isLoggedIn: isLoggedIn,
          onLogout: logoutHandler
        }}
      >
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
  );
}

export default App;
