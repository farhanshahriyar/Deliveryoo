import './App.css';
import About from './components/About';
import Application from './components/Application';
import Contact from './components/Contact';
import Home from './components/Home';
import Services from './components/Services';
import Footer from './parts/Footer';
import Header from './parts/Header';


function App() {
  return (
    <div>
      <Header></Header>
      <div className='main'>
        <Home></Home>
        <About></About>
        <Services></Services>
        <Application></Application>
        <Contact></Contact>
      </div>
      <Footer></Footer>
        <a href="#" class="scrollup" id="scroll-up">
            <i class='bx bx-up-arrow-alt scrollup-icon'></i>
        </a>
    </div>
  );
}

export default App;
