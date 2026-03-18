const skills = [
  { name: "Kotlin", category: "Android" },
  { name: "Java", category: "Android" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "GSAP", category: "Animation" },
  { name: "Shaders", category: "3D" },
  { name: "Node.js", category: "Backend" },
  { name: ".Net", category: "Backend" },
  { name: "Figma", category: "Design" },
  { name: "Blender", category: "3D" },
  { name: "WebGPU", category: "3D" },
  { name: "D3.js", category: "Data" },
];

export const SkillsSection = () => (
  <section className="py-32 px-6">
    <div className="max-w-4xl mx-auto">
      <div className="reveal">
        <p className="font-mono text-xs tracking-widest text-primary mb-6 uppercase">Capabilities</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-16">Skills & Tools</h2>
      </div>
      <div className="reveal flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="card-elevated rounded-xl px-5 py-3 group cursor-default transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)]"
          >
            <span className="font-mono text-xs text-muted-foreground block mb-1 group-hover:text-primary/60 transition-colors duration-300">{skill.category}</span>
            <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
