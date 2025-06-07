import { lazy } from "react";

const Container = lazy(() => import("../containers/UniversityContainer"))

const Main = () => {
  return (
    <main>
      <div className="university-list">
        <Container />
        <Container />
        <Container />
        <Container />
        <Container />
        <Container />
        <Container />
        <Container />
        <Container />
      </div>
    </main>
  )
}

export default Main;