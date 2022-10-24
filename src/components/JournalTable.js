import React from 'react'

const JournalTable = ({data, clearCell, updateCell}) => {
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Thoughts for the Day</th>
            </tr>
        </thead>
        <tbody>
            {data.map((prop)=>(
                <tr>
                    <td>
                        Date: {prop.date}
                        <p>{prop.thoughts}</p>
                        
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

export default JournalTable
