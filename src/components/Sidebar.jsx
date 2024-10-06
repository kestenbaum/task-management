import Button from "./Button.jsx";

const Sidebar = () => {
    return (
        <aside
            className="w-1/3 text-center px-8 py-16 bg-stone-900 text-stone-50 md:w-72"
        >
            <Button>+ Add Project</Button>
        </aside>
    );
};

export default Sidebar;