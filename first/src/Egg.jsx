import React from 'react'
import Halfboil from './Halfboil.jsx'

function Egg({name}){
  return (
    <div>
      <h1>Egg</h1>
      <Halfboil name={name}/>
    </div>
  )
}
export default Egg