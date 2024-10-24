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
      title: "QuickMatch",
      description: "This is the first project description",
      githubLink: "https://github.com/JOrullian/group-1-project-2",
      deployedLink: "https://quickmatch.onrender.com"
    },
    {
      id: 2,
      title: "Pixel Chess",
      description: "This is the second project description",
    },
    {
      id: 3,
      title: "Text Editor PWA",
      description: "This is the third project description",
      githubLink: "https://github.com/JOrullian/orullian-pwa-text-editor-module-19-challenge",
      deployedLink: "https://orullian-pwa-text-editor-module-19.onrender.com"
    },
    {
      id: 4,
      title: "SQL Employee Tracker",
      description: "This is the third project description",
      githubLink: "https://github.com/JOrullian/orullian-sql-employee-tracker-module-12-challenge"
    },
    {
      id: 5,
      title: "MVC Tech Blog",
      description: "This is the third project description",
      githubLink: "https://github.com/JOrullian/orullian-mvc-tech-blog-module-14-challenge",
      deployedLink: "https://orullian-mvc-tech-blog-module-14.onrender.com"
    },
    {
      id: 6,
      title: "Social Network API",
      description: "This is the third project description",
      githubLink: "https://github.com/JOrullian/orullian-social-network-api-module-18-challenge"
    }    
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
