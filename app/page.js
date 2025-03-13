import Image from "next/image";
import NavHome from "./_components/NavHome";
import Services from "./_components/Services";
import About from "./_components/About";

export default function Home() {
  return (
    <div>
      <NavHome/>
      <Services/>
      <About/>
    </div>
  );
}
