import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  const scrollToTopOfPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const scrollToTopOfPageNotSmooth = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  return (
    <NavigationContext.Provider
      value={{ currentPath, navigate, scrollToTopOfPage, scrollToTopOfPageNotSmooth }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
