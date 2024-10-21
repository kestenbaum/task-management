import Button from "./Button.jsx";

const Sidebar = ({onAddProject}) => {
    return (
        <aside
            className="w-1/3 text-center px-8 py-16 bg-stone-900 text-stone-50 md:w-72"
        >
            <p className="my-2 text-xl">YOUR PROJECTS</p>
            <Button onClick={onAddProject}>+ Add Project</Button>
        </aside>
    );
};

export default Sidebar;