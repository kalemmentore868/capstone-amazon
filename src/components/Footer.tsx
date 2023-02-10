import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Footer = () => {
    return (
        <footer>
            <div className="text-center p-4" style={{ backgroundColor: "gray" }}>
                © 2021 Copyright:
                <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> Trinizon.com</a>
            </div>
        </footer>
    )
}

export default Footer