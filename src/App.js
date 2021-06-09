import './App.css';

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

    <Route 
      path='/portfolio'
      exact
      render={()=>{
        return <Portfolio />
      }}
    />

    </div>
  );
}

export default App;
