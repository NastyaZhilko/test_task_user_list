import React, {FC, useState} from "react";
import style from "./User.module.css"
import {deleteUser} from "../../../redux/usersReducer";
import {useDispatch} from "react-redux";
import Modal from "../../../common/components/Modal/Modal";
import Highlighter from "react-highlight-words"

type PropsType ={
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {lat: string, lng: string}
    }
    phone: string
    website: string
    company:  {
        name: string
        catchPhrase: string
        bs: string
    }
    searchText: string
}
const User: FC<PropsType> = React.memo((props: PropsType) => {
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


                <div> Name: <Highlighter
                    highlightClassName="highlight"
                    searchWords={[props.searchText]}
                    autoEscape={true}
                    textToHighlight={props.name}
                />  </div>
                <div> UserName: <Highlighter
                    highlightClassName="highlight"
                    searchWords={[props.searchText]}
                    autoEscape={true}
                    textToHighlight={props.username}
                /> </div>
                <div> Email: <Highlighter
                    highlightClassName="highlight"
                    searchWords={[props.searchText]}
                    autoEscape={true}
                    textToHighlight={props.email}
                /> </div>
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