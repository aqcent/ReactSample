import React from 'react'
import styles from './DialogItem.module.scss'
import { NavLink } from 'react-router-dom'

export interface IDialogProps {
    id: number,
    haveNewMessage: boolean,
    title: string,
    lastMessage?: string,
    avaUrl?: string
}

const MessageDot = (props: { haveNewMessage: boolean }) => {
    return (
        <div className={styles.newMessageDot}>
            {props.haveNewMessage && <div className={styles.dot} />}
        </div>
    )
}

const DialogItem = (props: IDialogProps) => {
    return (
        <div className={styles.item}>
            <NavLink to={`/messages/${props.id}`} className={styles.navlink} activeClassName={styles.active}>
                <MessageDot haveNewMessage={props.haveNewMessage} />
                <div className={styles.ava}>
                    <img className={styles.avaImg} src={props.avaUrl} />
                </div>
                <div className={styles.dialogBody}>
                    <div className={styles.title}>
                        {props.title}
                    </div>
                    <div className={styles.lastMessage}>
                        {props.lastMessage}
                    </div>
                </div>
            </NavLink>
        </div >
    )
}

export default DialogItem