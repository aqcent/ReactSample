import React from 'react'
import styles from './Content.module.scss'

interface IPostContentProps {
    content: {
        text: string
    }
}

const splitter = (str: string) => {
    return (
        <div>
            {str
                .split('\n')
                .map((x, index) => {
                    return (
                        <div key={index}>{x}</div>
                    )
                })}
        </div>
    )
}

const Content = (props: IPostContentProps) => {
    return (
        <div className={styles.wrapper}>
            {splitter(props.content.text)}
        </div>
    )
}

export default Content