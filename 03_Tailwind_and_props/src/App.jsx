import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Akhil",
    age:19
  }
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl'>TailWind Test</h1>
      <Card channel="Hanji" price="$100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF5NQoF04gFj_CjX4f6n_PbXzHJ8U25ovGUw&s"/>
      <Card channel="Temba" price="$90" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeQOxcyCvjWlebQdS6M3q0Sz0ZUAaWJ75YIA&s"/>
    </>
  ) 
} 

export default App
