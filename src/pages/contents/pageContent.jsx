import { memo, lazy, useState, useEffect, useRef } from "react";
import countries from "./countries";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";

gsap.registerPlugin(TextPlugin);

const Button = lazy(() => import("../../components/UI/Buttons"));

const PageContent = memo(({ handleClick }) => {

  const [ index, setIndex ] = useState(0);
  const textRef = useRef(null);
  const timeoutRef = useRef(null); 

  useEffect(() => {
    // Анимируем появление текста
    gsap.to(textRef.current, {
      duration: 0.7,
      text: countries[index],
      ease: "power1.inOut",
    });

    // Устанавливаем таймер на смену следующего текста
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % countries.length);
    }, 2000); // 2 секунды между сменой

    // Очистка при размонтировании/перерендере
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  return (
    <div className="welcoming-container">
      <div className="welcoming-text">
        <h1>Welcome to UniFinder! 🌍</h1>
        <p>
          Find top universities around the world — just choose a country ✨<br />
          Looking to study in <span ref={textRef} style={{
              display: "inline-block",
              fontWeight: "600",
              color: "#4f46e5",
            }}></span><br />
          Enter a country and start your academic journey today! 🚀📚
        </p>
      </div>
      <Button onClick={handleClick} className="welcoming">
        Start Searching
      </Button>
    </div>
  );
});

export default PageContent;
