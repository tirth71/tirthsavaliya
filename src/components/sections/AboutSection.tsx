export const AboutSection = () => {
  return (
    <section className="py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl">
        <div className="reveal">
          <div className="h-px bg-gradient-to-r from-primary/40 via-border to-transparent mb-16" />
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-6 uppercase">About</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight mb-10">
            Crafting digital experiences at the intersection of design & engineering.
          </h2>
        </div>
        <div className="reveal">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group p-6 -m-6 rounded-2xl hover:bg-surface-elevated/50 transition-all duration-500 cursor-default">
              <p className="text-muted-foreground leading-[1.8] group-hover:text-foreground/80 transition-colors duration-500">
                With expertise in WebGL, creative coding, and modern frontend architecture, 
                I build interfaces that challenge conventions. Every project is an opportunity 
                to push the boundaries of what's possible on the web.
              </p>
            </div>
            <div className="group p-6 -m-6 rounded-2xl hover:bg-surface-elevated/50 transition-all duration-500 cursor-default">
              <p className="text-muted-foreground leading-[1.8] group-hover:text-foreground/80 transition-colors duration-500">
                From high-performance 3D visualizations to pixel-perfect responsive layouts, 
                I approach every challenge with a focus on performance, accessibility, and 
                craftsmanship. Originally from India, now building amazing digital products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
