import logo from './logo.svg';
import './App.css';
import Fav from "./assets/favicon.ico"
import Projects from './components/projects'
import Card from "./components/muicard"

import Carousel from './components/carousel'
function App() {
  return (
    <div className="">
      
      <h1 class="row justify-content-start"><img src={Fav} alt="logo"/> Ben Abbott</h1>
      {/* <Projects/> */}
      <Card/>
     
    </div>
  );
}

export default App;
