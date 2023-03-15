import { TaskState } from "../types";
import { useTaskContext } from "../contexts/tasks";
type TaskType = {
  task: TaskState;
};

export default function Task({ task }: TaskType) {
  const { removeTask } = useTaskContext();

  return (
    <>
      <form>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={() => {
                removeTask(task.id);
              }}
              title={task.task}
            />
            <p>{task.task}</p>
          </div>
          <div className="flex items-center gap-2">
            <p>{task.priority}</p>
            <p>{task.energy}</p>
            <p>{task.due?.toDateString()}</p>
          </div>
        </div>
      </form>
    </>
  );
}
