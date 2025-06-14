
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            We're here to answer your questions and discuss how our genomic services can support your research or clinical needs.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-card p-8 sm:p-10 rounded-lg shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-accent" />
                  <a href="mailto:info@genomix.com" className="text-foreground/80 hover:text-primary transition-colors">info@genomix.com</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-accent" />
                  <span className="text-foreground/80">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-accent" />
                  <span className="text-foreground/80">123 Genome Drive, Science City, USA</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Full Name</label>
                  <input type="text" name="name" id="name" placeholder="Full Name" className="w-full px-4 py-2 border border-input rounded-md focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <input type="email" name="email" id="email" placeholder="Email Address" className="w-full px-4 py-2 border border-input rounded-md focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea name="message" id="message" rows={4} placeholder="Your Message" className="w-full px-4 py-2 border border-input rounded-md focus:ring-primary focus:border-primary"></textarea>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
