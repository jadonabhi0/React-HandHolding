import { useState, useEffect} from 'react'
import Button from './component/Button';


function App() {
  
  let [bgColor, setBgColor] = useState("olive");

  let changeBgColor = (colour)=>{
      return ()=>{setBgColor(colour)}
  }



  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor:bgColor}}>
          <div className='fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2'>
              <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl'>
                <Button colour={"red"} fn={changeBgColor}/>
                <Button colour={"blue"} fn={changeBgColor}/>
                <Button colour={"olive"} fn={changeBgColor}/>
                <Button colour={"green"} fn={changeBgColor}/>
                <Button colour={"magenta"} fn={changeBgColor}/>
                <Button colour={"orange"} fn={changeBgColor}/>
                <Button colour={"yellow"} fn={changeBgColor}/>
                <Button colour={"purple"} fn={changeBgColor}/>
                <Button colour={"violet"} fn={changeBgColor}/>
                <Button colour={"indigo"} fn={changeBgColor} />
              </div>
          </div>
      </div>
    </>
  )
}

export default App
