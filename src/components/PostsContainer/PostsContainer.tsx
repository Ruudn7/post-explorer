import { useContext, useEffect } from "react";

import PostItem from "../PostItem/PostItem";
import { IPost } from "../types";

import { AuthorContext } from "../../store/authors-context";
import { IAuthorMap } from "../../store/types";
import { useFetchAllAuthors } from "../../util/fetchAutor";
import classes from "./PostsContainer.module.css";
import { PostContext } from "../../store/post-context";

export default function PostsContainer({ posts }: { posts: IPost[] }) {
    const { authors, setAuthors } = useContext(AuthorContext);
    const { searchTerm, manualAddedPosts } = useContext(PostContext);

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredManualAddedPosts = manualAddedPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const fetchAllAuthors = useFetchAllAuthors();
    useEffect(() => {
        const authorIds = Array.from(
            new Set(posts?.map((post) => post.userId))
        );
        const authorsToLoad: IAuthorMap = {};

        authorIds.forEach((id) => {
            if (!authors[id]) {
                authorsToLoad[id.toString()] = { status: 'loading' };
            }
        });

        setAuthors(authorsToLoad);
        fetchAllAuthors(authorIds);
    }, [posts]);

    return (
        <div className={classes.postListCotanier}>
            
            {filteredManualAddedPosts.map((post: IPost) => (
                    <PostItem
                        key={post.id}
                        post={post}
                        author={authors[post.userId]}
                    />
                ))}
            {Object.keys(authors).length &&
                filteredPosts.map((post: IPost) => (
                    <PostItem
                        key={post.id}
                        post={post}
                        author={authors[post.userId]}
                    />
                ))}

            {!filteredPosts.length && <h2>No matching results</h2>}
        </div>
    );
}
