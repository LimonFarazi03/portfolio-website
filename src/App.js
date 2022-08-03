import './App.css';
import About from './component/About';
import AboutMe from './component/AboutMe';
import Banner from './component/Banner';
import NavigationBar from './component/NavigationBar';
import Portfolio from './component/Protfolio';
import Skill from './component/Skill';

function App() {
  return (
    <div className="">
      <NavigationBar />
      <Banner />
      <About />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default App;
