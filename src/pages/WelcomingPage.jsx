import { lazy, useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import { useThemeStore } from "../store/theme-store";

const Button = lazy(() => import("../components/UI/Buttons"))
const PageContent = lazy(() => import("./contents/pageContent"))

const WelcomingPage = () => {
  const theme = useThemeStore((state) => state.theme);
  const toogleTheme = useThemeStore((state) => state.toogleTheme);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {navigate("/search-universities")}, [navigate]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <div className="theme-header">
        <Button onClick={toogleTheme} className={"theme-button"}>
          {theme === 'light' ? "🌙" : "☀️"}
        </Button>
      </div>
      <PageContent handleClick={handleClick} />
    </div>
  )
}

export default WelcomingPage;