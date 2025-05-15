import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe";
import ContactMe from "./sections/ContactMe";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import MyProjects from "./sections/MyProjects";
import TechnicalProficiency from "./sections/TechnicalProficiency";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <TechnicalProficiency />
            <AboutMe />
            <MyProjects />
            <ContactMe />
            <Footer />
        </div>
    );
}

export default App;
