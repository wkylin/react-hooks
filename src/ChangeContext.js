import React,{useContext,useState} from  'react'
import {MyContext} from "./MovieContext";

function ChangeContext() {
  const [NewContext,setNewContext] =  useContext(MyContext);
  const [name,setName] = useState('');
  const [price,setPrice] = useState(0);
  const changeName=(event)=>{
    setName(event.target.value);
  }
  const changePrice= (event)=>{
    setPrice(event.target.value);
  }
  const changeValue = (event)=>{
    event.preventDefault();
    setNewContext(prevValue=> [...prevValue , {name : name, Price : price}]);
  }
  return (
    <div>
      <form>
        <input type='text' name='name' onChange={changeName}/>
        <input type='number' name='price' onChange={changePrice}/>
        <button onClick={changeValue} />
      </form>
    </div>
  )
}
export default ChangeContext;
