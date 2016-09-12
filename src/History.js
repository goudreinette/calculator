import React from 'react'

export default function Results (props)
{
  return (
    <ul id="history">
      {
        props.history.map((item, i) =>
          <li key={i} onClick={_ => props.handleItemClick(item)}>
            <p className="expression">{item.expression}</p>
            <p className="result">{item.result}</p>
          </li>)
      }
    </ul>
  )
}
