import React, { useState } from 'react'


export const EmojiSearch = ({onSearch}) => {

    const [value, setValue] = useState()

    const handleChange = (e)=>{
        setValue(e.target.value)
        onSearch(e)
    }

    return (
        <input 
            className='search-emoji'
            placeholder='Busca tu emoji'
            onChange={handleChange}
            name="value"
            type="text"
            value={value}
        />
    )
}
