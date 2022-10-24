import React from "react"
import '../assets/ExpenseTracker.css'

// class ExpenseTracker extends React.Component{
//     render(){
//         return (
//             <div>
//                 <div><b>Item: </b>Laptop</div>
//                 <div><b>Amount: </b>70000</div>
//                 <div><b>Spend Date: </b>10/17/2022</div>
//                 <div><b>Category</b>Computer</div>
//             </div>
//         )
//     }
// }
function ExpenseTracker(){
    const itemStyle2 = {
        color: "red",
        fontSize: "30px"
    };
    
    return (
        <div style={{color:"red",fontSize:"30px"}}>
            <div><b>Item: </b>Laptop</div>
            <div><b>Amount: </b>70000</div>
            <div><b>Spend Date: </b>10/17/2022</div>
            <div><b>Category</b>Computer</div>
        </div>
    )
}
export default ExpenseTracker;