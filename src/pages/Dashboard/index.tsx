import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Main from "../../components/Main";
import ModalError from "../../components/Modais/ModalError";
import ModalLoad from "../../components/Modais/ModalLoad";
import ModalSucess from "../../components/Modais/ModalSucess";
import { UserContext } from "../../context/UserContext";
import { StyledDashboard } from "./style";
import { motion } from "framer-motion";

export default function Dashboard() {
  const { modal } = useContext(UserContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/", { replace: true });
    }
  }, [token, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <StyledDashboard>
        <Header />
        <Main />
      </StyledDashboard>
      {modal === "error" && <ModalError />}
      {modal === "success" && <ModalSucess />}
      {modal === "load" && <ModalLoad />}
    </motion.div>
  );
}
