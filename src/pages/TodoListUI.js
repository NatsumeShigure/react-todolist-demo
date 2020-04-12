import React from "react";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";

const TodoListUI = props => {
  const {
    inputValue,
    list,
    handleInputChange,
    handleClick,
    handleDeleteItem
  } = props;

  return (
    <div style={{ margin: "10px 0 0 10px" }}>
      <div>
        <Input
          placeholder="todo info"
          style={{ width: "300px", marginRight: "10px" }}
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button type="primary" onClick={handleClick}>
          提交
        </Button>
      </div>
      <List
        bordered
        style={{ marginTop: "10px", width: "300px" }}
        dataSource={list}
        renderItem={(item, index) => (
          <List.Item onClick={() => handleDeleteItem(index)}>{item}</List.Item>
        )}
      />
    </div>
  );
};

export default TodoListUI;
