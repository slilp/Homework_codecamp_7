import React, { useState } from "react";
import ToDo from "./ToDo";
import AddListForm from "./AddListForm";
import styled from "styled-components";

const Header = styled.div`
  background-color: #2a9df4;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin-bottom: 2rem;
`;

const HeaderItem = styled.div`
  width: 25%;
  text-align: center;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

const Search = styled.div`
  width: 20%;
`;

const SelectSort = styled.select`
  padding:1rem;
  font-size:1rem;
`

const options = [
  { value: "all", label: "all" },
  { value: "finished", label: "finished" },
  { value: "canceled", label: "canceled" },
  { value: "waiting", label: "waiting" },
];

const TodoLIst = (prop) => {
  const [openBtn, setOpenBtn] = useState(true);
  const [todoContent, setTodoContent] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [selectedSort, setSelectedSort] = useState("all");

  const sort = (selectedSort) => {
    setSelectedSort(selectedSort.target.value);
  };

  return (
    <div>
      <Header>
        <HeaderItem>
          <Title>To-Do</Title>
        </HeaderItem>
        <HeaderItem>
          <SelectSort value={selectedSort.value} onChange={sort}>
            {options.map((item)=>
              <option value={item.label}>{item.label}</option>
            )}
          </SelectSort>
        </HeaderItem>
      </Header>
      {todoList
        .filter((x) => selectedSort == "all" || x.status == selectedSort)
        .map((item, index) => (
          <ToDo
            key={index}
            id={item.id}
            text={item.text}
            setTodoList={setTodoList}
            todoList={todoList}
            status={item.status}
          ></ToDo>
        ))}
      <AddListForm
        openAddBtn={openBtn}
        setTodoList={setTodoList}
        todoList={todoList}
        content={todoContent}
        todoContent={setTodoContent}
        openInputForm={setOpenBtn}
      ></AddListForm>
    </div>
  );
};

export default TodoLIst;
