import { useState } from "react";

import Sidebar from "./components/Sidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import Form from "./components/Form.jsx";
import SelectedProject from "./components/SelectedProject.jsx";


function App() {
    const [projectState, setProjectState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: []
    })

    function handleAddTask (text) {
        setProjectState(prevState => {
            const taskId = Math.random().toString();

            const newTask = {
                text: text,
                id: taskId
            }

            return {
                ...prevState,
                tasks: [...prevState.tasks, newTask]
            }
        })
    }

    function handleRemoveTask (id) {
        setProjectState(prevState => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter(task => task.id !== id)
            }
        })
    }

    function handleSelectedProject(id) {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: id
            }
        })
    }

    function handleAddProject() {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null
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
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject]
            }
        })
    }

    function handleDeleteProject() {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
            }
        })
    }

    function handleCloseForm() {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined
            }
        })
    }

    const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)

    let content = <SelectedProject
        onAddTask={handleAddTask}
        onDeleteTask={handleRemoveTask}
        project={selectedProject}
        onDelete={handleDeleteProject}
        tasks={projectState.tasks}
    />;

    if (projectState.selectedProjectId === null) {
        content = <Form
            onCreate={handleCreateProject}
            onClose={handleCloseForm}
        />
    } else if (projectState.selectedProjectId === undefined) {
        content = <NoProjectSelected onAddProject={handleAddProject}/>;
    }

    return (
        <main className="h-screen flex gap-8">
            <Sidebar
                onAddProject={handleAddProject}
                onSelectProject={handleSelectedProject}
                projects={projectState.projects}
                selectedProjectId={projectState.selectedProjectId}
            />
            {content}
        </main>
    );
}

export default App;
