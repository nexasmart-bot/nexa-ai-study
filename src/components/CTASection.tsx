import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-brand-gradient-strong relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)]" />
      <div className="container mx-auto px-4 text-center relative animate-on-scroll">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
          Start Studying Smarter.
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-lg mx-auto mb-8">
          An intelligent, structured way to prepare for exams.
        </p>
        <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
