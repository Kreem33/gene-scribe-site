
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'; // Assuming shadcn card is available
import { Activity, TestTube2, BarChartBig } from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: "Genomic Sequencing",
    description: "High-throughput sequencing services for DNA and RNA, providing comprehensive genomic data.",
    delay: '0.2s'
  },
  {
    icon: TestTube2,
    title: "Genetic Testing",
    description: "Advanced genetic testing for inherited conditions, pharmacogenomics, and disease susceptibility.",
    delay: '0.4s'
  },
  {
    icon: BarChartBig,
    title: "Bioinformatics & Data Analysis",
    description: "Robust bioinformatics pipelines and custom data analysis to interpret complex genomic datasets.",
    delay: '0.6s'
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore our comprehensive range of genomic services tailored to meet diverse research and clinical needs.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: service.delay }}>
              <CardHeader className="items-center text-center">
                <service.icon className="h-12 w-12 text-primary mb-3" />
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-foreground/70">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
