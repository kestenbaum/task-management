import Button from "./Button.jsx";
import Input from "./Input.jsx";

const Form = () => {
    return (
        <div className="flex flex-col justify-center items-center w-2/3 px-5 py-2">
            <div className="flex w-1">
                <a className="px-4 py-2 text-xs md:text-base" href="">Clear</a>
                <Button>Save</Button>
            </div>
            <form className="flex flex-col w-[250px]">
                <Input
                    placeholder="Title"
                />
                <Input
                    as="textarea"
                    placeholder="Description"
                />
                <Input
                    placeholder="Due Date"
                />
            </form>
        </div>
    );
};

export default Form;