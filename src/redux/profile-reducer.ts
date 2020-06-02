import { IProfileState, IProfileInfoState } from "../components/Profile/Profile"
import { IWallState } from "../components/Profile/Wall"

const _moc_profile: IProfileInfoState = {
    backgroundImageUrl: 'https://i.ytimg.com/vi/Ws7nTP-JOiY/maxresdefault.jpg',
    avatarImageUrl: 'https://cs5.pikabu.ru/images/big_size_comm/2015-09_2/1441607491169296525.jpg',
    name: 'Коловрат Испанович',
    status: 'Online'
}
const _moc_wall: IWallState = {
    posts: [
        {
            content: {
                text: 'some text'
            },
            user: {
                avaImageUrl: 'https://img.pravda.com/images/doc/f/c/fc9e1e1-lukashenko--1-.jpg',
                name: 'Sashka'
            }
        },
        {
            content: {
                text: 'some text\n some sheet'
            },
            user: {
                avaImageUrl: '',
                name: 'Huyashka'
            }
        },
        {
            content: {
                text: 'some text\n some sheet'
            },
            user: {
                avaImageUrl: '',
                name: 'Huyashka'
            }
        }
    ]
}

const initialState: IProfileState = {
    profile: _moc_profile,
    wall: _moc_wall
}

const profileReducer = (state: IProfileState = initialState, action: any) => {

    return state
}

export default profileReducer