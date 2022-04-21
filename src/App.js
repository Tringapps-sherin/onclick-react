
import './App.css';
import  Greetdisplay from './Greet';
function App() {
  const greetname=[{name:"sherin",age:19},{name:"sukirtha",age:20}]
  return (
    <div className="App">
      <Greetdisplay obj={greetname}/>
    </div> 
  );
}

export default App;
