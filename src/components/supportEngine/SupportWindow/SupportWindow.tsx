import React, { useState } from 'react'
import { styles } from '../styles'
import EmailForm from './EmailForm'
import ChatEngine from './ChatEngine'

interface props {
    visible: boolean
}

const SupportWindow: React.FC<props> = ({ visible }) => {

    const [user, setUser] = useState(null);
    const [chat, setChat] = useState(null)

    return (
        // @ts-ignore
        <div className='transition-5' style={{
            ...styles.supportWindow,
            ...{
                opacity: visible ? "1" : "0",
                display: visible ? "block" : "none"
            }
        }}
        >
            <EmailForm
                setUser={(user: any) => setUser(user)}
                setChat={(chat: any) => setChat(chat)}
                visible={user === null || chat === null}
            />

            <ChatEngine visible={user !== null && chat !== null}
                chat={chat}
                user={user}
            />
        </div>
    )
}

export default SupportWindow