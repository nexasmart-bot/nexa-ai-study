interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
}

const PhoneMockup = ({ src, alt, className = "" }: PhoneMockupProps) => {
  return (
    <div className={`phone-mockup w-[280px] md:w-[300px] aspect-[9/19] ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
    </div>
  );
};

export default PhoneMockup;
