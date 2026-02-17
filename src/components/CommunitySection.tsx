import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const CommunitySection = () => {
  return (
    <section id="community" className="py-20 md:py-28 bg-brand-gradient-subtle">
      <div className="container mx-auto px-4 text-center animate-on-scroll">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary mb-6">
          <Users className="w-8 h-8 text-primary" />
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Join the Study Community.</h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
          Connect with students, receive updates, and grow together in a focused learning environment.
        </p>
        <Button variant="hero" size="xl">Join WhatsApp Community</Button>
      </div>
    </section>
  );
};

export default CommunitySection;
