# LOM_Server

## 개발 담당

### [이승헌](https://github.com/lsh328328)

```
- 책 정보 조회 API
- 좋아요 기능 API
```

### [이 솔](https://github.com/soleu)

```
- 베스트 10 책 목록 조회 API
- 리뷰 작성 API
```

## 📂 Folder Structure

```markdown
📦functions
┣ 📂api
┃ ┣ 📂routes
┃ ┃ ┣ 📂book
┃ ┃ ┃ ┣ 📜bookBestListGET.js
┃ ┃ ┃ ┣ 📜bookGET.js
┃ ┃ ┃ ┣ 📜index.js
┃ ┃ ┣ 📂review
┃ ┃ ┃ ┣ 📜reviewLikePUT.js
┃ ┃ ┃ ┣ 📜reviewPOST.js
┃ ┃ ┃ ┣ 📜index.js
┣ 📂config
┃ ┣ 📜dbConfig.js
┣ 📂constants
┃ ┣ 📜responseMessage.js
┃ ┣ 📜statusCode.js
┣ 📂db
┃ ┣ 📜db.js
┃ ┣ 📜book.js
┃ ┣ 📜review.js
┃ ┣ 📜index.js
┣ 📂lib
┃ ┣ 📜util.js
┃ ┣ 📜convertSnakeToCamel.js
┣ 📜.eslintrc.js
┣ 📜.prettierrc.js
┣ 📜index.js
```

## 💻 Code Convention

### 💬 Commit Message Rules

```
[feat] : 새로운 기능 추가
[update] : 기존 파일 수정 및 보완
[fix] : 버그 수정
[docs] : 문서 수정
[style] : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
[refactor] : 코드 리팩토링
[test] : 코드, 리펙토링 테스트 코드 추가
[chore] : 빌드 업무 수정, 패키지 매니저 수정
```

**Example**

```
[feat] : 로그인 api 추가
[fix] : 회원가입 버그 수정
```

### 🔅 Branches

- `main` : 메인 브랜치
  - `main`에 직접적인 commit, push는 가급적 금지합니다
  - 작업 전, 반드시 `main` 브랜치를 pull 받고 시작합니다
    ```
    git pull origin main
    ```
- `develop` : develop 브랜치
  - 계획한 모든 기능 구현 & 테스트 통과 시 `main` 브랜치로 Pull Request를 보내서 Merge 합니다
- `feature/기능` : 해당 기능 개발 브랜치
  - 작업 완료 시 `main` 브랜치로 Pull Request를 보냅니다
  - 기능 개발 시 `feature/기능` 브랜치를 파서 관리합니다
    ```
    git branch feature/기능
    ```
- 작은 기능별로 `commit message rules`에 따라 커밋을 진행합니다
- 다 쓴 브랜치는 삭제합니다

## ✨ Base URL

```
https://asia-northeast3-library-of-millie.cloudfunctions.net/api
```

## ERD Diagram

[lom_erd](https://www.notion.so/storypanda/ac547dbb26ee4594af45113e8a71857e#bdd59525a65448febeebdd11e8df3482)

## API 명세서

### 👉 [API 명세서](https://www.notion.so/storypanda/API-f5f02190ea824009b2394a273874b7a1)
