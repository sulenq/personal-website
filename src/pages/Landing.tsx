import { useEffect } from "react";
import { VStack } from "@chakra-ui/react";
import { getLang, setLang as setLangLocal } from "../lib/lang";
import useTrigger from "../global/useTrigger";
import Hero from "../landingSections/Hero";
import Services from "../landingSections/Services";
import TopNav from "../components/TopNav";

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
    <VStack
      gap={0}
      minH={"100vh"}
      w={"100%"}
      align={"stretch"}
      overflowX={"clip"}
    >
      <TopNav />

      {lang && (
        <>
          <Hero />

          <Services />

          {/* <Works /> */}

          {/* <About /> */}

          {/* <OurClients /> */}

          {/* <Contact /> */}

          {/* <Footer /> */}
        </>
      )}
    </VStack>
  );
}
