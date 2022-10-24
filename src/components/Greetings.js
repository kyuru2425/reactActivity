import React from "react";

//greetings the current time
function Greetings(props){
    
    const timeStyle = {
        color:"yellow",
        fontSize: "16px"
    }
    let x = new Date();
    let hour = x.getHours();
    let mins = x.getMinutes();
    let secs = x.getSeconds();
    let text="";
    let text2="";
    let fullName = props.firstName + " " +props.lastName;

    if(mins<10){
        mins = "0" + mins;
    }
    if(secs<10){
        secs = "0" + secs;
    }
    if(hour>1 && hour <12){
        text2=`Good Morning!`;
    }else if(hour >12 && hour <18){
        text2=`Good Afternoon!`;
    }else{
        text2=`Good Evening!`;
    }
    
    if(hour>=12){
        if(hour === 12){
            //nothing
        }else{
            hour = hour - 12;
        }
        
        hour = "0" + hour;
        text =` ${hour}: ${mins}: ${secs} PM`;
        
    }else{
        text =` ${hour}: ${mins}: ${secs} AM`;
    }
    //setTimeout(function(){Greetings()},1000);

    return (
        <div>
            <h3 style={timeStyle}>{text2}, {fullName} it is now. {text}</h3>
        </div>
    )
}

export default Greetings;