import HomePage from "./HomePage/homepage.component";
import HeadPhonesCategory from "./Categories/Headphones/headphones.component";
import Speakers from "./Categories/Speakers/speakers.component"
import "./setup.css";
import "./App.scss";
import Earphones from "./Categories/Earphones/earphones.component";

function App() {
  return (
    <div className="App">
      {/* <HomePage />
      <HeadPhonesCategory />
      <Speakers /> */}
      <Earphones />
    </div>
  );
}

export default App;
