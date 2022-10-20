import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

const AddTask = ({ getTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task, date };
    addNewTask(newTask);
    setDate("");
    setTask("");
  };

  const addNewTask = async (newTask) => {
    const url = "https://63518208dfe45bbd55c21a6c.mockapi.io/api/task";

    try {
      await axios.post(url, newTask);
    } catch (error) {
      console.log(error);
    }
    getTask();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control
            value={task}
            type="text"
            required
            placeholder="Enter Task"
            onChange={(e) => setTask(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control
            value={date}
            required
            type="datetime-local"
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>

        <Button variant="danger btn-m w-100" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default AddTask;
