interface SkillsProps {
  data: {
    skills: string[];
  };
}

export default function Skills({ data }: SkillsProps) {
  // Categorize skills
  const categories = {
    frameworks: ['Laravel', 'Node.js', 'Next.js', 'React', 'Express.js'],
    backend: ['API Development', 'Database Architecture', 'AWS', 'Nginx'],
    soft: ['Problem Solving', 'Communication', 'Teamwork'],
  };

  return (
    <section>
      <h2 className="text-3xl font-bold text-foreground mb-12 animate-fade-in">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="animate-slide-in-left" style={{ animationDelay: '0s' }}>
          <h3 className="text-lg font-semibold text-accent mb-4">Frameworks & Languages</h3>
          <div className="flex flex-wrap gap-2">
            {categories.frameworks.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-secondary text-foreground text-sm rounded hover:bg-accent hover:text-background transition-smooth hover:scale-110 hover:shadow-lg"
                style={{
                  animation: 'fadeIn 0.5s ease-out',
                  animationDelay: `${index * 0.08}s`,
                  animationFillMode: 'both',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
          <h3 className="text-lg font-semibold text-accent mb-4">Backend & DevOps</h3>
          <div className="flex flex-wrap gap-2">
            {categories.backend.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-secondary text-foreground text-sm rounded hover:bg-accent hover:text-background transition-smooth hover:scale-110 hover:shadow-lg"
                style={{
                  animation: 'fadeIn 0.5s ease-out',
                  animationDelay: `${0.1 + index * 0.08}s`,
                  animationFillMode: 'both',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-lg font-semibold text-accent mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {categories.soft.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-secondary text-foreground text-sm rounded hover:bg-accent hover:text-background transition-smooth hover:scale-110 hover:shadow-lg"
                style={{
                  animation: 'fadeIn 0.5s ease-out',
                  animationDelay: `${0.2 + index * 0.08}s`,
                  animationFillMode: 'both',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
