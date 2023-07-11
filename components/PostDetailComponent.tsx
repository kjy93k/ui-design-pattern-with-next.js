import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { HandledErrorBoundary } from '@/components/HandledErrorBoundary';
import { ApiFetcher, useFetchData } from '@/components/ApiFetcher';

export default function PostDetailComponent({ post_id }: { post_id: string }) {
  const fetchPostDetail = async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
    return data;
  };

  return (
    // TODO: 어떤 주제로 오류를 묶을지 미리 범주를 정의해두고 수집하는 것도 의미 있을듯(Sentry 등 미들웨어 데이터 적재 시 활용)
    <HandledErrorBoundary>
      <ApiFetcher queryKey={['postDetail', post_id]} fetchFunction={fetchPostDetail}>
        <PresentationalComponent />
      </ApiFetcher>
      <ApiFetcher queryKey={['postDetail', post_id]} fetchFunction={fetchPostDetail}>
        <PresentationalComponent />
      </ApiFetcher>
    </HandledErrorBoundary>
  );
}

function PresentationalComponent({ data }: any) {
  return (
    <div>
      <h2>클라이언트에서 부른 데이터</h2>
      <p>{data.body}</p>
    </div>
  );
}
