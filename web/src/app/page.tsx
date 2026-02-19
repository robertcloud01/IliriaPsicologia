import NavBar from "@/components/layout/NavBar";
import Hero from "@/components/home/Hero";
import Preloader from "@/components/layout/Preloader";
import Mission from "@/components/home/Mission";
import Announcement from "@/components/home/Announcement";
import Intro from "@/components/home/Intro";
import TeamPreview from "@/components/home/TeamPreview";
import Services from "@/components/home/Services";
import Locations from "@/components/home/Locations";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Preloader />
      <Announcement />
      <NavBar />
      <Hero />
      <Mission />
      <Intro />
      <Services />
      <TeamPreview />
      <Locations />
      <Footer />
    </main>
  );
}
