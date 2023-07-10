# UI Design Pattern with Next.js

---

## 문제의식

- 프레임워크에 의존하는 데이터 핸들링 방식을 취하게 되면 자연스럽게 페이지에 데이터 핸들링이 위임되는 형태가 됨.
- 프론트엔드 서버사이드 자원이 녹록치 않을 경우, TTFB가 생각보다 늦는 등 사용자 경험에 영향을 줄 수 있음.
- 일부 엔드포인트의 문제가 single point of failure가 되어 전체 서비스에 영향을 줄 수 있음.
- 오류 핸들링을 멋지게 하고 싶음. 문제가 발생했을 때 일시적인 문제면 재시도가 가능했으면 좋겠음.
- 지역적으로 오류를 처리하고, 해결 불가능하면 상위에서 오류를 처리하고 싶음. 핸들링 되지 않는 오류를 최소화
- SEO와 첫 Viewport는 데이터를 서버사이드에서 처리하고 렌더링 해서 화면으로 출력하고 나머지는 경제적으로(?) 클라이언트에서 렌더링 되었으면 좋겠다.

---

## 목표

- 데이터 호출 책임이 위임된 독립해서 재사용 가능한 컴포넌트 구현
- Next.js + React Query 조합
- Container Component + Presentational Component 패턴으로 작성
- 서버 사이드에서 필요한 데이터는 별도 관리
- Suspense 처리와 Error Boundary 처리 적용

---
## TODO
- [x] React Query 전역/지역 설정 추가
- [ ] ServerSide Rendering에 필요한 데이터 추가/ 처리
- [ ] 데이터 핸들링 처리가 위임된 컴포넌트 예제 추가(with Error Boundary)
- [ ] 데이터 Fetch 실패 시 재시도 로직 추가