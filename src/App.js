import Navbar from "./component/NavBar/navbar";
import Intro from "./component/Intro/intro";
import Experience from "./component/Experience/experience";
import Skills from "./component/Skills/skills";
import Works from "./component/Works/works";
import Contact from "./component/Contact/contact";
import Footer from "./component/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Intro />
        <Experience />
        <Skills />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
