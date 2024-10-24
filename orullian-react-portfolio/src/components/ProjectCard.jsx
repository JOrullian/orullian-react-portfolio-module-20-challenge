import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";

function ProjectCard({ title, description, githubLink, deployedLink, appImage }) {
    return (
        <Card style={{ width: '18rem', backgroundColor: 'transparent' }}>
            <Card.Body>
                <img src={appImage} alt="Image placeholder for an application" />
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary" href={githubLink}>Github Repo</Button>
                <Button variant="primary" href={deployedLink}>Deployed Page</Button>
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