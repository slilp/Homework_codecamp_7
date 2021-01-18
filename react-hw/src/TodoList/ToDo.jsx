import styled from "styled-components";
import React from "react";
import Select from "react-select";

const ToDoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ToDoItem = styled.div`
  margin: 0.5rem;
  width: 25%;
  text-align: center;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

const options = [
  { value: "finished", label: "finished" },
  { value: "canceled", label: "canceled" },
  { value: "waiting", label: "waiting" },
];



const Todo = (props) => {
  return (
    <React.Fragment>
      <ToDoContent>
        <ToDoItem>
            {props.text}
        </ToDoItem>
        <ToDoItem>
          <Select
            options={options}
            defaultValue={{ label: `${props.status}`, value: `${props.status}` }}
          />
        </ToDoItem>
      </ToDoContent>
    </React.Fragment>
  );
};

export default Todo;
