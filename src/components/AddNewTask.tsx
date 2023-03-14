import { levels } from "../types";
import { MdAddTask } from "react-icons/md";
import getCategory from "../utils/getCategory";
import { useTaskContext } from "../contexts/tasks";
import decideUrgency from "../utils/decideUrgency";

function AddNewTask() {
  const { task, setTask, taskList, setTaskList } = useTaskContext();

  const handleTaskSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (task.task && task.due && task.energy && task.priority) {
      if (task.due.getTime() < new Date().getTime()) {
        alert("Date goes back to history!");
        return;
      }

      if (taskList.some((item) => item.task === task.task)) {
        alert("A task with similar name already exists");
        return;
      }

      setTaskList([
        ...taskList,
        {
          ...task,
          id: Date.now(),
          category: getCategory(task),
        },
      ]);
    } else alert("Please fill all properties");
  };

  return (
    <section className="m-2 flex w-96 flex-col gap-2">
      <input
        type="text"
        placeholder="Enter task"
        className="h-12 rounded-md p-1"
        onChange={(e) => setTask({ ...task, task: e.target.value })}
        value={task.task}
      />

      <div className="flex justify-center gap-1 px-1">
        <select
          onChange={(e) =>
            setTask({ ...task, priority: e.target.value as levels })
          }
          className="flex rounded-lg p-1"
          value={task.priority}
          title="priority"
        >
          <option disabled value="">
            priority
          </option>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>

        <select
          onChange={(e) =>
            setTask({ ...task, energy: e.target.value as levels })
          }
          className="flex rounded-lg p-1"
          title="energy"
          value={task.energy}
        >
          <option disabled value="">
            energy
          </option>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>

        <input
          type="date"
          placeholder="Due Date"
          className="flex rounded-lg p-1"
          onChange={(e) => {
            const date = e.target.valueAsDate;
            setTask({ ...task, due: date });
          }}
        />

        <button onClick={handleTaskSubmit}>
          <span className="hidden">Add task</span>
          <MdAddTask className="m-1 h-8 w-8 rounded-xl border border-green-300 p-1 text-green-300 transition-all duration-300 hover:border-black hover:bg-green-300 hover:text-black focus:bg-green-300" />
        </button>
      </div>
    </section>
  );
}

export default AddNewTask;
