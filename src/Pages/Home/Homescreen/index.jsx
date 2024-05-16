import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import WorkExperience from "../WorkExperience";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <WorkExperience/>
      <MyPortfolio />
      <MySkills />
      <ContactMe />
    </>
  );
}
