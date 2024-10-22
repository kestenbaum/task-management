import {useRef, forwardRef, useImperativeHandle} from "react";
import {createPortal} from "react-dom";
import Button from "./Button.jsx";

const Modal = forwardRef(function ({children}, ref)  {
    const dialogRef = useRef(null);

    useImperativeHandle(ref, () => ({
        open () {
            dialogRef.current.showModal();
        }
    }))

    return createPortal(
        <dialog
            className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
            ref={dialogRef}
        >
            {children}
            <form
                method="dialog"
                className="mt-4 text-right"
            >
                <Button>Close</Button>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    );
});

export default Modal;