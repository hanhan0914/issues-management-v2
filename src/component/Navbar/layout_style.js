import { styled } from '@mui/system';
import Button from '@mui/material/Button';

export const Nav = styled('div')({
  margin: 'auto',
  width: '100%',
  height: '45px',
  background: 'white',
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
});

export const User = styled(Button)`
  margin-right: 10px;
  margin-left: 20%;
  width: 150px;
  height: 23px;
  color: purple;
  font-family: Impact;
`;

export const Dropdown = styled('div')({
  position: 'relative',
  margin: '5px',
  marginLeft: '80%',
  display: 'flex',
  alignItems: 'center',
});

export const Ul = styled('ul')({
  position: ' absolute',
  bottom: '-90px',
  left: ' 75px',
  margin: '10px 0',
  padding: ' 0',
  backgroundColor: '#e6f1ed',
  borderRadius: ' 5px',
  width: ' 150px',
  height: ' 80px',
});

export const Li = styled('li')({
  margin: '10px',
  backgroundColor: 'white',
  listStyle: 'none',
  fontFamily: 'Comic Sans MS',
});

export const LogoutButton = styled('button')({
  width: '100%',
  height: '100%',
  textAlign: 'center',

  background: 'none',
  color: 'inherit',
  border: 'none',
  padding: '5px',
  margin: '0',
  font: 'inherit',
  cursor: 'pointer',
});
