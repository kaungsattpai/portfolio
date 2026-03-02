'use client';

import { CVData, Experience, Project, SocialLink } from '@/app/page';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Plus } from 'lucide-react';

interface CVFormProps {
  cvData: CVData;
  setCvData: (data: CVData) => void;
}

export default function CVForm({ cvData, setCvData }: CVFormProps) {
  const updateField = (field: keyof CVData, value: any) => {
    setCvData({ ...cvData, [field]: value });
  };

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    };
    setCvData({ ...cvData, experience: [...cvData.experience, newExp] });
  };

  const updateExperience = (id: string, field: string, value: any) => {
    setCvData({
      ...cvData,
      experience: cvData.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const removeExperience = (id: string) => {
    setCvData({
      ...cvData,
      experience: cvData.experience.filter((exp) => exp.id !== id),
    });
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: '',
      description: '',
      technologies: '',
      link: '',
    };
    setCvData({ ...cvData, projects: [...cvData.projects, newProject] });
  };

  const updateProject = (id: string, field: string, value: any) => {
    setCvData({
      ...cvData,
      projects: cvData.projects.map((proj) =>
        proj.id === id ? { ...proj, [field]: value } : proj
      ),
    });
  };

  const removeProject = (id: string) => {
    setCvData({
      ...cvData,
      projects: cvData.projects.filter((proj) => proj.id !== id),
    });
  };

  const addSkill = (skill: string) => {
    if (skill.trim() && !cvData.skills.includes(skill.trim())) {
      setCvData({ ...cvData, skills: [...cvData.skills, skill.trim()] });
    }
  };

  const removeSkill = (index: number) => {
    setCvData({ ...cvData, skills: cvData.skills.filter((_, i) => i !== index) });
  };

  const addSocial = () => {
    const newSocial: SocialLink = {
      id: Date.now().toString(),
      platform: '',
      url: '',
    };
    setCvData({ ...cvData, social: [...cvData.social, newSocial] });
  };

  const updateSocial = (id: string, field: string, value: any) => {
    setCvData({
      ...cvData,
      social: cvData.social.map((link) =>
        link.id === id ? { ...link, [field]: value } : link
      ),
    });
  };

  const removeSocial = (id: string) => {
    setCvData({
      ...cvData,
      social: cvData.social.filter((link) => link.id !== id),
    });
  };

  return (
    <div className="space-y-6 max-h-[90vh] overflow-y-auto pb-8">
      <h1 className="text-3xl font-bold mb-8">Portfolio Builder</h1>

      {/* Basic Info */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-accent">Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Full Name"
              value={cvData.fullName}
              onChange={(e) => updateField('fullName', e.target.value)}
              className="bg-secondary border-border text-foreground"
            />
            <Input
              placeholder="Job Title"
              value={cvData.jobTitle}
              onChange={(e) => updateField('jobTitle', e.target.value)}
              className="bg-secondary border-border text-foreground"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Email"
              type="email"
              value={cvData.email}
              onChange={(e) => updateField('email', e.target.value)}
              className="bg-secondary border-border text-foreground"
            />
            <Input
              placeholder="Phone"
              value={cvData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              className="bg-secondary border-border text-foreground"
            />
          </div>
          <Input
            placeholder="Location"
            value={cvData.location}
            onChange={(e) => updateField('location', e.target.value)}
            className="bg-secondary border-border text-foreground"
          />
          <Input
            placeholder="Short Bio (tagline)"
            value={cvData.bio}
            onChange={(e) => updateField('bio', e.target.value)}
            className="bg-secondary border-border text-foreground"
          />
          <Textarea
            placeholder="About yourself"
            value={cvData.about}
            onChange={(e) => updateField('about', e.target.value)}
            className="bg-secondary border-border text-foreground"
            rows={3}
          />
        </CardContent>
      </Card>

      {/* Experience */}
      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-accent">Experience</CardTitle>
            <Button
              onClick={addExperience}
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Plus className="w-4 h-4 mr-1" /> Add
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {cvData.experience.map((exp) => (
            <div key={exp.id} className="border border-border rounded-lg p-4 bg-secondary space-y-3">
              <div className="flex justify-between items-start">
                <div className="flex-1 space-y-3">
                  <Input
                    placeholder="Company"
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                    className="bg-background border-border text-foreground"
                  />
                  <Input
                    placeholder="Position"
                    value={exp.position}
                    onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                    className="bg-background border-border text-foreground"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      type="date"
                      value={exp.startDate}
                      onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                      className="bg-background border-border text-foreground"
                    />
                    <Input
                      type="date"
                      value={exp.endDate}
                      disabled={exp.current}
                      onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                      className="bg-background border-border text-foreground"
                    />
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={exp.current}
                      onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                    />
                    <span className="text-sm">Currently working here</span>
                  </label>
                  <Textarea
                    placeholder="Description"
                    value={exp.description}
                    onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                    className="bg-background border-border text-foreground"
                    rows={2}
                  />
                </div>
                <button
                  onClick={() => removeExperience(exp.id)}
                  className="ml-2 text-muted-foreground hover:text-destructive"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-accent">Skills</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex gap-2">
            <Input
              placeholder="Add a skill (e.g., React, TypeScript)"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  addSkill((e.target as HTMLInputElement).value);
                  (e.target as HTMLInputElement).value = '';
                }
              }}
              className="bg-secondary border-border text-foreground"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {cvData.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-accent text-accent-foreground px-3 py-1 rounded-full flex items-center gap-2 text-sm"
              >
                {skill}
                <button
                  onClick={() => removeSkill(index)}
                  className="hover:bg-accent-foreground/20 rounded-full"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Projects */}
      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-accent">Projects</CardTitle>
            <Button
              onClick={addProject}
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Plus className="w-4 h-4 mr-1" /> Add
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {cvData.projects.map((proj) => (
            <div key={proj.id} className="border border-border rounded-lg p-4 bg-secondary space-y-3">
              <div className="flex justify-between items-start">
                <div className="flex-1 space-y-3">
                  <Input
                    placeholder="Project Name"
                    value={proj.name}
                    onChange={(e) => updateProject(proj.id, 'name', e.target.value)}
                    className="bg-background border-border text-foreground"
                  />
                  <Textarea
                    placeholder="Description"
                    value={proj.description}
                    onChange={(e) => updateProject(proj.id, 'description', e.target.value)}
                    className="bg-background border-border text-foreground"
                    rows={2}
                  />
                  <Input
                    placeholder="Technologies (comma separated)"
                    value={proj.technologies}
                    onChange={(e) => updateProject(proj.id, 'technologies', e.target.value)}
                    className="bg-background border-border text-foreground"
                  />
                  <Input
                    placeholder="Project Link"
                    value={proj.link}
                    onChange={(e) => updateProject(proj.id, 'link', e.target.value)}
                    className="bg-background border-border text-foreground"
                  />
                </div>
                <button
                  onClick={() => removeProject(proj.id)}
                  className="ml-2 text-muted-foreground hover:text-destructive"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Social Links */}
      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-accent">Social Links</CardTitle>
            <Button
              onClick={addSocial}
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Plus className="w-4 h-4 mr-1" /> Add
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {cvData.social.map((link) => (
            <div key={link.id} className="flex gap-3">
              <Input
                placeholder="Platform (GitHub, LinkedIn, etc.)"
                value={link.platform}
                onChange={(e) => updateSocial(link.id, 'platform', e.target.value)}
                className="bg-secondary border-border text-foreground"
              />
              <Input
                placeholder="URL"
                value={link.url}
                onChange={(e) => updateSocial(link.id, 'url', e.target.value)}
                className="bg-secondary border-border text-foreground flex-1"
              />
              <button
                onClick={() => removeSocial(link.id)}
                className="text-muted-foreground hover:text-destructive"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
