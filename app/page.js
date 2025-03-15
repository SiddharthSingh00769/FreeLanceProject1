import Image from "next/image";
import NavHome from "./_components/NavHome";
import Services from "./_components/Services";
import About from "./_components/About";
import ActiveSlider from "./_components/ActiveSlider";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <div>
      <NavHome/>
      <Services/>
      <About/>
      <ActiveSlider/>
      <Footer/>
    </div>
  );
}
