import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const  WelcomingPage = lazy(() => import("./pages/WelcomingPage"))
const MainPage = lazy(() => import("./pages/MainPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<WelcomingPage />}/>
          <Route path="/search-universities" element={<MainPage />}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;