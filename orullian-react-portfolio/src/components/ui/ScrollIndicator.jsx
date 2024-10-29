import "./ScrollIndicator.css";
import { useAnimation, motion } from "framer-motion";
import { useEffect, useRef } from "react";

function ScrollIndicator() {
  const controls = useAnimation();
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      controls.start({ opacity: 0, y: 50 });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 }); // Animate into view
        } else {
          controls.start({ opacity: 0, y: 50 }); // Reset when out of view
        }
      },
      { threshold: 0.8 }
    );

    if (scrollIndicatorRef.current) observer.observe(scrollIndicatorRef.current);

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (scrollIndicatorRef.current) observer.unobserve(scrollIndicatorRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  const handleClick = () => {
    const element = document.getElementById("projects-section");
    element?.scrollIntoView({ behavior: "smooth" });
    controls.start({ opacity: 0, y: 50 }); // Hide indicator on click
  };

  return (
      <motion.div
        ref={scrollIndicatorRef}
        initial={{ opacity: 0, y: 50 }} // Hidden initially
        animate={controls}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ height: "100vh", position: "relative" }} // Relative positioning to allow absolute child positioning
      >
        <button className="btn p-0 border-0 bg-transparent" onClick={handleClick} style={{position: "absolute", bottom: "10%", left: "50%", transform: "translateX(-50%)"}}>
          <div className="scroll-prompt">
            <div className="mouse"></div>
            <div className="text">SCROLL</div>
          </div>
        </button>
      </motion.div>
  );
}

export default ScrollIndicator;
