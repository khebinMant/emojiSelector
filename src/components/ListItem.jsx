export const ListItem = ({todo,handleRemoveTodo}) => {
    
    
    return (
        <>
            <div 
                style={{ padding: '1em', lineHeight: '1.5' }} 
                className='message-box  animate__animated animate__backInUp'
            >
                <i onClick={()=>handleRemoveTodo(todo.id)} className="delete-icon pi pi-times animate__animated animate__pulse animate__repeat-2"></i>

                {todo.title}
            </div>
        </>
    )
}
