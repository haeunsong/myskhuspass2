import React from 'react';

import firebase from "firebase/app";
import "firebase/auth";

const Main = () => {
  const user = firebase.auth().currentUser;

  return (
    <div>
      방문자 개인정보 관리화면

      <p>방문자 핸드폰 번호: {user.phoneNumber}</p>

    </div>
  );
};

export default Main;