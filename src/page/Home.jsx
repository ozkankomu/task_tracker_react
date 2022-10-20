import React from "react";
import { useState, useEffect } from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Task Bar");
  const [task, setTask] = useState([]);

  const url = "https://63518208dfe45bbd55c21a6c.mockapi.io/api/task";

  const toggle = (e) => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar";
    setText(buttonText);
  };

  const getTask = async () => {
    const { data } = await axios(url);
    setTask(data);
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="mt-4 d-flex justify-content-center flex-column">
      <Button
        onClick={() => {
          toggle();
        }}
        size="lg m-3"
        variant="danger"
      >
        {text}
      </Button>
      {isOpen && <AddTask />}
      <TaskList task={task} />
    </div>
  );
};

export default Home;
