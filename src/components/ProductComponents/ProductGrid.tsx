import React, { FC } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from '../ProductCard';


interface GridProps {
    rows: number;
    data: any[];
    text: string
}

const Grid: FC<GridProps> = ({ rows, data, text }) => {

    // @ts-ignore
    let rowsArr = [...Array(rows).keys()]
    // @ts-ignore
    let colsArr = [...Array(3).keys()]
    let index = 0;

    return (
        <Container>
            <h1 className="my-3 text-center">{text} </h1>
            {rowsArr.map(row => {
                return (
                    <Row>
                        {colsArr.map(col => {
                            const prodObj = data[index]
                            index++

                            return (
                                <Col lg={4} md={12}>
                                    <ProductCard product={prodObj} />
                                </Col>
                            )
                        })}
                    </Row>
                )
            })}
        </Container>
    )
}



export default Grid