import React, { useState } from 'react';
export const AddCategory = ({onNewCategory}) => {
    const [input, setInput] = useState("");
    const onChangeValue =({target})=>{
        
        setInput(target.value);
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        if(input.trim().length<=1) return;
        onNewCategory(input.trim());
        setInput('');
    }
    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder='Ingrese una Categoría'
                value={input}
                onChange={onChangeValue}
            />
        </form>
  )
}