import React, { ReactNode } from 'react';
import { QueryObserverResult, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export function ApiFetcher({
  query,
  children,
}: {
  query: QueryObserverResult<any, unknown>;
  children: React.ReactNode;
}) {
  const { isLoading, data, error } = query;

  // TODO: 스켈레톤 추가 필요
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    throw error;
  }

  return (
    <>
      {React.Children.map(children, (child: ReactNode) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { data } as object);
        }
        return child;
      })}
    </>
  );
}
