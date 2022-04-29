import { createContext } from "react";


// *** Key Term | Context 
// Context provides a way to pass data through the component tree without having to pass props down manually at every level.
// Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
// Using context, we can avoid passing props through intermediate elements:

// Create an empty object for our context
const AuthContext = createContext({});


// *** Key Term | Provider 
// A provider is usually a parent component that passes data of some kind along to all child components. 
// In Redux, the provider passes the global state/store to the rest of the application.

const AuthContextProvider = () => {
  return (

  )
}














// import { createContext, useState, useEffect, useContext } from "react";
// import { Auth, DataStore } from 'aws-amplify';
// import { User } from "../models";

// const AuthContext = createContext({});

// const AuthContextProvider = ({ children }) => {
//   const [authUser, setAuthUser] = useState(null);
//   const [dbUser, setDbUser] = useState(null);
//   const sub = authUser?.attributes?.sub;

//   useEffect(() => {
//     console.log("AWS Request Authenticate dbUser");
//     Auth.currentAuthenticatedUser({ bypassCache: true }).then(setAuthUser);
//   }, []);

//   useEffect(() => {
//     console.log("AWS Request Authenticate App user");
//     DataStore.query(User, (user) => user.sub("eq", sub)).then((users) => setDbUser(users[0]))
//   }, [sub]);
  
//   return(
//     <AuthContext.Provider value={{ authUser, dbUser, sub, setDbUser }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export default AuthContextProvider;

// export const useAuthContext = () => useContext(AuthContext);