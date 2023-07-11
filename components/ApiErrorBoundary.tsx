// 에러 바운더리
import { ErrorBoundary } from 'react-error-boundary';

export function ApiErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorMessage} onError={(error: Error) => {}}>
      {children}
    </ErrorBoundary>
  );
}

function ErrorMessage({ error }: { error: Error }) {
  console.error(error);
  return <div>Something went wrong...{`message : [${error.message}]`}</div>;
}
