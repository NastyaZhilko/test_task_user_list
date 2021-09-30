import React, {FC, useState} from "react";
import style from "./User.module.css"
import {deleteUser} from "../../../redux/usersReducer";
import {useDispatch} from "react-redux";
import Modal from "../../../common/components/Modal/Modal";
import {UsersType} from "../../../api/Api";


const User: FC<UsersType> = React.memo((props: UsersType) => {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch();

    const removeEmployee = () => {
        dispatch(deleteUser(props.id))
    }

    return (
        <div className={style.container}>

            <div className={style.block} onClick={() => {
                setOpen(true)
            }}>
                <div> Name: {props.name}  </div>
                <div> UserName: {props.username} </div>
                <div> Email: {props.email} </div>
                <div>
                    <button onClick={removeEmployee}>Delete</button>
                </div>
            </div>

            <Modal
                modal={open}
                setModal={setOpen}
            >
                <div className={style.form}>
                    <h3>Company:</h3>
                    <div> Name: {props.company.name}  </div>
                    <div> BS: {props.company.bs}  </div>
                    <div> Catch Phrase: {props.company.catchPhrase}  </div>
                    <h3>Address</h3>
                    <div> City: {props.address.city} </div>
                    <div> Geo: {props.address.geo.lat}, {props.address.geo.lng} </div>
                    <div> Street: {props.address.street} </div>
                    <div> Suite: {props.address.suite} </div>
                    <div> Zipcode: {props.address.zipcode} </div>
                </div>
            </Modal>
        </div>
    )
})
export default User