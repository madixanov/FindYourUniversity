import { lazy, memo } from "react";
import { useThemeStore } from "../../store/theme-store";

const Button = lazy(() => import("../UI/Buttons"));

const Header = () => {
  const theme = useThemeStore((state) => state.theme);
  const toogleTheme = useThemeStore((state) => state.toogleTheme);

  return (
    <header>
        <Title />
        <Input theme={theme} />
        <Button onClick={toogleTheme} className={"theme-button"}>
          {theme === 'light' ? "🌙" : "☀️"}
        </Button>
    </header>
  )
}

const Title = memo(() => {
  return <span>UniFinder 🌍</span>
})

const Input = memo(({ theme }) => {
  return <input type="text" placeholder="Search country..." style={{ backgroundColor: theme === "light" ? "#fff" : "#1c1c1c", color:  theme === "light" ? "#1c1c1c" : "#fff"}}/>
})

export default Header;