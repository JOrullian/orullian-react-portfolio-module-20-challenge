import { useLayoutEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ScrollIndicator from "./ui/ScrollIndicator";
import ProjectsSection from "./ProjectsSection";
import AboutMeSection from "./AboutMeSection";
import ContactSection from "./ContactSection";
import ResumeSection from "./ResumeSection";
import Header from "./Header";
import Footer from "./Footer";
import milky_way_illustration from "../assets/images/milky-way-illustration.jpg";
import moon from "../assets/images/moon.png";
import mars from "../assets/images/mars.png";
import pine_forest_background from "../assets/images/pine-forest-background.png";

function ParallaxComponent() {
  const layerRefs = [useRef(null), useRef(null), useRef(null)];
  const [windowCenter, setWindowCenter] = useState({ x: 0, y: 0 });
  const [parallaxSettings, setParallaxSettings] = useState({
    parallaxOverall: { pages: 7.9 },
    milkyWay: { offset: 0, speed: 0.1, factor: 2 },
    mars: { offset: 0, speed: -0.4, factor: 1 },
    moon: { offset: 0, speed: -0.6, factor: 1 },
    treeline: { offset: 0.7, speed: -0.1, factor: 1.5 },
    scrollIndicator: { offset: 0.05, speed: 0, factor: 0.2 },
    projectsSection: { offset: 2.3, speed: 0, factor: 1 },
    aboutMeSection: { offset: 4.3, speed: 0, factor: 1 },
    resumeSection: { offset: 5.2, speed: 0, factor: 1 },
    contactSection: { offset: 6.9, speed: 0, factor: 1 },
    footer: { offset: 7.7, speed: 0, factor: 0.2 },
  });

  useLayoutEffect(() => {
    const updateWindowCenter = () => {
      setWindowCenter({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
    };
    updateWindowCenter();
    window.addEventListener("resize", updateWindowCenter);
    return () => window.removeEventListener("resize", updateWindowCenter);
  }, []);

  useLayoutEffect(() => {
    const updateParallaxSettings = () => {
      if (window.innerWidth < 426) {
        setParallaxSettings({
          parallaxOverall: { pages: 7.9 },
          milkyWay: { offset: 0, speed: 0.3, factor: 1.2 },
          mars: { offset: 0, speed: -0.1, factor: 0.8 },
          moon: { offset: 0, speed: -0.2, factor: 0.6 },
          treeline: { offset: 0.3, speed: 0, factor: 0.8 },
          scrollIndicator: { offset: 0.05, speed: 0, factor: 0.2 },
          projectsSection: { offset: 1.3, speed: 0, factor: 1 },
          aboutMeSection: { offset: 4.5, speed: 0, factor: 1 },
          resumeSection: { offset: 5, speed: 0, factor: 1 },
          contactSection: { offset: 6.5, speed: 0, factor: 1 },
          footer: { offset: 7.5, speed: 0, factor: 0.2 },
        });
      } else if (window.innerWidth < 768) {
        setParallaxSettings({
          parallaxOverall: { pages: 7.9 },
          milkyWay: { offset: 0, speed: 0.2, factor: 1.5 },
          mars: { offset: 0, speed: -0.2, factor: 1 },
          moon: { offset: 0, speed: -0.4, factor: 0.8 },
          treeline: { offset: 0.3, speed: -0.1, factor: 1 },
          scrollIndicator: { offset: 0.05, speed: 0, factor: 0.2 },
          projectsSection: { offset: 1.4, speed: 0, factor: 1 },
          aboutMeSection: { offset: 4.1, speed: 0, factor: 1 },
          resumeSection: { offset: 5.1, speed: 0, factor: 1 },
          contactSection: { offset: 6.9, speed: 0, factor: 1 },
          footer: { offset: 7.7, speed: 0, factor: 0.2 },
        });
      } else {
        setParallaxSettings({
          parallaxOverall: { pages: 7.9 },
          milkyWay: { offset: 0, speed: 0.1, factor: 2 },
          mars: { offset: 0, speed: -0.4, factor: 1 },
          moon: { offset: 0, speed: -0.6, factor: 1 },
          treeline: { offset: 0.7, speed: 0, factor: 1.5 },
          scrollIndicator: { offset: 0.05, speed: 0, factor: 0.2 },
          projectsSection: { offset: 2.3, speed: 0, factor: 1 },
          aboutMeSection: { offset: 4.3, speed: 0, factor: 1 },
          resumeSection: { offset: 5.2, speed: 0, factor: 1 },
          contactSection: { offset: 6.9, speed: 0, factor: 1 },
          footer: { offset: 7.7, speed: 0, factor: 0.2 },
        });
      }
    };

    updateParallaxSettings();
    window.addEventListener("resize", updateParallaxSettings);
    return () => window.removeEventListener("resize", updateParallaxSettings);
  }, []);

  const calculatePosition = (mouseX, mouseY) => {
    const { x: centerX, y: centerY } = windowCenter;
    return [
      `${45 - (mouseX - centerX) * 0.002}% ${40 - (mouseY - centerY) * 0.002}%`,
      `${50 - (mouseX - centerX) * 0.004}% ${30 - (mouseY - centerY) * 0.004}%`,
      `${15 - (mouseX - centerX) * 0.015}% ${75 - (mouseY - centerY) * 0.015}%`,
    ];
  };

  useLayoutEffect(() => {
    const [depth1, depth2, depth3] = calculatePosition(
      windowCenter.x,
      windowCenter.y
    );
    if (layerRefs[0].current)
      layerRefs[0].current.style.backgroundPosition = depth1;
    if (layerRefs[1].current)
      layerRefs[1].current.style.backgroundPosition = depth2;
    if (layerRefs[2].current)
      layerRefs[2].current.style.backgroundPosition = depth3;
  }, [windowCenter]);

  useLayoutEffect(() => {
    const handleMouseMove = (e) => {
      const [depth1, depth2, depth3] = calculatePosition(e.clientX, e.clientY);
      if (layerRefs[0].current)
        layerRefs[0].current.style.backgroundPosition = depth1;
      if (layerRefs[1].current)
        layerRefs[1].current.style.backgroundPosition = depth2;
      if (layerRefs[2].current)
        layerRefs[2].current.style.backgroundPosition = depth3;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [windowCenter]);

  return (
    <div
      className="parallax"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      <Parallax pages={parallaxSettings.parallaxOverall.pages}>
        {/* Milky Way Layer */}
        <ParallaxLayer
          offset={parallaxSettings.milkyWay.offset}
          speed={parallaxSettings.milkyWay.speed}
          factor={parallaxSettings.milkyWay.factor}
        >
          <div
            id="home"
            ref={layerRefs[0]}
            style={{
              backgroundImage: `
                  linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, black 100%), 
                  url(${milky_way_illustration})
                `,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "darken",
              filter: "brightness(70%)",
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
          ></div>
        </ParallaxLayer>

        {/* Mars Layer */}
        <ParallaxLayer
          offset={parallaxSettings.mars.offset}
          speed={parallaxSettings.mars.speed}
          factor={parallaxSettings.mars.factor}
        >
          <div
            ref={layerRefs[1]}
            style={{
              backgroundImage: `url(${mars})`,
              backgroundSize: "3%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "45% 30%",
              backgroundBlendMode: "screen",
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
          ></div>
        </ParallaxLayer>

        {/* Moon Layer */}
        <ParallaxLayer
          offset={parallaxSettings.moon.offset}
          speed={parallaxSettings.moon.speed}
          factor={parallaxSettings.moon.factor}
        >
          <div
            ref={layerRefs[2]}
            style={{
              backgroundImage: `url(${moon})`,
              backgroundSize: "25%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "15% 75%",
              backgroundBlendMode: "screen",
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
          ></div>
        </ParallaxLayer>

        {/* Coverage Layer to block seeing underneath treeline layer when quickly scrolling up */}
        <ParallaxLayer
          offset={parallaxSettings.treeline.offset + 1.3}
          speed={parallaxSettings.treeline.speed}
          factor={2.0}
          style={{
            backgroundColor: "black",
          }}
        ></ParallaxLayer>

        {/* Treeline Layer */}
        <ParallaxLayer
          offset={parallaxSettings.treeline.offset}
          speed={parallaxSettings.treeline.speed}
          factor={parallaxSettings.treeline.factor}
          style={{
            backgroundImage: `url(${pine_forest_background}),
            linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, black 100%)`,
            backgroundSize: "cover",
            backgroundPosition: "0% 0%",
            backgroundBlendMode: "multiply",
          }}
        ></ParallaxLayer>

        <ParallaxLayer>
          <Header />
        </ParallaxLayer>

        <ParallaxLayer
          offset={parallaxSettings.scrollIndicator.offset}
          speed={parallaxSettings.scrollIndicator.speed}
          factor={parallaxSettings.scrollIndicator.factor}
          className="scroll-indicator-section"
        >
          <ScrollIndicator />
        </ParallaxLayer>

        <ParallaxLayer
          offset={parallaxSettings.projectsSection.offset}
          speed={parallaxSettings.projectsSection.speed}
          factor={parallaxSettings.projectsSection.factor}
          className="projects-section"
        >
          <ProjectsSection />
        </ParallaxLayer>

        <ParallaxLayer
          offset={parallaxSettings.aboutMeSection.offset}
          speed={parallaxSettings.aboutMeSection.speed}
          factor={parallaxSettings.aboutMeSection.factor}
          className="about-me-section"
        >
          <AboutMeSection />
        </ParallaxLayer>

        <ParallaxLayer
          offset={parallaxSettings.resumeSection.offset}
          speed={parallaxSettings.resumeSection.speed}
          factor={parallaxSettings.resumeSection.factor}
          className="resume-section"
        >
          <ResumeSection />
        </ParallaxLayer>

        <ParallaxLayer
          offset={parallaxSettings.contactSection.offset}
          speed={parallaxSettings.contactSection.speed}
          factor={parallaxSettings.contactSection.factor}
          className="contact-section"
        >
          <ContactSection />
        </ParallaxLayer>

        <ParallaxLayer
          offset={parallaxSettings.footer.offset}
          speed={parallaxSettings.footer.speed}
          factor={parallaxSettings.footer.factor}
          style={{
            backgroundColor: "black", // Light background for the footer
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            color: "#6c757d", // Secondary text color
          }}
        >
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default ParallaxComponent;
