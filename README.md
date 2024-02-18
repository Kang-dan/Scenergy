> 음악과 사람을 잇는 모든 연결의 시작, 시너지
---
### 프로젝트 진행기간
2024.01.08 ~ 2024.02.16

--- 
### 기획 배경

친구, 커뮤니티 게시글로부터 뮤지션들이 팀 활동을 하기 위해 협업파트너를 구하기 어렵다는 이야기를 전해 들었습니다. 저희는 정확히 어떠한 어려움이 있는지 알기 위해 뮤지션들을 대상으로 설문조사를 진행 하였으며, 파트너를 찾는 과정에서 어려움을 겪는 답변으로 ‘협업 파트너를 찾기 어렵다(43.9%)’, ‘실력 검증이 어렵다(43.9%)’의 비율(복수 응답 가능)이 높았습니다. 또한 원하는 기능으로 ‘음악 창작물을 공유(48.8%)’, ‘나의 활동 이력을 관리(53.7%)’의 답변 비율(복수 응답 가능)이 높았습니다.

위와 같은 뮤지션들의 어려움을 해결하기 위해 저희는 자신의 연주 영상을 기록하며 공유하고, 프로필에서 이력서를 관리할 수 있는 기능을 제공하는 ‘Scenergy’ 웹 서비스를 기획하게 되었습니다. Scenergy에서 다른 사람들의 연주 영상을 손쉽게 접하며, 마음에 드는 영상의 연주자의 포트폴리오를 확인해 검증된 협업 파트너를 보다 쉽게 구할 수 있습니다.

___
### 프로젝트 소개
+ Scenergy는 `Springboot` `React`를 기반으로 만들어진 뮤지션을 위한 웹 큐레이팅 SNS 입니다.
--- 
### 프로젝트 목표
+ 멤버를 구하는데 어려움을 겪는 뮤지션을 위해 플랫폼을 제공합니다.
+ 연주 영상 업로드에 특화된 게시글 작성 기능을 통해 자신을 어필하고 싶은 뮤지션에게 좀 더 나은 환경을 제공합니다.
+ 역할을 분담하여 서비스를 코드로  **구현**하고  **배포**합니다.
  -   구현하는 과정에서 Front-end와 Back-end가  **협업**하는 과정을 이해합니다.
    -   RESTful API를 직접 설계하고 API를 통한 HTTP 통신을 겪으며 협업 능력을 기릅니다.
    -   자신이 맡은 부분을 남에게 설명할 수 있는 의사소통 능력을 기릅니다.
  -   단순히 구현 후 끝나는 것이 아닌  **코드 리뷰**와  **피드백**을 통해 함께 성장합니다.
--- 
### 기술스택
#### 개발 환경

<img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC.svg?&style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white"> <img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> 

#### 개발
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">

#### 커뮤니케이션
<img src="https://img.shields.io/badge/Mattermost-0058CC?style=for-the-badge&logo=Mattermost&logoColor=white"> <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white">
---
### 기능정의서 및 ERD

#### 기능정의서
##### 🔗[기능정의서](https://docs.google.com/spreadsheets/d/1eb2wqtTxqo4EBiJq_kRAA-wO56QQbC8ycn4FkqmRq-s/edit#gid=2139742202)
#### ERD
![ERD.png](docs%2Fimages%2FERD.png)
---
### 페르소나
#### 1️⃣ 드러머 구하는 김민석
![페르소나_김민석.png](docs%2Fimages%2F%ED%8E%98%EB%A5%B4%EC%86%8C%EB%82%98_%EA%B9%80%EB%AF%BC%EC%84%9D.png)

#### 2️⃣ 버스킹 팀을 구하는 김미솔
![페르소나_김미솔.png](docs%2Fimages%2F%ED%8E%98%EB%A5%B4%EC%86%8C%EB%82%98_%EA%B9%80%EB%AF%B8%EC%86%94.png)

#### 3️⃣ 아티스트를 꿈꾸는 장성하
![페르소나_장성하.png](./docs/images/페르소나_장성하.png){: width="600"}

### 시스템 아키텍처
![시스템 아키텍처.png](docs%2Fimages%2F%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98.png)

---
### 백엔드 디렉토리 구조
 ```sh
domain
  ├─ entityName
  │ ├─ controller
  │ │     ├─ request
  │ │     └─response
  │ ├─ entity
  │ ├─ repository
  │ └─ service
  │      └─ command
  │ 
  ├─ test
  │  ├─domain
  │  └─ serviceTest
  └─ ScenergySpringApplication.java
```

