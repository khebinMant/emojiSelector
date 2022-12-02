export const EmojiButton = ({ emoji, onClick }) => {
    
    const handleOnClick = () => {
        onClick(emoji);
    }

    return (
    <span style={{cursor:'pointer'}} className="button-emoji" onClick={handleOnClick}>
        {emoji.character}
    </span>
    
  )
}
