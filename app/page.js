import CourseCurriculum from "./components/CourseCurriculam";
import CourseLanding from "./components/CourseLanding";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="py-16">
      <HeroSection />
      <CourseLanding />
      <div className="mb-32"></div>
      <CourseCurriculum />
    </main>
  );
}
