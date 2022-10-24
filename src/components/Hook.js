import React, { useEffect } from 'react';
import { useState } from 'react';
import randomColor from 'randomcolor';
import ChoreForms from './ChoreForms';

const Hook = () => {
    // counter example using click
    let [count, setCount] = useState(0);
    function increment(){
        setCount(count++);
    }
    function decrement(){
        if(count > 0){
            setCount(count--);
        }else{
            setCount(count = 0);
        }
        
    }
    // Timer Example
    let [seconds, setSeconds] = useState(0);
    let [isActive, setIsActive] = useState(false);
    let toggle=()=>{
        setIsActive(!isActive);
    }
    let reset=()=>{
        setSeconds(0);
        setIsActive(false);
    }
    let startPause = "";
    if(isActive !== true){
        startPause = "Start";
    }else{
        startPause = "Pause";
    }
    
    // useEffect accepts 2 arguments
    // first argument is a function, 2nd argument dependencies array (optional)
    useEffect(()=>{
        let interval = null;
        if(isActive){
            interval = setInterval(()=>{
                setSeconds(seconds => seconds + 1);
            }, 1000);
        }else if(isActive && seconds !==0){
            clearInterval(interval);
        }
        
        return ()=>clearInterval(interval);
    },[isActive, seconds]);

    const [username, setUsername] = useState("Hello, Franco here!");
    const [color, setColor]=useState(randomColor());
    useEffect(()=>{
        setColor(randomColor())
    },[seconds]);
        
    
    const [itemName, setItemName] = useState(""); //for the input fields
    const [items, setItems] = useState([]);
    
    
    let addItem = (e) =>{
        e.preventDefault();
        setItems([...items, {id: items.length, nameItem: itemName}]);
        setItemName("");        
    }

    function clearLocalStorage(){
        localStorage.clear();
    }
    return (
    <div>
        <h2>Hooks Page</h2>

        <ChoreForms/>
        <button onClick={clearLocalStorage}>Clear Storage</button>
        <h2>List of things</h2>
        <form onSubmit={addItem}>
            <label>My Things</label>
            <input type="text" name="item" value={itemName} 
                onChange={(e) => setItemName(e.target.value)}></input>
        </form>
        
        <ul>
            {items.map(eva => (<li key={eva.id}>{eva.nameItem}</li>))}
        </ul>


        <h2>{username}</h2>
        <input type="text" name="username" value={username} onChange={
            (event)=>{
                setUsername(event.target.value);
            }
        }></input>

        <p  style={{color: color}}>You Clicked {count} times</p>
        <button onClick={() => setCount(count++)}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <p>Timer Example</p>
        <div>
            <div style={{color: color}}> {seconds} seconds</div>
            <div>
                <button onClick={toggle}>{startPause} Timer</button>
                
                <button onClick={reset}>Reset Timer</button>
            </div>
        </div>
    </div>
  )
}

export default Hook
