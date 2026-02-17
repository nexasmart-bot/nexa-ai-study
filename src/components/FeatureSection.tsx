import PhoneMockup from "./PhoneMockup";
import { CheckCircle } from "lucide-react";

interface FeatureSectionProps {
  id?: string;
  title: string;
  description: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  bgSubtle?: boolean;
}

const FeatureSection = ({ id, title, description, image, imageAlt, reverse = false, bgSubtle = false }: FeatureSectionProps) => {
  return (
    <section id={id} className={`py-20 md:py-28 ${bgSubtle ? "bg-brand-gradient-subtle" : ""}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-20`}>
          {/* Image */}
          <div className={`flex-shrink-0 ${reverse ? "animate-on-scroll-right" : "animate-on-scroll-left"}`}>
            <PhoneMockup src={image} alt={imageAlt} />
          </div>

          {/* Text */}
          <div className="flex-1 space-y-6 animate-on-scroll">
            <h2 className="font-display text-3xl md:text-4xl font-bold">{title}</h2>
            <ul className="space-y-4">
              {description.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
