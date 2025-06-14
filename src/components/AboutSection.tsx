
import React from 'react';
import { Target, Users, FlaskConical } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">About Us</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            We are a dedicated team of scientists and researchers committed to unlocking the potential of genomics to improve lives.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-card shadow-lg rounded-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Target className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Our Mission</h3>
            <p className="text-foreground/70">
              To accelerate scientific discovery and develop innovative genomic solutions for complex health challenges.
            </p>
          </div>
          <div className="p-6 bg-card shadow-lg rounded-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <FlaskConical className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Our Approach</h3>
            <p className="text-foreground/70">
              Leveraging state-of-the-art technologies and collaborative research to push the boundaries of genomic science.
            </p>
          </div>
          <div className="p-6 bg-card shadow-lg rounded-lg animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Users className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Our Team</h3>
            <p className="text-foreground/70">
              Comprised of leading experts in genomics, bioinformatics, and molecular biology, passionate about making a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
