import { ReactNode } from "react"

export interface IButtonProps {
    text: string,
    onPress: () => void,
    customClasses?: string
}

export interface IInputProps {
    placeholder?: string,
    customClasses?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IModalProps {
    children: ReactNode,
    modalRef: React.RefObject<HTMLDialogElement | null>
}