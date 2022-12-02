import React from 'react'
import { ListItem } from './ListItem'

export const ChatScreen = ({todos = [], handleRemoveTodo}) => {
  

  return (
    <div  className='todos-container'>
    <div className='scroll-div'>
          {
            todos.map(todo=>(
              <ListItem 
                  key={todo.id} 
                  todo = {todo} 
                  handleRemoveTodo={handleRemoveTodo}
              />
            ))
          }
    </div>

    </div>
  )
}
