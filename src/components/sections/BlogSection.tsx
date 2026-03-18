import { ArrowUpRight } from 'lucide-react';

const articles = [
  { title: "Building High-Performance WebGL Scenes", tags: ["Three.js", "WebGL"], href: "#" },
  { title: "GSAP ScrollTrigger: Advanced Techniques", tags: ["GSAP", "Animation"], href: "#" },
  { title: "Rust + WASM for Frontend Performance", tags: ["Rust", "WASM"], href: "#" },
  { title: "Shader Programming: A Practical Guide", tags: ["GLSL", "Shaders"], href: "#" },
  { title: "Modern CSS Architecture for Scale", tags: ["CSS", "Architecture"], href: "#" },
];

export const BlogSection = () => (
  <section className="py-32 px-6 md:px-16 lg:px-24" id="blog">
    <div className="max-w-4xl">
      <div className="reveal">
        <div className="h-px bg-gradient-to-r from-primary/40 via-border to-transparent mb-16" />
        <p className="font-mono text-xs tracking-[0.2em] text-primary mb-6 uppercase">Writing</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-16">Selected Articles</h2>
      </div>
      <div className="space-y-0">
        {articles.map((article, i) => (
          <a key={i} href={article.href} className="reveal group block">
            <div className="flex items-center justify-between py-6 px-4 -mx-4 rounded-lg border-b border-border group-hover:border-primary/30 group-hover:bg-surface-elevated/40 transition-all duration-400">
              <div className="flex-1 mr-4">
                <h3 className="font-display text-base md:text-lg group-hover:text-primary group-hover:translate-x-2 transition-all duration-300 mb-1">
                  {article.title}
                </h3>
                <div className="flex gap-2 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                  {article.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] text-muted-foreground uppercase">{tag}</span>
                  ))}
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-300 flex-shrink-0" />
            </div>
          </a>
        ))}
      </div>
      <div className="reveal mt-8">
        <a href="#" className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-primary hover:text-foreground hover:gap-4 transition-all duration-300 uppercase">
          See all articles
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);
