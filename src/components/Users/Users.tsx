import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Users.module.css';
import {AppStateType} from '../../redux/store';
import User from "./User/User";
import {getUsersTC, setInputValue} from "../../redux/usersReducer";
import {UsersType} from "../../api/Api";
import {Search} from "../Search/Search";


const Users = () => {

    const dispatch = useDispatch();
    const users = useSelector<AppStateType, Array<UsersType>>(state => state.users.users);
    const inputSearch = useSelector<AppStateType, string>(state => state.users.inputValueSearch)

    useEffect(() => {
        dispatch(getUsersTC())
    }, [dispatch])

    const onClickReset = () => {
        dispatch(getUsersTC())
        dispatch(setInputValue(''))
    }

    return (
        <div className={styles.container}>
            <h2>Users</h2>
            <Search searchText={inputSearch}/>
            <div>
                <button onClick={onClickReset}>Reset</button>
            </div>
            <div className={styles.usersPanel}>
                <div className={styles.usersSetBox}>
                </div>
            </div>
            <div className={styles.box}>
                {users.map(user => (
                    <User key={user.id}
                          id={user.id}
                          name={user.name}
                          username={user.username}
                          email={user.email}
                          address={user.address}
                          phone={user.phone}
                          website={user.website}
                          company={user.company}
                          searchText={inputSearch}
                    />
                ))}
            </div>
        </div>
    )

}

export default Users