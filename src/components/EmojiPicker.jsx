import { forwardRef, useEffect, useRef, useState } from "react"
import { EmojiButton } from "./EmojiButton";
import { EmojiSearch } from "./EmojiSearch";

export const EmojiPicker = forwardRef((props, refInput) => {

    const [isOpen, setIsOpen] = useState(false);
    const [emojis, setEmojis] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const containerRef = useRef(null);

    useEffect(() => {
        window.addEventListener('click', e =>{
            if(!containerRef.current.contains(e.target)){
                setIsOpen(false)
                loadEmojis()
            }
        })
    }, [])
    
    useEffect(() => {
        loadEmojis()
    }, [])
    
    const loadEmojis = async () =>{
        const resp = await fetch(`${process.env.REACT_APP_EMOJI_URL}emojis?search=face&access_key=${process.env.REACT_APP_EMOJI_KEY}`)
        if ( resp.ok){
            const data = await resp.json()
            setIsLoading(false)
            setEmojis(data)      
        }
        else{
            setIsLoading(false)
        }
    }

    const handleClickOpen = ()=>{
        setIsOpen(!isOpen)
    }

    const handleOnClickEmoji = (emoji)=>{
        const cursorPos = refInput.current.selectionStart;
        const text = refInput.current.value;
        const prev = text.slice(0, cursorPos);
        const next = text.slice(cursorPos);

        refInput.current.value = prev + emoji.character + next;
        refInput.current.selectionStart =  cursorPos + emoji.character.length;
        refInput.current.selectionEnd = cursorPos + emoji.character.length;
        refInput.current.focus()

    }

    const handleSearch = async (e) =>{
        const q =  e.target.value;
        setIsLoading(true)
        const resp = await fetch(`${process.env.REACT_APP_EMOJI_URL}emojis?search=${q}&access_key=${process.env.REACT_APP_EMOJI_KEY}`)
        if( resp.ok ){
            const data = await resp.json()
            console.log(data)
            setEmojis(data)      
            setIsLoading(false)
        }
        else{
              setIsLoading(true)
        }
    }

    return (
        
        <div className="animate__animated animate__fadeIn" ref={containerRef}>
            <span  className="custom-btn" onClick={handleClickOpen}>😊</span>
            {
                isOpen?
                <div>
                <EmojiSearch onSearch={handleSearch}/>
                {
                    !emojis?
                        <p className="not-found">No encontramos ese emoji</p>
                    :
                    <div  className="animate__animated animate__fadeIn">
                        {
                            emojis.map((emoji, index)=>(
                                index < 56 &&(
                                <EmojiButton key={index} emoji={emoji} onClick={handleOnClickEmoji}/>
                                )
                            ))
                        }
                    </div>
                }
                </div>
                :
                ""
            }
        </div>
    )
})
    
