import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
// 引入Ｃookies 變數已存在cookies裡面了～
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'semantic-ui-react';
//form表單驗證
import 'wired-elements';
import moment from 'moment';
import 'moment-timezone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDownWideShort,
  faArrowUpWideShort,
  faCaretLeft,
} from '@fortawesome/free-solid-svg-icons';

import {
  Background,
  DirectionButton,
  FormBackground,
  HintWord,
  // CreateButtontest,
  ListBackground,
  ListCard,
  ListWord,
  ListBody,
  Label,
  SearchHint,
  Navbar,
  SearchTest,
  CreateButton,
} from './list_style';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// // import Divider from '@mui/material/Divider';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const labelColorMap = {
  open: {
    backgroundColor: '	#00BB00',
    color: 'white',

    width: '65px',
    borderRadius: '30px',
    border: 'none',
    height: '30px',
    lineHeight: '12px',
    fontWeight: '700',
  },
  'in progress': {
    backgroundColor: '	#EAC100',
    color: 'white',
    border: 'none',
    width: '150px',
    borderRadius: '30px',
    marginLeft: '367px',
    height: '30px',
    lineHeight: '12px',
    fontWeight: '700',
  },
  done: {
    backgroundColor: '#0080FF',
    color: 'white',
    border: 'none',
    width: '70px',
    borderRadius: '30px',
    marginLeft: '462px',
    height: '30px',
    lineHeight: '12px',
    fontWeight: '700',
  },
  bug: {
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '30px',
    width: '65px',
    border: 'none',
    marginLeft: '467px',
    height: '30px',
    lineHeight: '12px',
    fontWeight: '700',
  },
};

