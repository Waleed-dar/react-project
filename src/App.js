import Routing from './Routing';
import { createContext, useContext } from 'react';
import { useState } from 'react';
import React from 'react';

export const AuthContext =createContext();
export const UserData=createContext();

function App() {   
  const [authentication, setAuthentication] = useState(localStorage.getItem("authentication"));
  const [userInfo,setUserInfo]=useState(null);
  return (
    <AuthContext.Provider value={{authentication,setAuthentication}}>
      <UserData.Provider value={{userInfo,setUserInfo}}>
       <Routing/>
    </UserData.Provider>
    </AuthContext.Provider>
  )
     
}

export default App;
