import {useState} from "react";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

const Form = () => {
    const [project, setProject] = useState({
        name: "",
        description: "",
    });

    return (
        <div className="flex flex-col justify-center items-center w-2/3 px-5 py-2">
            <h2 className="text-xl text-stone-950">Create Project</h2>
            <form className="flex flex-col w-[250px]">
                <Input
                    placeholder="Name project"
                    value={project.name}
                    onChange={(event) => setProject({...project, name: event.target.value})}
                />
                <Input
                    as="textarea"
                    placeholder="Description project"
                    value={project.description}
                    onChange={() => setProject({...project, description: event.target.value})}
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