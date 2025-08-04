import Layout from "../components/Layout";
import ContactSection from "../containers/ContactSection";
import HeroSection from "../containers/HeroSection";
import PortfolioSection from "../containers/PortfolioSection";
import MyServiceSection from "../containers/Services";
import SkillsSection from "../containers/SkillsSection";

export default function Home() {
  return (
    <Layout bgColor="bg-background-gradient">
      <HeroSection />
      <MyServiceSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
    </Layout>
  );
}
