import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Noise Overlay */}
      <div className="noise-overlay"></div>
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <div className="flex-grow">
        <Outlet />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
