import { useTaskContext } from "../contexts/tasks";

export default function TaskList() {
  
  const {taskList} = useTaskContext()
  return (
    <section className="my-0 mx-auto w-11/12 self-start md:w-10/12">
      <h2 className="text-2xl text-white">task</h2>
    {
      taskList.map(task => {
        return <p key={task.id}>{task.task}</p>
      })
    }   
    </section>
  );
}
