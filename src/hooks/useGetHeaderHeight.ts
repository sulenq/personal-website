import { useEffect, useState } from "react";

const useGetHeaderHeight = () => {
  const [headerHeight, setHeaderHeight] = useState("33.82px");

  useEffect(() => {
    let resizeTimeout: any;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const header = document.querySelector("header");
        setHeaderHeight(`${header?.offsetHeight}px`);
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return headerHeight;
};

export default useGetHeaderHeight;
