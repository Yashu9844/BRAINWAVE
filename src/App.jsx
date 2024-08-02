import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Button from "./components/Button";
import Collabaration from "./components/Collabaration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits/>
        <Collabaration/>
        <Services/>
      </div>
      <ButtonGradient />
    </>
  );
}
