import React, { ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';

export function ApiFetcher({
  queryKey,
  fetchFunction,
  children,
}: {
  queryKey: any;
  fetchFunction: () => Promise<any>;
  children: React.ReactNode;
}) {
  const { data, isLoading, error } = useQuery(queryKey, fetchFunction);

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
