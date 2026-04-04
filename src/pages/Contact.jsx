import { useRef } from 'react';
import Crosshair from '../components/Crosshair';

export default function Contact() {
  const containerRef = useRef(null);

  return (
    <main ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Header */}
      <header className="mb-24">
        <h1 className="text-6xl md:text-9xl font-headline font-black tracking-tighter uppercase leading-none">
          GET IN <span className="text-accent">TOUCH</span>
        </h1>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Typographic Avatar */}
        <div className="relative group">
          <div className="aspect-square bg-muted flex items-center justify-center border border-border overflow-hidden">
            <span className="text-[25rem] font-headline font-black text-foreground select-none opacity-10 group-hover:opacity-20 transition-opacity duration-300">
              Z
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-9xl font-headline font-black text-accent tracking-tighter drop-shadow-2xl">
                Z
              </span>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col gap-6">
            <a 
              href="mailto:hello@zx-archive.com"
              className="flex items-center gap-4 group cursor-pointer"
            >
              <span className="text-mutedForeground group-hover:text-accent transition-colors">✉</span>
              <span className="font-mono text-sm tracking-widest text-mutedForeground group-hover:text-accent transition-colors">
                HELLO@ZX-ARCHIVE.COM
              </span>
            </a>
            <a 
              href="https://github.com/zx-projects"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group cursor-pointer"
            >
              <span className="text-mutedForeground group-hover:text-accent transition-colors">⌨</span>
              <span className="font-mono text-sm tracking-widest text-mutedForeground group-hover:text-accent transition-colors">
                GITHUB/ZX-PROJECTS
              </span>
            </a>
            <a 
              href="https://linkedin.com/in/zx-official"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group cursor-pointer"
            >
              <span className="text-mutedForeground group-hover:text-accent transition-colors">⚡</span>
              <span className="font-mono text-sm tracking-widest text-mutedForeground group-hover:text-accent transition-colors">
                LINKEDIN/ZX-OFFICIAL
              </span>
            </a>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="font-headline text-3xl italic text-mutedForeground leading-tight">
              "The architecture of communication is as vital as the message itself."
            </p>
            <p className="font-label text-xs uppercase tracking-[0.2em] text-accent font-bold">
              Inquiry Protocol
            </p>
          </div>

          <form className="space-y-8">
            <div className="space-y-2">
              <label className="font-label text-xs font-bold tracking-widest text-mutedForeground uppercase">
                Identity / Name
              </label>
              <input 
                type="text"
                placeholder="WHO ARE YOU?"
                className="w-full brutalist-input p-4 font-mono text-sm uppercase tracking-wider text-foreground placeholder-border"
              />
            </div>

            <div className="space-y-2">
              <label className="font-label text-xs font-bold tracking-widest text-mutedForeground uppercase">
                Communication / Email
              </label>
              <input 
                type="email"
                placeholder="WHERE CAN I REACH YOU?"
                className="w-full brutalist-input p-4 font-mono text-sm uppercase tracking-wider text-foreground placeholder-border"
              />
            </div>

            <div className="space-y-2">
              <label className="font-label text-xs font-bold tracking-widest text-mutedForeground uppercase">
                Objective / Subject
              </label>
              <select className="w-full brutalist-input p-4 font-mono text-sm uppercase tracking-wider text-foreground appearance-none">
                <option>NEW COLLABORATION</option>
                <option>GENERAL INQUIRY</option>
                <option>TECHNICAL SPECIFICATION</option>
                <option>PRESS / MEDIA</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-label text-xs font-bold tracking-widest text-mutedForeground uppercase">
                Transmission / Message
              </label>
              <textarea 
                rows="6"
                placeholder="STATE YOUR PURPOSE..."
                className="w-full brutalist-input p-4 font-mono text-sm uppercase tracking-wider text-foreground placeholder-border resize-none"
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                className="v-underline font-headline font-black text-2xl uppercase tracking-tighter hover:text-accent transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Crosshair Effect */}
      <Crosshair containerRef={containerRef} color="#FF3D00" />
    </main>
  );
}
