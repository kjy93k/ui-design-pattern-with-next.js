import { PostDetailType, PostCommentType } from '@/types/jsonplaceholder';
import axios from 'axios';

export async function getPostComments(postId: string) {
  const { data } = await axios.get<PostCommentType[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  return data;
}

export async function getPostDetail(postId: string) {
  const { data } = await axios.get<PostDetailType>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return data;
}
