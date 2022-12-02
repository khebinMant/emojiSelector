
import { EmojiPickerInput } from '../components/EmojiPickerInput'
import 'react-device-frameset/styles/marvel-devices.min.css'
import { DeviceFrameset } from 'react-device-frameset'
import { useTodo } from "../hooks/useTodo";

import '../styles/EmojiAppMainPage.css'
import { ChatScreen } from '../components/ChatScreen'

export const EmojiAppMainPage = () => {
  const {todos, setTodos, handleRemoveTodo, handleEditTodo, handleCompleteTodo }= useTodo()

  return (
    <div className='project-content animate__animated animate__fadeIn'>
        <DeviceFrameset 
          device="iPad Mini" 
          color="black" 
          width="90vw" 
          height="80vh">
          <div className='cell-content'>
            <div className='right-screen'>
              <ChatScreen
                    todos = {todos} 
                    handleRemoveTodo={handleRemoveTodo}
                    handleEditTodo={handleEditTodo}
                    handleCompleteTodo={handleCompleteTodo}
              />
              <EmojiPickerInput 
                    todos = {todos} 
                    setTodos= {setTodos}
              />
            </div>
          </div>
        </DeviceFrameset>
    </div>
  )
}
