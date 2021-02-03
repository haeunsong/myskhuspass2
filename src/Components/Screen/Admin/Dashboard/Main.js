import React, { useState,useEffect } from 'react';

const Main = () => {
  const [areas,setAreas] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);

  useEffect(()=>{
    const getAreas = async() => {
      try {
        // 요청이 시작할 때는 error와 areas 초기화
        setError(null); setAreas(null); setLoading(true);
        const response = await fetch('전체 건물 조회 api 주소');
        setAreas(response.data);
      }catch(e) {
        setError(e);
        console.log(e);
      }
      setLoading(false);
    };
    getAreas();

  },[]);

  if (loading) return <div>로딩중....</div>
  if (error) return <div>에러</div>
  if (!areas) return <div>등록된 건물이 없습니다.</div>
  
  return (
    <div>
      등록된 건물 목록 표시 화면(전체 건물 조회)
      <ul>
        {areas.map(area => (
          <li key={area.id}>
            {area.areaname}
          </li>
        ))}
      </ul>

      
    </div>
  );
};

export default Main;