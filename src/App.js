import "./App.css";
import NavBar from "./screens/navigationBar/NavBar";
import Header from "./screens/header/Header";
import AboutMe from "./screens/aboutMe/AboutMe";
import Technologies from "./screens/technologies/Technologies";
import Portfolio from "./screens/portfolio/Portfolio";
import Footer from "./screens/footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <AboutMe />
      <Technologies />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
