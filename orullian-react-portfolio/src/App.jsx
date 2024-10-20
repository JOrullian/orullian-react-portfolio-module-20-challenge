import { useLayoutEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";

import milky_way_illustration from "./assets/images/milky-way-illustration.jpg";
import moon from "./assets/images/moon.png";
import mars from "./assets/images/mars.png";
import pine_forest_background from "./assets/images/pine-forest-background.png";

function App() {
  const layerRefs = [useRef(null), useRef(null), useRef(null)];
  const [windowCenter, setWindowCenter] = useState({ x: 0, y: 0 });

  // Calculate window center on load and resize
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

  // Function to calculate position based on mouse movement (change the decimals to affect how strong the parallax movement for mousemove will be; also, you can add desired parallax elements to these depths to have the same calculation, or add a new depth, layerRef and calculation)
  const calculatePosition = (mouseX, mouseY) => {
    const { x: centerX, y: centerY } = windowCenter;

    return [
      `${45 - (mouseX - centerX) * 0.002}% ${40 - (mouseY - centerY) * 0.002}%`, // Milky Way
      `${50 - (mouseX - centerX) * 0.004}% ${30 - (mouseY - centerY) * 0.004}%`, // Mars
      `${15 - (mouseX - centerX) * 0.015}% ${75 - (mouseY - centerY) * 0.015}%`, // Moon
    ];
  };

  // Initialize positions based on the window center
  useLayoutEffect(() => {
    const [depth1, depth2, depth3] = calculatePosition(windowCenter.x, windowCenter.y);

    if (layerRefs[0].current) layerRefs[0].current.style.backgroundPosition = depth1;
    if (layerRefs[1].current) layerRefs[1].current.style.backgroundPosition = depth2;
    if (layerRefs[2].current) layerRefs[2].current.style.backgroundPosition = depth3;
  }, [windowCenter]);

  // Adjust positions dynamically based on mouse movement
  useLayoutEffect(() => {
    const handleMouseMove = (e) => {
      const [depth1, depth2, depth3] = calculatePosition(e.clientX, e.clientY);

      if (layerRefs[0].current) layerRefs[0].current.style.backgroundPosition = depth1;
      if (layerRefs[1].current) layerRefs[1].current.style.backgroundPosition = depth2;
      if (layerRefs[2].current) layerRefs[2].current.style.backgroundPosition = depth3;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [windowCenter]);

  return (
    <div
      className="parallax"
      style={{
        backgroundColor: "black", // Base black background
        position: "absolute",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Parallax pages={4}>
        {/* Milky Way Layer */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          factor={2}
          >
            <div
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
          offset={0}
          speed={-0.4}
          factor={1}
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
              position: "absolute"
            }}
            ></div>
        </ParallaxLayer>

        {/* Moon Layer */}
        <ParallaxLayer
          offset={0}
          speed={-0.6}
          factor={1}
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
            }}></div>
        </ParallaxLayer>

        {/* Treeline Layer */}
        <ParallaxLayer
          offset={1}
          speed={-0.1}
          factor={1.5}
          style={{
            backgroundImage: `url(${pine_forest_background}),
            linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, black 100%)`,
            backgroundSize: "cover",
            backgroundPosition: "0% 0%",
            backgroundBlendMode: "multiply",
          }}
        ></ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
