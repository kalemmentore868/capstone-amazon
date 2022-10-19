import React, { FC } from 'react'
// @ts-ignore
import logo from "../assets/img/logo.jfif"

interface LogoProps {
    width: number
}

const Logo: FC<LogoProps> = ({ width }) => {

    const size = {
        width
    }

    return (
        <img style={size} src={logo} alt="logo" />
    )
}

export default Logo