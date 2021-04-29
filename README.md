# Team[-2] - SW마에스트로 미니프로젝트 29팀 
## 프로젝트 소개
<p align="center">
<img src = "./logo.png" width="40%"><br>
실시간으로 올라오는 멘토링 신청과 각 멘토링이 어떨지 고민되는 <span style="color: blue;"><strong>소마인</strong></span>을 위해서<br> 멘토링 신청/취소와 멘토링 한줄평 기능을 제공하는 <strong>챗봇 애기 멘티 소마!</strong>
</p>

***

## 프로젝트 기획 동기 
<p align="center">
<img src = "./motivation1.png" width="40%">
</p>

## 연수생 인터뷰
![third](./third.png)


***
## 주요기능 설명

### 멘토링 신청 및 취소
  + 소프트웨어 마에스트로 ID & PW를 등록하고 1)의 기능으로 전달된 멘토링을 신청후 결과를 메시지로 발송
  + 이 기능을 통해 신청한 멘토링을 다시 취소하는 것 역시 가능
  + 계정 정보는 user_id로 매핑하여 연계된 DB에 저장됨
  + (멘토링을 신청하고 실제로 신청된 사진)
### 멘토링 후기 및 한줄평
  + 멘토링별 수강자 목록을 스크래핑하여 멘토링 한줄평 요청 메시지 발송
  + 모달을 통해 DB에 업로드하여 저장
  + 위 내용을 기반으로 멘토와 멘토링에 대한 한줄평 열람 가능
  +(구동 예시)
***
## 아키텍쳐 구조
![arch](./arch.png)
------------
***
## 디렉터리 구조
```
├── README.md
├── app.js
├── controllers
│   ├── account.js
│   ├── mentoring.js
│   ├── mongodb.js
│   ├── notification.js
│   └── review.js
├── libs
│   └── kakaoWork
│       └── index.js
├── models
│   └── review.js
├── msgGenerator
│   ├── accountModal.msg.js
│   ├── accountSucess.msg.js
│   ├── applicantSucess.msg.js
│   ├── keywordComplete.msg.js
│   ├── keywordModal.msg.js
│   ├── mentoring.msg.js
│   ├── review
│   │   ├── reviewAsk.msg.js
│   │   ├── reviewFailed.msg.js
│   │   ├── reviewResultBlock.msg.js
│   │   ├── reviewSearchModal.msg.js
│   │   ├── reviewSearchResult.msg.js
│   │   ├── reviewSuccess.msg.js
│   │   └── reviewWriteModal.msg.js
│   └── welcome.msg.js
├── package-lock.json
├── package.json
└──  routes
    ├── alert.js
    ├── callback.js
    ├── db.js
    ├── index.js
    ├── request.js
    └── review.js

```

***
## Team[-2] 구성원
> 임동진, 이원기, 이선노, 함초롬, 김호준, 유한길
***
## 건의 사항 및 버그 리포팅 하러 가기
https://forms.gle/6NiahMw3tf8WfK2i7
***
## API문서
https://www.notion.so/team-2-5f94d97c35d94bf39a4cad509ca02c02

