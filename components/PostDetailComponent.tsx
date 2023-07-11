import styled from '@emotion/styled';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function PostDetailComponent({ post_id }: { post_id: string }) {
  // TODO: 재사용 가능하게 분리 필요.
  const { data, isLoading } = useQuery(
    ['postDetail', post_id],
    async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
      return data;
    },
    {
      enabled: !!post_id,
    },
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <PresentationalComponent>
      <h2>클라이언트에서 부른 데이터</h2>
      <p>{data.body}</p>
    </PresentationalComponent>
  );
}

const PresentationalComponent = styled.div`
  padding: 24px;
  box-sizing: border-box;
  background-color: teal;
  color: white;
  margin: 24px 0;
`;

export default PostDetailComponent;
