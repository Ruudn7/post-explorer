import { useContext, useState } from "react";
import classes from "./Header.module.css";
import { ThemeContext } from "../../store/app-theme-context";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { PostContext } from "../../store/post-context";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const { isDarkThemeOn, toggleTheme } = useContext(ThemeContext);
    const { setSearchTerm } = useContext(PostContext);
    const [ newSearchTerm, setNewSearchTerm ] = useState('');
    const navigate = useNavigate();

    function changeInputHandler(value: string) {
        setNewSearchTerm(value);
        setSearchTerm(value);
    }

    function themeChangeHandler(): void {
        toggleTheme();
    }

    function backToHomePageHandler(): void {
        navigate('/add-post');
    }

    return (
        <header className={classes.header}>
            <Button
                customClasses={classes.homePageButton}
                text={`Add Post`}
                onPress={backToHomePageHandler}
            />
            <Input
                customClasses={classes.postSearchInput}
                placeholder='Search posts by title...'
                value={newSearchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInputHandler(e.target.value)}
            />
            <Button
                customClasses={classes.themeToggleButton}
                text={`Switch to ${isDarkThemeOn ? 'Light' : 'Dark'} Mode`}
                onPress={themeChangeHandler}
            />
        </header>
    );
}