import Image from "next/image";
import NavHome from "./_components/NavHome";
import Services from "./_components/Services";
import About from "./_components/About";
import ActiveSlider from "./_components/ActiveSlider";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div>
      <NavHome/>
      <div id="services"><Services/></div>
      <div id="about"><About/></div>
      <div id="slider"><ActiveSlider/></div>
      <div id="footer"><Footer/></div>
    </div>
  );
}
