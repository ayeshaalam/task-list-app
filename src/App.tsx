//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import TaskList from "./TaskList";
import "./index.css";

function App() {
  return (
    <header className="header mb-12 relative text-center">
      <h1 className="text-[#edc84b] uppercase text-4xl before:top-1/2 before:-translate-y-1/2 before:left-[-100px] before:w-20 before:h-[2px] before:bg-[#edc84b] after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-[-100px] after:w-20 after:h-[2px] after:bg-[#edc84b]">
        <span className="before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-[-100px] before:w-20 before:h-[2px] before:bg-[#edc84b] after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-[-100px] after:w-20 after:h-[2px] after:bg-[#edc84b]">
          TASK list
        </span>
      </h1>
      <TaskList />
    </header>
  );
}

export default App;
