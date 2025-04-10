import { IButtonProps } from "../UITypes";

import classes from './Button.module.css'

export default function Button({text, onPress, customClasses}: IButtonProps) {

    function onClickHandler(): void {
        onPress()
    }
    return <button className={`${classes.btn} ${customClasses}`} onClick={onClickHandler}>{text}</button>
}