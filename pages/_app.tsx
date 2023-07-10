import type { AppProps } from 'next/app';
import { QueryClient } from '@tanstack/query-core';
import { useRef } from 'react';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          retry: 1,
        },
      },
    });
  }

  return (
    <>
      <Head>
        <title>UI 디자인 패턴 테스트</title>
      </Head>
      <QueryClientProvider client={queryClientRef.current}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
