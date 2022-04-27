import logo from './logo.svg';
import './App.css';
import Fav from "./assets/favicon.ico"
import Projects from './components/projects'
function App() {
  return (
    <div className="">
      <h1 class="row justify-content-start"><img src={Fav} alt="logo"/> Ben Abbott</h1>
      <Projects/>
    </div>
  );
}

export default App;
