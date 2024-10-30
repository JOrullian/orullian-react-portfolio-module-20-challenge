import { useState } from "react";
import emailjs from "emailjs-com";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

// Environment variables from netlify UI
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

function ContactForm() {

  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [emailValidated, setEmailValidated] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [commentError, setCommentError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailBlur = () => {
    if (!email || !validateEmail(email)) {
      setEmailError("A valid email is required.");
    } else {
      setEmailError("");
    }
  };

  const handleCommentBlur = () => {
    if (!comment) {
      setCommentError("Please enter something into the comment field.");
    } else {
      setCommentError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !comment || emailError || commentError) {
      alert('Please check that you have input a valid email and that the comment section is not empty.');
      return;
    };

    const templateParams = {
      from_email: email,
      comment: comment,
    };

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message Sent");
        },
        (error) => {
          alert("Failed to send, please try again");
        }
      );

    setEmailValidated(true);
  };

  return (
    <>
      <Form noValidate validated={emailValidated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleEmailBlur}
              isInvalid={!!emailError}
            />
          </FloatingLabel>
          {emailError && (
            <Form.Text className="text-danger">{emailError}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onBlur={handleCommentBlur}
              isInvalid={!!commentError}
            />
          </FloatingLabel>
          {commentError && (
            <Form.Text className="text-danger">{commentError}</Form.Text>
          )}
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

ContactForm.propTypes = {
  email: PropTypes.string,
  comment: PropTypes.string,
  emailError: PropTypes.string,
  commentError: PropTypes.string,
};

export default ContactForm;
