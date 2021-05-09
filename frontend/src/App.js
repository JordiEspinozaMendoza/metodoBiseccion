import { HashRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./views/HomeScreen";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router>
        <Route path="/" component={HomeScreen} exact></Route>
      </Router>
      <Footer />
    </>
  );
}

export default App;
