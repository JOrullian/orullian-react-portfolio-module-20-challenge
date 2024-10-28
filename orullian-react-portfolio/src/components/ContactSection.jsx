import { useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { Container, Row } from "react-bootstrap";
import { ParallaxLayer } from "@react-spring/parallax";
import ContactForm from "./ContactForm";

function ContactSection() {
  const controls = useAnimation();
  const contactRef = useRef(null);

  // Start animations only when the section becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, x: 0 }); // Animate into view
        } else {
          controls.start({ opacity: 0, x: -50 }); // Reset when out of view
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    // Observe the contact section
    if (contactRef.current) observer.observe(contactRef.current);

    // Cleanup observer when component unmounts
    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, [controls]);

  return (
    <ParallaxLayer offset={6.3} speed={0} factor={1} className="contact-section">
      <motion.div
        id="contact-section"
        style={{ paddingTop: "1rem" }}
        ref={contactRef}
        initial={{ opacity: 0, x: -50 }} // Start hidden and off-screen
        animate={controls} // Animation control
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
      >
        <Container className="my-5">
          <ContactForm />
        </Container>
      </motion.div>
    </ParallaxLayer>
  );
}

export default ContactSection;
