import React from 'react'
import './App.css';
export default function Greetdisplay(props)
{
    return(
    // <div>{props.obj.map((name)=><div onClick={()=>{alert("hello guys!!")}>)</div>div>
    <div>{props.obj.map((object)=><><div class="App-header"onClick={() => { alert("hello guys"); } }>{object.name}</div><div class="App-header">{object.age}</div></>)}</div>

    
    );
}