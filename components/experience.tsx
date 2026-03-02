interface ExperienceProject {
  name: string;
  description: string;
}

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  projects: ExperienceProject[];
}

interface ExperienceProps {
  data: {
    experience: ExperienceItem[];
  };
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold text-foreground mb-12 animate-fade-in">Experience</h2>
      <div className="space-y-12">
        {data.experience.map((job, index) => (
          <div
            key={index}
            className="border-l border-border pl-6 relative animate-slide-in-left"
            style={{
              animationDelay: `${index * 0.15}s`,
            }}
          >
            <div className="absolute left-0 top-0 w-3 h-3 bg-accent rounded-full -translate-x-1.5 transition-smooth hover:scale-150 cursor-pointer"></div>
            
            <div className="mb-4">
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                <h3 className="text-xl font-semibold text-foreground transition-smooth hover:text-accent">{job.position}</h3>
                <p className="text-sm text-muted-foreground">{job.duration}</p>
              </div>
              <p className="text-accent font-medium">{job.company}</p>
              <p className="text-sm text-muted-foreground">{job.location}</p>
            </div>

            <div className="space-y-3">
              {job.projects.map((project, pIndex) => (
                <div
                  key={pIndex}
                  style={{
                    animation: 'fadeIn 0.6s ease-out',
                    animationDelay: `${(index * 0.15 + pIndex * 0.1)}s`,
                    animationFillMode: 'both',
                  }}
                >
                  <p className="font-medium text-foreground transition-smooth hover:text-accent">{project.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
