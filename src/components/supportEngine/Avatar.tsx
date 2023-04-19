import React, { CSSProperties, useState } from 'react'

import { styles } from './styles'

interface props {
    style: CSSProperties
    onClick?: () => void
}

const Avatar: React.FC<props> = ({ style, onClick }) => {
    const [hovered, setHover] = useState(false)
    return (
        <div style={style}>
            <div
                //  @ts-ignore
                className='transition-3' style={{
                    ...styles.avatarHello,
                    ...{ opacity: hovered ? 1 : 0 }

                }} >Need Help?</div>

            <div
                className='transition-3'
                onClick={() => onClick && onClick()}
                onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
                    ...styles.chatWithMeButton,
                    ...{ border: hovered ? "1px solid #f9f0ff" : "4px solid #7a39e0" }
                }}>

            </div>
        </div>
    )
}

export default Avatar