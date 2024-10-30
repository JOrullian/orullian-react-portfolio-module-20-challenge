import { useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { Container } from "react-bootstrap";
import ContactForm from "./ContactForm";

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
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, [controls]);

  return (
      <motion.div
        id="contact-section"
        style={{ paddingTop: "1rem" }}
        ref={contactRef}
        initial={{ opacity: 0, x: -50 }} // Start hidden and off-screen
        animate={controls} // Animation control
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
      >
        <Container className="my-5">
          <h1 className="mb-4" style={{ color: "white" }}>Send me a message!</h1>
          <ContactForm />
        </Container>
      </motion.div>
  );
}

export default ContactSection;
