import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { HandledErrorBoundary } from '@/components/HandledErrorBoundary';
import { ApiFetcher, useData } from '@/components/ApiFetcher';

export default function PostDetailComponent({ post_id }: { post_id: string }) {
  const fetchPostDetail = async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
    return data;
  };

  return (
    <HandledErrorBoundary>
      <ApiFetcher queryKey={['postDetail', post_id]} fetchFunction={fetchPostDetail}>
        <PresentationalComponent />
      </ApiFetcher>
    </HandledErrorBoundary>
  );
}

function PresentationalComponent() {
  const data = useData();

  return (
    <div>
      <h2>클라이언트에서 부른 데이터</h2>
      <p>{data.body}</p>
    </div>
  );
}
