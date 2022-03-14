## 더블앤씨 기업과제 저장소입니다.

## [Go Demo🚀](https://https://naughty-rosalind-312d20.netlify.app/)
  url= https://sad-jackson-0809cb.netlify.app/


## 역할 분담

<table>
<tr>
<td align="center"><b>팀원<b></td>
<td align="center"><b>역할</b></td>
</tr>
<tr>
<td>신원규</td>
<td> 프로젝트 매니지먼트 / 프로젝트 초기세팅 / ServerSideProps 설정 / 브랜드 페이지 / page 레이아웃 구성 / API fetch </td>
</tr>
<tr>
<td>김서윤</td>
<td> Nav바 / 캐러셀 슬라이드 / 공통 컴포넌트 / </td>
</tr>
<tr>
<td>권영채</td>
<td> 고객 센터 / 상품구매 페이지 / 공통 컴포넌트 / E2E test </td>
</tr>
<tr>
<td>지연비</td>
<td> Nav바 / SEO 작업 </td>
</tr>

</table>

<br/>

## 구현 요구사항

### ✅기술스택

- Next.js 와 TypeScript 를 사용하였습니다.

### ✅레이아웃 및 기능

홈

- 홈 화면의 캐러셀은 라이브러리를 사용하지 않고 직접 구현했습니다.
- 홈 화면의 카테고리 아이콘을 누르면 각 카테고리별 브랜드 페이지로 이동하도록 구현했습니다.
- 홈 화면의 땡처리콘 하위 이미지를 클릭하면 브랜드 페이지를 거치지 않고 직접 해당 상품을 구매하는 페이지로 이동합니다.

브렌드 페이지

- 브랜드 페이지의 아이콘을 누르면, 해당 브랜드의 상품목록이 조회됩니다.

상품 리스트

- 상품리스트 중 하나를 클릭하면, 상품에 대한 설명과 구매를 위한 옵션을 선택하는 페이지로 이동합니다.

상품 구매

- 상품 구매 페이지에서 옵션 선택하기 버튼을 누르면 유효기간과 할인가별 옵션 메뉴가 노출되며, 상품에 관한 설명 부분은 어두워지도록 구현했습니다.

라우팅

- 니콘내콘 모바일 웹페이지와 같게 설정했습니다.

<br/>

## 프로젝트 실행 방법

```
$ git clone https://github.com/PreOnboardingTeam-16/3rdweek-ncnc-task
$ npm install
$ npm start
```

<br/>

## 이슈정리

### 'Bottom-Up' 방식의 개발

우리팀은 지난번 과제에서 `Bottom-Up` 방식의 개발방식을 선택했습니다. 재사용할 수 있는 코드의 사용성을 높이고, 전체적인 코드가 결합되기 전에 계획을 유연하게 수정하는 등 효율성이 올라갔다고 판단하여 이번 과제에서도 동일한 방식을 선택하였습니다. `Bottom-Up` 방식의 개발을 좀 더 효과적으로 하기 위해, gather에서 수시로 커뮤니케이션을 하는 노력을 기울였습니다.

<br/>

### Next.js 사용

이번 프로젝트에서는 처음으로 Next.js를 사용하였습니다. Nav바와 같이 페이지가 이동할 때마다 유지해야 하는 컴포넌트는 \_app.tsx에서 선언하며 초기세팅 시 직접 추가해야하는 등 CRA 방식과 다른 점들이 있었습니다. 또한, 프레임워크의 특성상 메서드, 정해진 규칙대로 로직을 작성해야하는 점들도 눈에 띄었습니다. 이슈가 생길 때마다 팀원들과 적극적으로 소통하여 프로젝트 진행을 원활하게 했습니다.

<br/>

### CSR vs SSR vs 정적생성

이번 과제의 주요 고민은 렌더링 방식을 어떻게 할 것인가였습니다. 각각의 API를 작성하기 전에 SSR, CSR, 정적생성 방식 중 어떤 것을 선택할 것인지를 팀원들과 토론하였습니다. 회의 중에 정적생성 방식을 SSR과 동시에 사용할 수 없다는 점을 알게되었습니다. SSR과 CSR 방식을 선택하기에 앞서 "왜"에 대한 충분한 고민 후, 예제 코드를 함께 작성하며 Next.js의 렌더링 방식을 프로젝트에 적용했습니다.

<br/>

### [⚡구현 중 기술적 이슈들](https://determined-kingfisher-cb7.notion.site/8efd61e0d42143c1b7c20d0168100fc5)

<br/>

## 디렉토리 구조

```
├─public
│  └─Images
├─components
│  ├─APICompo
│  ├─Carousel
│  ├─Category
│  ├─CategoryContainer
│  ├─ItemContainer
│  ├─Nav
│  ├─ProductContainer
│  ├─ProductContent
│  ├─Question
│  ├─QuestionContainer
│  └─Types
├─const
├─Hooks
├─Types
├─pages
│  ├─brands
│  ├─categories
│  └─items
└─styles

```

