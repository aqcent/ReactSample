import React from 'react'
import styles from './Post.module.scss'
import User from './User/User'
import Content from './Content/Content'
import SocialBar from './SocialBar/SocialBar'
import { IPostUserProps } from './User/User'

export interface IPostProps {
    user: IPostUserProps,
    content: {
        text: string
    }
}

const Post = (props: IPostProps) => {
    return (
        <div className={styles.postCard}>
            <User name={props.user.name} avaImageUrl={props.user.avaImageUrl} />
            <Content content={props.content} />
            <SocialBar />
        </div>
    )
}

export default Post