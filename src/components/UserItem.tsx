import React from 'react';
import {ListGroup} from 'react-bootstrap';

type UserItemType = {
    user: string[]
    index: number
}

export const UserItem: React.FC<UserItemType> = React.memo(({user, index}) => {
    return (
        <div>
            <ListGroup horizontal className="pt-1">
                <ListGroup.Item style={{width: '5%'}}> {index + 1} </ListGroup.Item>
                <ListGroup.Item style={{width: '10%'}}> {user[0]} </ListGroup.Item>
                <ListGroup.Item style={{width: '25%'}}>
                    {user[1]} {user[2]} {user[3]}
                </ListGroup.Item>
                <ListGroup.Item style={{width: '45%'}}>
                    {user[4]}, {user[5]}, {user[6]}, zip: {user[7]}, {user[8]} / {user[9]}
                </ListGroup.Item>
                <ListGroup.Item style={{width: '15%'}}>{user[10]}</ListGroup.Item>
            </ListGroup>
        </div>
    )
})