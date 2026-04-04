import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Crosshair from '../components/Crosshair';

export default function Home() {
  const containerRef = useRef(null);

  return (
    <main ref={containerRef} className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-12 overflow-x-hidden relative">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-1 w-16 bg-accent mb-12"></div>
        <h1 className="text-6xl md:text-9xl font-headline font-black tracking-tighter leading-[0.85] text-foreground mb-16 max-w-5xl">
          HI HERE <br /> IS ZX
        </h1>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-xl">
            <p className="text-lg md:text-xl text-mutedForeground leading-relaxed italic mb-8">
              Independent creative director and editorial designer focusing on radical clarity within the digital landscape. 
              I build systems that reject the soft and embrace the architectural.
            </p>
            <div className="flex gap-12 font-label uppercase tracking-[0.2em] text-xs">
              <Link to="/work" className="relative v-underline text-foreground font-bold py-2">
                Work
              </Link>
              <Link to="/contact" className="relative v-underline text-foreground font-bold py-2">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:block font-mono text-[10px] text-mutedForeground uppercase tracking-[0.3em]">
            <span className="block transform rotate-90 origin-left whitespace-nowrap">
              ESTABLISHED MMXXIV — ARCHIVE 01
            </span>
          </div>
        </div>
      </section>

      {/* Dynamic Content Section (The Editorial Grid) */}
      <section className="mt-48 grid grid-cols-1 md:grid-cols-12 gap-y-24 gap-x-12">
        {/* Bento Item 1 */}
        <div className="md:col-span-8 border border-border p-12 hover:bg-muted transition-colors duration-200 group">
          <div className="flex justify-between items-start mb-24">
            <span className="font-label text-xs text-mutedForeground tracking-widest uppercase">
              LATEST PROJECT / 001
            </span>
            <span className="transform group-hover:translate-x-2 transition-transform">→</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-foreground mb-6">
            RADICAL <br /> BRUTALISM
          </h2>
          <p className="text-mutedForeground font-label text-sm uppercase tracking-widest">
            Digital Identity for New Media
          </p>
        </div>

        {/* Bento Item 2 */}
        <div className="md:col-span-4 border border-border p-12 flex flex-col justify-between">
          <div className="h-px w-full bg-border mb-8"></div>
          <div>
            <h3 className="text-2xl font-headline font-bold text-foreground mb-4">Philosophy</h3>
            <p className="text-sm text-mutedForeground leading-relaxed">
              Architecture in the browser. We remove the excess until only the truth of the typography remains.
            </p>
          </div>
        </div>

        {/* Pull Quote Section */}
        <div className="md:col-span-12 py-24 border-y border-border">
          <blockquote className="text-4xl md:text-6xl font-body italic text-foreground max-w-4xl">
            "The grid is the soul of the page, but the void is where the message lives."
          </blockquote>
          <cite className="block mt-8 font-label text-xs text-accent uppercase tracking-widest">
            — ZX MANIFESTO
          </cite>
        </div>

        {/* Bento Item 3 (Asymmetric) */}
        <div className="md:col-start-2 md:col-span-5 border border-border p-12">
          <span className="font-label text-xs text-mutedForeground tracking-widest uppercase block mb-12">
            CAPABILITIES
          </span>
          <ul className="space-y-4 font-headline text-2xl font-bold">
            <li className="flex items-center gap-4 group cursor-pointer">
              <span className="w-2 h-2 bg-accent"></span>
              <span className="group-hover:text-accent transition-colors">Visual Systems</span>
            </li>
            <li className="flex items-center gap-4 group cursor-pointer">
              <span className="w-2 h-2 bg-accent"></span>
              <span className="group-hover:text-accent transition-colors">Editorial UI</span>
            </li>
            <li className="flex items-center gap-4 group cursor-pointer">
              <span className="w-2 h-2 bg-accent"></span>
              <span className="group-hover:text-accent transition-colors">Type Design</span>
            </li>
          </ul>
        </div>

        {/* Bento Item 4 */}
        <Link 
          to="/contact"
          className="md:col-span-5 border border-border p-12 flex items-center justify-center bg-accent text-foreground group cursor-pointer hover:bg-opacity-90 transition-all"
        >
          <div className="text-center">
            <span className="font-label text-[10px] tracking-[0.5em] uppercase block mb-4">
              Collaborate
            </span>
            <h2 className="text-4xl font-headline font-black uppercase tracking-tighter">
              Start the <br /> dialogue
            </h2>
          </div>
        </Link>
      </section>

      {/* Crosshair Effect */}
      <Crosshair containerRef={containerRef} color="#FF3D00" />
    </main>
  );
}
