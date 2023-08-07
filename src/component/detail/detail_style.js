import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;

export const Backbutton = styled.div`
  position: absolute;
  top: 12%;
  left: 120px;
  font-size: 25px;
  font-weight: 800;
`;

export const Body = styled.fieldset`
  background-color: rgba(255, 255, 255, 0.85);
  width: 800px;

  z-index: 10;
  // border: solid 2px #7a7281;

  @media screen and (max-width: 807px) {
    width: 700px;
    bottom: 550px;
  }
`;
export const Edit = styled.div`
  // margin-top: 3px;
  position: absolute;
  right: 30px;
  top: 25px;

  @media screen and (max-width: 807px) {
    margin-left: 500px;
    margin-top: 3px;
  }
  @media screen and (max-width: 813px) {
    margin-left: 450px;
    margin-top: 3px;
  }
  @media screen and (max-width: 632px) {
    margin-left: 300px;
    margin-top: 3px;
  }
`;

export const Editbutton = styled.button`
  background-color: #c4e1e1;
  width: 80px;
  height: 30px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  font-family: serif;
  cursor: pointer;

  @media screen and (max-width: 632px) {
    width: 60px;
    height: 30px;
  }
`;

export const Title = styled.div`
  width: 500px;
  height: 50px;

  padding: 50px 8px;
  font-size: 50px;
  text-align: center;
  color: black;
  text-align: left;
  font-weight: 800;
  margin-top: 15px;
`;

export const Label = styled.div`
  position: absolute;
  left: 20px;
  top: 30px;
`;

export const Bodyword = styled.div`
  width: 700px;
  padding: 20px;
  margin: 15px auto;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 1.3;
`;

export const InputTitle = styled.input`
  width: 500px;
  height: 50px;
  border: solid 1px #9d9d9d;
  margin-left: 20px;
  margin-top: 20px;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  border-radius: 5px;
`;

export const Select = styled.select`
  margin: 10px 20px;
  font-size: 20px;
  border: solid 1px #9d9d9d;
  border-radius: 5px;
  width: 120px;
  text-align: center;
`;

export const InputBody = styled.textarea`
  width: 500px;
  height: 300px;
  padding: 10px;
  margin: 10px 20px;
  border-radius: 5px;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 1px;
`;

export const Popup = styled.fieldset`
  width: 300px;
  height: 150px;
  border: solid 2px #408080;
  background-color: #d1e9e9;
  border-radius: 5px;
  top: 40%;
  bottom: 60%;
  margin: 0 auto;
  position: absolute;
  right: 0;
  left: 0;
`;
