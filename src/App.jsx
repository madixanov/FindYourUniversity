import { lazy, Suspense } from "react";

const MainPage = lazy(() => import("./pages/MainPage"));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <MainPage />
      </Suspense>
    </>
  )
}

export default App;