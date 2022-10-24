import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

import Index from './pages/index';


function App() {
  let currentTime =  new Date().toTimeString();
  

  return (
    <div className="App">
      
      <Index/>
    </div>
  );
}

export default App;
