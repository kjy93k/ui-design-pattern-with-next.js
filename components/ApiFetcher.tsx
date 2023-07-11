import React, { createContext, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const DataContext = createContext();

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

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
