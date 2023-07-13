import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { LoginButton, Title } from './login_style';
// import Button from '@mui/material/Button';

function Login() {
  // eslint-disable-next-line no-undef
  const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const REDIRECT_URI = 'http://localhost:3000/loading';

  return (
    <>
      <div style={{ width: '100%', height: '100%' }}>
        <Title>Issues Management</Title>
        <p
          style={{
            color: '#1976d2',
            padding: '0px 105px',
            marginTop: '-40px',
            fontSize: '20px',
            letterSpacing: '3px',
          }}
        >
          just Managing your github issues.
        </p>
        {/* <LoginButton>
          <a
            style={{ textDecoration: 'none', fontFamily: 'Impact', letterSpacing: '2px' }}
            href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo&redirect_uri=${REDIRECT_URI}&prompt=consent`}
          >
            Get Start &nbsp;
            <FontAwesomeIcon icon={faRightToBracket} />
          </a>
        </LoginButton> */}
        <LoginButton variant='contained' endIcon={<FontAwesomeIcon icon={faRightToBracket} />}>
          <a
            style={{ textDecoration: 'none', fontFamily: 'Impact', letterSpacing: '2px' }}
            href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo&redirect_uri=${REDIRECT_URI}&prompt=consent`}
          >
            Get Start
          </a>
        </LoginButton>
      </div>
    </>
  );
}

export default Login;

// You can list your application in the GitHub Marketplace so that other users can discover it.
//點選login後 跳轉到github授權後 會先跳到loading頁拿token存在cookie中 跳轉到REDIRECT_URI(即list頁面)
// 用戶登入github後如何(從輸入的email跟password中)拿到client id and client uri
// --> 創建給管理者的平台(為調用user在github的資料）由用戶登入github授權給該平台
// eslint-disable-next-line no-undef
