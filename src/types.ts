export enum levels {
  low = "low",
  medium = "medium",
  high = "high",
}

export enum categories {
  now,
  asap,
  soon,
  next,
  rethink,
}

export interface TaskState {
  id: number;
  task: string;
  priority: levels;
  energy: levels;
  due: string;
  category: categories;
}

export interface AddNewTaskProps {
  task: TaskState;
  setTask: React.Dispatch<React.SetStateAction<TaskState>>;
  taskList: TaskState[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskState[]>>;
}

export interface TaskListProps {
  taskList: TaskState[];
}