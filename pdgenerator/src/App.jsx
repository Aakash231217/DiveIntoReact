import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] =  useState(false);
  const [password, setPassword] = useState("");
  
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberAllowed)str+="0123456789";
    if(charAllowed)str+="@#$^&*("
    for(let i = 1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass = str.charAt(char);
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4  my-7 text-orange-500 bg-gray-700'>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value = {password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={8}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }}/>
          <label>Number</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
