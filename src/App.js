import logo from './logo.svg';
import './App.css';
import Header from "./comps/header";
import Lside from "./comps/leftside";
import Rside from "./comps/rytside";

function App() {
  return (
    <div className="App absolute top-0 w-full h-screen bg-gray-200">
      <Header/>
      <div className='w-3/5 p-3 left-0 absolute '>
        <Lside/>
      </div>
      <div className='w-2/5 p-3 absolute right-0' >
        <Rside/>
      </div>
    </div>
    
  );
}

export default App;
