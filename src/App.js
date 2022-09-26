import './App.css';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Program from './components/Program';
import Reasons from './components/Reasons';

function App() {
  return (
    <div className="App">
          <Hero />
          <Program />
          <Reasons />
          <Plans />
    </div>
  );
}

export default App;
