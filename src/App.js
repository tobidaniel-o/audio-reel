import HomePage from "./HomePage/homepage.component";
import HeadPhonesCategory from "./Categories/Headphones/headphones.component";
import Speakers from "./Categories/Speakers/speakers.component";
import Earphones from "./Categories/Earphones/earphones.component";
import HeadPhones1 from "./ProductDetail/Headphones-1/headphones-1.component"
import "./setup.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      {/* <HeadPhonesCategory /> */}
      {/* <Speakers /> */}
      {/* <Earphones /> */}
      <HeadPhones1 />
    </div>
  );
}

export default App;
