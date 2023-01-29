import React from 'react';
import {UserList} from '../components/UserList';
import {NavBar} from '../components/NavBar';
import {SetupPanel} from '../components/SetupPanel';
import {HeaderUserList} from '../components/HeaderUserList';

export const Main = () => {

    return (
        <div>
            <NavBar/>
            <SetupPanel/>
            <HeaderUserList/>
            <UserList/>
        </div>
    )
}
