import { IMessageItem, MessageTypes } from "../components/Messages/MessageItem/MessageItem"
import { IDialogProps } from "../components/Messages/DialogItem/DialogItem"

export class Dialog implements IDialogProps {

    private static _staticId: number = 0
    private _lastMessage: string | undefined
    id: number
    haveNewMessage: boolean
    private _title: string
    avaUrl: string | undefined

    messages?: IMessageItem[]

    constructor(dialog: IDialogProps) {
        this._lastMessage = dialog.lastMessage
        this.haveNewMessage = dialog.haveNewMessage
        this._title = dialog.title
        this.avaUrl = dialog.avaUrl
        this.id = dialog.id
    }

    private _slice(str: string | undefined, length: number) {
        if (str) return str.slice(0, length) + '..'
        return ''
    }

    get lastMessage(): string {
        return this._slice(this._lastMessage, 25)
    }

    get title(): string {
        return this._slice(this._title, 14)
    }
}

export const sendMessageActionCreator = (text: string) => ({
    type: ActionTypes.SendMessage,
    args: { message: text }
})

export enum ActionTypes {
    SendMessage
}

export interface IMessageState {
    dialogsList: Dialog[],
    messagesList?: IMessageItem[]
}

export interface IMessageProps {
    state: IMessageState,
    dispatch: Function
}

interface IAction {
    type: ActionTypes,
    args?: any
}

const _moc_dialogsList: Dialog[] = []
for (let i = 0; i < 10; i++) {
    _moc_dialogsList.push(
        new Dialog({
            id: i,
            title: `dialog #${i}`,
            haveNewMessage: i % 2 ? false : true
        })
    )
}
const _moc_messagesList: IMessageItem[] = []
for (let i = 0; i < 10; i++) {
    _moc_messagesList.push({
        content: { text: `test message ${i}` },
        type: ((i % 2) ? MessageTypes.income : MessageTypes.self)
    })
}

const initialState: IMessageState = {
    dialogsList: _moc_dialogsList,
    messagesList: _moc_messagesList
}

const messagesReducer = (state: IMessageState = initialState, action: IAction): IMessageState => {
    
    switch (action.type) {
        case ActionTypes.SendMessage:
            if (!action.args || !action.args.message) break
            const newMessage: IMessageItem = {
                content: {
                    text: action.args.message
                },
                type: MessageTypes.self
            }
            state.messagesList && state.messagesList.push(newMessage)
    }

    return state
}
export default messagesReducer
