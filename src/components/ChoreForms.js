import React, { useEffect, useState } from 'react'
import ChoresList from './ChoresList';




const ChoreForms = () => {
    const [choreName, setChoreName]=useState("");
    const [choreDesc, setChoreDesc]=useState("");
    const [choreDate, setChoreDate]=useState("");
    const [choreData, setChoreData]=useState((localStorage.getItem("chores")? JSON.parse(localStorage.getItem("chores")):[]));

    
    
    let handleSubmit = (e) =>{
        e.preventDefault();
        const choreLog ={id: choreData.length,name: choreName, desc: choreDesc,date: choreDate};
        setChoreData([...choreData, choreLog]);
        setChoreName("");
        setChoreDesc("");
        setChoreDate("");   
    } 

    useEffect(()=>{
        localStorage.setItem("chores", JSON.stringify(choreData));
    },[choreData]);
    
    


  return (
    <form onSubmit={e =>{handleSubmit(e)}}>
        <h2>Chore List</h2>
        <label>Chore Name </label>
        <input type="text" value={choreName} name="choreName" onChange={
            (e)=> setChoreName(e.target.value)}></input>
        <br/>
        <label>Description </label>
        <input type="text" value={choreDesc} name="choreDesc" onChange={
            (e)=> setChoreDesc(e.target.value)}></input>
        <br/>
        <label>Date </label>
        <input type="date" value={choreDate} name="choreDate" onChange={
            (e)=> setChoreDate(e.target.value)}></input>
        <br/>
        <input type="submit" name="submit" value="submit"></input>

        <br/>
        <h2>All Chores To Do:</h2>
        <ChoresList data={choreData}/>
        {/* <ul>
            {choreData.map(trav=>(<li>Name: {trav.name}, Desc: {trav.desc},Date: {trav.date}</li>))}
        </ul> */}
    </form>
  )
}

export default ChoreForms
