import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import NavMenu from "@/components/NavMenu";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <AnnouncementBar />
    <Navbar />
    <NavMenu />
    <HeroSection />
    <ProductGrid />
    <Footer />
  </div>
);

export default Index;
