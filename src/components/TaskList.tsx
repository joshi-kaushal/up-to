import { useEffect } from "react";
import { useTaskContext } from "../contexts/tasks";
import { categories, levels } from "../types";

export default function TaskList() {
  const { taskList } = useTaskContext();

  // filter task which have "now" category
  const now = taskList.filter((task) => task.category === "now");

  return (
    <section className="my-0 mx-auto w-11/12 self-start md:w-10/12">
      <h2 className="text-2xl text-white">task</h2>
      {taskList.map((task) => {
        return (
          <p className="text-white" key={task.id}>
            {task.task}
          </p>
        );
      })}

      <hr className="my-4" />
      <p>You should do these now: </p>

      {now.map((task) => {
        return (
          <p className="text-white" key={task.id}>
            {task.task}
          </p>
        );
      })}
    </section>
  );
}
