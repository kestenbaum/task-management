import {useState} from "react";

import Sidebar from "./components/Sidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import Form from "./components/Form.jsx";

function App() {
    const [projectState, setProjectState] = useState({
        projectStatus: undefined,
        projects: [],
    })

    function handleAddProject() {
        setProjectState(prevState => {
            return {
                ...prevState,
                projectStatus: null
            }
        })
    }

    function handleCreateProject(projectDate) {
        setProjectState(prevState => {

            const newProject = {
                ...projectDate,
                id: Math.random().toString()
            }

            return {
                ...prevState,
                projectStatus: undefined,
                projects: [...prevState.projects, newProject]
            }
        })
    }

    let content;

    if (projectState.projectStatus === null) {
        content = <Form onCreate={handleCreateProject}/>
    } else if (projectState.projectStatus === undefined) {
        content = <NoProjectSelected onAddProject={handleAddProject}/>;
    }

    return (
        <main className="h-screen flex gap-8">
            <Sidebar onAddProject={handleAddProject} projects={projectState.projects} />
            {content}
        </main>
    );
}

export default App;
