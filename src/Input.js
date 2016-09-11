import React from 'react'

export default function Input (props)
{
  return (
      <input
        id="input"
        value={props.expression}
        autoComplete="off"
        autoFocus={true}
        onChange={(e) => props.handleChange(e.target.value)}
     />
  )
}
