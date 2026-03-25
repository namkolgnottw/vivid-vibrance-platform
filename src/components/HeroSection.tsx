import heroImg from "@/assets/hero-art.jpg";

const HeroSection = () => (
  <section className="hero-section">
    <img
      src={heroImg}
      alt="Artist painting on canvas"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={800}
    />
    <div className="hero-overlay" />
    <div className="relative z-10 px-6">
      <h2 className="hero-title">CREATE YOUR MASTERPIECE</h2>
      <a href="#products" className="hero-cta">
        Shop Our Store
      </a>
    </div>
  </section>
);

export default HeroSection;
