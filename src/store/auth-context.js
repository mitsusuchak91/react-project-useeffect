import React from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {}//for better IDe Autocompletion,its is good idea to add onlogout here default contex object, this is just a dummy function. we are not going to use anyway.

});
//AuthContext line 3 = is not an componenet, it is an object that will contain a componenet
//all componenets are wraped with this context, so we can use it in every componenets
//to available in all componenets you need 2 things,
//1- provide it in every componenet
//2- after provinding you need to call/listen to it
export default AuthContext;