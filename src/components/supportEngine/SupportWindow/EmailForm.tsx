// @ts-ignore
import axios from 'axios'
import React, { FormEvent, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import Avatar from '../Avatar'

import { styles } from '../styles'
interface props {
    setUser: Function
    setChat: Function
    visible: boolean
}

const EmailForm: React.FC<props> = ({ setUser, setChat, visible }) => {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)


    const getOrCreateUser = (callback: Function) => {
        axios.put("https://api.chatengine.io/users/", {
            "username": email,
            "secret": email,
            "email": email

        }, {
            headers: {
                "Private-Key": process.env.REACT_APP_PRIVATE_KEY
            }
        }).then((r: any) => callback(r.data))
    }

    const getOrCreateChat = (callback: Function) => {
        axios.put("https://api.chatengine.io/chats/", {
            "usernames": [email, "Kalem"],
            "is_direct_chat": true

        }, {
            headers: {
                "Project-ID": process.env.REACT_APP_PROJECT_ID,
                "User-Name": email,
                "User-Secret": email,
            }
        }
        ).then((r: any) => callback(r.data))
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setLoading(true)
        console.log("sending email ", email)
        getOrCreateUser(
            (user: any) => {
                setUser && setUser(user)
                getOrCreateChat(
                    (chat: any) => {
                        setLoading(false)
                        setChat && setChat(chat)
                    }
                )
            }
        )
    }
    return (
        <div
            style={{
                ...styles.emailFormWindow,
                ...{
                    height: visible ? '100%' : "0%",
                    opacity: visible ? '1' : "0",
                }
            }}
        >
            <div style={{ height: "0px" }} >

                <div // @ts-ignore
                    style={styles.stripe} />
            </div>

            <div
                className='transition-5' // @ts-ignore
                style={{
                    ...styles.loadingDiv,
                    ...{
                        zIndex: loading ? '10' : '-1',
                        opacity: loading ? '0.33' : '0'
                    }
                }}
            />
            <ClipLoader
                className="transition-5"
                size={50}
                // @ts-ignore
                cssOverride={{
                    ...styles.loadingIcon,
                    ...{
                        zIndex: loading ? '10' : '-1',
                        opacity: loading ? '1' : '0',
                        fontSize: "300px",
                        top: "calc(50% - 40px)",
                        left: "calc(50% - 30px)"
                    }
                }}
            />
            <div style={{ position: "absolute", height: "100%", width: "100%", textAlign: "center" }} >
                <Avatar style={{
                    position: "relative",
                    left: "calc(50% - 50px)",
                    top: "10%"

                }} />


                <div // @ts-ignore
                    style={styles.topText}>
                    Welcome to my <br /> support
                </div>

                <form
                    onSubmit={e => handleSubmit(e)}
                    style={{ position: "relative", width: "100%", top: "19.75%" }}
                >
                    <input type="text"  // @ts-ignore
                        style={styles.emailInput}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Your Email"
                    />
                </form>

                <div // @ts-ignore
                    style={styles.bottomText}>
                    Enter your email to <br /> get started
                </div>
            </div>
        </div>
    )
}

export default EmailForm