import "./App.css"; // Pastikan ini mengarah ke file CSS yang benar
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/NavBar/NavBar";
import AboutMe from "./Components/AboutMe/AboutMe";
import ExperienceSection from "./Components/Experience/ExperienceSection";
import ContactSection from "./Components/Contact/ContactSection";

function App() {
  return (
    <main className="flex min-h-screen flex-col bg-dark">
      {" "}
      {/* Menambahkan kelas bg-dark */}
      <Navbar />
      <HeroSection />
      <AboutMe />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}

export default App;
