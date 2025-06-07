import { lazy } from "react";
import { motion } from "framer-motion";
import { useSearchStore } from "../../store/search-store";

const Container = lazy(() => import("../containers/UniversityContainer"));

const Main = () => {
  const searchValue = useSearchStore((state) => state.searchValue);

  return (
    <main>
      <motion.div
        key={searchValue || "default"} // при каждом новом значении - новая анимация
        className="university-list"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Container />
      </motion.div>
    </main>
  );
};

export default Main;
