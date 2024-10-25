import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

function ProjectCard({
  title,
  description,
  githubLink,
  deployedLink,
  appImage,
}) {
  return (
    <Card style={{ width: "18rem", backgroundColor: "transparent" }}>
      <Card.Body className="project-card-body">
        <Card.Img variant="top" src={appImage} />
        <Card.Title style={{ marginTop: "0.5rem" }}>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {githubLink && (
          <Button variant="primary" href={githubLink}>
            Github Repo
          </Button>
        )}
        {deployedLink && (
          <Button variant="primary" href={deployedLink}>
            Deployed Page
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

// Prop validation using PropTypes
ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  githubLink: PropTypes.string,
  deployedLink: PropTypes.string,
  appImage: PropTypes.string,
};

export default ProjectCard;
