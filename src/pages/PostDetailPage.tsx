import { useParams } from "react-router-dom";
import PostDetail from "../components/PostDetail/PostDetail";
import usePostDetail from "../hooks/post-detail";

export default function PostDetailPage() {
  const { postId } = useParams();

  if (!postId) return <p>Invalid post ID. Please go back and try again.</p>;

  const { post, isLoading, error } = usePostDetail(postId);

  if (isLoading) return <p>Loading...</p>;
  if (error || !post) return <p>Something went wrong while loading the post.</p>;

  return <PostDetail post={post} />;
}
