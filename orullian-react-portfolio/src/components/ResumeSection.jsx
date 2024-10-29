import { useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";

const developmentSkills = [
  { name: "React", icon: "assets/react-icon.png" },
  { name: "Vite", icon: "assets/vite-icon.png" },
  { name: "Node.js", icon: "assets/node-icon.png" },
  { name: "JQuery", icon: "assets/jquery-icon.png" },
  { name: "Day.js" },
  { name: "Jest", icon: "assets/jest-icon.png" },
  { name: "Express.js" },
  { name: "PostgreSQL", icon: "assets/postgresql-icon.png" },
  { name: "MySQL", icon: "assets/mysql-icon.png" },
  { name: "Mongoose" },
  { name: "IndexedDB" },
  { name: "GraphQL" },
  { name: "Insomnia", icon: "assets/insomnia-icon.png" },
  { name: "Apollo" },
  { name: "Webpack" },
  { name: "Service Worker" },
];

const designSkills = [
  { name: "Bootstrap", icon: "assets/bootstrap-icon.png" },
  { name: "Bulma", icon: "assets/bulma-icon.png" },
  { name: "react-spring" },
  { name: "framer-motion", icon: "assets/framer-motion-icon.png" },
  { name: "Handlebars", icon: "assets/handlebars-icon.png" },
  { name: "Aseprite", icon: "assets/aseprite-icon.png" },
  { name: "Godot" },
];

const extraSkills = [
  { name: "Spanish" },
  { name: "Git", icon: "assets/git-icon.png" },
];

function ResumeSection() {
  const controls = useAnimation();
  const resumeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, x: 0 });
        } else {
          controls.start({ opacity: 0, x: -50 });
        }
      },
      { threshold: 0.3 }
    );

    if (resumeRef.current) observer.observe(resumeRef.current);

    return () => {
      if (resumeRef.current) observer.unobserve(resumeRef.current);
    };
  }, [controls]);

  const skillItemStyle = {
    backgroundColor: "#f0f0f0",
    borderRadius: "8px",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  return (
      <motion.div
        id="resume-section"
        style={{ paddingTop: "1rem" }}
        ref={resumeRef}
        initial={{ opacity: 0, x: -50 }}
        animate={controls}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Container className="my-5" style={{ color: "black", listStyle: "none", fontStyle: "bold" }}>
          <Row>
            <h2 className="mb-3" style={{ color: "white"}}>Skills</h2>
          </Row>
          <Row className="mb-3">
            <h3 className="mb-3" style={{ color: "white"}}>Development</h3>
            {developmentSkills.map((skill, index) => (
              <Col xs={12} sm={6} md={4} key={index} className="mb-1">
                <li style={skillItemStyle}>
                  {skill.icon && (
                    <img
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      style={{ height: "20px", width: "20px" }}
                    />
                  )}
                  {skill.name}
                </li>
              </Col>
            ))}
          </Row>
          <Row className="mb-3">
            <h3 className="mb-3" style={{ color: "white"}}>Design</h3>
            {designSkills.map((skill, index) => (
              <Col xs={12} sm={6} md={4} key={index} className="mb-1">
                <li style={skillItemStyle}>
                  {skill.icon && (
                    <img
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      style={{ height: "20px", width: "20px" }}
                    />
                  )}
                  {skill.name}
                </li>
              </Col>
            ))}
          </Row>
          <Row className="mb-3">
            <h3 className="mb-3" style={{ color: "white"}}>Extra</h3>
            {extraSkills.map((skill, index) => (
              <Col xs={12} sm={6} md={4} key={index} className="mb-1">
                <li style={skillItemStyle}>
                  {skill.icon && (
                    <img
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      style={{ height: "20px", width: "20px" }}
                    />
                  )}
                  {skill.name}
                </li>
              </Col>
            ))}
          </Row>
          <Row>
            <a href="/assets/resume.pdf" download className="mb-3">
              Download my Resume
            </a>
          </Row>
        </Container>
      </motion.div>
  );
}

export default ResumeSection;
