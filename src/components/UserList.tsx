import React, {useEffect, useRef, useState} from 'react';
import {UserItem} from './UserItem';
import {Container} from 'react-bootstrap';
import {fetchFakeUsers} from '../store/userThunk';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {useObserver} from '../hooks/useObserver';
import {NullAnd} from '../type/NullAnd';

export const UserList: React.FC = React.memo(() => {
        const dispatch = useAppDispatch()
        const users = useAppSelector<string[][]>(state => state.user.users)
        const [page, setPage] = useState<number>(0)
        const [isLoading, setIsLoading] = useState<boolean>(false)
        const lastElement = useRef<NullAnd<HTMLDivElement>>(null)
        useObserver(lastElement, isLoading, () => setPage(page + 1))

        useEffect(() => {
            try {
                setIsLoading(true)
                dispatch(fetchFakeUsers())
            } catch (e: any) {
                console.error(e.message)
            } finally {
                setIsLoading(false)
            }
        }, [page, dispatch])

        return (
            <div className="userListContainer">
                <Container>
                    <div className="d-flex flex-column">
                        {users.map((user, index) => {
                            return (
                                <div key={index}>
                                    <UserItem user={user} index={index}/>
                                </div>
                            )
                        })}
                        <div style={{height: 10}} ref={lastElement}></div>
                    </div>
                </Container>
            </div>
        )
    }
)