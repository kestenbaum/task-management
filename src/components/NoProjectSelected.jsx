import noProjectImage from "../assets/no-projects.png";
import Button from "./Button.jsx";

const NoProjectSelected = ({ onAddProject }) => {
    return (
        <div className="mt-24 text-center w-2/3">
            <img className="w-16 h-16 object-contain mx-auto" src={ noProjectImage } alt="image logo"/>
            <h2 className="text-xl font-bold text-stone-500 my-4">No project selected</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
            <p className="mt-4">
                <Button onClick={onAddProject}>Create a new project</Button>
            </p>
        </div>
    );
};

export default NoProjectSelected;