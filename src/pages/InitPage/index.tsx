import { useContext } from "react";
import CoverPage from "../../components/CoverPage";
import ModalError from "../../components/Modais/ModalError";
import ModalLoad from "../../components/Modais/ModalLoad";
import ModalSucess from "../../components/Modais/ModalSucess";
import { UserContext } from "../../context/UserContext";
import { StyledInitPage } from "./style";
import { motion } from "framer-motion";

export default function InitPage() {
  const { Page, modal } = useContext(UserContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <StyledInitPage>
        <CoverPage />
        {Page}
      </StyledInitPage>
      {modal === "error" && <ModalError />}
      {modal === "success" && <ModalSucess />}
      {modal === "load" && <ModalLoad />}
    </motion.div>
  );
}
