import React from 'react'
import styles from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'

interface IMenuItem {
    title: string,
    iconUrl: string,
    path: string
}

const MenuItems: IMenuItem[] = [
    {
        title: 'Profile',
        iconUrl: 'https://image.flaticon.com/icons/svg/74/74472.svg',
        path: '/profile'
    },
    {
        title: 'Messages',
        iconUrl: 'https://image.flaticon.com/icons/svg/482/482947.svg',
        path: '/messages'
    },
    {
        title: 'Music',
        iconUrl: '',
        path: '/music'
    },
    {
        title: 'Settings',
        iconUrl: '',
        path: '/settings'
    }
]

const Navbar = () => {
    return (
        <nav>
            <ul className={styles.ul}>
                {MenuItems.map((item) => {
                    return (
                        <li key={item.title}>
                            <NavLink to={item.path} activeClassName={styles.active}>
                                <span>{item.title}</span>
                                <div className={styles.icon} style={{ backgroundImage: `url(${item.iconUrl})` }} />
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar