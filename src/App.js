import logo from './logo.svg';
import './App.css';
import Fav from "./assets/favicon.ico"
import Projects from './components/projects'
import Card from "./components/muicard"
import Hero from "./components/hero"
import Carousel from './components/carousel'
import Footer from './components/footer'
import Contact from './components/contact'
function App() {
  return (
    <div className="">
      
      <h1 class="row justify-content-start me"><img className="logo" src={Fav} alt="logo"/> Ben Abbott</h1>
      {/* <Projects/> */}
      <Hero/>
      <br/>
      <Card/>
     <Footer/>
    </div>
  );
}

export default App;
