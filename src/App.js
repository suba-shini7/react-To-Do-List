import { useState } from 'react';
import './App.css';
import InputArea from './components/inputArea';
import ToDoItem from './components/ToDoItem';

function App() {
  const [items, setItems] = useState([]);
  const addItems =(inputText)=>{
    setItems((prevItems)=>{
      return[...prevItems,inputText];
    });
  };
 const deleteItem = (id)=>{
  setItems((prevItems)=> {
    return prevItems.filter((item,index)=>
    {
      return index!== id;
    });
  }
  );
 };
  return (
    <div className='main'>
    <div className="container">
      <div className='heading'>
      <h1>To-Do List</h1>
      </div>
      <InputArea addItems={addItems}/>
      <div>
        <ul>
          { items.map((item,index)=>{
              return(
                <ToDoItem 
                key={index} 
                text={item} 
                deleteItem={deleteItem} 
                id={index}
                />)
              
          })}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default App;
