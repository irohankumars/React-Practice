import React, { useState, useEffect, createContext, useContext } from "react";
import Column from "./Column";
import Task from "./Task";
import "./ToDo.css";

export const BoardContext = createContext();

const TaskBoardProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
  { id: "1", title: "Finish React homework", status: "todo" }, { id: "2", title: "Review GitHub workflow", status: "in-progress" }, { id: "3", title: "Watch Stranger Things episode", status: "done" }, { id: "4", title: "Update resume with new project", status: "todo" }, { id: "5", title: "Experiment with ringtone aesthetics", status: "in-progress" }
  ]); //stores all the states


  //updates tasks status when it changed using dropdown
  const moveTask = (taskId, newStatus) => { 
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Use useEffect to change background color for "done" tasks
  useEffect(() => {
    const doneTasks = document.querySelectorAll('.task[data-status="done"]');
    doneTasks.forEach((task) => {
      task.style.backgroundColor = "#dbf3c9";
    });
  }, [tasks]);

  return (
    <BoardContext.Provider value={{ tasks, moveTask }}>
      {children}
    </BoardContext.Provider>
  );
};

const Board = () => {
  const { tasks } = useContext(BoardContext);

  return (
    <div className="board">
      <Column
        title="To Do 🪄"
        tasks={tasks.filter(task => task.status === "todo")}
      />
      <Column
        title="In Progress 🚀"
        tasks={tasks.filter(task => task.status === "inProgress")}
      />
      <Column
        title="Done 🌟"
        tasks={tasks.filter(task => task.status === "done")}
      />
    </div>
  );
};

export default function ToDo() {
  return ( //Wraps the whole board. “brain” of the app.
    <div className="App">
      <TaskBoardProvider>
        <Board />
      </TaskBoardProvider>
    </div>
  );
}