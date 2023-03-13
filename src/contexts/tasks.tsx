import React, { useState, useContext } from "react";
import { TaskState, levels, categories, TaskContextType } from "../types";

// Craeting context
const TaskContext = React.createContext<TaskContextType>({
	task: {} as TaskState,
	setTask: () => {},
	taskList: [],
	setTaskList: () => {}
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

  return (
    <TaskContext.Provider value={{task, setTask, taskList, setTaskList}}>
      {children}
    </TaskContext.Provider>
  );
};

// Creating custom hook
export const useTaskContext = () => useContext(TaskContext);

export { TaskContext, TaskProvider };

