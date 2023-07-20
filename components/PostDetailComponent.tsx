import { ErrorMessage } from '@/components/ErrorMessage';
import { ErrorBoundary } from 'react-error-boundary';
import { getPostDetail } from '@/api/jsonplaceholder';
import { ApiFetcher } from '@/components/ApiFetcher';
import { useQueryClient } from '@tanstack/react-query';
import { PostDetailType } from '@/types/jsonplaceholder';

export const PostDetailComponent = ({ postId }: { postId: string }) => {
  const queryKey = ['postDetail', postId];

  return (
    <ErrorBoundary
      FallbackComponent={ErrorMessage}
      onError={(error, componentStack) => {
        console.log('postDetailComponent에서 error 발생, error시 error 처리 함수 생성 필요');
      }}
    >
      <ApiFetcher queryKey={queryKey} queryFn={() => getPostDetail(postId)}>
        <PresentationalComponent queryKey={queryKey} />
      </ApiFetcher>
    </ErrorBoundary>
  );
};

const PresentationalComponent = ({ queryKey }: { queryKey: string[] }) => {
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<PostDetailType>(queryKey);
  return (
    <div>
      <h2>클라이언트에서 부른 데이터</h2>
      <p>{data?.body}</p>
    </div>
  );
};
