import { Mail, Phone, Linkedin, Github } from 'lucide-react';

interface ContactProps {
  data: {
    name: string;
    email: string;
    phone: string;
  };
}

export default function Contact({ data }: ContactProps) {
  return (
    <section className="border-t border-border pt-16">
      <h2 className="text-3xl font-bold text-foreground mb-8 animate-fade-in">Get in Touch</h2>
      
      <p className="text-foreground text-lg leading-relaxed max-w-2xl mb-12 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
        I'm always interested in hearing about interesting projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out.
      </p>

      <div className="space-y-4 mb-12">
        <a
          href={`mailto:${data.email}`}
          className="flex items-center gap-3 group animate-slide-in-left transition-smooth"
          style={{ animationDelay: '0.2s' }}
        >
          <Mail className="w-6 h-6 text-accent transition-smooth group-hover:scale-110 group-hover:rotate-12" />
          <span className="text-foreground hover:text-accent transition-smooth">{data.email}</span>
        </a>
        
        <a
          href={`tel:${data.phone}`}
          className="flex items-center gap-3 group animate-slide-in-left transition-smooth"
          style={{ animationDelay: '0.3s' }}
        >
          <Phone className="w-6 h-6 text-accent transition-smooth group-hover:scale-110 group-hover:rotate-12" />
          <span className="text-foreground hover:text-accent transition-smooth">{data.phone}</span>
        </a>
      </div>

      <div className="pt-8 border-t border-border animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <p className="text-sm text-muted-foreground mb-4">Connect</p>
        <div className="flex gap-4">
          <a
            href="#"
            className="w-10 h-10 bg-secondary rounded flex items-center justify-center hover:bg-accent hover:text-background transition-smooth hover:scale-125 hover:shadow-lg hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-secondary rounded flex items-center justify-center hover:bg-accent hover:text-background transition-smooth hover:scale-125 hover:shadow-lg hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
