import { useRef, useState } from "react"
import { EmojiPicker } from "./EmojiPicker"

export const EmojiPickerInput = ({todos = [],setTodos}) => {
    

    const refInput = useRef(null)
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOpen = ()=>{
        setIsOpen(!isOpen)
    }

    const createTodo = ()=>{
        if(refInput.current.value <=1) return
        const newTodo ={
            id: crypto.randomUUID(),
            date: new Date(),
            title:refInput.current.value,
            completed:false
        }
        let temp = [...todos]
        temp.push(newTodo)
        setTodos(temp)
        refInput.current.value = "";
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          createTodo()
          refInput.current.value = "";
        }
    }

    return (
        <div className="content-low">
            {
                
            }
            <div className="emojis">

            </div>
            <div className="content-bar">
                <EmojiPicker 
                    ref={refInput} 
                    isOpen={isOpen} 
                    handleClickOpen={handleClickOpen}
                    setIsOpen={setIsOpen}        
                />
                <input  
                    className="chat-bar animate__animated animate__fadeIn"  
                    ref={refInput} 
                    type="text"
                    placeholder="Tu mensaje"
                    onKeyDown={handleKeyDown}    
                />
            </div>
        </div>
    )
}
