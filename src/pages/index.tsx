import { type NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import { TaskState } from "../types";
import AddNewTask from "../components/AddNewTask";
import TaskList from "../components/TaskList";

const Home: NextPage = () => {
  const [task, setTask] = useState<TaskState>({} as TaskState);
  const [taskList, setTaskList] = useState<TaskState[]>([]);

  return (
    <>
      <Head>
        <title>Upto</title>
        <meta
          name="description"
          content="Keep track of everything you are up to."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <section className="container flex flex-col items-center justify-center gap-12 p-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Up to
          </h1>
          <h3 className="text-2xl font-semibold text-white">
            Keep track of everything you are up to!
          </h3>
        </section>

        <AddNewTask
          task={task}
          setTask={setTask}
          taskList={taskList}
          setTaskList={setTaskList}
        />

        <TaskList taskList={taskList} />
      </main>
    </>
  );
};

export default Home;
