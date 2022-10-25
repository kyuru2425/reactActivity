import React from 'react'
import { useRef, useState, useEffect } from 'react'
import JournalTable from '../components/JournalTable';
import TasksTable from '../components/TasksTable';


const Codingjournal = () => {
    let dateRef = useRef("");
    let thoughtsRef = useRef("");
    let [id, setId] = useState(Date.now());
    let [record, setRecord]=useState((localStorage.getItem("journal1")? JSON.parse(localStorage.getItem("journal1")):[]));
    let date2Ref = useRef("");
    let tasksRef = useRef("");
    let [record2, setRecord2]=useState((localStorage.getItem("journal2")? JSON.parse(localStorage.getItem("journal2")):[]));
    

    let submitThoughts = (event) =>{
        event.preventDefault();
        let info = {
            id: id,
            date: dateRef.current.value,
            thoughts: thoughtsRef.current.value
        }
        let filter = record.filter((item)=>{
            return item.id === info.id
        });
        if(filter.length==0){
            setRecord([...record, info]);
        }else{
            record.forEach((item, index)=>{
                if(item.id===info.id){
                    record.splice(index,1,info);
                    setRecord(record);
                }
            })
        }
        //console.log(info.date);
        //setRecord([...record,info]);
        setId(Date.now);
        dateRef.current.value="";
        thoughtsRef.current.value="";
        
    }

    useEffect(()=>{
        localStorage.setItem("journal1", JSON.stringify(record));
    },[record]);

    let clearCell =(e) =>{
        let num = parseInt(e.target.id);
        const remove = [...record].filter( (item) =>{
            
            return item.id !== num;
        });
        setRecord(remove);
    }
    let updateCell = (e)=>{
        let num = parseInt(e.target.id);
        let update = [...record].filter(item=>{
            return item.id===num;
        }).map(item=>{
            setId(item.id)
            dateRef.current.value = item.date;
            thoughtsRef.current.value = item.thoughts;
            
        })
    }
    useEffect(()=>{
        localStorage.setItem("journal2", JSON.stringify(record2));
    },[record2]);

    let submitTask = (eve) =>{
        eve.preventDefault();
        let info = {
            id: id,
            date: date2Ref.current.value,
            tasks: tasksRef.current.value
        }
        let filter = record2.filter((item)=>{
            return item.id === info.id
        });
        if(filter.length==0){
            setRecord2([...record2, info]);
        }else{
            record.forEach((item, index)=>{
                if(item.id===info.id){
                    record2.splice(index,1,info);
                    setRecord2(record2);
                }
            })
        }
        setId(Date.now);
        date2Ref.current.value="";
        tasksRef.current.value="";

    }
    let updateCell2 = (e)=>{
        let num = parseInt(e.target.id);
        
        let update = [...record2].filter(items=>{
            
            return items.id===num;
        }).map(items=>{
            setId(items.id)
            date2Ref.current.value = items.date;
            tasksRef.current.value = items.tasks;
            
        })
    }
    let clearAll=()=>{
        
        // localStorage.removeItem("contactRecord");
        setRecord([]);
    }
    let clearAll2=()=>{
        
        // localStorage.removeItem("contactRecord");
        setRecord2([]);
    }

  return (
    <div>
      <form onSubmit={submitThoughts}>
            <label>Thoughts for the Day</label>
            <div>
                <label for="">Date: </label>
                <input type='date'name='date' ref={dateRef}></input>
            </div>
            <br/>
            <div>
                <textarea rows="5" cols="30" name='thoughts' ref={thoughtsRef}></textarea>
            </div>
            <div>
            <input type="submit" value="Save"></input>
            </div>
            
      </form>
      <JournalTable data={record} clearCell={clearCell} updateCell={updateCell}/>
      <button type='button' onClick={clearAll}>Remove All Records</button>
      <br></br>
      <form onSubmit={submitTask}>
            <label>Task</label>
            <div>
                <label for="">Date: </label>
                <input type="date" required tabIndex={1} ref={date2Ref}></input>
            </div>
            <br/>
            <div>
                <textarea rows="5" cols="30" name='thoughts' ref={tasksRef}></textarea>
            </div>
            <div>
                <button type='submit'>Save</button>
            </div>
            
      </form>
      <TasksTable data={record2} clearCell={clearCell} updateCell={updateCell2}/>
      <button type='button' onClick={clearAll2}>Remove All Records</button>
    </div>
  )
}

export default Codingjournal
