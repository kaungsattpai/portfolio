import { Mail, Phone, MapPin } from 'lucide-react';

interface HeroProps {
  data: {
    name: string;
    title: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
  };
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="pt-20 pb-16 md:pb-32 border-b border-border">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Left Column - Navigation Links */}
        <div className="hidden md:flex flex-col gap-6 text-sm animate-fade-in">
          <div>
            <p className="text-muted-foreground mb-4">Navigate</p>
            <div className="space-y-3">
              {['about', 'experience', 'projects'].map((item, idx) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="block text-muted-foreground hover:text-accent transition-smooth capitalize"
                  style={{
                    animation: `slideInLeft 0.6s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Center Column - Main Content */}
        <div className="md:col-span-2">
          <div className="mb-8 animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-3 text-balance">
              {data.name}
            </h1>
            <p className="text-2xl text-accent font-medium mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {data.title}
            </p>
            <p className="text-lg text-foreground leading-relaxed text-balance max-w-2xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {data.bio}
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3 text-sm">
            <a
              href={`mailto:${data.email}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-smooth group animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <Mail className="w-4 h-4 transition-smooth group-hover:scale-110" />
              {data.email}
            </a>
            <a
              href={`tel:${data.phone}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-smooth group animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              <Phone className="w-4 h-4 transition-smooth group-hover:scale-110" />
              {data.phone}
            </a>
            <div className="flex items-center gap-2 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <MapPin className="w-4 h-4" />
              {data.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
