import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { User } from './layout_style';
import Cookies from 'universal-cookie';
import { Nav, Dropdown, Ul, Li, LogoutButton } from './layout_style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import Avatar from '@mui/material/Avatar';

function Layout() {
  // eslint-disable-next-line no-undef
  const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const REDIRECT_URI = 'http://localhost:3000/loading';

  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const cookie = new Cookies();
  const handleMenuOne = () => {
    // do something
    setOpen(false);
    cookie.remove('authToken', { path: '/' });
    console.log('cookie222', cookie.get('authToken'));
    dispatch({ type: 'logout' });
    navigate('/');
  };

  console.log('userName', state.userName);
  console.log('login', state.isLoggedIn);
  return (
    <>
      <Nav>
        <Dropdown>
          {state.isLoggedIn ? (
            <>
              <User variant='outlined' onClick={handleOpen}>
                Hi,{state.userName}
              </User>

              <a href='https://github.com/'>
                {' '}
                <Avatar
                  sx={{ width: 35, height: 35, marginLeft: '10px' }}
                  alt='github '
                  src='github-mark.png'
                />
              </a>
            </>
          ) : (
            <div style={{ display: 'flex' }}>
              <a
                href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo&redirect_uri=${REDIRECT_URI}&prompt=consent`}
              >
                <User variant='outlined' onClick={handleOpen}>
                  Log in
                </User>
              </a>
              <a href='https://github.com/'>
                {' '}
                <Avatar
                  sx={{ width: 35, height: 35, marginLeft: '10px' }}
                  alt='github '
                  src='github-mark.png'
                />
              </a>
            </div>
          )}

          {open && state.isLoggedIn ? (
            <Ul>
              <Li>
                <LogoutButton onClick={handleMenuOne}>
                  Log Out &nbsp;
                  <FontAwesomeIcon icon={faRightToBracket} />
                </LogoutButton>
              </Li>
            </Ul>
          ) : null}
          {open ? <div></div> : <div></div>}
        </Dropdown>
      </Nav>
      <div className='my-page-body'>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;

// const Layout = React.memo(({ children }) => {
//   return (
//     <>
//       <Navbar />
//     </>
//   );
// });

// export default Layout;
