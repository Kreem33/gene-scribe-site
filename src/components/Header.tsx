
import React from 'react';
import { Dna } from 'lucide-react'; // Example Icon

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
          <Dna className="h-8 w-8" />
          <span className="font-semibold text-xl">Genomix</span>
        </a>
        <div className="space-x-4 sm:space-x-6">
          <a href="#home" className="text-foreground/80 hover:text-primary transition-colors font-medium">Home</a>
          <a href="#about" className="text-foreground/80 hover:text-primary transition-colors font-medium">About</a>
          <a href="#services" className="text-foreground/80 hover:text-primary transition-colors font-medium">Services</a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors font-medium">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
