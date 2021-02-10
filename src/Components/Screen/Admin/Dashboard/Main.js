import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

import { authService } from '../../../../fbase';

const Main = (props) => {
  const [areaList, setAreaList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAreas = async () => {
      try {
        // 요청이 시작할 때는 error와 areas 초기화
        setError(null); setAreaList(null); setLoading(true);

        let idToken = await authService.currentUser.getIdToken(true);

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
      let result = await authService.signOut();
      console.log(result);
      props.history.push('/admin');

    } catch (err) {
      alert(err);

    }
  }

  if (loading) return <div>로딩중....</div>
  if (error) return <div>에러</div>
  if (!areaList) return (
    <>
      <div>등록된 건물이 없습니다.</div>
      <Button onClick={onLogoutHandler}>로그아웃</Button>

    </>
  )

  const addAreaHandler = () => {
    
  }

  return (
    <>

      등록된 건물 목록 표시 화면(전체 건물 조회)
      <ul>
        {/* {areaList.map(area => (
          <li key={area.id}>
            {area.areaname}
          </li>
        ))} */}
      </ul>
      <Button onClick={onLogoutHandler}>로그아웃</Button>

      <Button onClick={addAreaHandler} >건물추가</Button>


    </>
  );
};

export default Main;