const navItems = ["Home", "Prints", "Sculptures", "Ceramics", "Our Story"];

const NavMenu = () => (
  <div className="flex items-center justify-center gap-8 py-3 border-b border-border">
    {navItems.map((item) => (
      <a key={item} href="#" className="nav-link">
        {item}
      </a>
    ))}
  </div>
);

export default NavMenu;
