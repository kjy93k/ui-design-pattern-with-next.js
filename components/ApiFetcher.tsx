import React, { createContext, ReactElement, ReactNode, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const DataContext = createContext<any | undefined>(undefined);

export function useFetchData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useFetchData must be used within a ApiFetcher');
  }
  return context;
}

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
          return React.cloneElement(child, { data } as any);
        }
        return child;
      })}
    </>
  );
}
