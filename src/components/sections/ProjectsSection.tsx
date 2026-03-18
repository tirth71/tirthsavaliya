import { useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import projectThumb1 from '@/assets/project-thumb-1.jpg';
import projectThumb2 from '@/assets/project-thumb-2.jpg';
import projectThumb3 from '@/assets/project-thumb-3.jpg';
import projectThumb4 from '@/assets/project-thumb-4.jpg';

const projects = [
  {
    title: "Nebula Dashboard",
    description: "Real-time data visualization platform with WebGL-powered charts and 3D network graphs. Used by thousands of data analysts worldwide.",
    tags: ["Three.js", "React", "D3"],
    image: projectThumb1,
    date: "2024-01",
    link: "#",
  },
  {
    title: "Synthwave Studio",
    description: "Interactive music production tool with spatial audio rendering, waveform analysis, and real-time collaboration features.",
    tags: ["Web Audio", "Canvas", "GSAP"],
    image: projectThumb2,
    date: "2023-06",
    link: "#",
  },
  {
    title: "Orbital Commerce",
    description: "High-performance e-commerce platform with 3D product configurator and augmented reality preview capabilities.",
    tags: ["WebXR", "Next.js", "Stripe"],
    image: projectThumb3,
    date: "2023-01",
    link: "#",
  },
  {
    title: "Flux Architecture",
    description: "Generative design tool for architects with real-time physics simulation and photorealistic rendering pipeline.",
    tags: ["WASM", "Rust", "WebGPU"],
    image: projectThumb4,
    date: "2022-06",
    link: "#",
  },
];

const ProjectCard = ({ title, description, tags, image, date, link }: typeof projects[0]) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    gsap.to(cardRef.current, {
      rotationY: x * 6,
      rotationX: -y * 6,
      transformPerspective: 1200,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, { rotationY: 0, rotationX: 0, duration: 0.7, ease: "power2.out" });
  }, []);

  return (
    <a href={link} className="block group">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="card-elevated-hover rounded-2xl overflow-hidden"
      >
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 easing-quint"
            loading="lazy"
          />
        </div>
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-display text-xl md:text-2xl">{title}</h3>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 flex-shrink-0 mt-1" />
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">{description}</p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="font-mono text-[10px] tracking-wider text-primary/70 bg-primary/5 px-3 py-1 rounded-full uppercase">
                  {tag}
                </span>
              ))}
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">{date}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export const ProjectsSection = () => (
  <section className="py-32 px-6 md:px-16 lg:px-24" id="projects">
    <div className="max-w-6xl">
      <div className="reveal">
        <div className="h-px bg-gradient-to-r from-primary/40 via-border to-transparent mb-16" />
        <p className="font-mono text-xs tracking-[0.2em] text-primary mb-6 uppercase">Selected Work</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-16">Portfolio Projects</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="reveal">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      <div className="reveal mt-12">
        <a href="#" className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-primary hover:text-foreground transition-colors duration-300 uppercase">
          See all projects
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);
