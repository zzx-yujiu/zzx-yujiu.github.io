export default function Footer() {
  return (
    <footer className="bg-background border-t border-border w-full">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-10 w-full max-w-7xl mx-auto">
        <div className="text-foreground font-bold font-headline text-lg mb-6 md:mb-0">
          ZX ARCHIVE
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex gap-8">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-label text-xs font-mono tracking-widest text-mutedForeground hover:text-foreground transition-colors duration-150 underline-offset-4 hover:underline decoration-accent"
            >
              LINKEDIN
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-label text-xs font-mono tracking-widest text-mutedForeground hover:text-foreground transition-colors duration-150 underline-offset-4 hover:underline decoration-accent"
            >
              TWITTER
            </a>
            <a 
              href="https://dribbble.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-label text-xs font-mono tracking-widest text-mutedForeground hover:text-foreground transition-colors duration-150 underline-offset-4 hover:underline decoration-accent"
            >
              DRIBBBLE
            </a>
          </div>
          
          <div className="font-label text-xs font-mono tracking-widest text-mutedForeground">
            © 2024 ZX ARCHIVE
          </div>
        </div>
      </div>
    </footer>
  );
}
