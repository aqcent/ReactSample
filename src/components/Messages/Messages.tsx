import React from 'react'
import styles from './Messages.module.scss'
import DialogItem, { IDialogProps } from './DialogItem/DialogItem'
import MessageItem, { IMessageItem, MessageTypes } from './MessageItem/MessageItem'
import { sendMessageActionCreator, IMessageProps } from '../../redux/message-reducer'



const Messages = (props: IMessageProps) => {

    let dialogItems = props.state.dialogsList.map(dialog =>
        <DialogItem
            key={dialog.id}
            haveNewMessage={dialog.haveNewMessage}
            title={dialog.title}
            lastMessage={dialog.lastMessage}
            avaUrl={dialog.avaUrl}
            id={dialog.id}
        />)

    let messagesList
    if (props.state.messagesList) {
        messagesList = props.state.messagesList.map(message =>
            <MessageItem message={message} />)
    }


    const messageToSend = React.createRef<HTMLTextAreaElement>()
    const sendMessage = () => {

        if (!messageToSend.current) return

        const text = messageToSend.current.value        
        const action = sendMessageActionCreator(text)
        
        if (props.dispatch(action)) messageToSend.current.value = ''
    }


    return (
        <div className={styles.messageWrapper}>
            <div className={styles.dialogsList}>

                {dialogItems}

            </div>
            <div className={styles.messageBox}>
                <div className={styles.header}>
                    header
                </div>

                <div className={styles.content}>
                    <div className={styles.messageList}>
                        {messagesList}
                    </div>
                </div>

                <div className={styles.senderBox}>
                    <textarea ref={messageToSend} className={styles.textArea} placeholder='enter new message' />
                    <button onClick={sendMessage} className={styles.sendButton}>SEND</button>
                </div>

            </div>
        </div>
    )
}

export default Messages