import { dehydrate, QueryClient } from '@tanstack/query-core';
import styled from '@emotion/styled';
import axios from 'axios';
import Head from 'next/head';
import { useQuery } from '@tanstack/react-query';
import { PostDetailComponent } from '@/components/PostDetailComponent';
import { PostCommentsComponent } from '@/components/PostCommentsComponent';
import { getPostDetail } from '@/api/jsonplaceholder';

function PostDetailPage({ postId: postId }: { postId: string }) {
  const { data } = useQuery({
    queryKey: ['post', postId],
    enabled: !!postId,
    queryFn: async () => getPostDetail(postId),
  });

  return (
    <>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <PostDetailStyledComponent>
        <PostDetailComponent postId={postId} />
        <PostCommentsComponent postId={postId} />
        <div className={'serverside-rendered-data'}>
          <p>서버에서 렌더한 메타 데이터를 보여줌</p>
          <p>{data?.title}</p>
        </div>
      </PostDetailStyledComponent>
    </>
  );
}

const PostDetailStyledComponent = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #eee;
  text-align: center;

  .serverside-rendered-data {
    margin-top: 24px;
  }
`;

export default PostDetailPage;

export async function getStaticPaths() {
  const postIdArr = [1, 2, 3];

  return {
    paths: postIdArr.map((postId) => ({
      params: { postId: postId.toString() },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params: { postId } }: { params: { postId: string } }) {
  const queryClient = new QueryClient();
  // 프리페치로 json placeholder 데이터를 적절히 axios get으로 호출해서 관리.
  await queryClient.prefetchQuery(['post', postId], async () => getPostDetail(postId));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      postId: postId,
    },
  };
}
