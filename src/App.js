import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';

function App() {
  return (
    <div className="wrapper">
      <div className="text-container">
        <h1>React Web App Template</h1>
        <p><a href="https://github.com/SymbioticLove" alt="GitHub link" target="_blank" rel="noopener noreferrer">Check out our other projects on GitHub!</a></p>
      </div>
      <div className="componenent1-container">
        <Component1 />
      </div>
      <div className="component2-container">
        <Component2 />
      </div>
      <div className="component3-container">
        <Component3 />
      </div>
      <div className="bottom-container">
        <h3>Created by Matthew Ford, CEO and Chief Engineer</h3>
        <h4><a href="https://symbiotic.love" alt="Page link" target="_blank" rel="noopener noreferrer">Symbiotic Love</a></h4>
      </div>
    </div>
  );
}

export default App;
