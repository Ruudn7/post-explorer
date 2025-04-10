import { createContext, useReducer } from "react";
import {
    IContextProviderProps,
    IPostContext,
    IPostContextAction,
    IPostState,
} from "./types";
import { ADD_POST, SET_POSTS, SET_SEARCH_TERM } from "./actions";
import { IPost } from "../components/types";

export const PostContext = createContext<IPostContext>({
    posts: [],
    searchTerm: '',
    manualAddedPosts: [],
    setPosts: () => {},
    addPost: () => {},
    setSearchTerm: () => {},
});

function postContextReducer(
    state: IPostState,
    action: IPostContextAction
): IPostState {
    switch (action.type) {
        case SET_POSTS:
          return { ...state, posts: [...action.posts || []] };
        case ADD_POST:
          return { ...state, posts: [action.post!, ...state.posts], manualAddedPosts: [action.post!, ...state.manualAddedPosts] };
        case SET_SEARCH_TERM:
          return { ...state, searchTerm: action.term ?? '' };
        default:
          return state;
      }
}

export default function PostContextProvider({
    children,
}: IContextProviderProps) {
    const [postContextState, dispatch] = useReducer(postContextReducer, {
        posts: [],
        searchTerm: '',
        manualAddedPosts: []
    });

    function setPosts(posts: IPost[]) {
        dispatch({ type: SET_POSTS, posts });
    }

    function addPost(post: IPost) {
        dispatch({ type: ADD_POST, post });
    }

    function setSearchTerm(term: string) {
        dispatch({ type: SET_SEARCH_TERM, term });
    }

    const ctxValue: IPostContext = {
        posts: postContextState.posts,
        searchTerm: postContextState.searchTerm,
        manualAddedPosts: postContextState.manualAddedPosts,
        setPosts,
        addPost,
        setSearchTerm
    };

    return (
        <PostContext.Provider value={ctxValue}>{children}</PostContext.Provider>
    );
}
