import React, { useState, useEffect } from 'react'
// @ts-ignore
import { ChatEngineWrapper, Socket, ChatFeed } from "react-chat-engine"
import { styles } from '../styles'

interface props {
    visible: boolean
    chat: any;
    user: any
}

const ChatEngine: React.FC<props> = ({ visible, chat, user }) => {
    const [showChat, setShowChat] = useState(false)

    useEffect(() => {
        if (visible) {
            setTimeout(() => {
                setShowChat(true)
            }, 500)
        }

    }, [])


    return (
        <div className='transition-5' // @ts-ignore
            styles={{
                ...styles.chatEngineWindow,
                ...{
                    height: visible ? "100%" : "0%",
                    zIndex: visible ? "100" : "-1"
                }
            }}
        >{
                showChat && (
                    <ChatEngineWrapper>
                        <Socket projectID={process.env.REACT_APP_PROJECT_ID} userName={user.email} userSecret={user.email} />
                        <ChatFeed activeChat={chat.id} />
                    </ChatEngineWrapper>
                )
            }</div>
    )
}

export default ChatEngine