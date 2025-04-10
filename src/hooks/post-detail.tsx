import { useContext, useEffect, useState, useRef } from "react";
import { PostContext } from "../store/post-context";
import { IPost } from "../components/types";
import useHttp from "./http-hook";

export default function usePostDetail(postId?: string) {
  const { posts } = useContext(PostContext);
  const [post, setPost] = useState<IPost | null>(null);
  const hasFetched = useRef(false);

  const {
    data,
    error,
    isLoading,
    sendRequest
  } = useHttp<IPost>({
    url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
    config: {},
    initialData: null,
    autoExecute: false
  });

  useEffect(() => {
    if (!postId || hasFetched.current) return;

    const existing = posts.find((el) => el.id.toString() === postId);
    if (existing) {
      setPost(existing);
      hasFetched.current = true;
    } else {
      sendRequest();
      hasFetched.current = true;
    }
  }, [postId]);

  useEffect(() => {
    if (data) {
      setPost(data);
    }
  }, [data]);

  return { post, error, isLoading };
}
