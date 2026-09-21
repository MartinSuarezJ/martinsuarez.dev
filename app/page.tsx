import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import MoreProjects from "@/components/MoreProjects";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className = "relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <div className = "max-w-7xl w-full">
          <FloatingNav navItems={navItems}/>
          <Hero />
          <Grid />
          <RecentProjects />
          <Philosophy />
          <Footer />
        </div>
    </main>
  );
}