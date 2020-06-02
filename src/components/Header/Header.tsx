import React from 'react'
import logo from './../../logo.svg'
import styles from './Header.module.scss'

const Header = () => (    
    <header style={styles}>        
        <img src={logo} className="App-logo" alt="logo" />        
    </header>
)

export default Header