import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Import @react-spring/parallax for parallax animations
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// Import images for parallax animations
import forest_and_river_border from "./assets/images/forest-and-river-border.png";
import forest_border from "./assets/images/forest-border.png";
import galaxy from "./assets/images/galaxy.png";
import mars from "./assets/images/mars.png";
import milky_way_illustration from "./assets/images/milky-way-illustration.jpg";
import moon from "./assets/images/moon.png";
import nebula from "./assets/images/nebula.png";
import pine_forest_background from "./assets/images/pine-forest-background.png";
import pine_forest_round_badge from "./assets/images/pine-forest-round-badge.jpg";
import sky_and_stars from "./assets/images/sky-and-stars.jpg";
import starry_sky_border from "./assets/images/starry-sky-border.png";
import start_button from "./assets/images/start-button.png";

function App() {
  return (
    <div
      className="parallax"
      style={{
        backgroundColor: "black", // Base black background
        position: "absolute", // Ensure it covers the entire viewport
        width: "100%",
        height: "100%",
        overflow: "hidden", // Prevent unwanted scrollbars
      }}
    >
      <Parallax pages={4}>
        {/* Milky Way Layer with Linear Gradient */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          factor={2}
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, black 100%), 
              url(${milky_way_illustration})
            `,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundBlendMode: "darken", // Blend the gradient smoothly with the image
            filter: "brightness(70%)",
          }}
        ></ParallaxLayer>

        {/* Moon Layer */}
        <ParallaxLayer
          offset={0.5}
          speed={-0.2}
          factor={1}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "30%",
            backgroundPosition: "15% 35%",
            backgroundBlendMode: "screen", // Example blend mode for visibility over black
          }}
        ></ParallaxLayer>

        {/* Treeline Layer */}
        <ParallaxLayer
          offset={1}
          speed={-0.3}
          factor={1}
          style={{
            backgroundImage: `url(${pine_forest_background}),
            linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, black 100%)`,
            backgroundSize: "cover",
            backgroundPosition: "0% 0%",
            backgroundBlendMode: "multiply", // Helps blend forest with black base
          }}
        ></ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;