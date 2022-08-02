import './App.css';
import About from './component/About';
import AboutMe from './component/AboutMe';
import Banner from './component/Banner';
import NavigationBar from './component/NavigationBar';

function App() {
  return (
    <div className="">
      <NavigationBar />
      <Banner />
      <About />
      <AboutMe />
    </div>
  );
}

export default App;
