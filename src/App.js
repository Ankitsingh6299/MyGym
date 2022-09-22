import './App.css';
import Hero from './components/Hero';
import Program from './components/Program';
import Reasons from './components/Reasons';
import image1 from '../src/assets/image1.png';
import image2 from '../src/assets/image2.png';
import image3 from '../src/assets/image3.png';
import image4 from '../src/assets/image4.png';
import nb from '../src/assets/nb.png';
import adidas from '../src/assets/adidas.png';
import nike from '../src/assets/nike.png';
import tick from '../src/assets/tick.png';
function App() {
  return (
    <div className="App">
          <Hero />
          <Program />
          <Reasons />
    </div>
  );
}

export default App;
