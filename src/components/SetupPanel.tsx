import React, {ChangeEvent} from 'react';
import {Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {locale} from '../utils/stateLocale';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {changeLocale, removeUsers} from '../store/userAction';

export const SetupPanel = () => {
    const dispatch = useAppDispatch()
    const currentLocale = useAppSelector(state => state.user.locale)
    const onChangeLocaleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(removeUsers())
        dispatch(changeLocale(e.target.value))
    }

    return (
        <div style={{height: '15vh'}}
             className="bg-black bg-opacity-50"
        >
            <Container className="p-1">
                <Form.Select value={currentLocale}
                             className="w-25" aria-label="Default select example"
                             onChange={onChangeLocaleSelect}
                >
                    {locale.map((el, i) => {
                        return (
                            <option key={i} value={el.value}>{el.name}</option>
                        )
                    })}
                </Form.Select>
            </Container>
        </div>
    )
}