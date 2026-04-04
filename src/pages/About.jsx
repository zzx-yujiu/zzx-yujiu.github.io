import { useRef } from 'react';
import Crosshair from '../components/Crosshair';

export default function About() {
  const containerRef = useRef(null);

  return (
    <main ref={containerRef} className="pt-32 pb-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        {/* Headline */}
        <header className="mb-24">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter font-headline text-foreground">
            ABOUT
          </h1>
          <div className="mt-8 flex items-center gap-4">
            <span className="font-label text-xs font-mono tracking-widest text-mutedForeground uppercase">
              Archive No. 2024-01
            </span>
            <div className="h-px flex-grow bg-border"></div>
          </div>
        </header>

        {/* Narrative Section 1 */}
        <section className="mb-20">
          <div className="font-body text-xl md:text-2xl editorial-line-height text-foreground">
            <p className="mb-8">
              The intersection of architecture and digital systems defines the current era. ZX Archive serves as a repository for visual experiments and structural explorations. Our philosophy is rooted in the belief that digital spaces deserve the same permanence and rigor as physical monoliths.
            </p>
            <p>
              We reject the ephemeral nature of standard UI patterns. Instead, we lean into the "Brutalist Editor" aesthetic—where typography acts as the primary structure and negative space provides the necessary breath for complex ideas.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-border mb-20"></div>

        {/* Pull Quote Section */}
        <section className="mb-20 px-4 md:px-0">
          <blockquote className="font-serif italic text-3xl md:text-5xl text-accent tracking-tight editorial-line-height">
            "Design is not the decoration of a surface, but the revelation of an internal logic that demands expression."
          </blockquote>
          <cite className="mt-6 block font-label text-xs font-mono tracking-widest text-mutedForeground uppercase">
            — Editorial Manifesto, 2024
          </cite>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-border mb-20"></div>

        {/* Narrative Section 2 */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <h2 className="font-label text-sm font-bold tracking-widest text-mutedForeground uppercase sticky top-32">
                The Methodology
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="font-body text-lg md:text-xl editorial-line-height text-foreground space-y-6">
                <p>
                  Every pixel is an intentional choice. We utilize a strict monochromatic foundation punctuated by Vermillion to create a sense of urgency and authority. The 0px radius constraint across all components reinforces the architectural discipline of the system.
                </p>
                <p>
                  By utilizing high-scale display type and asymmetric layouts, we challenge the user to engage more deeply with the content. We move beyond "scrolling" and toward "navigating" a narrative.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Metadata List */}
        <section className="mb-32">
          <div className="w-full h-px bg-border mb-12"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <span className="block font-label text-[10px] font-mono tracking-widest text-mutedForeground uppercase mb-4">
                Location
              </span>
              <span className="font-headline text-sm text-foreground uppercase font-bold tracking-wider">
                Tokyo, JP / Global
              </span>
            </div>
            <div>
              <span className="block font-label text-[10px] font-mono tracking-widest text-mutedForeground uppercase mb-4">
                Specialization
              </span>
              <span className="font-headline text-sm text-foreground uppercase font-bold tracking-wider">
                Visual Systems
              </span>
            </div>
            <div>
              <span className="block font-label text-[10px] font-mono tracking-widest text-mutedForeground uppercase mb-4">
                Availability
              </span>
              <span className="font-headline text-sm text-foreground uppercase font-bold tracking-wider">
                Q4 2024
              </span>
            </div>
            <div>
              <span className="block font-label text-[10px] font-mono tracking-widest text-mutedForeground uppercase mb-4">
                Focus
              </span>
              <span className="font-headline text-sm text-foreground uppercase font-bold tracking-wider">
                Open Source
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* Crosshair Effect */}
      <Crosshair containerRef={containerRef} color="#FF3D00" />
    </main>
  );
}
