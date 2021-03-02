
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import firebase from "firebase/app";
import "firebase/auth";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  send: {
    alignItems: 'center'
  }
}));

export default function VisitorSignin(props) {
  const classes = useStyles();

  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [checkNumber, setCheckNumber] = useState("");
  const [visitorName, setVisitorName] = useState("");
  const [major, setMajor] = useState("");

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'recaptcha-container',
      {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        }
      });


  }
  const onSignInSubmit = (e) => {
    e.preventDefault();
    setUpRecaptcha();
    const phoneNumber = userPhoneNumber;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        const code = window.prompt("Enter OTP");
        confirmationResult.confirm(code).then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(user);
          console.log("User is signed in");
          alert('정상적으로 인증되었습니다.')
          props.history.push('/visitor/user/myinfo');
        }).catch((error) => {
          console.log('error1')
        });
      }).catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error);
        console.log('sms not sent');
      });
  };

  // const onSignInSubmit = () => {
  //   let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
  //   let number = '+821066035404';
  //   firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(e){
  //     let code = prompt('enter the otp','');
  //     if(code==null)return;
  //     e.confirm(code).then(function(result){
  //       console.log(result.user,'user');
  //       document.querySelector('label').textContent = result.user.phoneNumber + "Number verified";
  //     }).catch((err)=>{
  //       console.log(err);
  //     })
  //   })
  // }

  const onVisitorSigninClick = (e) => {
    e.preventDefault();
    props.history.push('/visitor/user/myinfo');

  }

  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <label></label>
        <Typography component="h1" variant="h5">
          방문자 로그인
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                variant="outlined"
                required
                fullWidth
                name="visitorname"
                label="이름"
                type="text"
                id="visitorname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                variant="outlined"
                required
                fullWidth
                name="major"
                label="학과(학부)"
                type="text"
                id="major"
              />
            </Grid>
            <Grid item xs={12}>
              <Grid id="recaptcha-container"></Grid>
              <TextField
                value={userPhoneNumber}
                onChange={(e) => setUserPhoneNumber(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="휴대전화 번호('-'제외 번호만 입력)"
                name="phone"
              />
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.send}
              onClick={onSignInSubmit}
            >
              인증번호 전송
            </Button>
            <Grid item xs={12}>
              <TextField
                value={checkNumber}
                onChange={(e) => setCheckNumber(e.target.value)}
                variant="outlined"
                required
                fullWidth
                name="checkNumber"
                label="인증번호(8자리)"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="정보 제공 동의"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onVisitorSigninClick}
          >
            완료
          </Button>
          <Grid item>
            <Link href="/admin/signin">
              관리자 로그인
            </Link>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        {/* <Copyright /> */}
      </Box>
    </Container>
  );
}