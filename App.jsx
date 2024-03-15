import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  

  const addvalue = (num)=> {
    console.log(num)
    if (count < 20){
      setCount(prev=>prev+1)
    } 
    

  }
  const Decrease = () =>{
    if (count > 0){
      setCount(count-1)
    }
  }

  const check=(num)=>{
    console.log(num)
    console.log("hello")
  }


  return (
    <>
      <h1 onChange={check} >{count}</h1>
      <button onClick = {addvalue} >Increase</button>
      <button onClick = {Decrease}>Decrease</button>
    </>
  )
}

export default App
