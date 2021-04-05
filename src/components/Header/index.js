import React from 'react'
import './Styles.scss'

const Header = ({ title }) => (
  <header >
    <h2 data-testid='title'>
      { title }
    </h2>
  </header>
)

export default Header
