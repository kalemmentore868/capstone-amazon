import React from 'react'
// @ts-ignore
import { ChatEngine } from "react-chat-engine"

const SupportAdmin = () => {
    return (
        <ChatEngine
            projectID={process.env.REACT_APP_PROJECT_ID}
            userName="Kalem"
            userSecret="kalem456"
            height="calc(100vh - 20px)"
        />
    )
}

export default SupportAdmin