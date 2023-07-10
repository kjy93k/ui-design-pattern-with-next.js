import { dehydrate, QueryClient } from '@tanstack/query-core';
import styled from '@emotion/styled';
import axios from 'axios';
import Link from 'next/link';

function HomePage(props: any) {
  return (
    <HomePageStyledComponent>
      <Link href={'/post'}>/post</Link>
    </HomePageStyledComponent>
  );
}

const HomePageStyledComponent = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #eee;

  .serverside-rendered-data {
    width: 100px;
    height: 100px;
    background-color: teal;
  }
`;

export default HomePage;
