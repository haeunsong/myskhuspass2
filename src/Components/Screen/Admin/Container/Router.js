import React from 'react';
import { Redirect } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
  // isAdmin false => 방문자임(전번) => /visitor/user/myinfo
  //         true => 관리자임(이메일) => 대시보드 

const ContainerRouter = ({ isLoggedIn }) => {

  var user = firebase.auth().currentUser;

  // 로그인 O
  if(isLoggedIn){

    if(user.email){
      return <Redirect to="/admin/dashboard" />

    }else{
      return <Redirect to="/visitor/user/myinfo" />
    }
  }
  // 로그인 x
  return <Redirect to="/visitor/signin" />
};

export default ContainerRouter;