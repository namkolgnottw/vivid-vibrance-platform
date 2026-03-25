import { Search, User, ShoppingBag } from "lucide-react";

const Navbar = () => (
  <nav className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-border">
    <div className="flex items-center gap-1">
      <Search className="w-5 h-5 text-foreground cursor-pointer hover:opacity-60 transition-opacity" />
    </div>

    <div className="flex flex-col items-center">
      <h1 className="font-display text-2xl md:text-3xl font-bold tracking-wide">ATELIER NOIR</h1>
    </div>

    <div className="flex items-center gap-4">
      <User className="w-5 h-5 text-foreground cursor-pointer hover:opacity-60 transition-opacity" />
      <ShoppingBag className="w-5 h-5 text-foreground cursor-pointer hover:opacity-60 transition-opacity" />
    </div>
  </nav>
);

export default Navbar;
