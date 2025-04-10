import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AuthorContext } from "../../store/authors-context";
import Modal from "../../UI/Modal/Modal";
import AuthorDetail from "../AuthorDetail/AuthorDetail";
import { IPostDetailProps } from "../types";
import classes from "./PostDetail.module.css";
import { fetchAuthor } from "../../util/fetchAutor";

export default function PostDetail({ post }: IPostDetailProps) {
    const { authors, addAuthor } = useContext(AuthorContext);
    const author = post ? authors[post.userId] : null;

    const modalRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
      if (post && (!author || !author.authorInfo)) {
          fetchAuthor(post.userId).then((user) => {
              addAuthor(user);
          }).catch((err) => {
              console.error('Failed to fetch author', err);
          });
      }
  }, [post, author, addAuthor]);

    if (!post)
        return (
            <div className={classes.centered}>
                <p>Post not found!</p>
                <Link to="/">Back</Link>
            </div>
        );

    function seeDetailsHandler() {
        modalRef.current?.showModal();
    }

    return (
        <div className={classes.detailWrapper}>
            <h1>{post.title}</h1>

            <p className={classes.body}>{post.body}</p>

            <div className={classes.authorInfo}>
                {author?.authorInfo ? (
                    <>
                        <h4>Author</h4>
                        <p>
                            <strong>{author.authorInfo.name}</strong> (
                            <a href={`mailto:${author.authorInfo.email}`}>
                                {author.authorInfo.email}
                            </a>
                            )
                        </p>
                        <button
                            className={classes.backLink}
                            onClick={seeDetailsHandler}
                        >
                            See author details
                        </button>

                        <Modal modalRef={modalRef}>
                            <AuthorDetail author={author.authorInfo} />
                        </Modal>
                    </>
                ) : (
                    <p className={classes.unknown}>Unknown author</p>
                )}
            </div>

            <Link className={classes.backLink} to="/">
                Back to posts
            </Link>
        </div>
    );
}
