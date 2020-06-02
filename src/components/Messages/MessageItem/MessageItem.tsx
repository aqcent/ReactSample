import React from 'react'
import styles from './MessageItem.module.scss'

export enum MessageTypes {
    income = 'income',
    self = 'self'
}

export interface IMessageItem {
    type: MessageTypes,
    content: {
        text: string
    }
}

interface IMessageItemProps {
    message: IMessageItem
}

const MessageItem = (props: IMessageItemProps) => {
    let a = props.message.type
    //debugger;
    return (

        <div className={styles.message + ' ' + styles[props.message.type]}>
            {props.message.content.text}
        </div>
    )
}

export default MessageItem