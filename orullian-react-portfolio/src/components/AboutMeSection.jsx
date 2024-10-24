import { useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { Container, Row } from "react-bootstrap";
import { ParallaxLayer } from "@react-spring/parallax";

function AboutMeSection() {
    const controls = useAnimation();
    const aboutMeRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, x: 0 }); // Animate into view
          } else {
            controls.start({ opacity: 0, x: -50 }); // Reset when out of view
          }
        },
        { threshold: 0.3 } // Trigger when 10% of the section is visible
      );
  
      if (aboutMeRef.current) observer.observe(aboutMeRef.current);
  
      return () => {
        if (aboutMeRef.current) observer.unobserve(aboutMeRef.current);
      };
    }, [controls]);

    
  return (
    <ParallaxLayer offset={3.4} speed={0} factor={1}
    className="about-me-section">
      <motion.div
        id="about-me-section"
        style={{ paddingTop: "5rem"}}
        ref={aboutMeRef}
        initial={{ opacity: 0, x: -50 }} // Hidden initially
        animate={controls} // Controlled animation
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
      >
        <Container className="my-5">
          <Row>
            <p>About Me Section</p>
          </Row>

          <Row className="d-flex justify-content-around">
            <img 
              src="/src/assets/images/jed-headshot.png"
              alt="Headshot of Jedediah Orullian"
              style={{
                height: "400px",
                width: "300px",
                borderRadius: "20px 70px",
                padding: "none"
                }} />
          </Row>
        </Container>
      </motion.div>
    </ParallaxLayer>
);
}

export default AboutMeSection;