import './App.css';

import NavBar from './components/NavBar'
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="myName">
        <h1 className="title">Sungchul Park</h1>
        <h1 className="whoAmI">Software Engineer</h1>
        <h1 className="whoAmI">Full-stack Developer</h1>
        <div className="socials">
          <p>Linked-in</p>
          <p>Github</p>
          <p>Resume</p>
        </div>
      </div>
    </div>
  );
}

export default App;
