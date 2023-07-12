import axios from 'axios';

export const usePostCommentsQuery = (post_id: string) => {
  const queryKey = ['postComments', post_id];
  const queryFn = async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`);
    return data;
  };

  return { queryKey, queryFn };
};
