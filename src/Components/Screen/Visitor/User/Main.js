import React from 'react';
import Button from '@material-ui/core/Button';

import firebase from "firebase/app";
import "firebase/auth";

const Main = (props) => {
  const user = firebase.auth().currentUser;

  const onLogoutHandler = async () => {
    try {
      let result = await firebase.auth().signOut();
      console.log(result);
      props.history.push('/');

    } catch (err) {
      alert(err);

    }
  }
  
  return (
    <div>
      방문자 개인정보 관리화면

      <p>방문자 핸드폰 번호: {user.phoneNumber}</p>
      <Button onClick={onLogoutHandler}>로그아웃</Button>


    </div>
  );
};

export default Main;