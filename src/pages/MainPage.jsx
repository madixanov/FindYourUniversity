import { lazy } from "react";

const Header = lazy(() => import("../components/layout/Header"));
const Main = lazy(() => import("../components/layout/Main"));
const Footer = lazy(() => import("../components/layout/Footer"));

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default MainPage;