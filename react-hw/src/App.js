import logo from "./logo.svg";
import "./App.css";
import { Switch, Link, Route } from "react-router-dom";
import Corousel from "./Corousel/Corousel";
import TodoList from "./TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <ul style={{listStyleType:"none"}}>
        <li>
          <Link to='/todo-list'>TO DO LIST</Link>
        </li>
        <li>
          <Link to='/carousel'>COROUSEL SLIDE SHOW</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/carousel"  component={Corousel}></Route>
        <Route path="/todo-list"  component={TodoList}></Route>
      </Switch>
    </div>
  );
}

export default App;