### 프론트 디렉토리 구조
```sh
├─actions
├─apis
│  ├─entity
│  ├─Profile
│  ├─User
│  └─VideoUpload
├─assets
│  └─VideoUpload
├─components
│  ├─Chat
│  ├─commons
│  │  ├─Dialog
│  │  ├─Drawer
│  │  ├─Navbar
│  │  ├─ScenergyList
│  │  └─Search
│  ├─JobPost
│  ├─Portfolio
│  ├─Profile
│  ├─Search
│  ├─User
│  └─VideoUpload
├─contexts
├─hooks
├─pages
├─reducers
├─router
└─store
```

---
## 주요 기능 및 화면
**로그인 & 로그아웃 (네이버 OAuth)**
- 중앙의 로그인 버튼을 누른 후 소셜 로그인을 진행할 수 있습니다
- 로그인 한 사용자는 시너지 서비스를 이용할 수 있습니다.

**영상 업로드**
- 자신의 연주 영상을 업로드 할 수 있습니다.
- 팔로우 한 유저의 영상을 조회할 수 있습니다.

**채팅**
- 원하는 뮤지션과 채팅을 통해 빠른 연락이 가능합니다.

**화상 회의**
- 화상회의를 통해 빠른 실력검증 및 합주가 가능합니다.

**검색**
- 지역, 장르, 악기태그로 영상을 검색 할 수 있습니다.
- 검색어 입력을 통해 원하는 영상을 검색 할 수 있습니다.

**알림**
- 팔로우와 채팅 알림을 받을 수 있습니다.

**프로필 조회**
- 자신의 프로필을 조회하고, 정보를 갱신할 수 있습니다.
- 프로필에서 자신의 대표영상과 영상 목록을 조회할 수 있습니다.

---

### 프로젝트 산출물

- [페르소나](docs/페르소나.md)
- [기능명세서](docs/기능명세서.md)
- [시스템 아키텍처](docs/시스템%20아키텍처.md)
- [와이어프레임](docs/와이어프레임.md)
- [화면정의서](docs/화면정의서.md)
- [ERD](docs/ERD.md)
- [Flow chat](docs/FlowChat.md)
- [시퀀스 다이어그램](docs/시퀀스다이어그램.md)
- [API 명세서](docs/프로젝트%20결과물/중간발표자료.md)
- [BE 코드 컨벤션](docs/BE코드컨벤션.md)
- [FE 코드 컨벤션](docs/FE코드컨벤션.md)
---
### 프로젝트 결과물

- [중간 발표자료](docs/프로젝트%20결과물/중간발표자료.md)
- [최종 발표자료](docs/프로젝트%20결과물/최종발표자료.md)

---
### 각자 맡은 역할

- 회원 관리
  - 김혜지, 강대은
- 검색
  - 이민형, 김은지
- 포트폴리오
  - 이태경, 강대은
- 팔로우, 팔로잉
  - 김준표, 김은지
- 채팅
  - 이태경, 김은지
- 좋아요
  - 김준표, 김은지
- 게시글
  - 김혜지, 김은지
- 영상
  - 이민형, 강대은
- 알림
  - 김준표, 강대은
---

### 팀원 소개
### Contributors

<table style="width: 100%; text-align: center;">
  <tr>
    <td style="text-align: center;"><img src="docs/images/김준표.jpg" width="110"><br><strong>김준표</strong><br>🍪Back-end<br>💎Team Leader<br>🤴Back-end Leader</td>
    <td style="text-align: center;"><img src="docs/images/김혜지.jpg" width="110"><br><strong>김혜지</strong><br>💟Back-end</td>
    <td style="text-align: center;"><img src="docs/images/이민형.jpg" width="110"><br><strong>이민형</strong><br>🧗‍♂️Back-end<br>🧔Survey Leader</td>
  </tr>
  <tr>
    <td style="text-align: center;"><img src="docs/images/이태경.jpg" width="110"><br><strong>이태경</strong><br>🍖Back-end</td>
    <td style="text-align: center;"><img src="docs/images/김은지.jpg" width="110"><br><strong>김은지</strong><br>🌹Front-end<br>👸Front-end Leader</td>
    <td style="text-align: center;"><img src="docs/images/강대은.jpg" width="110"><br><strong>강대은</strong><br>🍞Front-end</td>
  </tr>
</table>
