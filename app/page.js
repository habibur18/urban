import CertificateSection from "./components/CertificateSection";
import ComputerRequirements from "./components/ComputerRequirements";
import CourseCurriculum from "./components/CourseCurriculam";
import CourseDescription from "./components/CourseDescription";
import CourseEligibility from "./components/CourseEligibility";
import CourseFeatures from "./components/CourseFeatures";
import CourseLanding from "./components/CourseLanding";
import DataScienceTools from "./components/DataScienceTools";
import HeroSection from "./components/HeroSection";
import InstructorCard from "./components/InstructorCard";

export default function Home() {
  return (
    <main className="py-16">
      <HeroSection />
      <CourseLanding />
      <div className="my-32">
        <CourseCurriculum />
      </div>

      <div className="mb-32">
        <CourseDescription />
      </div>

      <div className="mb-32">
        <DataScienceTools />
      </div>

      <div className="mb-32">
        <CourseFeatures />
      </div>
      <div className="mb-32">
        <CourseEligibility />
      </div>
      <div className="mb-32">
        <InstructorCard />
      </div>
      <div className="mb-32">
        <ComputerRequirements />
      </div>
      <div className="mb-32">
        <CertificateSection />
      </div>
    </main>
  );
}
