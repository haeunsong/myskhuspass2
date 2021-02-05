import React, { useState } from 'react';
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
// 학내메일 입력 =>
// 해당 메일로 인증링크 전송 => 
// 전송된 링크로 들어가서 비밀번호 재설정 ...?

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AdminSearch = () => {
  const classes = useStyles();

  const [findPassword,setFindPassword] = useState("");

  const findPasswordHandler = () => {
    alert('메일로 인증링크를 보냈습니다. 전송된 인증링크로 들어가서 비밀번호를 재설정하세요.')
  }
  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        비밀번호 찾기
      </Typography>
      <form className={classes.form} noValidate >
        <TextField
          value={findPassword}
          onChange={(e)=>setFindPassword(e.target.value)}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="학내메일(@office.skhu.ac.kr)"
          name="email"
          autoComplete="email"
          autoFocus
          
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={findPasswordHandler}
         
        >
          인증메일 전송
        </Button>
        <Grid container>
          <Grid item>
            <Link href="/admin/signup" variant="body2">
              {"회원가입"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  </Container>
  );
};

export default AdminSearch;