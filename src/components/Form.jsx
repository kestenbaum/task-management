import React from 'react';
import Button from "./Button.jsx";

const Form = () => {
    return (
        <div className="flex flex-col justify-center items-center w-2/3 px-5 py-2">
            <h2 className="text-xl text-stone-950">Create Project</h2>
            <form className="flex flex-col w-[250px]">
                <input
                    type="text"
                    className="my-2 px-4 py-2 w-[250px] bg-stone-500 text-xs cursor-pointer"
                />
                <div className="flex justify-between">
                    <Button>Clear Form</Button>
                    <Button>Save</Button>
                </div>
            </form>
        </div>
    );
};

export default Form;