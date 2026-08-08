import Header from '@/components/Header';
import HomeFeature from '@/features/Home/Home';
import AboutMe from '@/features/AboutMe/AboutMe';
import ToolsMap from '@/features/Tools/ToolsMap';
import Projects from '@/features/Projects/Projects';
import Contact from '@/features/Contact/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <HomeFeature />
      <AboutMe />
      <ToolsMap />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
