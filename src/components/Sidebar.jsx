import Button from "./Button.jsx";

const Sidebar = ({onAddProject, projects, onSelectProject, selectedProjectId}) => {
    return (
        <aside
            className="w-1/3 text-center px-8 py-16 bg-stone-900 text-stone-50 md:w-72"
        >
            <p className="my-2 text-xl">YOUR PROJECTS</p>
            <Button onClick={onAddProject}>+ Add Project</Button>
            <ul className="mt-5">
                {projects.map((project, index) => {
                    let cssClasses = "p-1 text-start text-stone-50 cursor-pointer text-xs hover:text-stone-400";

                    if (project.id === selectedProjectId) {
                        cssClasses += " bg-stone-700 text-stone-50 hover:text-stone-900";
                    } else {
                        cssClasses += " bg-stone-900 "
                    }

                    return (
                        <li
                            key={index}
                            onClick={() => onSelectProject(project.id)}
                            className={cssClasses}
                        >
                            {project.title}
                        </li>)
                })}
            </ul>
        </aside>
    );
};

export default Sidebar;