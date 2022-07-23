import "./App.css";
import Nav from "./comps/Nav";
import Hero from "./comps/Hero";
import About from "./comps/About";
import Store from "./comps/Store";
import Blog from "./comps/Blog";
import Contact from "./comps/Contact";
import Footer from "./comps/Footer";
function App() {
  return (
    <>
      <div className="cont">
        <Nav />
        <Hero />
        <About/>
        <Store/>
        <Blog/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
