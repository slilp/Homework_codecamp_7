import styled from "styled-components";

const Button = styled.button`
  font-size: 1rem;
  font-weight: bold;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  margin: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormItem = styled.div`
  margin: 2rem;
  width: 25%;
  text-align: center;
  margin:1rem;
  @media (max-width: 768px) {
    width:100%;
  }
`;

const InputTodo = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 1rem;
`;

const AddListForm = (props) => {
  const submitTodo = () => {
      if(props.content.length != 0)
      {
        const add = { text: props.content, status: "waiting" };
        props.setTodoList([...props.todoList,add]);
      }
   
    props.todoContent("");
    props.openInputForm(true);
  };

  return (
    <div>
      {props.openAddBtn && (
        <Button onClick={() => props.openInputForm(false)}>
          + Add a todo{" "}
        </Button>
      )}
      {!props.openAddBtn && (
        <FromInput
          todoContent={props.todoContent}
          openInputForm={props.openInputForm}
          content={props.content}
          submitTodo={submitTodo}
        ></FromInput>
      )}
    </div>
  );
};

const FromInput = (props) => {
  const onChangeContent = (e) => {
    props.todoContent(e.target.value);
  };

  return (
    <Form>
      <FormItem>
        <InputTodo onChange={onChangeContent} value={props.content}></InputTodo>
      </FormItem>
      <FormItem>
        <Button onClick={props.submitTodo}> Ok </Button>
        <Button onClick={() => props.openInputForm(true)}> Exit </Button>
      </FormItem>
    </Form>
  );
};

export default AddListForm;
