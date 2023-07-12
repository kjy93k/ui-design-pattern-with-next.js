import React, { Suspense } from 'react';
import axios from 'axios';
import { ApiErrorBoundary } from '@/components/ApiErrorBoundary';
import { ApiFetcher } from '@/components/ApiFetcher';
import { useQuery } from '@tanstack/react-query';
import { usePostDetailQuery } from '@/hooks/usePostDetailQuery';

export default function PostDetailComponent({ post_id }: { post_id: string }) {
  const query = usePostDetailQuery(post_id);

  return (
    // TODO: 어떤 주제로 오류를 묶을지 미리 범주를 정의해두고 수집하는 것도 의미 있을듯(Sentry 등 미들웨어 데이터 적재 시 활용)
    <ApiErrorBoundary>
      <ApiFetcher query={query}>
        <PresentationalComponent />
      </ApiFetcher>
    </ApiErrorBoundary>
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
