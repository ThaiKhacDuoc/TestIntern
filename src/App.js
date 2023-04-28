import './App.css';
import Logo from './component/Logo/Logo';
import Sidebar from './component/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='App-glass'>
          <Sidebar/>
          <Logo/>
      </div>
    </div>
  );
}

export default App;
