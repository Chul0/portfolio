import './CSS/App.css';


import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <NavBar />

      <Route 
       path="/"
       exact
       render={()=>{
         return <Home />
         
       }}
      />

    <Portfolio />
    <p id='hi'>hi </p>

    </div>
  );
}

export default App;
