## 專案說明
#### 串接 github API 管理被 assign 的 task(也就是github上的issues視為task)，列出所有 task 資訊，可進一步點進內頁瀏覽詳細資料；另有搜尋欄位快速查找 task，也可以新建 task（ 預設assign給自己 ）。希望 issues management 方便大家查詢在 github 上被分派到要處理的所有 issues ! 
---
#### IM V2 版本 更新如下：
#### 1.IM V2 版本使用 material ui 撰寫，將 RWD 撰寫於 styled-components 中，方便管理。
#### 2.登入頁面，使用 useContext 和 useReducer 做登入狀態管理；新增 IM logo 及 github 連結。
![image](https://github.com/hanhan0914/issues-management-v2/assets/91658568/032ce217-8db8-4f9a-8daf-9ddd044b6589)


#### 2.進入登入 github 取得權限頁面 > loading畫面
<img width="494" alt="image" src="https://images.cakeresume.com/Bnpa7/amy8611020923-7f0e18/d55f62fc-8137-4142-aa5f-ebecf6c678a4.png">

#### 3.主列表頁
##### 紅線框：搜尋欄位 及 task list
##### 藍線框：依task標籤篩選filter、依時間排序鍵、新增issues按鈕
##### 背景圖片來源：https://www.freepik.com/free-vector/watercolor-background_7655630.htm#query=colorful&position=27&from_view=search&track=sph
<img width="1351" alt="image" src="https://github.com/hanhan0914/issues-management/assets/91658568/4772b663-f795-42bd-af1c-243237ee10ea">

#### 4.詳細資訊頁面
##### 可瀏覽task資訊、修改內容、刪除task
##### 另有連結鍵可直接連結到該 github repo 頁面查看更完整資訊。
##### 背景圖片來源：https://www.freepik.com/free-photo/colorful-block-print-frame-beige-background_15607062.htm#page=4&query=colorful&position=29&from_view=search&track=sph

<img width="1435" alt="image" src="https://github.com/hanhan0914/issues-management/assets/91658568/3734a31b-5a24-41f2-94d0-f7a41cc3201e">

---

#### 使用 api:
(1) GET https://github.com/login/oauth/authorize

(2) POST https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token

(3) GET https://api.github.com/issues

(4) issues 相關 api：
https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28

(5)圖片引用出處：
https://www.freepik.com/free-vector/creative-elements-storyboard-concept_10359594.htm#query=painted%20task&position=16&from_view=search&track=ais

## 如何啟動專案

新增一個 .env file，內容可參考 .env.example，詳細 secret 再麻煩聯絡作者拿取


```
REACT_APP_GITHUB_CLIENT_ID=
REACT_APP_GITHUB_CLIENT_SECRET=
```

安裝依賴

```
$ npm install // 使用 node 14 版本
```

啟動 react

```
$ npm run start
```
