import { useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { Container, Row } from "react-bootstrap";
import { ParallaxLayer } from "@react-spring/parallax";

function AboutMeSection() {
  const controls = useAnimation();
  const aboutMeRef = useRef(null);

  const handleClick = () => {
    const element = document.getElementById("contact-section");
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

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
    <ParallaxLayer
      offset={4.3}
      speed={0}
      factor={1}
      className="about-me-section"
    >
      <motion.div
        id="about-me-section"
        style={{ paddingTop: "1rem" }}
        ref={aboutMeRef}
        initial={{ opacity: 0, x: -50 }} // Hidden initially
        animate={controls} // Controlled animation
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
      >
        <Container className="my-5" style={{ height: "auto" }}>
          <Row className="d-flex justify-content-around">
            <div className="col">
              <h2
                className="d-flex justify-content-start"
                style={{ color: "white " }}
              >
                Hello!
              </h2>
              <p style={{ color: "white", textAlign: "start", fontSize: "large", textIndent: "20px" }}>
                My name is Jedediah and I am currently building full stack
                applications as a freelance developer. I spend my spare either
                learning to develop video games using Godot or creating music on
                my Telecaster.</p>

                <p style={{ color: "white", textAlign: "start", fontSize: "large", textIndent: "20px" }}>Have an idea for your app or website, let me help you create it. Keep scrolling to my <span onClick={handleClick} style={{ textDecoration: "underline", color: "#00c04b", cursor: "pointer"}}>contact form</span> to communicate with me.
              </p>
            </div>
            <div className="col">
              <img
                src="/src/assets/images/jed-headshot.png"
                alt="Headshot of Jedediah Orullian"
                style={{
                  height: "70vh",
                  width: "auto",
                  borderRadius: "20px 70px",
                  padding: "none",
                }}
              />
            </div>
          </Row>
        </Container>
      </motion.div>
    </ParallaxLayer>
  );
}

export default AboutMeSection;
