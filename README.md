# UI Design Pattern with Next.js

---

- 기본적인 리엑트의 UI 디자인 패턴(Presentation, Container)에 다양한 방법론을 적용해 효율적인 컴포넌트 생산과 안정적인 데이터 핸들링을 꾸려보는 시도.
- 다음 기본 환경을 갖추고 추가로 적절한 방법론들을 시나리오에 맞춰 적용 시도.
  - 기본 환경
   ```
   - Next.js의 App Router 사용
   - 컴포넌트는 기본적으로 Presentational, Container로 분리
   - Presentational 컴포넌트는 선언형으로, 화면 구현에만 초점.
   - Container 컴포넌트는 명령형으로 데이터 핸들링 처리.
   - 데이터는 익숙한 Axios 로 호출하고, React Query 또는 SWR로 Validation, Caching 처리.
   ```
  - 시도
  - [ ] Suspense를 이용한 데이터 로딩 처리
  - [ ] Error Boundary를 이용한 에러 처리
  - [ ] Concurrent UI Pattern 적용
  
  