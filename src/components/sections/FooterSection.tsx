import { Github, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "X/Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const FooterSection = () => (
  <footer className="py-16 px-6 md:px-16 lg:px-24 border-t border-border">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
      <p className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
        © {new Date().getFullYear()} — Tirth Savaliya
      </p>
      <div className="flex gap-5">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="text-muted-foreground hover:text-primary hover:scale-125 hover:-translate-y-1 transition-all duration-300"
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);
