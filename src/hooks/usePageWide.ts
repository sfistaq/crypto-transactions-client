import { useState, useEffect } from "react";

const usePageWide = () => {
  const [pageWide, setPageWide] = useState<number>(0);

  const handleResize = () => {
    if (pageWide === window.innerWidth) return;
    setPageWide(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { pageWide };
};

export default usePageWide;
