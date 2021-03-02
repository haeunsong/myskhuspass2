import React, { useEffect, useState } from "react";

import ContainerRouter from "./Router";
import firebase from "firebase/app";
import "firebase/auth";

const Main = () => {
  const [init,setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isAdmin,setIsAdmin] = useState(false);



  useEffect(()=> {
    
    firebase.auth().onAuthStateChanged((user) => {
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
    {init ? <ContainerRouter isLoggedIn={isLoggedIn}/> : "Initializing.."};
    </>
  )
};

export default Main;
