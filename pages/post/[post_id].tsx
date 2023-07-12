import { dehydrate, QueryClient } from '@tanstack/query-core';
import styled from '@emotion/styled';
import axios from 'axios';
import Head from 'next/head';
import { useQuery } from '@tanstack/react-query';
import { ApiErrorBoundary } from '@/components/ApiErrorBoundary';
import PostDetailComponent from '@/components/PostDetailComponent';
import PostCommentsComponent from '@/components/PostCommentsComponent';

function PostDetailPage({ id: post_id }: { id: string }) {
  const { data } = useQuery({
    queryKey: ['post', post_id],
    enabled: !!post_id,
    queryFn: async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
      return data;
    },
  });

  return (
    <>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <PostDetailStyledComponent>
        <PostDetailComponent post_id={post_id} />
        <PostCommentsComponent post_id={post_id} />
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
  return {
    paths: [{ params: { post_id: '1' } }, { params: { post_id: '2' } }, { params: { post_id: '3' } }],
    fallback: true,
  };
}

export async function getStaticProps({ params: { post_id } }: { params: { post_id: string } }) {
  const queryClient = new QueryClient();
  // 프리페치로 json placeholder 데이터를 적절히 axios get으로 호출해서 관리.
  await queryClient.prefetchQuery(['post', post_id], async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
    return data;
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id: post_id,
    },
  };
}
