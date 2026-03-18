import { useState, useRef, useCallback } from 'react';
import { Send } from 'lucide-react';

const fields = [
  { id: 'name', label: 'Name', type: 'text' },
  { id: 'email', label: 'Email', type: 'email' },
];

export const ContactSection = () => {
  const [focused, setFocused] = useState<string | null>(null);
  const [values, setValues] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const handleFocus = useCallback((id: string) => setFocused(id), []);
  const handleBlur = useCallback((id: string, value: string) => {
    if (!value) setFocused(null);
    setValues(prev => ({ ...prev, [id]: value }));
  }, []);

  const isFloating = (id: string) => focused === id || (values[id] && values[id].length > 0);

  return (
    <section className="py-32 px-6 md:px-16 lg:px-24" id="contact">
      <div className="max-w-xl">
        <div className="reveal">
          <div className="h-px bg-gradient-to-r from-primary/40 via-border to-transparent mb-16" />
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-6 uppercase">Contact</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-16 leading-relaxed">
            Feel free to reach out or drop me a message using the form below.
          </p>
        </div>
        <form ref={formRef} className="reveal space-y-12" onSubmit={(e) => e.preventDefault()}>
          {fields.map((field) => (
            <div key={field.id} className="relative group">
              <label
                htmlFor={field.id}
                className={`absolute left-0 transition-all duration-300 easing-quint pointer-events-none ${
                  isFloating(field.id)
                    ? '-top-5 text-xs text-primary'
                    : 'top-3 text-sm text-muted-foreground'
                }`}
              >
                {field.label}
              </label>
              <input
                id={field.id}
                type={field.type}
                className="input-underline w-full text-foreground hover:border-muted-foreground/50 transition-colors duration-300"
                onFocus={() => handleFocus(field.id)}
                onBlur={(e) => handleBlur(field.id, e.target.value)}
                onChange={(e) => setValues(prev => ({ ...prev, [field.id]: e.target.value }))}
              />
            </div>
          ))}
          <div className="relative group">
            <label
              htmlFor="message"
              className={`absolute left-0 transition-all duration-300 easing-quint pointer-events-none ${
                isFloating('message')
                  ? '-top-5 text-xs text-primary'
                  : 'top-3 text-sm text-muted-foreground'
              }`}
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="input-underline w-full text-foreground resize-none hover:border-muted-foreground/50 transition-colors duration-300"
              onFocus={() => handleFocus('message')}
              onBlur={(e) => handleBlur('message', e.target.value)}
              onChange={(e) => setValues(prev => ({ ...prev, message: e.target.value }))}
            />
          </div>
          <button
            type="submit"
            className="group relative inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium text-sm overflow-hidden transition-all duration-300 hover:gap-5 hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)] hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Send</span>
            <Send className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </form>
      </div>
    </section>
  );
};
