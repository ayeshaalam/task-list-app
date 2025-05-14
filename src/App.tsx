//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import TaskList from "./TaskList";
//import "./index.css";

function App() {
  return (
    <header
      className=" flex flex-col items-center 
    bg-[#1f1f1f] "
    >
      <h1 className="text-5xl font-bold text-[#edc84b] 400  mb-4">TASK list</h1>
      <TaskList />
    </header>
  );
}

export default App;
