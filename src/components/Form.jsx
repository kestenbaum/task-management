import {useRef} from "react";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

const Form = ({onCreate}) => {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const dateRef = useRef(null);


    const handleSave = () => {
        const titleValue = titleRef.current.value;
        const descriptionValue = descriptionRef.current.value;
        const dateValue = dateRef.current.value;

        return onCreate({
            title: titleValue,
            description: descriptionValue,
            date: dateValue,
        })

        //Validation ...
    }


    return (
        <div className="flex flex-col justify-center items-center w-2/3 px-5 py-2">
            <div className="flex w-1">
                <a className="px-4 py-2 text-xs md:text-base" href="">Clear</a>
                <Button onClick={handleSave}>Save</Button>
            </div>
            <form className="flex flex-col w-[250px]">
                <Input
                    placeholder="Title"
                    type="text"
                    ref={titleRef}
                />
                <Input
                    textarea
                    placeholder="Description"
                    ref={descriptionRef}
                />
                <Input
                    placeholder="Due Date"
                    type="date"
                    ref={dateRef}
                />
            </form>
        </div>
    );
};

export default Form;