import { lazy, useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useThemeStore } from "../store/theme-store";

const Button = lazy(() => import("../components/UI/Buttons"));
const PageContent = lazy(() => import("./contents/pageContent"));

const WelcomingPage = () => {
  const theme = useThemeStore((state) => state.theme);
  const toogleTheme = useThemeStore((state) => state.toogleTheme);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/search-universities");
  }, [navigate]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <div className="theme-header">
        <Button onClick={toogleTheme} className={"theme-button"}>
          {theme === "light" ? "🌙" : "☀️"}
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <PageContent handleClick={handleClick} />
      </motion.div>
    </div>
  );
};

export default WelcomingPage;
