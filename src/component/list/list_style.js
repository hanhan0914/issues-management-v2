// import styled from 'styled-components';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

export const SearchBox = styled('input')({
  margin: 'auto',
  display: 'flex',
});

export const SearchTest = styled(InputBase)`
  border: 1px solid grey;
  border-radius: 5px;
  width: 200px;
  background-color: white;
  :hover {
    background-color: rgb(243, 246, 249);
    opacity: 0.5;
  }
  height: 30px;
  margin: 10px 5px 10px 10px;
  type: text;
  outline: none;

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 35px;
  }
  @media screen and (min-width: 1024px) {
    width: 455px;
    height: 40px;
    margin: 10px 5px 10px 90px;
  }
  @media screen and (min-width: 1280px) {
    width: 500px;
    height: 40px;
    margin: 10px 5px 10px 150px;
  }
`;

export const Filter = styled(FormControl)`
  color: #1976d2;
  margin-top: 5px;
  margin-left: 5px;
  @media screen and (min-width: 393px) {
    margin-left: 10px;
    margin-top: 5px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 30px;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 10px;
    margin-left: 40px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 12px;
    margin-left: 60px;
  }
`;

export const CreateButton = styled(Button)`
  color: balck;
  @media screen and (min-width: 393px) {
    margin-left: -10px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 3px;
    margin-top: 5px;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 8px;
  }
`;

export const Background = styled('div')({
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  backgroundSize: '100% 100%',
  backgroundColor: 'white',
});

export const SearchInput = styled('input')({
  margin: '10px 10px 10px 80px',
  width: '455px',
  height: '40px',
  type: 'text',
  outline: 'none',
});

export const DirectionButton = styled('button')({
  backgroundColor: 'rgba(0, 0, 0, 0)',
  border: 'none',
  cursor: 'pointer',
  margin: 'auto 0px',
  marginLeft: '30px',
  borderRadius: '200px',
  '@media screen and (min-width: 393px)': {
    marginLeft: '5px',
  },
  '@media screen and (min-width: 768px)': {
    marginLeft: '5px',
  },
  '@media screen and (min-width: 1024px)': {
    marginLeft: '5px',
  },
});

export const FormBackground = styled('div')({
  background: 'white',
  boxShadow: '0px 0px 5px black',
  position: 'absolute',
  width: '600px',
  height: '650px',
  margin: '0 auto',
  right: '0',
  left: '0',
  top: '80px',
  borderRadius: '5px',
  padding: '15px',
  zIndex: '4',
  '@media screen and (min-width: 393px)': {
    width: '300px',
    top: '100px',
  },
  '@media screen and (min-width: 768px)': {
    width: '500px',
  },
});

export const HintWord = styled('p')({
  color: 'red',
  fontweight: '500',
  fontSize: '15px',
});

export const CreateButtontest = styled('button')({
  fontSize: '23px',
  border: 'none',
  width: '120px',
  borderRadius: '50%',
  backgroundColor: '#95caca',
  color: 'white',
  fontWeight: '900',
  cursor: 'pointer',
  marginLeft: '20px',
});

export const Img = styled('img')({
  position: 'fixed',
  right: '100px',
  bottom: '20px',
  width: '300px',
});

export const ListBackground1 = styled('div')({
  margin: '3px 150px',
  marginRight: '350px',
});
export const ListBackground = styled('div')({
  margin: '3px 10px',
});

export const ListCard1 = styled('fieldset')({
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  height: '185px',
  minWidth: '800px',
  width: '900px',
  padding: '20px',
  marginBottom: '15px',
  position: 'relative',
  border: '1px solid rgb(208, 215, 222)',
  borderRadius: '10px',
  '&:hover': {
    // backgroundColor: 'rgba(172, 214, 255)',
    backgroundColor: '#ECF5FF',
  },
});
export const ListCard = styled('fieldset')({
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  height: '185px',

  width: '100px',
  padding: '10px',
  marginBottom: '15px',
  position: 'relative',
  border: '1px solid rgb(208, 215, 222)',
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: '#ECF5FF',
  },
  '@media screen and (min-width: 768px)': {
    width: '650px',
  },
  '@media screen and (min-width: 1024px)': {
    width: '830px',
    marginLeft: '70px',
  },
  '@media screen and (min-width: 1280px)': {
    width: '900px',
    marginLeft: '130px',
  },
});

export const ListWord1 = styled('div')({
  fontSize: '25px',
  fontWeight: '900',
  marginBottom: '8px',
  height: '35px',
});
export const ListWord = styled('div')({
  fontSize: '25px',
  fontWeight: '900',
  marginBottom: '8px',
  height: '35px',
});

export const ListBody = styled('div')({
  margin: '0px 10px',
  fontSize: '15px',
  width: '350px',
  lineHeight: '18px',
  maxHeight: '36px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  '@media screen and (min-width: 768px)': {
    fontSize: '18px',
  },
});

export const Label = styled('span')({
  fontSize: '15px',
  position: 'absolute',
  right: '10px',
  border: 'none',
});

export const SearchHint = styled('div')({
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '18px',
  fontWeight: '600',
  margin: '10px 80px',
});

export const Navbar = styled('div')({
  margin: '0px 0px 30px 0px',
  display: 'flex',
});
