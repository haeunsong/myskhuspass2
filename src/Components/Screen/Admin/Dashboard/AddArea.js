import React,{useState} from 'react';
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

const AddArea = (props) => {

  const [areaName,setAreaName] = useState("");
  const [areaList,setAreaList] = useState([]);
  const [id,setId] = useState(1);
  


  const onAddAreaHandler = () => {
    const nextList = areaList.concat({areaName:areaName,id:id});
    console.log(nextList);
    
    setAreaList(nextList);
    setId(id+1);

    console.log(areaList);


  }
  return (
    <>
    <TextField 
      value={areaName}
      onChange={(e)=>setAreaName(e.target.value)}
      label="추가할 건물 이름을 입력하세요."
      fullWidth
      variant="outlined"
      margin="normal"
      type="text"
    >
    </TextField>
    <Button
      variant="contained"
      onClick={onAddAreaHandler}
    >추가하기
    </Button>
      

      
    </>
  );
};

export default AddArea;