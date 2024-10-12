import {useState} from "react";
import Button from "./Button.jsx";
import ListItem from "./ListItem.jsx";

const Sidebar = () => {
    const [project, setProject] = useState(["project", "project"]);

    const projectItems = project.length > 0
        ? <ul className="m-1">
            {project.map((project, index) => (
                <ListItem item={project} key={index}/>
            ))}
        </ul>
        : <div className="py-1">You don*t have project</div>

    return (
        <aside
            className="w-1/3 text-center px-8 py-16 bg-stone-900 text-stone-50 md:w-72"
        >
            <p className="my-2 text-xl">Your projects</p>
            <Button>+ Add Project</Button>
            {projectItems}
        </aside>
    );
};

export default Sidebar;