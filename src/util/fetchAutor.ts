import { useContext } from "react";
import { IAuthorInfo } from "../store/types";
import { AuthorContext } from "../store/authors-context";

export const fetchAuthor = async (id: number): Promise<IAuthorInfo> => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    if (!response.ok) throw new Error(`Failed to fetch author with id ${id}`);
    return await response.json();
};

export const useFetchAllAuthors = () => {
    const { authors, addAuthor } = useContext(AuthorContext);
  
    return async (authorIds: number[]) => {
      for (const id of authorIds) {
        if (!authors[id]) {
          try {
            const user = await fetchAuthor(id);
            addAuthor({ ...user });
          } catch (error) {
            console.error(`Error loading author ${id}:`, error);
          }
        }
      }
    };
  };