import styled from "styled-components";
import Select from "react-select";
import React from 'react';

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

const SelectSort = styled.select`
  padding:1rem;
  font-size:1rem;
`

const Todo = (props) => {

  const changeStatusTodo =(existingStatus)=>{
     props.todoList.find(x=>x.id == props.id).status = existingStatus.target.value ;
     props.setTodoList([...props.todoList]);
  }

  return (
    <React.Fragment>
      <ToDoContent>
        <ToDoItem>
            {props.text}
        </ToDoItem>
        <ToDoItem>
        {props.status}
        <SelectSort value={props.status} onChange={changeStatusTodo}>
            {options.map((item)=>
              <option value={item.label}>{item.label}</option>
            )}
          </SelectSort>
        </ToDoItem>
      </ToDoContent>
    </React.Fragment>
  );
};

export default Todo;
