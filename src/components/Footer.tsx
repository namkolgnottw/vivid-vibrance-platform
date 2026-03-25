const Footer = () => (
  <footer className="footer-section">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
      <div>
        <h3 className="font-display text-xl font-bold mb-4">ATELIER NOIR</h3>
        <p className="text-sm opacity-70 leading-relaxed font-body">
          Curating exceptional art for the modern collector. Each piece is carefully selected to inspire and transform your space.
        </p>
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-4 font-body">Quick Links</h4>
        <ul className="space-y-2 text-sm opacity-70 font-body">
          <li><a href="#" className="hover:opacity-100 transition-opacity">Shop All</a></li>
          <li><a href="#" className="hover:opacity-100 transition-opacity">New Arrivals</a></li>
          <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
          <li><a href="#" className="hover:opacity-100 transition-opacity">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-4 font-body">Stay Connected</h4>
        <p className="text-sm opacity-70 font-body mb-4">Subscribe for exclusive releases and artist stories.</p>
        <div className="flex gap-0 max-w-xs mx-auto md:mx-0">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-4 py-2.5 text-sm bg-transparent border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground font-body"
          />
          <button className="px-6 py-2.5 text-xs uppercase tracking-[0.15em] font-medium bg-primary-foreground text-primary transition-opacity hover:opacity-90 font-body">
            Join
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-primary-foreground/20 text-center text-xs opacity-50 font-body">
      © 2026 Atelier Noir. All rights reserved.
    </div>
  </footer>
);

export default Footer;
