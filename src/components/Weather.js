import styled from "styled-components";

const Wrap = styled.div`
  color: white;
  height: 100vh;
  background: linear-gradient(
    360deg,
    rgba(98, 98, 179, 1) 0%,
    rgba(119, 202, 236, 1) 100%
  );
  padding: 20% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const City = styled.h3`
  font-size: 40px;
`;

const Temp = styled.div`
  font-size: 90px;
  margin-left: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
`;

const Seper = styled.div`
  width: 50px;
  height: 3px;
  background-color: #fff;
`;

const ConWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Con = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  line-height: 1.5em;
  opacity: 0.7;
  p:nth-child(2) {
    font-weight: 600;
  }
  width: 33%;
  border-right: 1px solid rgba(255, 255, 255, 0.8);
  /* background-color: gray; */
  &:last-child {
    border: none;
  }
`;

export const Weather = ({ data }) => {
  console.log(data);
  return (
    <Wrap>
      <City>{data.name}</City>
      <Temp>{Math.round(data.main.temp)}°</Temp>
      <Desc>{data.weather[0].description}</Desc>
      <Seper></Seper>
      <ConWrap>
        <Con>
          <p>체감 온도</p>
          <p>{Math.round(data.main.feels_like)}°</p>
        </Con>
        <Con>
          <p>최저 온도</p>
          <p>{Math.round(data.main.temp_min)}°</p>
        </Con>
        <Con>
          <p>최고 온도</p>
          <p>{Math.round(data.main.temp_max)}°</p>
        </Con>
      </ConWrap>
    </Wrap>
  );
};
