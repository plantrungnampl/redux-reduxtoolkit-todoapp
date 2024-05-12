import { Col, Row, Input, Button, Select, Tag } from "antd";
import { Todo } from "../Todo";
// import Todo from "../Todo";
import { useSelector, useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todoRemainingSelector } from "../../redux/selector";
import { todoListSlice } from "./TodoSlice";

export const TodoList = () => {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Low");
  const dispatch = useDispatch();
  const handleAddButtonClick = () => {
    //dispatch addTodo action
    dispatch(
      todoListSlice.actions.ADD_TODO({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: priority,
      })
    );
    setTodoName("");
    setPriority("Low");
  };
  const todoList = useSelector(todoRemainingSelector);
  // const searchText = useSelector(todoRemainingSelector);
  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handlePriorityChange = (value) => {
    setPriority(value);
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            id={todo.id}
            key={todo.id}
            name={todo.name}
            prioriry={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            onChange={handlePriorityChange}
            value={priority}
            defaultValue="Medium"
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
};
