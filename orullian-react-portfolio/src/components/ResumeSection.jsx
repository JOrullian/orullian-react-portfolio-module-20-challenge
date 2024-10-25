import { useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { Container, Row } from "react-bootstrap";
import { ParallaxLayer } from "@react-spring/parallax";

function ResumeSection() {
    const controls = useAnimation();
    const resumeRef = useRef(null);
  
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
  
      if (resumeRef.current) observer.observe(resumeRef.current);
  
      return () => {
        if (resumeRef.current) observer.unobserve(resumeRef.current);
      };
    }, [controls]);

    
  return (
    <ParallaxLayer offset={4.5} speed={0} factor={1}
    className="resume-section">
      <motion.div
        id="resume-section"
        style={{ paddingTop: "5rem"}}
        ref={resumeRef}
        initial={{ opacity: 0, x: -50 }} // Hidden initially
        animate={controls} // Controlled animation
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
      >
        <Container className="my-5">
          <Row>
            <p>Resume Section</p>
          </Row>
        </Container>
      </motion.div>
    </ParallaxLayer>
);
}

export default ResumeSection;