import styled from 'styled-components';
import Button from '@mui/material/Button';

export const Title = styled.h1`
  font-family: Impact;
  font-size: 120px;
  font-weight: bolder;
  padding: 80px 100px;
  color: #1976d2;

  line-height: 1;
  letter-spacing: 5px;
  width: 900px;
  @media screen and (max-width: 825px) {
    height: 130px;
    // word-wrap: break-word;
    font-size: 80px;
    line-height: 0.8;
  }

  @media screen and (max-width: 506px) {
    height: 200px;
    font-size: 80px;
    margin: 45px;
    line-height: 0.8;
  }
`;

export const LoginButton = styled(Button)`
  margin: 20px 100px;
  padding: 10px 0px;

  // // button 屬性修改
  // font-weight: border;
  width: 150px;
  font-size: 20px;
`;

//linear-gradient(to right, #283048, #859398)
// linear-gradient(to right, #2bc0e4, #eaecc6);
// linear-gradient(to right, #085078, #85d8ce);
