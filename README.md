# π React Blog

## π κ°μ
- κΈ°μ‘΄ HTML/CSS νμΌμ Reactλ‘ λ³νν λΈλ‘κ·Έ λ§λ€κΈ° <br>
- λ νΌλ°μ€: [weniv λΈλ‘κ·Έ](https://github.com/weniv/react-blog)
<br>


## π» μ€ν λ°©λ²
```
npm i
npm start
```
<br>

## βοΈ μ£Όμ κΈ°λ₯
1. μ¬μ¬μ©μ±κ³Ό μ μ§ λ³΄μλ₯Ό μν μ»΄ν¬λνΈ μμ±
2. Router, Linkλ₯Ό μ¬μ©νμ¬ νμ΄μ§ λΌμ°ν μ²λ¦¬
3. state μ²λ¦¬λ₯Ό ν΅ν΄ λ‘κ·ΈμΈ μ¬λΆμ λ°λΌ header λ²νΌ λ°κΎΈκΈ° (λ‘κ·ΈμΈ κΈ°λ₯ λΆν¬ν¨)
  - logout<br />
  ![logout](https://user-images.githubusercontent.com/54294796/173001212-e5bb171e-f9e7-4816-b96b-ef7e8bd39289.jpg)
  - login<br />
  ![login](https://user-images.githubusercontent.com/54294796/173001206-bf815686-0020-4976-bf6a-76277122f7f2.jpg)
4. `data.json`μμ λλ―Έ λ°μ΄ν°λ₯Ό κ°μ Έμ κ²μκΈ, λΈλ‘κ·Έ μ λ³΄, μ μ μ λ³΄ λΏλ €μ£ΌκΈ°
<br>

## π νλ‘μ νΈ κ΅¬μ‘°
- public/ : μ€μ  μλ²μ λ°°ν¬λλ ν΄λλ‘, `img` νκ·Έμ λ°λ‘ μ¬μ©λ  λ°°κ²½ μ΄λ―Έμ§ assets ν΄λμ `index.html` ν¬ν¨
- src/ : μ»΄νμΌλ§ λμ ν΄λ. components ν΄λ νμμ μΉ΄νκ³ λ¦¬λ³ ν΄λκ° μκ³  κ·Έ νμμ `postList.jsx`μ κ°μ μ»΄ν¬λνΈ μμΉ
```bash
β  README.md
β  package.json
β  package-lock.json
β  .gitignore
βββ node_modules
βββ public
β     βββ assets
β     βββ index.html
β     βββ reset.css
βββ src
      βββ assets
      βββ db
      β   βββ data.json
      βββ App.js
      βββ index.js
      βββ components
           βββ about
           βββ banner
           βββ footer
           βββ header
           βββ pages
           βββ post
```

<br>


## β νΈλ¬λΈ μν
### 1. λ‘κ·ΈμΈ μ¬λΆμ λ°λΌ ν€λμ λ²νΌμ΄ λ°λμ§ μλ νμ <br>
- ν΄κ²°: `useState`λ‘ λ‘κ·ΈμΈ μνκ°μ μ»¨νΈλ‘€νκ³ , μμ λ²νΌ μ»΄ν¬λνΈλ€μκ² ν΄λ¦­μ λ‘κ·ΈμΈ μ¬λΆλ₯Ό λ°κΏμ£Όλ ν¨μλ₯Ό propsλ‘ μ λ¬<br>
- μ΄μ ν΄κ²° λ‘κ·Έ: [velog λ§ν¬](https://velog.io/@mooongs/React-%EC%9D%B4%EC%8A%88-%ED%95%B4%EA%B2%B0-%EB%A1%9C%EA%B7%B8-094vaghm)
<br>
      
### 2. μ΄λ―Έμ§ κ²½λ‘ μ΄μ <br>
- μ΄μ: imgνκ·Έμ src μμ±μΌλ‘ src ν΄λ λ΄λΆμ μ΄λ―Έμ§λ₯Ό λΆλ¬μμ λ λ€μκ³Ό κ°μ μ΄μ λ°μ <br>
  ```
  Relative imports outside of src/ are not supported. 
  You can either move it inside src/, or add a symlink to it from project's node_modules/.
  ```
- ν΄κ²°: imgλ‘ λ°λ‘ λΆλ¬μ¬ μ΄λ―Έμ§λ€μ μ»΄νμΌλ§μ΄ λ³λλ‘ νμνμ§ μμ public ν΄λλ΄λ‘ μ΄λνκ³ , λ°μ΄ν° νμΌ λ± importνμ¬ μ¬μ©ν  μ΄λ―Έμ§λ€μ src λ΄λΆλ‘ λΆλ¦¬νμ¬ μ μ₯ <br>
- μ΄μ ν΄κ²° λ‘κ·Έ: [velog λ§ν¬](https://velog.io/@mooongs/React-%EC%9D%B4%EC%8A%88-%ED%95%B4%EA%B2%B0-%EB%A1%9C%EA%B7%B8)
   
  <br>
  
### 3. ν¬μ€νΈλ³ μμΈ νμ΄μ§μ λ μ§ ν¬λ§·ν κΈ°λ₯ <br>
- μ΄μ: `data.json`μ λ μ§ νμ(2022.04.01)κ³Ό μΉμμ λ³΄μ¬μ ΈμΌ νλ ν¬λ§·(April 01 Friday)μ΄ λ¬λΌ λ³λμ ν¬λ§·ν κΈ°λ₯ νμ  <br>
- ν΄κ²°: κΈ°μ‘΄ λ μ§μ `split` λ©μλλ₯Ό μ¬μ©ν ν μλ‘μ΄ λ¬Έμμ΄μ μμ±νκΈ° μν΄ Date λ΄μ₯ κ°μ²΄ μ¬μ©ν ν νμ μ‘°κ±΄κ³Ό μμμ λ§μΆμ΄ μΆμΆ
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

## π μ€μ  κ΅¬ν νλ©΄
![screencapture-localhost-3000-2022-07-05-14_37_58](https://user-images.githubusercontent.com/80025366/177257014-793aca20-e5de-4c34-8939-11a16ad0d129.png)

