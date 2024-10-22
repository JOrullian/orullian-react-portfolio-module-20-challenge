import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";

function ProjectCard({ title, description }) {
    return (
        <Card style={{ width: '18rem', backgroundColor: 'transparent' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

// Prop validation using PropTypes
ProjectCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  };

export default ProjectCard;