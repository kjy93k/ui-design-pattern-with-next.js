import { ErrorMessage } from '@/components/ErrorMessage';
import { ErrorBoundary } from 'react-error-boundary';
import { getPostComments } from '@/api/jsonplaceholder';
import { ApiFetcher } from '@/components/ApiFetcher';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { PostCommentType } from '@/types/jsonplaceholder';

export const PostCommentsComponent = ({ postId }: { postId: string }) => {
  const queryKey = ['postComments', postId];

  return (
    <ErrorBoundary
      FallbackComponent={ErrorMessage}
      onError={(error, componentStack) => {
        console.log('postCommentsComponent에서 error 발생, error시 error 처리 함수 생성 필요');
      }}
    >
      <ApiFetcher queryKey={queryKey} queryFn={() => getPostComments(postId)}>
        <PresentationalComponent queryKey={queryKey} />
      </ApiFetcher>
    </ErrorBoundary>
  );
};

const PresentationalComponent = ({ queryKey }: { queryKey: string[] }) => {
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<PostCommentType[]>(queryKey);
  return (
    <div>
      <h2>클라이언트에서 부른 데이터</h2>
      <ul>
        {data
          ?.map((comment: any) => ({ ...comment, key: comment.id }))
          ?.map((comment: any) => <li key={comment.key}>{comment.body}</li>)}
      </ul>
    </div>
  );
};
