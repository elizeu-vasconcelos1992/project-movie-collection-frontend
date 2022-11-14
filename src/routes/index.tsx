import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import InitPage from "../pages/InitPage";

export default function Routing() {
  return (
    <Routes>
      <Route path='/' element={<InitPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}
