'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Project } from '@/app/lib/types';

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects', error);
      }
    }
    fetchProjects();
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="relative mb-16 text-center">
          <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none">
            portfolio
          </h2>
          {/* <h3 className="text-4xl md:text-6xl font-bold relative z-10">Selected Works</h3> */}
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative aspect-4/5 overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src={project.imageUrl || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop'}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
                <span className="text-brand-yellow text-sm font-bold uppercase tracking-wider">{project.category}</span>
                <h4 className="text-white text-2xl font-bold mt-2">{project.title}</h4>
                <p className="text-gray-200 text-sm mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
