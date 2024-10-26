import React, {useState} from 'react';

const NewTask = ({onAddTask}) => {
    const [valueTask, setValueTask] = useState("");

    function handleChange (event) {
        setValueTask(event.target.value);
    }

    function handleClick () {
        if (valueTask.trim() === "") return;

        onAddTask(valueTask);
        setValueTask("")
    }

    return (
        <div className="flex items-center gap-4 mb-4">
            <input
                type="text"
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                onChange={handleChange}
                value={valueTask}
            />
            <button
                className="text-stone-700 hover:text-stone-950"
                onClick={handleClick}
            >
                Add Task
            </button>
        </div>
    );
};

export default NewTask;