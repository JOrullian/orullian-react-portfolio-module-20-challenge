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
    <Card className="project-card" style={{ backgroundColor: "transparent" }}>
      <Card.Body className="project-card-body d-flex flex-column justify-content-between">
        <Card.Img
          variant="top"
          src={appImage}
          style={{ objectFit: "contain", height: "200px" }}
        />
        <Card.Title style={{ marginTop: "0.5rem" }}>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {githubLink && (
          <Button
            className="github-btn"
            variant="primary"
            href={githubLink}
            style={{
              backgroundColor: "transparent",
              border: "green 3px solid",
            }}
          >
            Github Repo
          </Button>
        )}
        <div className="gap" style={{ height: "10px" }}></div>
        {deployedLink && (
          <Button
          className="deployed-btn"
            variant="primary"
            href={deployedLink}
            style={{
              backgroundColor: "transparent",
              border: "green 3px solid",
            }}
          >
            Deployed Page
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  githubLink: PropTypes.string,
  deployedLink: PropTypes.string,
  appImage: PropTypes.string,
};

export default ProjectCard;
