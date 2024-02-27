import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//@ts-ignore
import { globalTheme } from "./theme/globalTheme.js";
import MissingPage from "./pages/MissingPage";
import Landing from "./pages/Landing";

const App = () => (
  <ChakraProvider theme={globalTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="*" element={<MissingPage />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);

export default App;
