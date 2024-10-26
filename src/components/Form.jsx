import { useRef } from "react";
import Button from "./Button.jsx";
import TextField from "./TextField.jsx";
import Modal from "./Modal.jsx";

const Form = ({onCreate, onClose}) => {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const dateRef = useRef(null);
    const modalRef = useRef(null);

    function handleSave ()  {
        const titleValue = titleRef.current.value;
        const descriptionValue = descriptionRef.current.value;
        const dateValue = dateRef.current.value;

        if (titleValue.trim() === ""
            || descriptionValue.trim() === ""
            || dateValue.trim() === ""
        ) {
            modalRef.current.open();
            return;
        }

       onCreate({
            title: titleValue,
            description: descriptionValue,
            date: dateValue,
        })
    }

    return (
        <>
            <Modal ref={modalRef}>
                <h2 className="text-stone-600 mb-4">There is an error in the field, please correct the error and try again.</h2>
            </Modal>
            <div className="flex flex-col justify-center items-center w-2/3 px-5 py-2">
                <div className="flex w-1">
                    <button onClick={onClose} className="px-4 py-2 text-xs md:text-base">Clear</button>
                    <Button onClick={handleSave}>Save</Button>
                </div>
                <form className="flex flex-col w-[250px]">
                    <TextField
                        placeholder="Title"
                        type="text"
                        ref={titleRef}
                    />
                    <TextField
                        textarea
                        placeholder="Description"
                        ref={descriptionRef}
                    />
                    <TextField
                        placeholder="Due Date"
                        type="date"
                        ref={dateRef}
                    />
                </form>
            </div>
        </>
    );
};

export default Form;