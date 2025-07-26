import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Navsection from "./components/Herosection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Navsection
        backgroundImage="/home-mars.jpg"
        headerText="MAKING LIFE MULTIPLANETARY"
        paragraphText="SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not."
        buttonText="EXPLORE"
      />
      <Navsection
        backgroundImage="/POWER-D-outsidsouthgrassh.jpg"
        headerText="REVOLUTIONIZING SPACE TECHNOLOGY"
        paragraphText="SpaceX’s Starship spacecraft and Super Heavy rocket is a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond"
        buttonText="LEARN MORE"
      />
      <Navsection
        backgroundImage="/Axiom-4.jpg"
        headerText="WORLD'S LEADING LAUNCH SERVICE PROVIDER"
        paragraphText="SpaceX leads the world in launches with its reliable, reusable rockets and is developing the fully and rapidly reusable rockets necessary to transform humanity’s ability to access space into something as routine as air travel."
        buttonText="RESERVE YOUR RIDE"
      />
      <Navsection
        backgroundImage="/Eva-Suit.jpg"
        headerText="ADVANCING HUMAN SPACELIGHT"
        paragraphText="Since returning human spaceflight capabilities to the United States in 2020, SpaceX is helping build a new era where not just hundreds of people, but thousands and ultimately millions will be able to explore space."
        buttonText="JOIN A MISSION"
      />
      <Navsection
        backgroundImage="/TRACERS-OS.jpg"
        headerText="DELIVERING HIGH-SPEED INTERNET FROM SPACE"
        paragraphText="Starlink is the world’s most advanced satellite constellation using low-Earth orbit to deliver broadband internet capable of supporting streaming, online gaming, video calls, and more."
        buttonText="ORDER NOW"
      />
      <Footer />
    </>
  );
}
