import React from "react";
import { BoardContext } from "./ToDo.jsx";
 import {useContext} from "react";

export default function Task({ task }) {
  const {tasks, moveTask} = useContext(BoardContext);
  function handleStatusChange(e) {
    return moveTask(task.id, e.target.value);
  }

  return (
    <div className="task" data-status={task.status} style={{color:"black"}}>
      <p>{task.title}</p>
      <select value={task.status} onChange={handleStatusChange} >
          <option value="" disabled>
          Select
        </option>
        <option value="todo">To Do</option>
        <option value="inProgress">In Progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
}
