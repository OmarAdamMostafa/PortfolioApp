import './App.css';
import { NavBar, Banner, Skills, Projects, Contact } from './components';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
