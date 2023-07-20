import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const ApiFetcher = ({
  queryKey,
  queryFn,
  children,
}: {
  queryKey: string[];
  queryFn: () => Promise<any>;
  children: React.ReactNode;
}) => {
  const { isLoading, data, error } = useQuery(queryKey, queryFn);

  // TODO: 스켈레톤 추가 필요
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    throw error;
  }

  return <>{children}</>;
};
