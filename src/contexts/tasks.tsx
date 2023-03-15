import React, { useState, useContext } from "react";
import { TaskState, levels, categories, TaskContextType } from "../types";
import getCategory from "../utils/getCategory";
// Creating context
const TaskContext = React.createContext<TaskContextType>({
  task: {} as TaskState,
  setTask: () => {},
  taskList: [],
  setTaskList: () => {},
  addTask: () => {},
  removeTask: () => {},
  getTasks: () => {},
});

// Providing context
const TaskProvider = ({ children }: any) => {
  const [task, setTask] = useState<TaskState>({
    id: 0,
    task: "",
    priority: levels.high,
    energy: levels.low,
    due: new Date(Date.now()),
    category: categories.now,
  } as TaskState);

  const [taskList, setTaskList] = useState<TaskState[]>([]);

  const addTask = () => {
    localStorage.setItem(
      "taskList",
      JSON.stringify([
        ...taskList,
        {
          ...task,
          id: Date.now(),
          category: getCategory(task),
        },
      ])
    );
    setTaskList([...taskList, task]);
    console.log(localStorage.getItem("taskList"));
  };

  const removeTask = (id: number) => {
    const newTaskList = taskList.filter((task) => task.id !== id);
    localStorage.setItem("taskList", JSON.stringify(newTaskList));
    setTaskList([...newTaskList]);
  };

  const getTasks = () => {
    if (typeof window === "undefined") return null;

    const storedTaskList = JSON.parse(localStorage.getItem("taskList") || "{}");
    setTaskList(storedTaskList);
    return storedTaskList;
  };

  return (
    <TaskContext.Provider
      value={{
        task,
        setTask,
        taskList,
        setTaskList,
        addTask,
        removeTask,
        getTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// Creating custom hook
export const useTaskContext = () => useContext(TaskContext);

export { TaskContext, TaskProvider };
