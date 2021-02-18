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

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

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
}));

export default function AdminSignup() {

  const classes = useStyles();

  const [emailAddr,setEmailAddr] = useState("");
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [checkPassword,setCheckPassword] = useState("");
  // const [areaList, setAreaList] = useState([]);

  const onAdminSignupClick = async () => {
    try{

      let result = await fetch('/user/adminsignup',{
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: emailAddr,
          name: name,
          password: password,
          passwordCheck: checkPassword
        })
      })
      if(result.ok){
        alert('회원가입 절차가 거의 끝났습니다. 입력하신 이메일 주소로 인증 메일을 보내 드렸으니, 확인 후 인증 절차를 진행하여 가입을 완료하세요.');
      }else{
        let errorMsg = await result.json();
        alert(`회원가입 중 오류가 발생했습니다: ${errorMsg.error}`)
      }
    }catch(err){
      console.log(err);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          건물 관리자 회원가입
        </Typography>
        <div className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={emailAddr}
                onChange={(e)=>setEmailAddr(e.target.value)}
                variant="outlined"
                required
                fullWidth
                label="학내메일로 가입"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={name}
                onChange={(e)=>setName(e.target.value)}
                variant="outlined"
                required
                fullWidth
                label="이름"
                type="text"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                variant="outlined"
                required
                fullWidth
                label="사용할 비밀번호 입력"
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={checkPassword}
                onChange={(e)=>setCheckPassword(e.target.value)}
                variant="outlined"
                required
                fullWidth
                label="비밀번호 확인"
                type="password"
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
            onClick={onAdminSignupClick}
          >
            회원가입 완료
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/admin/login" variant="body2">
                이미 계정이 있다면? 로그인
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
      <Box mt={5}>
        {/* <Copyright /> */}
      </Box>
    </Container>
  );
}