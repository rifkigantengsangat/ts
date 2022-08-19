import React, { useState,ChangeEventHandler,FC,MouseEvent,MouseEventHandler, useEffect,}  from 'react'
import {UseFetch} from './helpers'
import reactLogo from './assets/react.svg'
import './App.css'
import Hello from './Hello'
export  interface Data  {
id : number;
name : string;
username : string;
email : string;
address :any;
}[]

const App : FC =(props) =>{
const [name,setName] = useState<string> ('');
const [count,setCount] = useState<number>(0);
const [datas,setDatas] = useState<Data[]> ([])
const [index,setIndex] = useState<number>(0)
const handleNext = ():void => {
 setIndex(index=> index +1)
}
const handleClick = (event: MouseEvent<HTMLButtonElement>):void=>{
  console.log(event.currentTarget)
}
const handleTambah = () :void => {
setCount ((count) => count + 1)
}
const handleKurang = () :void=>{
setCount ((count)=> count -1)
}
useEffect(()=>{
   UseFetch('https://jsonplaceholder.typicode.com/users').then<void,never>((result:Data[])=> setDatas(result))
},[])
console.log(datas?.[1]?.name)
  return (
    <div className="App">
<button onClick={()=>handleTambah()}> + </button>
<h1>{count}</h1>
<button onClick={()=>handleKurang()}>-</button>
   <button onClick={(event : MouseEvent<HTMLButtonElement>) =>handleClick(event)}>HAlooo</button>
   <input type='text' onChange={ (event :React.ChangeEvent <HTMLInputElement>) :void=> setName(event.target.value)} placeholder="hello"/>
      <div>
       <h1>{datas?.[index]?.name}</h1>
      </div>
      <button onClick={()=>handleNext()}>Lihat yang lain</button>
    </div>
  )
}

export default App
