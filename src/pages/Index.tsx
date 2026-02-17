import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import FounderSection from "@/components/FounderSection";
import CommunitySection from "@/components/CommunitySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

import screenshotChats from "@/assets/screenshot-chats.jpg";
import screenshotStreak from "@/assets/screenshot-streak.jpg";
import screenshotPersonalize from "@/assets/screenshot-personalize.png";
import screenshotNotes from "@/assets/screenshot-notes.jpg";
import screenshotExams from "@/assets/screenshot-exams.png";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <FeatureSection
        id="features"
        title="Everything Organized. Nothing Lost."
        description={[
          "Separate AI bots for each subject",
          "Clean chat management",
          "Structured study conversations",
          "Seamless navigation",
          "Focused learning environment",
        ]}
        image={screenshotChats}
        imageAlt="Organized AI chats screen"
        bgSubtle
      />

      <FeatureSection
        id="progress"
        title="Consistency Builds Success."
        description={[
          "Track your daily progress",
          "Visual streak monitoring",
          "Discipline-driven learning",
          "Motivation through measurable growth",
        ]}
        image={screenshotStreak}
        imageAlt="Streak tracking screen"
        reverse
      />

      <FeatureSection
        title="Create Your Own Study Bot."
        description={[
          "Set subject focus",
          "Customize instructions",
          "Personalize learning style",
          "Adaptive AI responses",
          "Fully tailored study experience",
        ]}
        image={screenshotPersonalize}
        imageAlt="Create custom study bot screen"
        bgSubtle
      />

      <FeatureSection
        title="Study. Think. Write. All in One Place."
        description={[
          "Take notes directly inside the app",
          "Organized storage",
          "No switching between apps",
          "Seamless study workflow",
        ]}
        image={screenshotNotes}
        imageAlt="Notes screen"
        reverse
      />

      <FeatureSection
        id="exams"
        title="Pre-Built Exam Bots."
        description={[
          "Dedicated SAT preparation bot",
          "Dedicated GCE preparation bot",
          "Structured exam-focused guidance",
          "More exams expanding soon",
        ]}
        image={screenshotExams}
        imageAlt="Exam bots selection screen"
        bgSubtle
      />

      <FounderSection />
      <CommunitySection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
