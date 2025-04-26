import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Clock } from 'lucide-react';
import QuoteRotator from './QuoteRotator';

const Layout: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800">
      <QuoteRotator />
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-teal-600">
            <Clock size={28} />
            <span>TimeGrid</span>
          </Link>
          <nav className="flex gap-6">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-teal-600 border-b-2 border-teal-600' 
                  : 'text-slate-600 hover:text-teal-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/visualize" 
              className={`font-medium transition-colors ${
                location.pathname === '/visualize' 
                  ? 'text-teal-600 border-b-2 border-teal-600' 
                  : 'text-slate-600 hover:text-teal-600'
              }`}
            >
              Visualize
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                location.pathname === '/about' 
                  ? 'text-teal-600 border-b-2 border-teal-600' 
                  : 'text-slate-600 hover:text-teal-600'
              }`}
            >
              About
            </Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-1">
        <Outlet />
      </main>
      
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2 text-xl font-bold text-teal-400">
                <Clock size={24} />
                <span>TimeGrid</span>
              </div>
              <p className="text-slate-400 mt-2">Visualize your life, make every moment count.</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <p className="text-slate-400">Based on "The Battle for Your Time" TED Talk</p>
              <p className="text-slate-400">by Dino Ambrosi</p>
              <p className="text-slate-400">&copy; {new Date().getFullYear()} TimeGrid</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;