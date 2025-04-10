// BASIC CONTEXT

import { IPost } from "../components/types";

export interface IContextAction {
    type: string;
}

export interface IContextProviderProps {
    children: React.ReactNode;
}

// THEME CONTEXT

export interface IThemeContext {
    isDarkThemeOn: boolean;
    toggleTheme: () => void;
}

/// AUTOHR CONTEXT

export interface IAuthorContextAction extends IContextAction {
    author?: IAuthorInfo;
    authors?: IAuthorMap;
}

export interface IAuthorContext {
    authors: IAuthorMap;
    addAuthor: (a: IAuthorInfo) => void;
    setAuthors: (a: IAuthorMap) => void;
}

export interface AuthorState {
    authors: IAuthorMap;
}

export interface IAuthorMap {
    [key:string]: IAuthorItem
}

export interface IAuthorItem {
    status: string;
    authorInfo?: IAuthorInfo;
}

export interface IAuthorInfo {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAuthorAddress;
    phone: string;
    website: string;
    company: IAuthorCompany;
}

export interface IAuthorAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
}

export interface IAuthorCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}


// POST CONTEXT


export interface IPostContext {
    posts: IPost[];
    searchTerm: string;
    manualAddedPosts: IPost[];
    setPosts: (posts: IPost[]) => void;
    addPost: (post: IPost) => void;
    setSearchTerm: (term: string) => void;
}

export interface IPostContextAction extends IContextAction {
    posts?: IPost[];
    post?: IPost;
    term?: string
}

export interface IPostState {
    posts: IPost[];
    searchTerm: string;
    manualAddedPosts: IPost[]
}