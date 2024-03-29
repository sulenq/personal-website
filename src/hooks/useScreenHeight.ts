import { useEffect, useState } from "react";

const useScreenHeight = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerHeight);

  useEffect(() => {
    let resizeTimeout: any;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setScreenWidth(window.innerHeight);
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenWidth;
};

export default useScreenHeight;
