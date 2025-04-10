import React, { createContext, useReducer } from "react";
import { IThemeContext, IContextAction, IContextProviderProps } from "./types";
import { TOGGLE_THEME } from "./actions";

const initialTheme = localStorage.getItem('currentThemeMode') === 'dark';

export const ThemeContext: React.Context<IThemeContext> = createContext<IThemeContext>({
    isDarkThemeOn: initialTheme,
    toggleTheme: () => {}
});

function toggleThemeReducer(state: IThemeContext, action: IContextAction): IThemeContext {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                isDarkThemeOn: !state.isDarkThemeOn
            }
        default:
            return state
    }
}

export function ThemeContextProvider({children}: IContextProviderProps) {    

    const [themeContextState, themeContextStateDispatch] = useReducer(
        toggleThemeReducer,
        {
            isDarkThemeOn: initialTheme,
            toggleTheme: () => {}
        }
    )

    function toggleTheme(): void {
        themeContextStateDispatch({type: TOGGLE_THEME})
    }

    const ctxValue: IThemeContext = {
        isDarkThemeOn: themeContextState.isDarkThemeOn,
        toggleTheme
    }

    return <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
}