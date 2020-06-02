import React from 'react'
import styles from './User.module.scss'

export interface IPostUserProps {
    name: string,
    avaImageUrl: string
}

const User = (props: IPostUserProps) => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.ava} src={props.avaImageUrl} />
            <div className={styles.userName}>{props.name}</div>            
        </div>
    )
}

export default User