function List() {
  const cookies = new Cookies();
  //api:Authorization: `Bearer ${cookies.get('authToken')}`需要token
  // token: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
  const { dispatch } = useContext(UserContext);
  const [page, setPage] = useState(1);
  const [direction, setDirection] = useState('desc');
  const [filterLabel, setFilterLabel] = useState(''); // '' | 'done' | 'in progress'
  const [issues, setIssues] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [addTask, setAddTask] = useState(false);
  const [labelsName, setLabelsName] = useState([]);
  const [keyword, setKeyword] = useState();
  const [showSearchData, setShowSearchData] = useState(false);
  const observer = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // 3 callback reference:each render create new
  // lastElementRef(null)
  // lastElementRef(DOMElement)
  const lastElementRef = useCallback(
    (node) => {
      //no duplicated data : when taking data return nothing(don't do anything)
      // if (issues.length < page * 8) return; // if (hasMore = false) return;
      if (loading) return;

      //don't take data:stop to observe 避免觸發observer callback function
      if (observer.current) {
        observer.current.disconnect();
      }
      //create new IntersectionObserver 避免取到舊值
      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      //element!==null 將element納入observer的觀察對象。

      if (node) {
        observer.current.observe(node);
      }
    },
    [loading],
  );

  // 1 list data:api(List issues assigned to the authenticated user)
  const getList = async () => {
    try {
      const { data: issuesData } = await axios({
        method: 'get',
        url: `https://api.github.com/issues?page=${page}&per_page=8&labels=${filterLabel}&direction=${direction}`,
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${cookies.get('authToken')}`,
          'If-None-Match': '',
        },
      });

      const res = issuesData;
      console.log('res', issuesData);
      console.log('myusername', issuesData[0].assignee.login);
      dispatch({ type: 'success', payload: issuesData[0].assignee.login });
      console.log('token', cookies.get('authToken'));
      setLoading(false); //新
      setIssues((issues) => [...issues, ...res]);
      // add new data to issues(array) and map it ,render to ui
    } catch (error) {
      console.log(error);
      setError(true); //新
    }
  };

  //以下新

  // const getList = async () => {
  //   try {
  //     const { data: issuesData } = await axios({
  //       method: 'get',
  //       url: `https://api.github.com/issues?page=${page}&per_page=8&labels=${filterLabel}&direction=${direction}`,
  //       headers: {
  //         accept: 'application/json',
  //         Authorization: `Bearer ${cookies.get('authToken')}`,
  //         'If-None-Match': '',
  //       },
  //     });

  //     const res = issuesData;
  //     console.log('res', issuesData);
  //     // setHasMore(issuesData.length > 0)
  //     setIssues((issues) => [...issues, ...res]);
  //     // add new data to issues(array) and map it ,render to ui
  //     setHasMore(res.data.docs.length > 0); //新
  //     setLoading(false); //新
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // 1 first render: getList() default page=1,[change] re-render
  useEffect(() => {
    setLoading(true); //新
    setError(false); //新
    console.log('page', page);
    getList();
  }, [page, filterLabel, direction]);

  //hooks can  only call from React functions.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    function createData() {
      axios
        .post(
          `https://api.github.com/repos/${issues[0].user.login}/${data.repoName}/issues`,
          {
            repo: `${data.repoName}`,
            title: `${data.titleName}`,
            labels: [data.label], //labels is array
            body: `${data.body}`,
            assignee: `${issues[0].user.login}`,
            //create : assign to myself
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
          getList();
          //call API add new task and call getList() re-render
        });
    }
    createData();
  };

  //2 search and get data api(Search issues and pull requests)
  function getSearchData() {
    axios
      .get(
        `https://api.github.com/search/issues?q=${keyword}  user:hanhan0914 in:title in:body  `,
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${cookies.get('authToken')}`,
          },
        },
      )

      .then((res) => {
        // console.log('items', res.data.items); map it（array)
        setSearchData(res.data.items);
        console.log('res', res);
      });
  }

  //依建立時間排序
  function sortByDateAsc() {
    if (direction === 'asc') {
      setDirection('desc');
    } else {
      setDirection('asc');
    }
    setPage(1);
    setIssues([]);
  }

  return (
    <>
      <Background>
        <Navbar>
          <SearchTest
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            placeholder=' Search...'
            style={{ fontSize: '20px', fontWeight: '500' }}
          ></SearchTest>
          <SearchIcon
            style={{ color: '#1976d2', cursor: 'pointer', margin: 'auto 0' }}
            onClick={() => {
              getSearchData();
              setShowSearchData(true);
            }}
          />

          <FormControl
            variant='standard'
            sx={{ m: 1, minWidth: 70 }}
            style={{ color: '#1976d2', margin: 'aurto 0', marginLeft: '200px' }}
          >
            <InputLabel id='demo-simple-select-autowidth-label'>Label</InputLabel>
            <Select
              labelId='demo-simple-select-autowidth-label'
              id='demo-simple-select-autowidth'
              onChange={(e) => {
                setIssues([]);
                setPage(1);
                setFilterLabel(`${e.target.value}`);
              }}
              autoWidth
              label='label'
            >
              <MenuItem value=''> All</MenuItem>
              <MenuItem value='open'>Open</MenuItem>
              <MenuItem value='in progress'>In Progress</MenuItem>
              <MenuItem value='done'>Done</MenuItem>
              <MenuItem value='bug'>Bug</MenuItem>
            </Select>
          </FormControl>

          {/* <span
            style={{
              fontSize: '20px',
              fontFamily: 'Comic Sans MS',
              width: '10px',
              marginLeft: '155px',
            }}
          >
            Label
          </span>
          <Filter
            onChange={(e) => {
              setIssues([]);
              setPage(1);
              setFilterLabel(`${e.target.value}`);
            }}
           
          >
            <option value=''>All</option>
            <option value='open'> open </option>
            <option value='in progress'> in progress</option>
            <option value='done'> done</option>
          </Filter> */}

          <DirectionButton onClick={sortByDateAsc}>
            {direction === 'asc' ? (
              <FontAwesomeIcon
                icon={faArrowDownWideShort}
                style={{ fontSize: '20px', color: '#1976d2' }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faArrowUpWideShort}
                style={{ fontSize: '20px', color: '#1976d2' }}
              />
            )}
          </DirectionButton>

          <CreateButton
            onClick={() => setAddTask(true)}
            sx={{ height: 40 }}
            style={{ margin: 'auto 0' }}
          >
            ADD TASK
          </CreateButton>
        </Navbar>

        {/* form create new task */}
        <FormBackground style={{ display: addTask ? 'block' : 'none' }}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Field>
              <label>Repo Name</label>
              <input
                placeholder='Repo Name'
                type='text'
                style={{ fontFamily: 'Comic Sans MS' }}
                // onChange={(e) => {
                //   setRepo(e.target.value);
                // }}  use register to get vaule,and may console data,just take data to call api (create new task)
                {...register('repoName', { required: true })}
              ></input>
            </Form.Field>
            {errors.repoName && <HintWord>Please input the RepoName</HintWord>}
            <Form.Field>
              <label>Title</label>
              <input
                placeholder='Title'
                type='text'
                {...register('titleName', { required: true })}
              ></input>
            </Form.Field>
            {errors.titleName && <HintWord>Please input the TitleName</HintWord>}
            <Form.Field>
              <label>Labels</label>

              <select
                onChange={(e) => {
                  setLabelsName([...labelsName, e.target.value]);
                }}
                {...register('label', {})}
                style={{ fontFamily: 'Comic Sans MS' }}
              >
                <option value='open'> open </option>
                <option value='in progress'> in progress</option>
                <option value='done'> done</option>
              </select>
            </Form.Field>
            <Form.Field>
              <label>Descriptions</label>
              <textarea
                style={{ height: '150px' }}
                placeholder='Descriptions'
                type='text'
                {...register('body', { required: true, minLength: 30 }, {})}
              ></textarea>
            </Form.Field>
            {errors.body && (
              <HintWord>
                Please input the Descriptions
                {/* </p> */}
              </HintWord>
            )}
            <Button type='submit'>Submit</Button>
            <Button onClick={() => setAddTask(false)}> cancel</Button>
          </Form>
        </FormBackground>

        {/*主列表區塊  */}
        <ListBackground style={{ display: showSearchData ? 'none' : 'block' }}>
          {issues.map((issue, index) => (
            <ListCard
              // 綁定infinite scroll
              ref={index === issues.length - 1 ? lastElementRef : undefined}
              key={issue.id}
            >
              <Link
                to={`/detail/${issue.repository.full_name}/${issue.number}`}
                style={{ textDecoration: 'none' }}
              >
                <ListWord>
                  {' '}
                  REPOSITORY : {issue.repository.full_name}
                  <Label>
                    {issue.labels.map((label) => (
                      <button key={label.name} style={labelColorMap[label.name]}>
                        {label.name}
                      </button>
                    ))}
                  </Label>{' '}
                </ListWord>

                <ListWord> ISSUES : {issue.title}</ListWord>
                <ListBody>{issue.body}</ListBody>
                <p
                  style={{
                    color: '#8E8E8E',
                    position: 'absolute',
                    bottom: '5px',

                    fontSize: '18px',
                  }}
                >
                  {' '}
                  Updated at{' '}
                  {moment
                    // .utc(issue.created_at)
                    .utc(issue.updated_at)
                    .tz(moment.tz.guess())
                    .format('YYYY-MM-DD HH:mm:ss')}{' '}
                </p>
              </Link>
            </ListCard>
          ))}
        </ListBackground>

        {/* 搜尋結果 */}

        <SearchHint
          onClick={() => setShowSearchData(false)}
          style={{
            display: showSearchData ? 'block' : 'none',
            cursor: 'pointer',
          }}
        >
          {' '}
          <FontAwesomeIcon icon={faCaretLeft} beat style={{ fontSize: '20px' }} />
          返回列表頁
        </SearchHint>

        {/* <ListBackground style={{ width: '100%', height: '100vh', position: 'fixed' }}> */}
        <ListBackground style={{ display: showSearchData ? 'block' : 'none' }}>
          {searchData.map((item) => (
            <ListCard key={item.number}>
              <Link
                to={`/detail/${item.repository_url.split('https://api.github.com/repos/')[1]}/${
                  item.number
                }`}
              >
                <Label>
                  {item.labels.map((label) => (
                    <button key={label.name} style={labelColorMap[label.name]}>
                      {label.name}
                    </button>
                  ))}
                </Label>
                <ListWord>
                  REPONAME : {item.repository_url.split('https://api.github.com/repos/')[1]}
                </ListWord>
                <ListWord> ISSUES : {item.title}</ListWord>
                <ListBody>{item.body}</ListBody>
                <p
                  style={{
                    color: '#8E8E8E',
                    position: 'absolute',
                    bottom: '0px',
                    fontSize: '18px',
                  }}
                >
                  Updated at{' '}
                  {moment.utc(item.updated_at).tz(moment.tz.guess()).format('YYYY-MM-DD HH:mm:ss')}{' '}
                </p>
              </Link>
            </ListCard>
          ))}
        </ListBackground>
        <div style={{ fontFamily: 'Comic Sans MS' }}>{loading && 'Loading...'}</div>
        <div>{error && 'Error'}</div>
      </Background>
    </>
  );
}

export default List;
