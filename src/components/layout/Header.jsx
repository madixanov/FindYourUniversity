import { lazy, memo, useState } from "react";
import { useThemeStore } from "../../store/theme-store";
import { useSearchStore } from "../../store/search-store";

const Button = lazy(() => import("../UI/Buttons"));

const Header = () => {
  const theme = useThemeStore((state) => state.theme);
  const toogleTheme = useThemeStore((state) => state.toogleTheme);
  const addToSearch = useSearchStore((state) => state.addToSearch);

  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      addToSearch(inputValue.trim());
      setInputValue(""); // ✅ очищаем поле
    }
  }

  return (
    <header>
      <Button onClick={toogleTheme} className={"theme-button"}>
        {theme === "light" ? "🌙" : "☀️"}
      </Button>
      <Title />
      <Input
        theme={theme}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
      />
    </header>
  );
};

const Title = memo(() => {
  return <span>UniFinder 🌍</span>;
});

const Input = memo(({ theme, inputValue, setInputValue, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search country..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#1c1c1c",
          color: theme === "light" ? "#1c1c1c" : "#fff",
        }}
      />
    </form>
  );
});

export default Header;
