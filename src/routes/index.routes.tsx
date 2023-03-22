import { Route, Routes } from "react-router-dom";
import { Area } from "../pages/areas";
import { Home } from "../pages/home";
import { ProcessPage } from "../pages/process";
import { TaskPage } from "../pages/tasks";

export const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/tarefas" element={<TaskPage/>}/>
      <Route path="/areas" element={<Area/>}/>
      <Route path="/processos" element={<ProcessPage/>}/>
    </Routes>
  )
};
