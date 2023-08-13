import styled from 'styled-components';
import Button from '@mui/material/Button';

// export const Title2 = styled.h1`
//   font-family: Impact;
//   font-size: 120px;
//   font-weight: bolder;
//   padding: 80px 100px;
//   color: #1976d2;

//   line-height: 1;
//   letter-spacing: 5px;
//   width: 900px;
//   @media screen and (max-width: 825px) {
//     height: 130px;
//     // word-wrap: break-word;
//     font-size: 80px;
//     line-height: 0.8;
//   }

//   @media screen and (max-width: 506px) {
//     height: 200px;
//     font-size: 80px;
//     margin: 45px;
//     line-height: 0.8;
//   }
// `;

export const Title = styled.h1`
  font-family: Impact;
  font-size: 34px;
  text-align: center;
  color: #1976d2;
  font-weight: bolder;
  line-height: 1;
  letter-spacing: 3px;
  @media screen and (max-width: 768px) {
    font-size: 60px;
  }

  @media screen and (max-width: 1440px) {
    font-family: Impact;
    font-size: 120px;
    font-weight: bolder;
    padding: 80px 100px;
    color: #1976d2;
    line-height: 1;
    letter-spacing: 5px;
    width: 900px;
    margin-bottom: -40px;
    text-align: left;
  }
`;

export const Subtitle = styled.p`
  color: #1976d2;
  font-size: 15px;
  letter-spacing: 3px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1440px) {
    font-size: 30px;
    text-align: left;
    margin-left: 110px;
  }
`;

export const LoginButton = styled(Button)`
  margin: 0 30%;
  padding: 10px 0px;
  width: 130px;
  font-size: 15px;
  height: 25px;
  @media screen and (max-width: 768px) {
    margin: 0 40%;
    font-size: 25px;
    height: 45px;
    width: 160px;
  }

  @media screen and (max-width: 1440px) {
    margin: 0 100px;
    font-size: 25px;
    height: 50px;
    width: 200px;
  }
`;

//linear-gradient(to right, #283048, #859398)
// linear-gradient(to right, #2bc0e4, #eaecc6);
// linear-gradient(to right, #085078, #85d8ce);
