import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Features", "Progress", "Exams", "Community"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-display text-xl font-bold text-primary">
          Nexa Smart AI
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l}
            </a>
          ))}
          <a href="https://chat.whatsapp.com/BSwumdCdeLF7txFxw3jGdW" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="sm">Join Community</Button>
          </a>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
              {l}
            </a>
          ))}
          <a href="https://chat.whatsapp.com/BSwumdCdeLF7txFxw3jGdW" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="sm" className="w-full">Join Community</Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
