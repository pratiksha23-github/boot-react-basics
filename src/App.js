import { Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import Navigation from "./Components/Navigation";


function App() {
  return (
    <>
      <Navigation />
      <Route path="/" exact component={HomePage} />
      <Route path="/About" exact component={AboutPage} />
      <Route path="/contact" exact component={ContactPage} />
    </>
  );
}
export default App;
