import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Users.module.css';
import {AppStateType} from '../../redux/store';
import User from "./User/User";
import {getUsersTC} from "../../redux/usersReducer";
import {Search} from "../Search/Search";
import {UsersType} from "../../api/Api";
/*type PropsType={
    user: UsersType
}*/
const Users = () => {

    const dispatch = useDispatch();

    const users = useSelector<AppStateType, Array<UsersType>>(state => state.users.users);


    useEffect(() => {
        dispatch(getUsersTC())
    }, [dispatch])
    return (
        <div className={styles.container}>
            <h2>Users</h2>
            <Search/>
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
                    />
                ))}
            </div>
        </div>
    )

}

export default Users