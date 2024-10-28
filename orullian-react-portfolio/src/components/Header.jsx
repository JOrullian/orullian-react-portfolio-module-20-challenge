import { useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { ParallaxLayer } from "@react-spring/parallax";

function Header() {
  const controls = useAnimation();
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, x: 0 }); // Animate into view
        } else {
          controls.start({ opacity: 0, x: 50 }); // Reset when out of view
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (headerRef.current) observer.observe(headerRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, [controls]);

  return (
    <ParallaxLayer>
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, x: 50 }} // Start hidden to the right
        animate={controls} // Controlled animation
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "absolute",
          right: "10%",
          top: "33%",
          textAlign: "right", // Align text to the right within the container
        }}
      >
        <h1 style={{ color: "white", margin: 0, marginBottom: "5px", fontSize: "500%" }}>Jedediah</h1>
        <h1 style={{ color: "white", margin: 0, fontSize: "500%" }}>Orullian</h1>
      </motion.div>
    </ParallaxLayer>
  );
}

export default Header;
