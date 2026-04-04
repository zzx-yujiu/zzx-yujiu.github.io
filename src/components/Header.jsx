import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 w-full max-w-7xl mx-auto">
        <Link to="/" className="text-4xl font-black tracking-tighter text-foreground font-headline">
          ZX
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`font-headline uppercase tracking-wider text-sm transition-all scale-100 active:scale-95 ${
              isActive('/') 
                ? 'text-accent font-bold border-b-2 border-accent pb-1' 
                : 'text-foreground hover:text-accent transition-colors duration-150'
            }`}
          >
            HOME
          </Link>
          <Link 
            to="/about" 
            className={`font-headline uppercase tracking-wider text-sm transition-all scale-100 active:scale-95 ${
              isActive('/about') 
                ? 'text-accent font-bold border-b-2 border-accent pb-1' 
                : 'text-foreground hover:text-accent transition-colors duration-150'
            }`}
          >
            ABOUT
          </Link>
          <Link 
            to="/contact" 
            className={`font-headline uppercase tracking-wider text-sm transition-all scale-100 active:scale-95 ${
              isActive('/contact') 
                ? 'text-accent font-bold border-b-2 border-accent pb-1' 
                : 'text-foreground hover:text-accent transition-colors duration-150'
            }`}
          >
            CONTACT
          </Link>
          <Link 
            to="/work" 
            className={`font-headline uppercase tracking-wider text-sm transition-all scale-100 active:scale-95 ${
              isActive('/work') 
                ? 'text-accent font-bold border-b-2 border-accent pb-1' 
                : 'text-foreground hover:text-accent transition-colors duration-150'
            }`}
          >
            WORK
          </Link>
        </div>

        <Link 
          to="/contact"
          className="font-headline uppercase tracking-wider text-sm bg-accent text-foreground px-6 py-3 min-h-[44px] font-bold hover:bg-foreground hover:text-background transition-all duration-150"
        >
          GET IN TOUCH
        </Link>
      </div>
    </nav>
  );
}
