import { ExternalLink, Link } from 'lucide-react';

interface ProjectItem {
  name: string;
  description: string;
  technologies: string[];
  impact: string;
  link: string;
}

interface ProjectsProps {
  data: {
    projects: ProjectItem[];
  };
}

export default function Projects({ data }: ProjectsProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold text-foreground mb-12 animate-fade-in">Projects</h2>
      <div className="grid grid-cols-1 gap-8">
        {data.projects.map((project, index) => (
          <div
            key={index}
            className="border border-border rounded-lg p-6 hover:border-accent hover:bg-secondary/30 transition-smooth group animate-scale-in"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-xl font-semibold text-foreground flex-1">{project.name}</h3>

              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-smooth flex-shrink-0 group-hover:scale-110 group-hover:translate-x-1" />
              </a>
            </div>

            <p className="text-foreground mb-4 leading-relaxed">{project.description}</p>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Key Impact</p>
                <p className="text-sm text-foreground">{project.impact}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="inline-block px-2.5 py-1 text-xs bg-secondary text-foreground rounded transition-smooth hover:bg-accent hover:text-primary"
                      style={{
                        animation: 'fadeIn 0.5s ease-out',
                        animationDelay: `${(index * 0.1 + tIndex * 0.05)}s`,
                        animationFillMode: 'both',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
