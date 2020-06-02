import React from 'react'
import styles from './Wall.module.scss'
import Post, { IPostProps } from './Post/Post'

export interface IWallState {
    posts: IPostProps[]
}

export interface IWallProps {
    state: IWallState
}

const Wall = (props: IWallProps) => {

    const samplePostsItems = props.state.posts
        .map((post) => <Post user={post.user} content={post.content} />)

    return (
        <div className={styles.wall}>
            {samplePostsItems}
        </div>
    )
}

export default Wall