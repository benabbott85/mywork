// import logo from './logo.svg';
import './App.css';
import Fav from "./assets/new.png"
// import Projects from './components/projects'
import Card from "./components/muicard"
import Hero from "./components/hero"
// import Carousel from './components/carousel'
import Footer from './components/footer'
// import Contact from './components/contact'
import About from './components/about'
import Timeline from './components/timeline'
import Loop from './components/loop'
function App() {
  return (
    <div className="">
      {/* <Nav></Nav> */}
      <h1 class="row justify-content-start me"><img className="logo" src={Fav} alt="logo"/> <span className="me2">Ben Abbott</span></h1>
      {/* <Projects/> */}
      <Hero/>
    {/* <Loop/> */}
      <br/>
      <Card/>
        <br/>
        <br></br>
        <br></br>
        <br></br>
        <Timeline/>
        <br/>
        <br/>
      <About/>
      <br/>
     <Footer/>
    </div>
  );
}

export default App;
