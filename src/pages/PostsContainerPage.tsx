import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import PostsContainer from "../components/PostsContainer/PostsContainer";
import { IPost } from "../components/types";
import { PostContext } from "../store/post-context";

export default function PostsContainerPage() {
    const posts = useLoaderData() as IPost[];
    const { setPosts } = useContext(PostContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setPosts(posts);
        setIsLoading(false);
    }, [posts]);

    if (isLoading) {
        return (
            <p style={{ textAlign: "center", marginTop: "2rem" }}>
                Loading posts...
            </p>
        );
    }

    return <PostsContainer posts={posts} />;
}

export function loader() {
    return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
    );
}
