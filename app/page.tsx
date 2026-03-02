'use client';

import { useState } from 'react';
import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Contact from '@/components/contact';

const portfolioData = {
  name: 'Kaung Satt Pai',
  title: 'Full Stack Developer',
  email: 'kaungsatpai.ksp@gmail.com',
  phone: '09779568431',
  location: 'Yangon, Myanmar',
  dateOfBirth: '10-02-1999',
  nationality: 'Myanmar',
  bio: 'Dynamic Full Stack Developer with 7+ years of experience in building robust API applications and scalable web solutions that drive operational efficiency.',
  about: 'Proficient in Laravel, Node.js, and Next.js, with a solid background in backend development, database design, and API integration. Experienced in AWS and Nginx for deployment and server management, ensuring seamless performance in production environments. Known for strong problem-solving skills and a collaborative mindset, delivering results in fast-paced, team-driven projects.',
  skills: [
    'Laravel',
    'Node.js',
    'Next.js',
    'React',
    'API Development',
    'Database Architecture',
    'AWS',
    'Nginx',
    'Express.js',
    'Problem Solving',
    'Communication',
    'Teamwork',
  ],
  experience: [
    {
      company: 'ZOTE BY FOCUS INNOVATION',
      position: 'Full Stack Developer',
      duration: 'Oct 2020 — Apr 2025',
      location: 'Yangon',
      projects: [
        {
          name: 'SmartSales Project',
          description: 'Mobile ERP System - Developed API application for Mobile App with local framework (zframework)',
        },
        {
          name: 'Easy App (M-commerce)',
          description: 'Developed Dashboard for Easy App Operators with local framework (zframework). Developed API application for Dashboard and Mobile App with local framework (zframework). Developed API application for InApp Character feature with Node JS (Express JS)',
        },
        {
          name: 'Arimadanapura',
          description: 'E-commerce Web Application developed with React JS',
        },
        {
          name: 'Rahta Entertainment',
          description: 'Entertainment Web Application developed with Next JS',
        },
        {
          name: 'POS System',
          description: 'Developed Dashboard with React JS. Developed API application for Dashboard and Mobile App with Node JS (Express JS)',
        },
      ],
    },
    {
      company: 'VISION LINKS MYANMAR',
      position: 'Web Application Developer',
      duration: 'Jul 2019 — Oct 2020',
      location: 'Yangon',
      projects: [
        {
          name: 'Web Applications',
          description: 'Creating web applications with Laravel according to documentation from the parent company in Japan',
        },
      ],
    },
    {
      company: 'XAN IT SOLUTION',
      position: 'Junior Backend Developer',
      duration: 'Feb 2018 — Jul 2019',
      location: 'Yangon',
      projects: [
        {
          name: 'Attendance Systems Application',
          description: 'Developed API applications with Laravel framework',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Easy App (M-commerce)',
      description: 'Mobile commerce platform with operator dashboard and in-app features',
      technologies: ['zFramework', 'Node.js', 'Express.js', 'React'],
      impact: 'Full-stack development including dashboard and character feature',
      link: 'https://www.easyappmyanmar.com',
    },
    {
      name: 'Rahta Entertainment',
      description: 'Entertainment Web Application - Professional web platform built with Next.js for entertainment services',
      technologies: ['Next.js', 'React', 'API Integration'],
      impact: 'Developed and deployed the production website',
      link: 'https://www.rahtaentertainment.com.mm',
    },
    {
      name: 'Arimadanapura',
      description: 'E-commerce Web Application with operator dashboard and front end',
      technologies: ['React', 'Laravel', 'API Design'],
      impact: 'Dashboard development and backend API implementation',
      link: 'https://www.arimadanapura.com',
    },
    {
      name: 'SmartSales Project',
      description: 'Mobile ERP System - Comprehensive enterprise resource planning solution for mobile platforms',
      technologies: ['zFramework', 'API Development', 'Mobile Integration'],
      impact: 'Core API development and mobile app backend',
      link: '#',
    },
    {
      name: 'POS System',
      description: 'Point of Sale system with comprehensive dashboard for transaction management',
      technologies: ['React', 'Node.js', 'Express.js', 'API Design'],
      impact: 'Dashboard development and backend API implementation',
      link: '#',
    },
  ],
};

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Hero data={portfolioData} />
        
        <div id="about" className="scroll-mt-20 mb-20">
          <About data={portfolioData} />
        </div>
        
        <div id="experience" className="scroll-mt-20 mb-20">
          <Experience data={portfolioData} />
        </div>
        
        <div id="projects" className="scroll-mt-20 mb-20">
          <Projects data={portfolioData} />
        </div>
        
        <div id="skills" className="scroll-mt-20 mb-20">
          <Skills data={portfolioData} />
        </div>
        
        <div id="contact" className="scroll-mt-20">
          <Contact data={portfolioData} />
        </div>
      </main>
    </div>
  );
}
