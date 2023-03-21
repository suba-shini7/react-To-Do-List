import React, {usesState, useState}from 'react'

const InputArea = (props) => {
    const [inputText, setInputText] = useState("");
    const handelChange =(event)=>{
     setInputText(event.target.value)
    }

  return (
    <div className="form">
        <input  className="area" type="text" onChange={handelChange} value={inputText}/>
        <button onClick={()=>{
            props.addItems(inputText);
            setInputText("");
        }}>
            Add
        </button>
    </div>
  )
}

export default InputArea;