import React, {ChangeEvent} from 'react';
import {Button, Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {locale} from '../utils/stateLocale';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {changeCountMistake, changeLocale, changeSeed, removeUsers} from '../store/userAction';
import {faker} from '@faker-js/faker';


export const SetupPanel = React.memo(() => {
    const dispatch = useAppDispatch()
    const currentLocale = useAppSelector<string>(state => state.user.locale)
    const seed = useAppSelector<number>(state => state.user.seed)
    const countMistake = useAppSelector<number>(state => state.user.countMistake)

    const onChangeLocaleHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(removeUsers())
        dispatch(changeLocale(e.target.value))
    }
    const onBlurSeedAndRangeHandler = () => {
        dispatch(removeUsers())
    }
    const onChangeSeedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSeed(+e.target.value))
    }
    const onClickRandomSeedHandler = () => {
        dispatch(removeUsers())
        dispatch(changeSeed(+faker.commerce.price(0, 10000000000000, 0)))
    }

    const onChangeRangHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const countMistake = +e.target.value
        dispatch(changeCountMistake(countMistake > 1000 ? 1000 : countMistake))
    }

    return (
        <div style={{height: 50}}
             className="bg-black bg-opacity-50"
        >
            <Container className="p-1 d-flex align-items-start justify-content-between">
                <div className="w-25">
                    <Form.Select value={currentLocale}
                                 className="w-50"
                                 onChange={onChangeLocaleHandler}
                    >
                        {locale.map((el, i) => {
                            return (
                                <option key={i} value={el.value}>{el.name}</option>
                            )
                        })}
                    </Form.Select>
                </div>

                <div style={{width: 400}} className="d-flex align-items-center">
                    <Form.Range min={0}
                                max={10}
                                step={0.25}
                                value={countMistake}
                                onChange={onChangeRangHandler}
                                onMouseUp={onBlurSeedAndRangeHandler}
                    />
                    <Form.Control
                        value={countMistake}
                        type="number"
                        placeholder="Make mistake"
                        className="me-2 w-50"
                        step={0.25}
                        max={1000}
                        onChange={onChangeRangHandler}
                        onBlur={onBlurSeedAndRangeHandler}
                    />
                </div>

                <div className=" d-flex w-25 ">
                    <Form.Control
                        value={seed}
                        type="number"
                        placeholder="Seed.."
                        className="me-2 w-50"
                        onChange={onChangeSeedHandler}
                        onBlur={onBlurSeedAndRangeHandler}
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
})