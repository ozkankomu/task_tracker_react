import axios from "axios";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const TaskList = ({ task, getTask }) => {
  const deleteTask = async (id) => {
    const url = "https://63518208dfe45bbd55c21a6c.mockapi.io/api/task";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTask();
  };
  return (
    <div>
      {task.map((item) => {
        const { id, task, Date } = item;
        return (
          <div
            className="mt-3 d-flex justify-content-between flex-column bg-secondary rounded-2 p-2"
            style={{ boxShadow: "2px 2px 2px white" }}
          >
            <div>
              <h4>{task}</h4>
              <p>{Date}</p>
            </div>
            <RiDeleteBin6Line
              onClick={() => deleteTask(id)}
              style={{
                cursor: "pointer",
                marginRight: "20px",
                fontSize: "2rem",
                boxShadow: "1px 1px 2px wheat",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
