import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

import 'wired-elements';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import moment from 'moment';
import 'moment-timezone';

import {
  Background,
  Edit,
  // Editbutton,
  Title,
  Label,
  Bodyword,
  InputTitle,
  InputBody,
  Popup,
} from './detail_style';
const labelColorMap = {
  open: {
    backgroundColor: '	#00BB00',
    color: 'white',
    borderRadius: '30px',
    border: 'none',
    width: '55px',
    height: '30px',
    lineHeight: '12px',
    fontWeight: '700',
    fontSize: '20px',
  },
  'in progress': {
    backgroundColor: '#EAC100',
    color: 'white',
    borderRadius: '30px',
    border: 'none',
    width: '150px',
    lineHeight: '12px',
    fontWeight: '700',
    height: '30px',
    fontSize: '20px',
  },
  done: {
    backgroundColor: '#0080FF',
    color: 'white',
    borderRadius: '30px',
    border: 'none',
    width: '70px',
    height: '30px',
    lineHeight: '12px',
    fontWeight: '700',
    fontSize: '20px',
  },
  bug: {
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '30px',
    border: 'none',
    width: '65px',
    height: '30px',
    lineHeight: '12px',
    fontWeight: '700',
    fontSize: '20px',
  },
};

function Detail() {
  const issueurl = useParams();
  // 拿取網址
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [showPopUp, setshowPopUp] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [labelsName, setLabelsName] = useState([]);
  const [html, setHtml] = useState('');
  // const [create, setCreate] = useState('');
  const [update, setUpdate] = useState('');

  // const [state, setState] = useState('');

  useEffect(() => {
    const getIssueData = async () => {
      try {
        // const {issueData} = data  ; const issueData = data.issueData
        // res是api抓取的資料，用axios打 會將res資料用data{}包住 --> data內的東西就是call api想拿的一些資料 其他是axios附加的東西
        const { data } = await axios({
          method: 'get',
          url: `https://api.github.com/repos/${issueurl.full_name}/${issueurl.repo}/issues/${issueurl.number}`,
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${cookies.get('authToken')}`,
          },
        });

        setTitle(data.title);
        setLabelsName(data.labels);
        setBody(data.body);
        setHtml(data.html_url);
        // setCreate(data.created_at);
        setUpdate(data.updated_at);

        // setState(data.state);
        console.log('test', data);
      } catch (error) {
        console.log(error);
      }
    };

    getIssueData();
  }, []);

  function updateData() {
    axios
      .patch(
        `https://api.github.com/repos/${issueurl.full_name}/${issueurl.repo}/issues/${issueurl.number}`,
        {
          title: `${title}`,
          labels: labelsName,
          body: `${body}`,
        },
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${cookies.get('authToken')}`,
          },
        },
      )

      .then((res) => {
        console.log(res.data);
      });
  }

  function deleteIssue() {
    axios
      .patch(
        `https://api.github.com/repos/${issueurl.full_name}/${issueurl.repo}/issues/${issueurl.number}`,
        {
          state: 'closed',
        },
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${cookies.get('authToken')}`,
          },
        },
      )
      .then(() => {
        console.log('成功刪除');
        navigate('/list');
      });
  }

  return (
    <>
      <Background>
        {/* <Body> */}
        <Card variant='outlined' style={{ width: '800px', height: '580px', marginTop: '35px' }}>
          <CardContent style={{ position: 'relative' }}>
            <Edit style={{ color: '#1976d2', cursor: 'pointer' }}>
              <EditNoteRoundedIcon
                onClick={() => setShowInput(true)}
                fontSize='large'
              ></EditNoteRoundedIcon>
              &nbsp;
              <DeleteOutlinedIcon
                onClick={() => setshowPopUp(true)}
                style={{ margin: '0 3px' }}
                fontSize='large'
              >
                Delete
              </DeleteOutlinedIcon>
              <a href={html}>
                <LaunchOutlinedIcon style={{ margin: '0 3px' }} fontSize='large' />
              </a>
            </Edit>

            {/* title label body */}
            <div style={{ display: showInput ? 'none' : 'block' }}>
              <Label>
                {' '}
                {labelsName.map((label) => (
                  <button key={label.name} style={labelColorMap[label.name]}>
                    {label.name}
                  </button>
                ))}
              </Label>

              <Title> {title}</Title>
              <div style={{ padding: '0px 10px', color: 'gray', width: '600px' }}>
                Previous Updated at{' '}
                {moment.utc(update).tz(moment.tz.guess()).format('YYYY-MM-DD HH:mm')}
              </div>

              {/* label修改其值並不會馬上更新！！！ */}

              <Bodyword>
                {' '}
                <p style={{ fontWeight: '800', marginBottom: '3px' }}>About this issues</p>
                {body}
              </Bodyword>
            </div>

            <div style={{ display: showInput ? 'block' : 'none' }}>
              <div>
                {' '}
                <InputTitle
                  type='text'
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                ></InputTitle>{' '}
              </div>{' '}
              {/* <Select
                type='text'
                value={labelsName}
                onChange={(e) => {
                  setLabelsName([e.target.value]);
                }}
              >
                <option>labels</option>
                <option value='open'> open </option>
                <option value='in progress'> in progress</option>
                <option value='done'> done</option>
              </Select> */}
              <FormControl
                // variant='standard'
                sx={{ m: 1, minWidth: 75 }}
                style={{ color: '#1976d2', margin: '10px 20px' }}
              >
                <InputLabel id='demo-simple-select-autowidth-label'>Label</InputLabel>
                <Select
                  labelId='demo-simple-select-autowidth-label'
                  id='demo-simple-select-autowidth'
                  onChange={(e) => {
                    setLabelsName([e.target.value]);
                  }}
                  autoWidth
                  label='label'
                >
                  <MenuItem value=''> </MenuItem>
                  <MenuItem value='open'>Open</MenuItem>
                  <MenuItem value='in progress'>In Progress</MenuItem>
                  <MenuItem value='done'>Done</MenuItem>
                  <MenuItem value='bug'>Bug</MenuItem>
                </Select>
              </FormControl>{' '}
              <div>
                {' '}
                <InputBody
                  type='text'
                  value={body}
                  onChange={(e) => {
                    setBody(e.target.value);
                  }}
                ></InputBody>{' '}
              </div>
              <div style={{ margin: '15px' }}>
                <Button
                  variant='text'
                  onClick={() => {
                    setShowInput(false);
                    updateData();
                  }}
                  style={{ width: '100px', fontSize: '15px', fontWeight: '500', margin: '3px 5px' }}
                >
                  Update
                </Button>

                {/* input輸入資料後 onchange同步顯示輸入資料 button點選後把input關掉 拿取修改值並顯示於畫面。如何打api？直接在onclick打api */}
                <Button
                  onClick={() => setShowInput(false)}
                  style={{ width: '100px', fontSize: '15px', fontWeight: '500', margin: '3px 5px' }}
                >
                  Cancel
                </Button>
              </div>
            </div>

            <Popup
              style={{
                display: showPopUp ? 'block' : 'none',
                width: '300px',
                height: '150px',
                backgroundColor: 'white',
                top: '40%',
                bottom: '60%',
                margin: '0 auto',
                position: 'absolute',
                right: '0',
                left: '0',
              }}
            >
              <p
                style={{
                  fontSize: '20px',
                  margin: '15px',
                  textAlign: 'center',
                  fontFamily: 'Comic Sans MS',
                }}
              >
                Delete this data?
              </p>
              <div style={{ margin: '0 auto', textAlign: 'center' }}>
                <wired-button
                  onClick={() => {
                    deleteIssue();
                  }}
                  style={{
                    backgroundColor: 'white',
                  }}
                >
                  Yes
                </wired-button>
                <wired-button
                  onClick={() => setshowPopUp(false)}
                  style={{ backgroundColor: 'white', marginLeft: '20px' }}
                >
                  No
                </wired-button>
              </div>
            </Popup>
          </CardContent>
        </Card>
      </Background>
    </>
  );
}

export default Detail;
