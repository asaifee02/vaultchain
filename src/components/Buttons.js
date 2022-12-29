import React from 'react'

export default function Buttons(props) {
  return (
    <li className="nav-item">
            <a className="btn btn-neutral" href={props.link}  target="_blank">
              <span className="nav-link-inner--text">{props.name}</span>
            </a>
          </li>
  )
}
