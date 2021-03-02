import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import AdminSignin from '../Signin/Main';
import userInfo from '../Signin/Main';
import firebase from "firebase/app";
import "firebase/auth";

const useStyles = makeStyles({
  title: {
   flexGrow:1
  },
  text: {
    marginRight:30,

  },
  button: {
    color:'white'
  }
});

const Main = (props) => {
  const classes = useStyles();

  const [email, setEmail] = useState();
  const [areaList, setAreaList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    var user = firebase.auth().currentUser;

    if (user != null) {
      setEmail(user.email);
    }

    const getAreas = async () => {
      try {
        // 요청이 시작할 때는 error와 areas 초기화
        setError(null); setAreaList(null); setLoading(true);

        let idToken = await firebase.auth().currentUser.getIdToken(true);

        const result = await fetch('/area', {
          method: "GET",
          headers: { 'Firebase-ID-Token': idToken }
        });
        if (result.ok) {
          let areas = await result.json();
          setAreaList(areas);
          console.log(setAreaList);
        }
        // setAreas(response.data);
      } catch (e) {
        setError(e);
        console.log(e);
      }
      setLoading(false);
    };
    getAreas();

  }, []);

  const onLogoutHandler = async () => {
    try {
      let result = await firebase.auth().signOut();
      console.log(result);
      props.history.push('/');

    } catch (err) {
      alert(err);

    }
  }

  if (loading) return <div>로딩중....</div>
  // if (error){alert(error)} return <div>에러</div>
  if (!areaList) return (
    <>
      <div>등록된 건물이 없습니다.</div>
      <Button onClick={onLogoutHandler}>로그아웃</Button>

    </>
  )
  const addAreaHandler = () => {

  }
  const onSetupAccountHandler = () => {

  }



  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6">전체 건물 조회</Typography>
          <Typography className={classes.text}>사용자 이메일: {email}</Typography>
          <Button className={classes.button} onClick={onLogoutHandler}>로그아웃</Button>
          <Button className={classes.button} onClick={onSetupAccountHandler} >계정설정</Button>
          <Button className={classes.button} href="/admin/addarea" onClick={addAreaHandler} >건물추가</Button>

        </Toolbar>
      </AppBar>




      <ul>
        {/* {areaList.map(area => (
          <li key={area.id}>
            {area.areaname}
          </li>
        ))} */}
      </ul>



    </>
  );
};

export default Main;