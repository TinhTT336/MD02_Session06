import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./mini_project/TodoList";
import Todo from "./mini_project/Todo";
import Input from "./base/Input";
import Radio from "./base/Radio";
import Checkbox from "./base/Checkbox";
import Index from "./Homework/Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <TodoList /> */}
      <Todo />
      {/* <Input /> */}
      {/* <Radio /> */}
      {/* <Checkbox /> */}
      {/* <Index /> */}
    </>
  );
}

export default App;
