
import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming shadcn button is available
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-brightness-75"></div> {/* Overlay for text readability */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Pioneering Genomic Discoveries
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Advancing human health through cutting-edge genomic research and precision testing services.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg group">
            Explore Our Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
