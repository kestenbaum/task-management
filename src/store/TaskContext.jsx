import { createContext } from "react";

export const TaskContext = createContext({
    tasks: []
});

const value = {
    tasks: []
}

export default function TaskContextProvider({children}) {
    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}