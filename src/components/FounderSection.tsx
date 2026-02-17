import founderPhoto from "@/assets/founder-photo.jpg";

const FounderSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-display text-3xl md:text-4xl font-bold">The Founder</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-4xl mx-auto animate-on-scroll">
          <img
            src={founderPhoto}
            alt="Brayan Jordan, Founder of Nexa Smart AI"
            className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shadow-elevated flex-shrink-0"
          />
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-display text-2xl font-bold">Brayan Jordan</h3>
            <p className="text-muted-foreground leading-relaxed">
              Brayan Jordan is the founder of this AI-powered study platform built to transform how students prepare for exams. After experiencing the challenges of unstructured studying and scattered resources, he created an intelligent system that combines AI tutoring, structured study plans, progress tracking, and organized notes into one seamless experience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              His mission is to make disciplined, AI-powered learning accessible to students everywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
