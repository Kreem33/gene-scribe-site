
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 bg-foreground text-background/70 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p>&copy; {currentYear} Genomix. All rights reserved.</p>
        <p className="text-sm mt-1">Pioneering the Future of Genomic Research.</p>
      </div>
    </footer>
  );
};

export default Footer;
