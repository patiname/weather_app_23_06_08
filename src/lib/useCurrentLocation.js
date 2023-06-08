import { useEffect, useState } from "react";

export const useCurrentLocation = () => {
  const defaultLat = 35.15759545095452;
  const defaultLon = 129.05926369070968;
  const [lat, setLat] = useState(defaultLat);
  const [lon, setLon] = useState(defaultLon);

  const location = (pos) => {
    // =>실행할 함수에 첫번째 매개변수는 현재 위치 정보를 가져옴
    // const lat = pos.coords.latitude;
    // const lon = pos.coords.longitude;
    const {
      coords: { latitude, longitude },
    } = pos;
    // console.log(latitude, longitude);
    // =>지역변수이기 때문에 함수밖으로 변수를 사용할수 없음
    // =>useState를 이용하여 전역변수화 할수 있음

    setLat(latitude);
    setLon(longitude);
  };

  //   console.log(lat, lon);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location);
    //   =>현재 위치 기준으로 위도, 경도를 얻어옴
    //   =>매개변수에 실행할 함수명을 작성해주면 됨
  }, [lat, lon]);

  // *useEffect(() => {}, [])
  // =>페이지가 랜더링 되었을때 한번만 실행, 랜더링 후 실행,
  // 업데이트가 되었을때 실행 등을 할수 있으며
  // =>특정값이 변경될때 마다 코드를 실행하고 싶을땐 []배열 안쪽으로
  // 특정값을 넣어주면됨

  return {
    lat,
    lon,
  };
  //   =>전역변수 처리한 변수들을 useCurrentLocation함수를
  //   실행할때마다 얻어올수 있음
};
