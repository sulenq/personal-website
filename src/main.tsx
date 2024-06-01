import { ColorModeScript } from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globalStyle.css";

gsap.registerPlugin(ScrollTrigger);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>
);
