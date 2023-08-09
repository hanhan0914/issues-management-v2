## 專案說明
#### 串接 github API 管理被 assign 的 task(也就是github上的issues視為task)，列出所有 task 資訊，可進一步點進內頁瀏覽詳細資料；另有搜尋欄位快速查找 task，也可以新建 task（ 預設assign給自己 ）。希望 issues management 方便大家查詢在 github 上被分派到要處理的所有 issues ! 
---
#### IM V2 版本 更新如下：
#### 1.IM V2 版本使用 material ui 撰寫，將 RWD 撰寫於 styled-components 中，方便管理。
#### 2.登入頁面，使用 useContext 和 useReducer 做登入狀態管理；新增 IM logo(可回主列表頁面)及 github 連結。
![image](https://github.com/hanhan0914/issues-management-v2/assets/91658568/032ce217-8db8-4f9a-8daf-9ddd044b6589)
---

#### 3.進入登入 github 取得權限頁面 > loading畫面
<img width="494" alt="image" src="https://images.cakeresume.com/Bnpa7/amy8611020923-7f0e18/d55f62fc-8137-4142-aa5f-ebecf6c678a4.png">
---

#### 4.主列表頁
##### 紅線框：搜尋欄位
##### 藍線框：依task標籤篩選filter、依時間排序鍵、新增issues按鈕
##### 綠線框：登入後會顯示使用者名稱，可在此處選擇登出。
![image](https://github.com/hanhan0914/issues-management-v2/assets/91658568/3e5b46b3-d734-4be9-b8b5-f7248c4ecf56)

##### 綠線框中使用者名稱點選後，可選擇是否登出。
<img width="292" alt="image" src="https://github.com/hanhan0914/issues-management-v2/assets/91658568/bf60ba51-e24a-470a-a1b1-6afe69fe4340">

---

#### 5.詳細資訊頁面
##### 可瀏覽task資訊、修改內容、刪除task、連結鍵可直接連結到該 github repo 頁面查看更完整資訊。

![image](https://github.com/hanhan0914/issues-management-v2/assets/91658568/94bca531-d2e2-4519-89f5-bdf4dcb90489)

#### 修改按鍵如圖顯示，直接在頁面上作修改（預設值會帶入原始資料）。
![image](https://github.com/hanhan0914/issues-management-v2/assets/91658568/06c991df-8481-46d8-830d-32fda796472c)

#### 刪除按鍵如圖顯示，頁面反灰並出現確認框，確認是否刪除。
![image](https://github.com/hanhan0914/issues-management-v2/assets/91658568/b33cdd77-98a7-4aaf-a396-053731226b40)


---

#### 使用 api:
(1) GET https://github.com/login/oauth/authorize

(2) POST https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token

(3) GET https://api.github.com/issues

(4) issues 相關 api：
https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28


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
