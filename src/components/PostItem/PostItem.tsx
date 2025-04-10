import { useNavigate } from "react-router-dom";
import { IPostItemProps } from "../types";

import classes from "./PostItem.module.css";

export default function PostItem({ post, author }: IPostItemProps) {

    const navigator = useNavigate();

    let autorLine;

    if (!author) {
        autorLine = <p className={classes.author}>Unable to fetch author info</p>
    } else if (author.status === 'loadnig') {
        autorLine = <p className={classes.author}>Loading author info...</p>
    } else {
        autorLine = <p className={classes.author}>{author.authorInfo?.name}</p>
    }


    function goToPostHandler() {
        if (!author) {
            return;
        }
        navigator(`post/${post.id}`);
    }
    return (
        <div className={classes.post} onClick={goToPostHandler}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            {autorLine}
        </div>
    );
}
