import { IWallState } from '../components/Profile/Wall'
import { IProfileState, IProfileInfoState } from '../components/Profile/Profile'
import { IMessageItem, MessageTypes } from '../components/Messages/MessageItem/MessageItem'
import messagesReducer, { ActionTypes, Dialog, IMessageState } from './message-reducer'

const samplePosts: IWallState = {
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

const profileSettings: IProfileInfoState = {
  backgroundImageUrl: 'https://i.ytimg.com/vi/Ws7nTP-JOiY/maxresdefault.jpg',
  avatarImageUrl: 'https://cs5.pikabu.ru/images/big_size_comm/2015-09_2/1441607491169296525.jpg',
  name: 'Коловрат Испанович',
  status: 'Online'
}

const dialogs = [
  new Dialog({
    id: 1,
    haveNewMessage: true,
    title: 'Dialog #1AAAAAAA',
    avaUrl: 'https://klyv.ru/wp-content/cache/thumb/8d/44aa7a396a7958d_769x415.jpg',
    lastMessage: 'where is my mind'
  }),
  new Dialog({
    id: 2,
    haveNewMessage: false,
    title: 'Dialog #2',
    lastMessage: 'Lorem ipsum dolor sit ame'
  }),
  new Dialog({
    id: 3,
    haveNewMessage: true,
    title: 'Dialog #3'
  }),
  new Dialog({
    title: 'check',
    haveNewMessage: true,
    id: 4
  })
]

for (let i = 5; i < 15; i++) {
  dialogs.push(
    new Dialog({
      id: i,
      title: `dialog #${i}`,
      haveNewMessage: false
    })
  )
}

const messages: IMessageItem[] = []
for (let i = 0; i < 10; i++) {
  messages.push(
    {
      content: { text: `test message ${i}` },
      type: ((i % 2) ? MessageTypes.income : MessageTypes.self)
    })
}

const _profile: IProfileState = {
  profile: profileSettings,
  wall: samplePosts
}

const _messages: IMessageState = {
  dialogsList: dialogs,
  messagesList: messages
}

export type appState = {
  profile: IProfileState,
  messages: IMessageState
}
//-----------------------------------------------



const store = {
  _state: {
    messages: _messages,
    profile: _profile
  },

  get state() {
    return this._state
  },

  _callSubscriber(store: any) { },
  subscribe(observer: any) { this._callSubscriber = observer },  

  dispatch(action: { type: ActionTypes, args?: any }): boolean {

    this._state.messages = messagesReducer(this._state.messages, action)
    // .. profileReducer etc

    this._callSubscriber(this)

    return true
  }

}

export default store