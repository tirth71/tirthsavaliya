import { useRef } from 'react';
import { Smartphone, Globe, Server, Palette, Code2, Layers } from 'lucide-react';

const services = [
  { icon: Smartphone, title: "App Development", description: "Native & cross-platform mobile apps with seamless UX, built using React Native and Flutter." },
  { icon: Globe, title: "Web Development", description: "High-performance, responsive websites and web apps using React, Next.js, and modern stacks." },
  { icon: Palette, title: "UI/UX Design", description: "Pixel-perfect interfaces with intuitive user flows, wireframes, and interactive prototypes." },
  { icon: Server, title: "Backend Development", description: "Scalable APIs, databases, and server architecture using Node.js, Python, and cloud services." },
  { icon: Code2, title: "Custom Software", description: "Tailored software solutions to automate workflows and solve unique business challenges." },
  { icon: Layers, title: "Full-Stack Solutions", description: "End-to-end product development from concept to deployment with ongoing support." },
];

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} id="services" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 reveal">
          <p className="font-mono text-sm tracking-[0.2em] text-primary mb-3">WHAT I DO</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl">
            My <span className="text-gradient-primary">Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className="reveal group card-elevated-hover rounded-xl p-8 flex flex-col gap-5 cursor-default transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2"
              style={{ transitionDelay: `${i}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors duration-300">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
