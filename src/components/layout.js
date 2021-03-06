import React from "react"
import { Link } from "gatsby"

import "./layout.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `3rem auto 0`, maxWidth: 1000, padding: `0 1rem` }}>
  	<header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Blake Hunsicker</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/about/">About/Contact</ListLink>
      </ul>
    </header>
    {children}
    <footer>
      <small>Blake Hunsicker, 2019. blakehunsicker@gmail.com.</small>
    </footer>
  </div>
)