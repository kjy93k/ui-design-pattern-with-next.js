import axios from 'axios';

export const usePostDetailQuery = (post_id: string) => {
  const queryKey = ['postDetail', post_id];
  const queryFn = async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
    return data;
  };

  return { queryKey, queryFn };
};
