import React from 'react';
import NewTask from "./NewTask.jsx";

const Tasks = ({onAddTask, onDelete, tasks}) => {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onAddTask={onAddTask}/>
            {
                !tasks || tasks.length === 0 &&
                <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>
            }
            <ul>
                {tasks.length > 0 && tasks.map(task =>
                    <li
                        key={task.id}
                        className="flex justify-between items-center w-64 px-2 py-1 rounded-sm bg-stone-200 mb-1"
                    >
                        {task.text}
                        <button
                            className="text-red-500"
                            onClick={() => onDelete(task.id)}
                        >
                            Clear
                        </button>
                    </li>
                )}
            </ul>
        </section>
    );
};

export default Tasks;