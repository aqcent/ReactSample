import React from 'react'
import styles from './Profile.module.scss'
import Wall, { IWallProps, IWallState } from './Wall'


export interface IProfileInfoState {
    backgroundImageUrl: string,
    avatarImageUrl?: string,
    name: string,
    status: string
}

export interface IProfileInfoProps {
    state: IProfileInfoState
}

const ProfileInfo = (props: IProfileInfoProps) => {
    return (
        <div className={styles.profile} >
            <div className={styles.backgroundImage} style={{ backgroundImage: `url(${props.state.backgroundImageUrl})` }}></div>
            <div className={styles.own_info}>
                <img className={styles.ava} src={props.state.avatarImageUrl} />
                <div className={styles.infoContainer}>
                    <p className={styles.name}>{props.state.name}</p>
                    <p className={styles.status}>{props.state.status}</p>
                </div>
            </div>
        </div>
    )
}

export interface IProfileState {
    profile: IProfileInfoState,
    wall: IWallState
}

export interface IProfileProps {
    state: IProfileState
}

const Profile = (props: IProfileProps) => {
    return (
        <div className={styles.wrapper}>
            <ProfileInfo state={props.state.profile} />
            <Wall state={props.state.wall} />
        </div >
    )
}

export default Profile