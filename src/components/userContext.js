import React from "react";

// default value can be added to context as here 'Riadh Bg'
const UserContext = React.createContext('Riadh Bg');

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

// for the first way to use context
export {UserProvider, UserConsumer};

// for the second way to use context
export default UserContext