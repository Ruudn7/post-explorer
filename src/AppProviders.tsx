import React from "react";
import { ThemeContextProvider } from "./store/app-theme-context";
import { AuthorContextProvider } from "./store/authors-context";
import PostContextProvider from "./store/post-context";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      <AuthorContextProvider>
        <PostContextProvider>
          {children}
        </PostContextProvider>
      </AuthorContextProvider>
    </ThemeContextProvider>
  );
}