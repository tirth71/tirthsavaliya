import { Briefcase } from 'lucide-react';

const experiences = [
  { year: "2025 — Present", role: "Android Developer", company: "Encodework pvt", description: "Android Application development for immersive brand experiences." },
  { year: "2023 — 2024", role: "DotNet Developer", company: "Freelance", description: "Developing a high performance Application." },
  { year: "2024 — 2025", role: "Frontend Engineer", company: "Freelance ", description: "Built high-performance data visualization platforms using Three.js and React." },
  
];

export const ExperienceSection = () => (
  <section className="py-32 px-6">
    <div className="max-w-4xl mx-auto">
      <div className="reveal">
        <p className="font-mono text-xs tracking-widest text-primary mb-6 uppercase">Experience</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-16">Career Path</h2>
      </div>
      <div className="relative">
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="reveal relative pl-14 md:pl-16 group cursor-default">
              <div className="absolute left-1.5 md:left-3.5 top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center timeline-dot group-hover:scale-125 transition-transform duration-300">
                <Briefcase className="w-2.5 h-2.5 text-primary" />
              </div>
              <div className="p-5 -m-5 rounded-xl hover:bg-surface-elevated/50 transition-all duration-500">
                <p className="font-mono text-xs text-muted-foreground mb-1 group-hover:text-primary/70 transition-colors duration-300">{exp.year}</p>
                <h3 className="font-display text-lg md:text-xl mb-1 group-hover:text-primary transition-colors duration-300">{exp.role}</h3>
                <p className="text-primary/70 text-sm mb-2">{exp.company}</p>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