## E2E Test

![image](https://user-images.githubusercontent.com/84527643/157201926-94215fbc-49c4-48da-b4b9-fe6b4dd65121.png)
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/84527643/157202119-d2f7f431-b505-498c-a28b-477e6be94ec0.gif)
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/84527643/157202778-a596cdd2-9705-4cbd-b5cf-230d230f5d1d.gif)
![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/84527643/157203189-1d046efc-e27c-4298-b881-4d913257ef16.gif)

`cypress`를 통해 주요 로직을 테스트하였습니다.

  <br/>
  
## 속도 개선을 위한 렌더링 방식 변경
프로젝트 제출 이후, 저는 getServerSideProps 사용 시 페이지 이동 속도가 느려지는 문제를 발견하였고, 개선하고자 렌더링 방식을 변경하였습니다.
  
변경 전 url : https://naughty-rosalind-312d20.netlify.app/
  <br/>
변경 후 url= https://sad-jackson-0809cb.netlify.app/
  
### ✅pages/index.tsx
- 기존 렌더링 방식 : 사전 렌더링(getServerSideProps 함수를 사용한 SSR)
#### 변경된 렌더링 방식
- 메뉴 카테고리  : 사전 렌더링(getStaticProps 함수를 사용한 SSR)
- 땡처리콘 productContainer : CSR

#### 변경 이유
- getServerSideProps 사용 시 페이지 이동 속도가 느려지는 문제를 개선하고자 렌더링 방식을 변경하였습니다.
- 쉽게 변하지 않는 데이터인 메뉴카테고리를 getStaticProps를 사용하여 사전 렌더링을 하였습니다.
- 그에 비해 땡처리 콘 ProductContainer 데이터에서는 아이템 유무, 아이템의 가격, 할인율 등 데이터 정보가 빌드 시점 이후 쉽게 바뀔 수 있으므로 CSR을 사용하였습니다.

 ### ✅pages/categories/[id].tsx 
- 기존 렌더링 방식 : 사전 렌더링(getServerSideProps 함수를 사용한 SSR)
- 변경된 렌더링 방식 : 사전렌더링(getStaticProps와 getStaticPaths 함수를 사용한 dynamic SSG)
  -  변경 이유: 카테고리 별 브랜드목록은 매번 바뀌지 않습니다.
  -  getStaticPaths에 라우팅되는 경우의 수를 추가하였습니다.

 ### ✅pages/contacts
- 기존 렌더링 방식 : 사전 렌더링(getServerSideProps 함수를 사용한 SSR)
- 변경된 렌더링 방식 : 사전 렌더링(getStaticProps 함수를 사용한 SSR)
  - 변경 이유 : 고객센터 페이지는 빌드 시점마다 변하지 않습니다.

### ✅pages/categories/[id].tsx 
- 기존 렌더링 방식 : 사전 렌더링(getServerSideProps 함수를 사용한 SSR)
- 변경된 렌더링 방식 : CSR
  - 변경 이유 : 아이템 목록, 할인율 등은 수시로 바뀌기 때문에 CSR를 사용하였습니다.
  
  
<br/>

## 프로젝트 후기

🎹신원규 : 처음 접하는 기술을 가지고, 짧은 시간 내에 유의미한 성과를 낼 수 있도록, 주도적이고 효율적으로 기술을 학습하는 방법을 터득하도록 요구하는 과제였던거 같습니다. 체감 난이도가 상당하였고, 따라서 과제의 모든 부분을 완벽하게 구현할수는 없었기에 제한된 시간 하에서 각 Task의 우선순위를 파악하고 쏟아지는 이슈들을 관리하며 빠른 템포로 인적, 시간자원 관리 역량을 키울수 있었던 좋은 기회였습니다.

🎇김서윤 : 프로젝트 전 재사용될 컴포넌트를 정하여 미리 구현하는 방식으로 진행하였고, API 호출 시, 어떤 방식으로 호출할 것인지 팀원들과 회의를 하는 과정에서 SSR과 CSR에 대해 조금 더 생각해보는 시간을 가질 수 있었습니다.

🎈권영채 : 시간가는줄 모르고 날을 새워서 프로젝트를 진행하였습니다. SSR과 CSR이 어떤 상황에서, 구별되어 사용되어야 할지 생각할 수 있었고, 나아가 개발자가 아닌 사용자의 관점에서도 고민해 보게된 의미있는 프로젝트였습니다. 

💖지연비 : Next.js와 SSR을 처음으로 구현해본 프로젝트였습니다. bottom-up 방식의 개발과 팀원들과의 활발한 의사소통 덕분에 효율적인 작업을 했다고 생각합니다.
