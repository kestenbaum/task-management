import Button from "./Button.jsx";

const Sidebar = () => {
    const projects = [];

    return (
        <aside
            className="w-1/3 text-center px-8 py-16 bg-stone-900 text-stone-50 md:w-72"
        >
            <Button>+ Add Project</Button>
            <p className="py-2 text-xl text-start">Created projects</p>
            <ul className="py-2 text-start">
                {projects.length > 0
                    ? projects.map((project, idx) => <li key={idx}>{project}</li>)
                    : <li>Project list null.</li>
                }
            </ul>
        </aside>
    );
};

export default Sidebar;