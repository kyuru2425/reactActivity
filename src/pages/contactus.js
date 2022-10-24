import React, { useState, useEffect } from 'react'
import ContactList from '../components/ContactList'
import { useRef } from 'react'

const Contactus = () => {
    let firstRefName = useRef("");
    let lastRefName = useRef("");
    let emailRef = useRef("");
    let messageRef = useRef("");
    let [id, setId] = useState(Date.now());
    let [record, setRecord]=useState((localStorage.getItem("contactRecord")? JSON.parse(localStorage.getItem("contactRecord")):[]));

    let handleSubmit = (event) =>{
        event.preventDefault();
        let info ={
            id: id,
            firstName: firstRefName.current.value,
            lastName: lastRefName.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
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
        //setRecord([...record, info]);
        // console.log(info);
        // alert(JSON.stringify(info));
        setId(Date.now);
        firstRefName.current.value ="";
        lastRefName.current.value ="";
        emailRef.current.value ="";
        messageRef.current.value ="";
    }
    useEffect(()=>{
        localStorage.setItem("contactRecord", JSON.stringify(record));
    },[record]);

    let handleRemove = (e) =>{
        let num = parseInt(e.target.id);
        const remove = [...record].filter( (item) =>{
            
            return item.id !== num;
        });
        
        setRecord(remove);
    }
    let clearAll=()=>{
        
        // localStorage.removeItem("contactRecord");
        setRecord([]);
    }
    let handleUpdate = (e)=>{
        let num = parseInt(e.target.id);
        alert(num);
        
        let update = [...record].filter(item=>{
            return item.id===num;
        }).map(item=>{
            setId(item.id)
            firstRefName.current.value = item.firstName;
            lastRefName.current.value = item.lastName;
            emailRef.current.value = item.email;
            messageRef.current.value = item.message;
            //item.firstName=firstRefName.current.value;
            // item.lastName=lastRefName.current.value;
            // item.email=emailRef.current.value;
            // item.message=messageRef.current.value;
        })

    }

  return (
    <div>
        <h1>This is Contact Page</h1>
        {/* <form onSubmit={handleSubmit}>
            <label for="firstName">First Name</label>
            <input type="text" name="firstName" tabIndex={1} value={firstName} required></input>
            <br/>
            <label for="lastName">Last Name</label>
            <input type="text" name="lastName" tabIndex={2} value={lastName} required></input>
            <br/>
            <label for="email">Email</label>
            <input type="email" name="email" tabIndex={3} value={email} required></input>
            <br/>
            <label for="message">Message</label>
            <textarea tabIndex={4} name="message" value={message} required placeholder='Message'></textarea>
            <br/>
            <input type="submit">Submit</input>
        </form> */}
        <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input type="text" name="firstName" tabIndex={1} required ref={firstRefName}></input>
            <br/><br></br>
            <label>Last Name</label>
            <input type="text" name="lastName" tabIndex={2} required ref={lastRefName}></input>
            <br/><br></br>
            <label>Email</label>
            <input type="email" name="email" tabIndex={3} required ref={emailRef}></input>
            <br/><br></br>
            <label for="">Message</label>
            <textarea type="text" name="message" tabIndex={4} ref={messageRef} placeholder="Enter Your Message" required></textarea>
            <br/><br></br>
            <input type="submit" value="submit"></input>
        </form>
        <ContactList data={record} handleRemove={handleRemove} handleUpdate={handleUpdate}/>
        <button type='button' onClick={clearAll}>Remove All Records</button>
    </div>
  )
}

export default Contactus
