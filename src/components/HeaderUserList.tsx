import React from 'react';
import {Container, ListGroup} from 'react-bootstrap';

export const HeaderUserList = () => {
    return (
        <div style={{backgroundColor: 'rgba(153, 165, 182, 0.29)', marginLeft: -20}}>
            <Container>
                <ListGroup horizontal>
                    <ListGroup.Item style={{width: '5%', background: 'lightgray'}}>№</ListGroup.Item>
                    <ListGroup.Item style={{width: '10%', background: 'lightgray'}}>Id</ListGroup.Item>
                    <ListGroup.Item style={{width: '25%', background: 'lightgray'}}>ФИО</ListGroup.Item>
                    <ListGroup.Item style={{width: '45%', background: 'lightgray'}}>Адрес</ListGroup.Item>
                    <ListGroup.Item style={{width: '15%', background: 'lightgray'}}>Телефон</ListGroup.Item>
                </ListGroup>
            </Container>
        </div>


    )
}