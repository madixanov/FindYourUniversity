import { lazy, memo, useState } from "react";
import { useThemeStore } from "../../store/theme-store";

const Button = lazy(() => import("../UI/Buttons"))
const Modal = lazy(() => import("../UI/Modal"))

const Container = memo(() => {

  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const theme = useThemeStore((state) => state.theme);

  const darkTheme = theme === "dark" ? "dark" : ""

  const handleClick = () => {
    setIsModalOpen(true)
  }

  return (
    <div className={`university-container ${darkTheme}`}>
      <div className="title-block">
        <h1>Abylai Khan University</h1>
        <span>KZ</span>
      </div>
      <h2>Kazakhstan</h2>
      <div className="container-footer">
        <a href="http://www.ablaikhan.kz/" onClick={(e) => {
          e.preventDefault();    
          setIsModalOpen(true);  
        }}>
          ablaikhan.kz
        </a>
        <Button onClick={handleClick}>Open</Button>
        <Modal isOpen={isModalOpen} onAgree={() => window.open("http://www.ablaikhan.kz/", "_blank")} onClose={() => setIsModalOpen(false)}><p>
          Do you want to leave <span className="modal-brand">UniFinder</span>?
        </p></Modal>
      </div>
      
    </div>
  )
});

export default Container;