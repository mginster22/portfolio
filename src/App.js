import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "./hooks/use-theme";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const App = () => {
  const [theme, toogleTheme] = useTheme("light");

  return (
    <>
      <Header theme={theme} switchTheme={toogleTheme} />
      <Main >
        <Routes>
          <Route path="/" element={<Home theme={theme}/>} />
          <Route path="/contact" element={<Contact theme={theme}/>} />
        </Routes>
      </Main>
    </>
  );
};

export default App;
