import { useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import { ParallaxLayer } from "@react-spring/parallax";

const developmentSkills = [
  "React",
  "Vite",
  "Node.js",
  "JQuery",
  "Day.js",
  "Jest",
  "Express.js",
  "PostgreSQL",
  "MySQL",
  "Mongoose",
  "IndexedDB",
  "GraphQL",
  "Insomnia",
  "Apollo",
  "Webpack",
  "Service Worker",
];

const designSkills = [
  "Bootstrap",
  "Bulma",
  "react-spring",
  "framer-motion",
  "Handlebars",
  "Aseprite",
  "Godot",
];

const extraSkills = ["Spanish", "Git"];

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
    <ParallaxLayer offset={5.2} speed={0} factor={1} className="resume-section">
      <motion.div
        id="resume-section"
        style={{ paddingTop: "1rem" }}
        ref={resumeRef}
        initial={{ opacity: 0, x: -50 }} // Hidden initially
        animate={controls} // Controlled animation
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
      >
        <Container className="my-5">
          <Row>
            <h2>Skills</h2>
          </Row>
          <Row>
            <h3>Development</h3>
              {developmentSkills.map((skill, index) => (
                <Col xs={12} sm={6} md={4} key={index}>
                  <li>{skill}</li>
                </Col>
              ))}
          </Row>
          <Row>
            <h3>Design</h3>
              {designSkills.map((skill, index) => (
                <Col xs={12} sm={6} md={4} key={index}>
                  <li>{skill}</li>
                </Col>
              ))}
          </Row>
          <Row>
            <h3>Extra</h3>
              {extraSkills.map((skill, index) => (
                <Col xs={12} sm={6} md={4} key={index}>
                  <li>{skill}</li>
                </Col>
              ))}
          </Row>
          <Row>
            <a href="/assets/resume.pdf" download>
              Download my Resume
            </a>
          </Row>
        </Container>
      </motion.div>
    </ParallaxLayer>
  );
}

export default ResumeSection;
