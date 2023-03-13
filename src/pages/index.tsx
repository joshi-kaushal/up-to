import { type NextPage } from "next";
import Head from "next/head";
import AddNewTask from "../components/AddNewTask";
import TaskList from "../components/TaskList";
import {  TaskProvider } from "../contexts/tasks";

const Home: NextPage = () => {
  // const [task, setTask] = useState<TaskState>({
  //   id: 0,
  //   task: "",
  //   priority: levels.high,
  //   energy: levels.low,
  //   due: new Date(Date.now()),
  //   category: categories.now,
  // } as TaskState);
  // const [taskList, setTaskList] = useState<TaskState[]>([]);


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
    
      <TaskProvider>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <section className="container flex flex-col items-center justify-center gap-12 p-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Up to
          </h1>
          <h3 className="text-2xl font-semibold text-white">
            Keep track of everything you are up to!
          </h3>
        </section>

        <AddNewTask />

        <TaskList /> 
        
      </main>
      </TaskProvider>
    </>
  );
};

export default Home;
