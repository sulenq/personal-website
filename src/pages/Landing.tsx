import { useEffect } from "react";
import { getLang, setLang as setLangLocal } from "../lib/lang";
import useTrigger from "../global/useTrigger";
import Hero from "../landingSections/Hero";
import TopNav from "../components/TopNav";
import About from "../landingSections/About";
import Works from "../landingSections/Works";
import PageContainer from "../components/PageContainer";
import Contact from "../landingSections/Contact";
import Footer from "../landingSections/Footer";

export default function Landing() {
  const { setTrigger } = useTrigger();
  const lang = getLang();

  useEffect(() => {
    const lang = getLang();
    if (!lang) {
      setLangLocal("en");
      setTrigger(true);
    } else {
      setLangLocal(lang);
      setTrigger(true);
    }
  }, [setTrigger]);

  return (
    <PageContainer>
      <TopNav />

      {lang && (
        <>
          <Hero />

          <About />

          <Works />

          {/* <Services /> */}

          {/* <OurClients /> */}

          <Contact />

          <Footer />
        </>
      )}
    </PageContainer>
  );
}
