import { Routes, Route, Navigate } from "react-router-dom";
import Dashborad from "../pages/Dashboard";
import InitPage from "../pages/InitPage";

export default function Routing() {
  return (
    <Routes>
      <Route path='/' element={<InitPage />} />
      <Route path='/dashboard' element={<Dashborad />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}
