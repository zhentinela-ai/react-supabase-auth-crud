import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "./TaskCard";

export default function TaskList({ done = false }) {
  const { tasks, getTasks, loading } = useTasks();

  useEffect(() => {
    getTasks(done);
  }, [done]);

  function renderTasks() {
    if (loading) {
      return <p>Loading...</p>;
    } else if (tasks.length === 0) {
      return <p>No tasks found</p>;
    } else {
      return (
        <div>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      );
    }
  }

  return <div>
    {renderTasks()}
  </div>
}
