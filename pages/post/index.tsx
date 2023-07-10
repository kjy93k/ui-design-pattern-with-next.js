import styled from '@emotion/styled';

function PostsPage(props: any) {
  return (
    <PostsPageStyledComponent>
      <h1>포스트 리스트 페이지</h1>
      <div className={'csr'}>포스트 리스트 컴포넌트를 만들어서 클라이언트에서 호출</div>
    </PostsPageStyledComponent>
  );
}

const PostsPageStyledComponent = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #eee;
`;

export default PostsPage;
