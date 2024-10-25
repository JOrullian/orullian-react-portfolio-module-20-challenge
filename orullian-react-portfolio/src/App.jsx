import OffcanvasMenu from "./components/OffcanvasMenu";
import ParallaxContent from "./components/ParallaxContent";
import ScrollIndicator from "./components/ui/ScrollIndicator";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
    
      <Button
        href="#home"
        variant="outline-secondary"
        className="me-2 logo-btn"
      >
        <img
          src="/assets/start-button.png"
          alt="logo icon"
          id="start-logo-icon"
        />
      </Button>

      <OffcanvasMenu
        title="My Navigation Menu"
        content="This is the content of the menu, such as links or options."
      />

      <ParallaxContent />
      
    </>
  );
}

export default App;
