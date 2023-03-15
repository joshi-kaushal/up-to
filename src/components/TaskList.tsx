import { useEffect } from "react";
import { useTaskContext } from "../contexts/tasks";
import { categories, levels } from "../types";
import Task from "./Task";

export default function TaskList() {
  const { taskList } = useTaskContext();

  // filter task which have "now" category
  const now = taskList.filter((task) => task.category === "now");

  return (
    <section className="my-0 mx-auto w-11/12 self-start md:w-10/12">
      <hr className="my-8" />
      <h2 className="my-2 text-2xl font-bold tracking-wider text-white">
        🍽 Your plate
      </h2>

      {now && (
        <div className="mx-auto flex flex-col gap-4 rounded-lg border-2 border-slate-300 bg-slate-300 p-4 md:w-5/6 lg:w-3/6">
          {now.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      )}
    </section>
  );
}
