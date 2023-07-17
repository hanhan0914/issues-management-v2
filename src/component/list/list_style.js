// import styled from 'styled-components';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

export const SearchBox = styled('input')({
  margin: 'auto',
  display: 'flex',
});
export const SearchTest = styled(InputBase)`
  border: 1px solid grey;
  border-radius: 5px;
  width: 455px;
  background-color: white;
  :hover {
    background-color: rgb(243, 246, 249);
    opacity: 0.5;
  }

  height: 40px;
  margin: 10px 5px 10px 150px;
  type: text;
  outline: none;
`;

export const CreateButton = styled(Button)`
  color: balck;
`;

// export const Search = styled('div')({
//   position: 'relative',

//   marginLeft: 0,
// });

// export const SearchIconWrapper = styled('div')({
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// });

export const Background = styled('div')({
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  backgroundSize: '100% 100%',
  backgroundColor: 'white',
});

// export const SearchInput = styled.input`
//   margin: 10px 10px 10px 80px;
//   width: 455px;
//   height: 40px;
//   type: text;
//   outline: none;
//   @media screen and (max-width: 635px) {
//     margin: 10px 10px 10px 30px;
//   }
// `;

export const SearchInput = styled('input')({
  margin: '10px 10px 10px 80px',
  width: '455px',
  height: '40px',
  type: 'text',
  outline: 'none',
});

// export const Filter = styled.select`
//   margin-left: 5px;
//   width: 95px;
//   height: 35px;
//   font-family: Comic Sans MS;
//   font-weight: 600;
//   background-color: #f0f0f0;
//   border: none;
//   border-radius: 10px;
//   cursor: pointer;
//   outline: none;
//   &:hover {
//   }
//   @media screen and (max-width: 1400px) {
//     margin-left: 150px;
//   }
//   @media screen and (max-width: 1290px) {
//     margin-left: 100px;
//   }

//   @media screen and (max-width: 840px) {
//     margin-left: 50px;
//   }

//   @media screen and (max-width: 778px) {
//     margin-left: 100px;
//   }
// `;

// export const DirectionButton = styled.button`
//   background-color: rgba(0, 0, 0, 0);
//   border: none;
//   cursor: pointer;
//   margin-left: 20px;
//   border-radius: 200px;
//   &:hover {
//   }
//   @media screen and (max-width: 840px) {
//     margin-left: 5px;
//   }
// `;

export const DirectionButton = styled('button')({
  backgroundColor: 'rgba(0, 0, 0, 0)',
  border: 'none',
  cursor: 'pointer',
  margin: 'auto 0px',
  marginLeft: '30px',
  borderRadius: '200px',
});

export const FormBackground = styled('fieldset')({
  background: 'linear-gradient(to right, #56ccf2, #2f80ed)',
  borderColor: '#3d7878',
  position: 'absolute',
  width: '600px',
  height: '650px',
  margin: '0 auto',
  right: '0',
  left: '0',
  top: '100px',
  borderRadius: '5px',
  padding: '10px',
  zIndex: '4',
});
// background-color: rgba(163, 209, 209, 0.95);

export const HintWord = styled('p')({
  color: 'red',
  fontweight: '500',
  fontSize: '15px',
});

// export const CreateButton = styled.button`
//   font-size: 23px;
//   border: none;
//   width: 120px;
//   border-radius: 50%;
//   background-color: #95caca;
//   color: white;
//   font-weight: 900;
//   position: fixed;
//   right: 100px;
//   bottom: 160px;
//   cursor: pointer;
//   &:hover {
//     transform: scale(1.1);
//   }
//   @media screen and (max-width: 1180px) {
//     width: 80px;
//     bottom: 120px;
//   }
//   @media screen and (max-width: 635px) {
//     bottom: 110px;
//   }
// `;

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

// @media screen and (max-width: 1180px) {
//   width: 200px;
// }
// @media screen and (max-width: 635px) {
//   width: 150px;
// }

export const ListBackground = styled('div')({
  margin: '3px 150px',
  marginRight: '350px',
});

export const ListCard = styled('fieldset')({
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

// &:hover {
//   background-color: rgba(172, 214, 255);
//   cursor: pointer;
//   color: #0066cc;
//   // transform: scale(1.03);
// }
// @media screen and (max-width: 1400px) {
//   width: 800px;
//   padding: 15px;
// }
// @media screen and (max-width: 1290px) {
//   width: 700px;
//   padding: 15px;
// }

// @media screen and (max-width: 790px) {
//   width: 550px;
//   padding: 15px;
// }
// @media screen and (max-width: 635px) {
//   width: 450px;
// }

export const ListWord = styled('div')({
  fontSize: '25px',
  fontWeight: '900',
  marginBottom: '8px',
  height: '35px',
});

export const ListBody = styled('div')({
  margin: '0px 10px',
  fontSize: '18px',

  width: '500px',

  lineHeight: '18px',
  maxHeight: '36px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
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

// background: linear-gradient(to right, #74ebd5, #acb6e5);
// background-image: url(images/navbar.jpg);
// background-size: 100% 100%;

// export const UserName = styled('button')({
//   fontSize: '25px',
//   border: 'none',
//   width: '130px',
//   borderRadius: '50%',
//   backgroundColor: '#95caca',
//   color: 'white',
//   fontWeight: '900',

//   cursor: 'pointer',
//   marginLeft: '20px',
// });
