import React, {ChangeEvent} from 'react';
import {Button, Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {locale} from '../utils/stateLocale';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {changeLocale, changeSeed, removeUsers} from '../store/userAction';
import {faker} from '@faker-js/faker';


export const SetupPanel = () => {
    const dispatch = useAppDispatch()
    const currentLocale = useAppSelector(state => state.user.locale)
    const seedRedux = useAppSelector(state => state.user.seed)

    const onChangeLocaleHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(removeUsers())
        dispatch(changeLocale(e.target.value))
    }

    const onBlurSeedHandler = () => {
        dispatch(removeUsers())
    }

    const onChangeSeedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSeed(+e.target.value))
    }

    const onClickRandomSeedHandler = () => {
        dispatch(removeUsers())
        dispatch(changeSeed(+faker.commerce.price(0, 1000000000000000, 0)))
    }

    return (
        <div style={{height: '15vh'}}
             className="bg-black bg-opacity-50"
        >
            <Container className="p-1 d-flex justify-content-between">
                <Form.Select value={currentLocale}
                             className="w-25" aria-label="Default select example"
                             onChange={onChangeLocaleHandler}
                >
                    {locale.map((el, i) => {
                        return (
                            <option key={i} value={el.value}>{el.name}</option>
                        )
                    })}
                </Form.Select>

                <div className="w-25 d-flex">
                    <Form.Control
                        value={seedRedux}
                        type="number"
                        placeholder="Seed...        (onBlur)"
                        className="me-2"
                        onChange={onChangeSeedHandler}
                        onBlur={onBlurSeedHandler}
                    />
                    <Button variant="outline-dark"
                            onClick={onClickRandomSeedHandler}
                    >
                        Random
                    </Button>
                </div>
            </Container>
        </div>
    )
}