import { useState, useContext } from "react";
import { PostContext } from "../../store/post-context";
import { IPost } from "../types";
import classes from './NewPost.module.css';
import { useNavigate } from "react-router-dom";

export default function NewPost() {
    const { addPost } = useContext(PostContext);
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState('');

    function submitHandler(e: React.FormEvent) {
        e.preventDefault();

        if (!title.trim() || !body.trim()) {
            setError('Please fill in both the title and body.');
            return;
        }

        const newPost: IPost = {
            id: Math.floor(Math.random() * 1000000),
            title,
            body,
            userId: 999
        };

        addPost(newPost);
        setTitle('');
        setBody('');
        setError('');
        navigate('/');
    }

    function backToPostListHandler() {
        navigate('/');
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <h2>Add New Post</h2>

            <div className={classes.formControl}>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className={classes.formControl}>
                <label htmlFor="body">Body</label>
                <textarea
                    id="body"
                    rows={4}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </div>

            {error && <p className={classes.error}>{error}</p>}

            <button type="submit">Add Post</button>
            <button type="button" onClick={backToPostListHandler}>Back to HomePage</button>
        </form>
    );
}