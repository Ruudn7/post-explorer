import { IAuthorInfo, IAuthorItem } from "../store/types";

export interface IPost {
    body: string;
    id: number;
    title: string;
    userId: number;
}

export interface IPostItemProps {
    post: IPost;
    author: IAuthorItem
}

export interface IAuthorDetailProps {
    author: IAuthorInfo;
}

export interface IPostDetailProps {
    post: IPost;
}