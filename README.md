# 📝 React Blog

## 👀 개요
- 기존 HTML/CSS 파일을 React로 변환한 블로그 만들기 <br>
- 레퍼런스: [weniv 블로그](https://github.com/weniv/react-blog)
<br>


## 💻 실행 방법
```
npm i
npm start
```
<br>

## ⚛️ 주요 기능
1. 재사용성과 유지 보수를 위한 컴포넌트 생성
2. Router, Link를 사용하여 페이지 라우팅 처리
3. state 처리를 통해 로그인 여부에 따라 header 버튼 바꾸기 (로그인 기능 불포함)
  - logout<br />
  ![logout](https://user-images.githubusercontent.com/54294796/173001212-e5bb171e-f9e7-4816-b96b-ef7e8bd39289.jpg)
  - login<br />
  ![login](https://user-images.githubusercontent.com/54294796/173001206-bf815686-0020-4976-bf6a-76277122f7f2.jpg)
4. `data.json`에서 더미 데이터를 가져와 게시글, 블로그 정보, 유저정보 뿌려주기
<br>

## 🔗 프로젝트 구조
- public/ : 실제 서버에 배포되는 폴더로, `img` 태그에 바로 사용될 배경 이미지 assets 폴더와 `index.html` 포함
- src/ : 컴파일링 대상 폴더. components 폴더 하위에 카테고리별 폴더가 있고 그 하위에 `postList.jsx`와 같은 컴포넌트 위치
```bash
│  README.md
│  package.json
│  package-lock.json
│  .gitignore
├── node_modules
├── public
│     ├── assets
│     ├── index.html
│     └── reset.css
└── src
      ├── assets
      ├── db
      │   └── data.json
      ├── App.js
      ├── index.js
      └── components
           ├── about
           ├── banner
           ├── footer
           ├── header
           ├── pages
           └── post
```

<br>


## ⚙ 트러블 슈팅
### 1. 로그인 여부에 따라 헤더의 버튼이 바뀌지 않는 현상 <br>
- 해결: `useState`로 로그인 상태값을 컨트롤하고, 자식 버튼 컴포넌트들에게 클릭시 로그인 여부를 바꿔주는 함수를 props로 전달<br>
- 이슈 해결 로그: [velog 링크](https://velog.io/@mooongs/React-%EC%9D%B4%EC%8A%88-%ED%95%B4%EA%B2%B0-%EB%A1%9C%EA%B7%B8-094vaghm)
<br>
      
### 2. 이미지 경로 이슈 <br>
- 이슈: img태그의 src 속성으로 src 폴더 내부의 이미지를 불러왔을 때 다음과 같은 이슈 발생 <br>
  ```
  Relative imports outside of src/ are not supported. 
  You can either move it inside src/, or add a symlink to it from project's node_modules/.
  ```
- 해결: img로 바로 불러올 이미지들은 컴파일링이 별도로 필요하지 않아 public 폴더내로 이동하고, 데이터 파일 등 import하여 사용할 이미지들은 src 내부로 분리하여 저장 <br>
- 이슈 해결 로그: [velog 링크](https://velog.io/@mooongs/React-%EC%9D%B4%EC%8A%88-%ED%95%B4%EA%B2%B0-%EB%A1%9C%EA%B7%B8)
   
  <br>
  
### 3. 포스트별 상세 페이지의 날짜 포맷팅 기능 <br>
- 이슈: `data.json`의 날짜 형식(2022.04.01)과 웹에서 보여져야 하는 포맷(April 01 Friday)이 달라 별도의 포맷팅 기능 필요  <br>
- 해결: 기존 날짜에 `split` 메서드를 사용한 후 새로운 문자열을 생성하기 위해 Date 내장 객체 사용한 후 필요 조건과 순서에 맞추어 추출
  ```js
    function formatDate(when) {
        const theDay = new Date(`${year}-${month}-${date}`);
        const dateString = theDay.toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            weekday: "long",
        });
        return result;
    }
  ```

<br>

## 🔎 실제 구현 화면
![screencapture-localhost-3000-2022-07-05-14_37_58](https://user-images.githubusercontent.com/80025366/177257014-793aca20-e5de-4c34-8939-11a16ad0d129.png)

