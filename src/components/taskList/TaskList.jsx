import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const TaskList = ({ task }) => {
  return (
    <div>
      {task.map((item) => {
        const { id, task, Date } = item;
        return (
          <div className="mt-2 d-flex justify-content-between flex-column bg-secondary rounded-2 p-2">
            <div>
              <h4>{task}</h4>
              <p>{Date}</p>
            </div>
            <RiDeleteBin6Line
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
