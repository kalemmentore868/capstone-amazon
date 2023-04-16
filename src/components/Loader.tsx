import React from 'react'
import { Col } from 'react-bootstrap';
import { GridLoader } from 'react-spinners';
import { CSSProperties } from 'styled-components';

interface props {
    size?: number
}

const Loader: React.FC<props> = ({ size = 100 }) => {

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    return (
        <Col xs={12} md={8} className={`d-flex align-items-center justify-content-center vh-${size}`}>
            <GridLoader color="#60be74"

                cssOverride={override}
                size={80} />
        </Col>
    )
}

export default Loader