import React, { createContext, useReducer } from "react";
import { ADD_AUTHOR, SET_AUTHORS } from "./actions";
import {
    IAuthorMap,
    IAuthorContext,
    IAuthorContextAction,
    IAuthorInfo,
    IContextProviderProps,
} from "./types";

export const AuthorContext: React.Context<IAuthorContext> =
    createContext<IAuthorContext>({
        authors: {},
        addAuthor: () => {},
        setAuthors: () => {},
    });

function authorContextReducer(
    state: IAuthorContext,
    action: IAuthorContextAction
): IAuthorContext {
    switch (action.type) {
        case ADD_AUTHOR:
            if (!action.author) {
                return state;
            }
            const id = action.author.id;

            return {
                ...state,
                authors: {
                    ...state.authors,
                    [id]: { state: 'ready', authorInfo: action.author },
                },
            };
        case SET_AUTHORS:
            if (!action.authors) return state;

            return {
                ...state,
                authors: {
                    ...state.authors,
                    ...action.authors,
                },
            };
        default:
            return state;
    }
}

export function AuthorContextProvider({ children }: IContextProviderProps) {
    const [authorsContextState, authorsContextDispatch] = useReducer(
        authorContextReducer,
        {
            authors: {},
            addAuthor: () => {},
            setAuthors: () => {},
        }
    );

    function addAuthor(author: IAuthorInfo) {
        authorsContextDispatch({
            type: ADD_AUTHOR,
            author,
        });
    }

    function setAuthors(authors: IAuthorMap) {
        authorsContextDispatch({
            type: SET_AUTHORS,
            authors,
        });
    }

    const ctxValue: IAuthorContext = {
        authors: authorsContextState.authors,
        addAuthor,
        setAuthors,
    };

    return (
        <AuthorContext.Provider value={ctxValue}>
            {children}
        </AuthorContext.Provider>
    );
}
