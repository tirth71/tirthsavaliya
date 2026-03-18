import { useEffect, useState } from 'react';

const links = ["About", "Services", "Projects", "Contact"];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 easing-quint ${
      scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : ''
    }`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <span className="font-display text-lg tracking-tight group cursor-pointer hover:text-primary transition-colors duration-300">
          TIRTHSAVALIYA
        </span>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleClick(link)}
              onMouseEnter={() => setHovered(link)}
              onMouseLeave={() => setHovered(null)}
              className={`relative font-mono text-xs tracking-wider uppercase transition-colors duration-300 ${
                hovered === link ? 'text-primary' : hovered ? 'text-muted-foreground/50' : 'text-muted-foreground'
              }`}
            >
              {link}
              <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 easing-quint ${
                hovered === link ? 'w-full' : 'w-0'
              }`} />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
