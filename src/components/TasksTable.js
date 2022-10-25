import React from 'react'

const TasksTable = ({data, clearCell, updateCell}) => {
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Tasks</th>
            </tr>
        </thead>
        <tbody>
            {data.map((prop)=>(
                <tr>
                    <td>
                        Date: {prop.date}
                        <p>{prop.tasks}</p>
                        
                    </td>
                    <td>
                        <button id={prop.id} onClick={clearCell}>Clear</button>
                        <button id={prop.id} onClick={updateCell}>Update</button>
                    </td>
                </tr>
            ))}
        </tbody>

      </table>
    </div>
  )
}

export default TasksTable