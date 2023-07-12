import styled from '@emotion/styled';
import React, { useContext } from 'react';

import axios from 'axios';

import { ApiFetcher } from '@/components/ApiFetcher';
import { ApiErrorBoundary } from '@/components/ApiErrorBoundary';
import { usePostDetailQuery } from '@/hooks/usePostDetailQuery';
import { usePostCommentsQuery } from '@/hooks/usePostCommentsQuery';

export default function PostCommentsComponent({ post_id }: { post_id: string }) {
  const { queryKey, queryFn } = usePostCommentsQuery(post_id);

  return (
    // TODO: 어떤 주제로 오류를 묶을지 미리 범주를 정의해두고 수집하는 것도 의미 있을듯(Sentry 등 미들웨어 데이터 적재 시 활용)
    <ApiErrorBoundary>
      <ApiFetcher queryKey={queryKey} queryFn={queryFn}>
        <PresentationalComponent />
      </ApiFetcher>
    </ApiErrorBoundary>
  );
}

function PresentationalComponent({ data }: any) {
  return (
    <div>
      <h2>클라이언트에서 부른 데이터</h2>
      <ul>
        {data
          .map((comment: any) => ({ ...comment, key: comment.id }))
          .map((comment: any) => (
            <li key={comment.key}>{comment.body}</li>
          ))}
      </ul>
    </div>
  );
}
