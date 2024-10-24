import { useState, useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import { ParallaxLayer } from "@react-spring/parallax";

function ProjectsSection() {
  const controls = useAnimation();
  const projectsRef = useRef(null);

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

    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => {
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, [controls]);

  const [projects] = useState([
    {
      id: 1,
      title: "Project 1",
      description: "This is the first project description",
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is the second project description",
    },
    {
      id: 3,
      title: "Project 3",
      description: "This is the third project description",
    },
  ]);

  return (
        <ParallaxLayer offset={2.6} speed={0} factor={1} className="projects-section">
          <motion.div
            id="projects-section"
            style={{ paddingTop: "5rem"}}
            ref={projectsRef}
            initial={{ opacity: 0, x: -50 }} // Hidden initially
            animate={controls} // Controlled animation
            transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
          >
            <Container
              className="my-5 d-flex flex-row justify-content-around">
              <Row className="d-flex flex-row justify-content-around"
                style={{ width: "100%"}}>
                {projects.map((project) => (
                  <Col key={project.id} md={4} className="mb-4 d-flex justify-content-center">
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </motion.div>
        </ParallaxLayer>
  );
}

export default ProjectsSection;
