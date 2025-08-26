import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setcount]=useState(10)
  const Addcount=()=>{
    count=count+1
    setcount(count)
  }
  const Downcount=()=>{
    if(count>0){
      setcount(count-1)
    } 
    else{
      setcount(0)
    }
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={Addcount}>Up</button>
      <br/>
      <button onClick={Downcount}>Down</button>
    </>
  )
}

export default App
