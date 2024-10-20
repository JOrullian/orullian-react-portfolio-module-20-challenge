import OffcanvasMenu from "./components/OffcanvasMenu";
import ParallaxComponent from "./components/ParallaxHeader";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
  <>
  <OffcanvasMenu
    title="My Navigation Menu"
    content="This is the content of the menu, such as links or options."
    />
  <ParallaxComponent />
  </>
  );
}

export default App;
