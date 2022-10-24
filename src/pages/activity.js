//personal table and list and category
import React from 'react'
import PersonnelTable from '../components/PersonnelTable'
import BulletinBoard from '../components/BulletinBoard'
import BoardData from '../components/BoardData'
import ExpenseTracker from '../components/ExpenseTracker'

const Activity = () => {
    let boardComponents = BoardData.map(board =>{
        return <BulletinBoard id={board.id} category={board.category} post={board.post}/>
    });
    return (
        <div>
            <h1>Personnel List</h1>
            <PersonnelTable/>
            <h2>BulletinBoard</h2>
            {boardComponents}
            <h2>ExpenseTracker</h2>
            <ExpenseTracker/>
         </div>
  )
}

export default Activity
