import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/tirth-savaliya-115187252", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "X/Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];


export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });

      tl.fromTo('.hero-photo',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo('.hero-greeting',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo('.hero-name-line',
        { opacity: 0, y: 40, skewY: 3 },
        { opacity: 1, y: 0, skewY: 0, duration: 1, stagger: 0.12, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo('.hero-desc',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo('.hero-social',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo('.hero-scroll',
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.2"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Photo - Left Side */}
        <div className="hero-photo opacity-0 flex-shrink-0">
          <div className="relative w-52 h-52 md:w-72 md:h-72 lg:w-80 lg:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 blur-2xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/20 shadow-lg shadow-primary/10">
              <img
                src={profilePhoto}
                alt="Tirth Savaliya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text - Right Side */}
        <div className="flex-1">
          <p className="hero-greeting font-mono text-sm tracking-[0.2em] text-muted-foreground mb-6 opacity-0">
            Hey, I'm
          </p>
          <h1 className="font-display leading-[0.95] mb-8">
            <span className="hero-name-line block text-4xl sm:text-5xl md:text-6xl lg:text-7xl opacity-0">
              Tirth
            </span>
            <span className="hero-name-line block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gradient-primary opacity-0">
              Savaliya
            </span>
          </h1>
          <p className="hero-desc text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10 opacity-0">
            I Build high-performance web applications and immersive digital experiences. 
            Specializing in WebGL, creative coding, and modern frontend architecture.
          </p>
          <div className="flex items-center gap-5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hero-social text-muted-foreground hover:text-primary transition-colors duration-300 opacity-0"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-scroll absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0">
        <p className="font-mono text-[10px] tracking-[0.4em] text-muted-foreground uppercase scroll-indicator">
          SCROLL
        </p>
      </div>
    </section>
  );
};
