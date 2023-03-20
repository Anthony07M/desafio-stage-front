import { Route, Routes } from "react-router-dom";
import { Area } from "../pages/areas";
import { Home } from "../pages/home";
import { Process } from "../pages/process";
import { Task } from "../pages/tasks";

export const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/tarefas" element={<Task/>}/>
      <Route path="/areas" element={<Area/>}/>
      <Route path="/processos" element={<Process/>}/>
    </Routes>
  )
};
