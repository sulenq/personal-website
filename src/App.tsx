import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
//@ts-ignore
import { globalTheme } from "./theme/globalTheme.js";
import MissingPage from "./pages/MissingPage";
import Landing from "./pages/Landing";
import AboutPage from "./pages/AboutPage.js";
import { useEffect } from "react";
import WorksPage from "./pages/WorksPage.js";
import WorksDetailPage from "./pages/WorkDetailPage.js";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <ChakraProvider theme={globalTheme}>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/works" element={<WorksPage />} />

          <Route path="/works/:workIndex" element={<WorksDetailPage />} />

          <Route path="*" element={<MissingPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
