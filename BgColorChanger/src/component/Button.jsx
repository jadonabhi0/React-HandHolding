import React from 'react'



function Button(props) {
  return (
    <>
        <button onClick={props.fn(props.colour)} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:props.colour}}>{props.colour}</button>
    </>
  )
}

export default Button
