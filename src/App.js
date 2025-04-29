import "./App.css";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Number from "./Components/Number.js";
import React, { useState } from "react";
function App() {
  const [num, setNum] = useState(0);
  const increment = () => setNum((prev) => prev + 1);
  const decrement = () => setNum((prev) => prev - 1);
  const reset = () => setNum((prev) => 0);
  return (
    <>
      <Header />
      <Number
        num={num}
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
      <Footer />
    </>
    // <h1 className='text-center'>Counter</h1>
  );
}
export default App;
