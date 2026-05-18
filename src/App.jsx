import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Contact from "./pages/Contact";

const validPaths = new Set(["/", "/projects", "/skills", "/about", "/contact"]);

const titleByPath = {
  "/": "Jabesi | Full-Stack Developer",
  "/projects": "Projects | Jabesi",
  "/skills": "Skills | Jabesi",
  "/about": "About | Jabesi",
  "/contact": "Contact | Jabesi",
};

const setOrCreateMeta = (property, content) => {
  let meta = document.querySelector(`meta[property='${property}']`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
};

const setCanonical = (href) => {
  let link = document.querySelector("link[rel='canonical']");
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    const path = window.location.pathname;
    return validPaths.has(path) ? path : "/";
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPath(validPaths.has(path) ? path : "/");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    document.title = titleByPath[currentPath] ?? titleByPath["/"];

    const absoluteUrl = `${window.location.origin}${currentPath}`;
    setCanonical(absoluteUrl);
    setOrCreateMeta("og:url", absoluteUrl);
  }, [currentPath]);

  const navigateTo = (path) => {
    if (path === currentPath) return;
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  const pageContentByPath = {
    "/": <Home />,
    "/projects": <Projects />,
    "/skills": <Skills />,
    "/about": <About />,
    "/contact": <Contact />,
  };

  const pageContent = pageContentByPath[currentPath] ?? <Home />;

  return (
    <>
      <Navbar currentPath={currentPath} onNavigate={navigateTo} />
      <div className="app" style={{ paddingTop: "72px" }}>
        {pageContent}
        <Footer />
      </div>
    </>
  );
}

export default App;