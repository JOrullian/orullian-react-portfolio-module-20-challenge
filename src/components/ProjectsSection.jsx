import { useState, useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";

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
      { threshold: 0.1 }
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
      description: "App for users to find and create local sporting events",
      githubLink: "https://github.com/JOrullian/group-1-project-2",
      deployedLink: "https://quickmatch.onrender.com",
      appImage: "/assets/quickmatch.png",
    },
    {
      id: 2,
      title: "Pixel Chess",
      description: "Chess recreated in Godot using my own pixel art assets",
      appImage: "/assets/pixel_chess.png",
    },
    {
      id: 3,
      title: "Text Editor PWA",
      description: "Simple text editor that can be installed and used offline",
      githubLink:
        "https://github.com/JOrullian/orullian-pwa-text-editor-module-19-challenge",
      deployedLink: "https://orullian-pwa-text-editor-module-19.onrender.com",
      appImage: "/assets/pwa-text-editor.png",
    },
    {
      id: 4,
      title: "SQL Employee Tracker",
      description: "Employee database that users can access from the CLI",
      githubLink:
        "https://github.com/JOrullian/orullian-sql-employee-tracker-module-12-challenge",
      appImage: "/assets/sql-employee-tracker.png",
    },
    {
      id: 5,
      title: "MVC Tech Blog",
      description: "Blog website where users can make and comment on posts",
      githubLink:
        "https://github.com/JOrullian/orullian-mvc-tech-blog-module-14-challenge",
      deployedLink: "https://orullian-mvc-tech-blog-module-14.onrender.com",
      appImage: "/assets/mvc-tech-blog.png",
    },
    {
      id: 6,
      title: "Social Network API",
      description:
        "MongoDB database structured for a social network application",
      githubLink:
        "https://github.com/JOrullian/orullian-social-network-api-module-18-challenge",
      appImage: "/assets/social-network-api.png",
    },
  ]);

  return (

      <motion.div
        id="projects-section"
        style={{ paddingTop: "1rem" }}
        ref={projectsRef}
        initial={{ opacity: 0, x: -50 }} // Hidden initially
        animate={controls}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Container className="my-5 d-flex flex-row justify-content-around">
          <Row
            className="d-flex flex-wrap justify-content-around"
            style={{ width: "100%" }}
          >
            {projects.map((project) => (
              <Col
                key={project.id}
                xs={6}
                sm={6}
                md={4}
                className="mb-4 d-flex justify-content-center"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  githubLink={project.githubLink}
                  deployedLink={project.deployedLink}
                  appImage={project.appImage}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </motion.div>
  );
}

export default ProjectsSection;
