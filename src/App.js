
import './App.css';
import  Greetdisplay from './Greetdisplay';
function App() {
  const greetname=[{name:"sherin",age:19},{name:"sukirtha",age:20}]
  return (
    <div className="App">
      <Greetdisplay obj={greetname}/>
    </div> 
  );
}

export default App;
