import Button from "../Button/Button";
import { IModalProps } from "../UITypes";

export default function Modal({children, modalRef}: IModalProps) {

    function closeHandler(): void {
        modalRef.current && modalRef.current.close();
    }

    return <dialog ref={modalRef}>
        {children}
        <Button text="close" onPress={closeHandler} />
    </dialog>
}