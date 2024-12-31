import React from 'react'
import Stomach from './Stomach.jsx'

function Halfboil({name}){
  return (
    <div>
      <h1>Halfboil</h1>
      <Stomach name={name}/>
    </div>
  )
}
export default Halfboil