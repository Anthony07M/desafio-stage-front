import { Route, Routes } from "react-router-dom";
import { AreaPage } from "../pages/areas";
import { Home } from "../pages/home";
import { TaskPage } from "../pages/tasks";

export const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tarefas" element={<TaskPage />} />
      <Route path="/areas" element={<AreaPage />} />
    </Routes>
  )
};
