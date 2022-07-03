import logo from "./logo.svg";
import "./App.css";
import Banner from "./pages/Banner/Banner";
import Training from "./pages/Training/Training";
import Courses from "./pages/Courses/Courses";
import Nav from "./pages/Nav/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <Training />
      <Courses />
    </div>
  );
}

export default App;
