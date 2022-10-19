import React, { FC } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface ProductData {
    title: string;
    price: number;
    imgUrl: string;
}

interface GridProps {
    cols: number;
    rows: number;
    data: ProductData[];
    text: string
}

const Grid: FC<GridProps> = ({ cols, rows, data, text }) => {

    return (
        <Container>
            <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
        </Container>
    )
}

Grid.defaultProps = {
    rows: 1,
    cols: 4,
}

export default Grid