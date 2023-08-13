import { styled } from '@mui/system';
import Card from '@mui/material/Card';

export const Background = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  flexWrap: 'wrap',
});
export const MyCard = styled(Card)`
  width: 800px;
  height: 580px;
  margin-top: 35px;
  @media screen and (min-width: 393px) {
    width: 350px;
  }

  @media screen and (min-width: 768px) {
    width: 650px;
  }
  @media screen and (min-width: 1280px) {
    width: 800px;
  }
`;

export const Edit = styled('div')({
  position: 'absolute',
  right: '30px',
  top: '25px',

  '@media screen and (max-width: 393px) ': {
    right: '30px',
    top: '30px',
  },

  '@media screen and (min-width: 1280px)': {
    right: '30px',
    top: '35px',
  },
});

export const Title = styled('div')({
  width: '500px',
  height: '50px',
  padding: '50px 8px',
  fontSize: '50px',
  color: 'black',
  textAlign: 'left',
  fontWeight: '800',
  marginTop: '15px',
  '@media screen and (max-width: 393px) ': {
    fontSize: '45px',
  },
});

export const Label = styled('div')({
  position: 'absolute',
  left: '20px',
  top: '30px',
});

export const Bodyword = styled('div')({
  width: '700px',
  padding: '20px',
  margin: '15px auto',
  fontSize: '18px',
  letterSpacing: '1px',
  lineHeight: '1.3',
  '@media screen and (max-width: 393px) ': {
    width: '300px',
  },
  '@media screen and (min-width: 768px)': {
    width: '400px',
  },
  '@media screen and (min-width: 1280px)': {
    width: '650px',
  },
});

export const InputTitle = styled('input')({
  width: '500px',
  height: '50px',
  border: 'solid 1px #9d9d9d',
  marginLeft: '20px',
  marginTop: '20px',
  fontWeight: '700',
  fontSize: '30px',
  textAlign: 'center',
  borderRadius: '5px',
  '@media screen and (min-width: 393px) ': {
    width: '250px',
    marginTop: '50px',
    fontSize: '20px',
  },
  '@media screen and (min-width: 768px) ': {
    marginTop: '55px',
    fontSize: '25px',
  },
  '@media screen and (min-width: 1024px)': {
    marginTop: '50px',
    fontSize: '25px',
  },
  '@media screen and (min-width: 1280px)': {
    width: '500px',
    fontSize: '30px',
  },
});

export const InputBody = styled('textarea')({
  width: '500px',
  height: '300px',
  padding: '10px',
  margin: '10px 20px',
  borderRadius: '5px',
  backgroundColor: 'transparent',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '1.3',
  letterSpacing: '1px',
  '@media screen and (min-width: 393px) ': {
    width: '250px',
    fontSize: '15px',
  },
  '@media screen and (min-width: 1024px) ': {
    width: '500px',
    fontSize: '15px',
  },
  '@media screen and (min-width: 1280px)': {
    width: '600px',
    fontSize: '16px',
  },
});

export const Popup = styled('div')({
  width: '300px',
  height: '150px',

  backgroundColor: 'white',
  borderRadius: '5px',
  top: '35%',
  bottom: '60%',
  margin: '0 auto',
  position: 'absolute',
  right: '0',
  left: '0',
  zIndex: '3',
  fontSize: '25px',
  boxShadow: '0px 0px 5px black',
});

export const Back = styled('div')({
  backgroundColor: 'gray',
  opacity: '0.5',
  width: '100%',
  height: '100vw',
  position: 'absolute',
  zIndex: '2',
});
