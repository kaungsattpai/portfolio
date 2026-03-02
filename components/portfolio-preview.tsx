'use client';

import { CVData } from '@/app/page';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface PortfolioPreviewProps {
  cvData: CVData;
}

export default function PortfolioPreview({ cvData }: PortfolioPreviewProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-8">
      {/* Header */}
      <div className="mb-12 border-b border-border pb-8">
        <div className="mb-4">
          <div className="flex items-baseline gap-3 mb-2">
            <h1 className="text-4xl font-bold text-foreground">{cvData.fullName || 'Your Name'}</h1>
            {cvData.jobTitle && <span className="text-lg text-accent font-semibold">{cvData.jobTitle}</span>}
          </div>
          {cvData.bio && <p className="text-muted-foreground italic">{cvData.bio}</p>}
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          {cvData.email && (
            <a href={`mailto:${cvData.email}`} className="flex items-center gap-2 hover:text-accent transition">
              <Mail className="w-4 h-4" />
              {cvData.email}
            </a>
          )}
          {cvData.phone && (
            <a href={`tel:${cvData.phone}`} className="flex items-center gap-2 hover:text-accent transition">
              <Phone className="w-4 h-4" />
              {cvData.phone}
            </a>
          )}
          {cvData.location && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {cvData.location}
            </div>
          )}
        </div>

        {/* Social Links */}
        {cvData.social.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-4">
            {cvData.social.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline flex items-center gap-1"
              >
                {link.platform}
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* About */}
      {cvData.about && (
        <div className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-accent" />
            ABOUT
          </h2>
          <p className="text-muted-foreground leading-relaxed">{cvData.about}</p>
        </div>
      )}

      {/* Experience */}
      {cvData.experience.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-accent" />
            EXPERIENCE
          </h2>
          <div className="space-y-6">
            {cvData.experience.map((exp) => (
              <div key={exp.id} className="border-l-2 border-accent pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{exp.position}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                    {' — '}
                    {exp.current ? 'Present' : exp.endDate ? new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : ''}
                  </span>
                </div>
                {exp.description && <p className="text-muted-foreground">{exp.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {cvData.skills.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-accent" />
            SKILLS
          </h2>
          <div className="flex flex-wrap gap-2">
            {cvData.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-secondary text-foreground px-3 py-1 rounded-full text-sm border border-border hover:border-accent transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {cvData.projects.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-accent" />
            PROJECTS
          </h2>
          <div className="space-y-6">
            {cvData.projects.map((proj) => (
              <div key={proj.id} className="border border-border rounded-lg p-4 bg-secondary hover:bg-muted/30 transition">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{proj.name}</h3>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                {proj.description && (
                  <p className="text-muted-foreground mb-2">{proj.description}</p>
                )}
                {proj.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {proj.technologies.split(',').map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-background text-accent px-2 py-1 rounded border border-border"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!cvData.fullName &&
        !cvData.about &&
        cvData.experience.length === 0 &&
        cvData.projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Fill out the form on the left to see your portfolio preview</p>
          </div>
        )}
    </div>
  );
}
