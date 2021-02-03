import React, { useEffect, useState } from "react";

import {authService} from "../../../../fbase";
import ContainerRouter from "./Router";

const Main = () => {
  const [init,setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=> {
    authService.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);

    })

  },[])

  return (
    <>
    {init ? <ContainerRouter isLoggedIn={isLoggedIn} /> : "Initializing.."};
    </>
  )
};

export default Main;
