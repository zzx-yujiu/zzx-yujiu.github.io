import { useRef } from 'react';
import Crosshair from '../components/Crosshair';

export default function Work() {
  const containerRef = useRef(null);
  
  const projects = [
    {
      id: 1,
      featured: true,
      title: "NEURAL CORE ENGINE",
      description: "A low-latency processing framework built for real-time data ingestion and architectural visualization within high-scale systems.",
      tech: ["RUST", "WASM", "GRPC"],
      link: "VIEW CASE STUDY"
    },
    {
      id: 2,
      featured: false,
      title: "VOID PROTOCOL",
      description: "Decentralized identity management system leveraging zero-knowledge proofs for secure asset authentication.",
      tech: ["SOLIDITY", "TYPESCRIPT"],
      link: "EXPLORE"
    },
    {
      id: 3,
      featured: false,
      title: "KINETIC GRID",
      description: "Motion-driven UI library focusing on physical properties and spring-based animations for editorial content.",
      tech: ["REACT", "FRAMER MOTION"],
      link: "DOCUMENTATION"
    },
    {
      id: 4,
      featured: false,
      title: "SILICA CMS",
      description: "Headless content management system optimized for high-performance static site generators and edge caching.",
      tech: ["GO", "REDIS", "POSTGRES"],
      link: "SOURCE"
    },
    {
      id: 5,
      featured: true,
      title: "VECTOR STACK",
      description: "An end-to-end vector database abstraction for LLM integration, handling millions of high-dimensional embeddings.",
      tech: ["PYTHON", "PYTORCH", "CUDA"],
      link: "WHITE PAPER"
    },
    {
      id: 6,
      featured: false,
      title: "MONO INTERFACE",
      description: "Experimental UI design system built exclusively around typography, monochromatic values, and brutalist layouts.",
      tech: ["CSS", "VANILLA JS"],
      link: "OPEN SOURCE"
    }
  ];

  return (
    <main ref={containerRef} className="pt-40 pb-20 px-12 max-w-7xl mx-auto relative">
      {/* Hero Header */}
      <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="flex-1">
          <h1 className="text-9xl font-headline font-black tracking-tighter leading-none mb-4 uppercase">
            WORK
          </h1>
          <p className="font-label text-mutedForeground uppercase tracking-[0.2em] text-sm">
            Selected projects / 2020 — 2024
          </p>
        </div>
        <div className="md:w-1/3">
          <p className="text-2xl text-foreground leading-relaxed italic border-l-2 border-accent pl-6 font-body">
            A collection of digital architectures, focusing on technical rigor and structural clarity. No imagery, just pure system design.
          </p>
        </div>
      </header>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-border">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="bg-muted border-r border-b border-border p-8 flex flex-col justify-between min-h-[400px] group hover:bg-[#201f1f] transition-colors duration-150"
          >
            <div>
              <div className={`h-1 w-16 mb-8 ${project.featured ? 'bg-accent' : 'bg-transparent'}`}></div>
              <h2 className="text-3xl font-headline font-bold tracking-tighter mb-4">
                {project.title}
              </h2>
              <p className="text-foreground opacity-80 mb-8 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="font-label text-xs uppercase tracking-widest text-mutedForeground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a href="#" className="group flex items-center gap-2 self-start">
              <span className="font-headline uppercase tracking-widest text-sm text-accent animated-underline font-bold">
                {project.link}
              </span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-150">
                →
              </span>
            </a>
          </div>
        ))}
      </div>

      {/* Pagination/More Section */}
      <section className="mt-24 text-center">
        <button className="group border border-border px-12 py-6 font-headline uppercase tracking-widest text-sm hover:border-accent hover:text-accent transition-all duration-150">
          Load Archive Projects (12)
        </button>
      </section>

      {/* Crosshair Effect */}
      <Crosshair containerRef={containerRef} color="#FF3D00" />
    </main>
  );
}
