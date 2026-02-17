import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";
import screenshotMain from "@/assets/screenshot-main.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-brand-gradient-subtle opacity-50" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight animate-fade-in-up">
              Your Personal AI{" "}
              <span className="text-gradient">Study Partner.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              Create custom study bots, generate structured study plans, track streaks, and organize your learning with intelligent AI guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl">Get Started</Button>
              <Button variant="hero-outline" size="xl">Join the Community</Button>
            </div>
          </div>

          {/* Phone */}
          <div className="flex-shrink-0 animate-float">
            <PhoneMockup src={screenshotMain} alt="Nexa Smart AI app home screen" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
