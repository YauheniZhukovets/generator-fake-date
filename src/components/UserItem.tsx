import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {UserFakeDate} from '../interface/userInterface';

type UserItemType = {
    user: UserFakeDate
    index: number
}

export const UserItem: React.FC<UserItemType> = React.memo(({user, index}) => {
    return (
        <div>
            <ListGroup horizontal className="pt-1">
                <ListGroup.Item style={{width: '5%'}}> {index} </ListGroup.Item>
                <ListGroup.Item style={{width: '10%'}}> {user.id} </ListGroup.Item>
                <ListGroup.Item style={{width: '25%'}}>
                    {user.firstName} {user.lastName} {user.middleName}
                </ListGroup.Item>
                <ListGroup.Item style={{width: '45%'}}>
                    {user.address.country},
                    {user.address.city},
                    {user.address?.zip ? <> zip: {user.address?.zip}, </> : <>{}</>}
                    {user.address.flat ? <> {user.address.house} / {user.address.flat} </> : <>{user.address.house}</>}
                </ListGroup.Item>
                <ListGroup.Item style={{width: '15%'}}>{user.phone}</ListGroup.Item>
            </ListGroup>
        </div>
    )
})