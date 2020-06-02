import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile, { IProfileState } from './components/Profile/Profile';
import { IMessageState } from './redux/message-reducer';
import Messages from './components/Messages/Messages';


export interface IAppProps {  
    state: {
      profile: IProfileState
      messages: IMessageState
    },
    dispatch: Function
}

function App(props: IAppProps) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="content">
          <Route
            path='/messages'
            render={() =>
              <Messages
                state={props.state.messages}
                dispatch={props.dispatch}
              />}
          />

          <Route path='/profile' render={() => <Profile state={props.state.profile} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
