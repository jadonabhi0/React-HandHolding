import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'




function App() {
  const [bgColor, setBgColor] = useState("black")
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [length, setLength] = useState(8)
  const [Password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null);

  let copyPasswordToclipBoard = useCallback(()=>{
    passwordRef.current.select()
      window.navigator.clipboard.writeText(Password)
  }, [Password])

  let passwordGenerator = useCallback(()=>{
    console.log("changed")
    let pass = "";
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm";
    let char ="!@#$%^&*():?/\\;[]{}+_-=~`";
    let digit = "1234567890";
    if(charAllowed) str+=char;
    if(numberAllowed) str+=digit;

    for(let i = 0 ; i < length ; i++){
      let idx = Math.floor(Math.random()*str.length+1)
      let ch = str.charAt(idx);
      pass += ch;
    }
    setPassword(pass);

  }, [length, charAllowed, numberAllowed, setPassword])

  useEffect(()=>{passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor:bgColor}}>
          <h1 className='text-center text-4xl text-white pt-5'>Password Generator</h1>
          <div className='w-full max-w-md mx-auto shadow-md px-4 my-8 rounded-lg text-yellow-500 bg-gray-700 py-8'>
              <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                <input type="text" value={Password} className='outline-none w-full py-1 px-3 ' placeholder='password' readOnly ref={passwordRef}/>
                <button className='bg-blue-500 outline-none text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToclipBoard}>Copy</button>
              </div>
              <div className='flex text-sm gap-x-2'>
                <div className='flex items-center gap-x-1'>
                  <input type="range"  min={8} max={40} value={length}  className="cursor-pointer" onChange={(e)=>{setLength(e.target.value)}}/>
                  <label htmlFor="">Length : {length}</label>
                </div>
                <div className='flex items-center gap-x-1'>
                  <input type="checkbox" defaultChecked={numberAllowed} id='numberAllowed' onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
                  <label htmlFor="numberAllowed">Number</label>
                  <input type="checkbox" defaultChecked={charAllowed} id='charAllowed' onChange={()=>{setCharAllowed((prev)=>!prev)}} />
                  <label htmlFor="charAllowed">Character</label>
                </div>
              </div>
          </div>
      </div>

      

    </>
  )
}

export default App
