import { useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { Container, Row } from "react-bootstrap";
import { ParallaxLayer } from "@react-spring/parallax";

function ContactSection() {
    const controls = useAnimation();
    const contactRef = useRef(null);
  
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
  
      if (contactRef.current) observer.observe(contactRef.current);
  
      return () => {
        if (contactRef.current) observer.unobserve(contactRef.current);
      };
    }, [controls]);

    
  return (
    <ParallaxLayer offset={5} speed={0} factor={1}
    className="contact-section">
      <motion.div
        ref={contactRef}
        initial={{ opacity: 0, x: -50 }} // Hidden initially
        animate={controls} // Controlled animation
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
      >
        <Container className="my-5">
          <Row>
            <p>Contact Section</p>
          </Row>
        </Container>
      </motion.div>
    </ParallaxLayer>
);
}

export default ContactSection;