import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globalStyle.css";
import { ColorModeScript } from "@chakra-ui/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>
);
