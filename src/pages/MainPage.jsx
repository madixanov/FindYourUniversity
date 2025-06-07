import { lazy, useEffect } from "react";
import { useThemeStore } from "../store/theme-store";

const Header = lazy(() => import("../components/layout/Header"));
const Main = lazy(() => import("../components/layout/Main"));
const Footer = lazy(() => import("../components/layout/Footer"));

const MainPage = () => {

  const theme = useThemeStore((state) => state.theme);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="main-page">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default MainPage;