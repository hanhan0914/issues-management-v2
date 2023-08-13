import { styled } from '@mui/system';
import Button from '@mui/material/Button';

export const Nav = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '12px 50px',
  border: 'solid 1px rgb(231, 235, 240)',
});

export const User = styled(Button)``;

export const Dropdown = styled('div')({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  marginRight: '30px',
});

export const Ul = styled('ul')({
  position: ' absolute',
  bottom: '-80px',
  left: ' 45px',
  margin: '10px 0',
  padding: ' 0',
  backgroundColor: 'white',
  borderRadius: ' 5px',
  width: ' 150px',
  height: ' 60px',
  boxShadow: '0px 0px 5px black',
});

export const Li = styled('li')({
  margin: '10px',
  backgroundColor: 'white',
  listStyle: 'none',
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
