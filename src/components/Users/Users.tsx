import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Users.module.css';
import {AppStateType} from '../../redux/store';
import User from "./User/User";
import {getUsersTC} from "../../redux/usersReducer";
import {UsersType} from "../../api/Api";
import {Search} from "../Search/Search";

const Users = () => {

    const dispatch = useDispatch();
    const users = useSelector<AppStateType, Array<UsersType>>(state => state.users.users);
    const [searchText, setSearchText] = useState('')
    useEffect(() => {
        dispatch(getUsersTC())
    }, [dispatch])

    const onClickReset = () => {
        dispatch(getUsersTC())
        setSearchText('')
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        setSearchText(e.target.value)
    }

    return (
        <div className={styles.container}>
            <h2>Users</h2>
            <Search/>
            <input
                type={'search'}
                placeholder="Search..."
                value={searchText}
                onChange={onChangeHandler}
            />
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
                          searchText={searchText}
                    />
                ))}
            </div>
        </div>
    )

}

export default Users