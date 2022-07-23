import logo from './logo.svg';
import './App.css';

import Mounting from './LifeCycle/Mounting'
import Updating from './LifeCycle/Updating'
import Unmounting from './LifeCycle/Unmounting'
import CheckLifeCycle from './LifeCycle/CheckLifeCycle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Mounting favoritecolor="yellow"/> */}
        {/* <Updating/> */}
        {/* <Unmounting /> */}
        {/* <CheckLifeCycle/> */}
      </header>
    </div>
  );
}

export default App;
