import "./App.css";
import NavBar from "./screens/navigationBar/NavBar";
import Header from "./screens/header/Header";
import About from "./screens/aboutMe/AboutMe";
import Technologies from "./screens/technologies/Technologies";
import Portfolio from "./screens/portfolio/Portfolio";
import Footer from "./screens/footer/Footer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Technologies />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
