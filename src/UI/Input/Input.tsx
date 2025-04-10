import classes from "./Input.module.css";

import { IInputProps } from "../UITypes";

export default function Input({
    customClasses,
    placeholder = '',
    value = '',
    onChange
}: IInputProps) {
    return (
        <input
            placeholder={placeholder}
            className={`${classes.input} ${customClasses}`}
            type="text"
            value={value}
            onChange={onChange}
        />
    );
}
