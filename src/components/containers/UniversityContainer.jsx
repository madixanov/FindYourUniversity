import { lazy, memo, useEffect, useState } from "react";
import { useThemeStore } from "../../store/theme-store";
import { useSearchStore } from "../../store/search-store";
import countries from "../../pages/contents/countries";

const Button = lazy(() => import("../UI/Buttons"));
const Modal = lazy(() => import("../UI/Modal"));

const Container = memo(() => {
  const searchValue = useSearchStore((state) => state.searchValue);
  const theme = useThemeStore((state) => state.theme);
  const darkTheme = theme === "dark" ? "dark" : "";

  const [unis, setUnis] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  useEffect(() => {
    const fetchData = async (country) => {
      try {
        const res = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
        const data = await res.json();

        if (data.length === 0) {
          setNotFound(true);
          setUnis([]);
        } else {
          setUnis(data.map((uni, index) => ({
            id: index,
            name: uni.name,
            twoCode: uni.alpha_two_code,
            webPage: uni.web_pages,
            domain: uni.domains,
            country: uni.country
          })));
          setNotFound(false);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setNotFound(true);
        setUnis([]);
      }
    };

    if (searchValue) {
      fetchData(searchValue);
    } else {
      const randomCountry = countries[Math.floor(Math.random() * countries.length)];
      fetchData(randomCountry);
    }
  }, [searchValue]);

  const handleAgree = () => {
    if (selectedUniversity) {
      window.open(selectedUniversity.webPage[0], "_blank");
    }
    setIsModalOpen(false);
  };

  return (
    <>
      {notFound ? (
        <p style={{ fontSize: "20px", textAlign: "center", marginTop: "200px" }}>
          ⚠️ Search a valid country
        </p>
      ) : (
        unis.map((uni) => (
          <div className={`university-container ${darkTheme}`} key={uni.id}>
            <div className="title-block">
              <h1>{uni.name}</h1>
              <span>{uni.twoCode}</span>
            </div>
            <h2>{uni.country}</h2>
            <div className="container-footer">
              <a
                href={uni.webPage[0]}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedUniversity(uni);
                  setIsModalOpen(true);
                }}
              >
                {uni.domain[0]}
              </a>
              <Button onClick={() => {
                setSelectedUniversity(uni);
                setIsModalOpen(true);
              }}>
                Open
              </Button>
            </div>
          </div>
        ))
      )}

      <Modal
        isOpen={isModalOpen}
        onAgree={handleAgree}
        onClose={() => setIsModalOpen(false)}
      >
        <p>
          Do you want to leave <span className="modal-brand">UniFinder</span>?
        </p>
      </Modal>
    </>
  );
});

export default Container;
