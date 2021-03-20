import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import "./Sidebar.css";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import SidebarChat from './SidebarChat';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, { auth } from "./firebase"
import Chat from './Chat';


function Sidebar() {
    const user = useSelector(selectUser);
    const [chats, setChats] = useState([])

    useEffect(() => {
    db.collection("chats").onSnapshot(snapshot => (
            setChats(snapshot.docs.map(doc => ({
                id:doc.id,
                data: doc.data(),
            })))
        ))
    }, [])

    const addChat = () => {
        const chatName = prompt("Please Enter A Chat Name");
        if (chatName) {
            db.collection('chats').add({
                chatName: chatName,
            })
        }
        
    }

    return (
        <div className="sidebar">
            
             <div className="sidebar__header">
                <Avatar onClick={() => auth.signOut()} src={user.photo} className="sidebar__avatar"/> 
                <div className="sidebar__input">
                    <SearchIcon/> {/*creates the search icon*/}
                    <input placeholder="Search"/> {/*creates the search bar*/}
                </div>

                <IconButton varaint="outlined" className="sidebar__inputButton">
                    <RateReviewOutlinedIcon onClick={addChat}/> {/*creates the message button*/}
                </IconButton>

            </div>

            <div className="sidebar__chats">
                {chats.map(({id, data: {chatName }}) => (
                    <SidebarChat key={id} id={id} chatName={chatName}/>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
