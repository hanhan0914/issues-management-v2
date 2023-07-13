import React, { useEffect } from 'react';
import Cookie from 'universal-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';
import LoadingButton from '@mui/lab/LoadingButton';
export const cookies = new Cookie();

function Callback() {
  // eslint-disable-next-line no-undef
  const client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
  // eslint-disable-next-line no-undef
  const client_secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const code =
      window.location.href.match(/\?code=(.*)/) && window.location.href.match(/\?code=(.*)/)[1];

    const tokenResponse = async () => {
      const res = await axios({
        method: 'post',
        url: state.isLoggedIn
          ? `https://reverse-node.onrender.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`
          : `https://reverse-node.onrender.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}&prompt=consent`,
        headers: {
          accept: 'application/json',
        },
      });

      cookies.set('authToken', `${res.data['access_token']}`, { path: '/' });
      dispatch({ type: 'success' });
      navigate('/list');
    };

    tokenResponse();
  }, []);

  console.log('狀態', state.isLoggedIn);

  return (
    <>
      <div
        style={{
          backgroundColor: 'grey',
          opacity: '.4',
          width: '100%',
          height: '100vh',
          textAlign: 'center',
        }}
      >
        <LoadingButton loading variant='text' style={{ fontSize: '300px' }}>
          Submit
        </LoadingButton>
      </div>
    </>
  );
}

export default Callback;
