import React, { FC } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from '../ProductCard';
import { Button } from 'react-bootstrap';


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
        <Container className="py-3 my-4">
            <h1 className="mb-5 text-left curly">{text} </h1>
            {rowsArr.map((row, index) => {
                return (
                    <Row key={index}>
                        {colsArr.map((col, index) => {

                            return (
                                <Col lg={4} md={12} key={index}>
                                    <ProductCard product={data[index]} />
                                </Col>
                            )
                        })}
                    </Row>
                )
            })}
            <div className="d-flex justify-content-end rubiks-font">
                <Button variant="primary" className="ms-auto p-2">See All Best Sellers</Button>
            </div>

        </Container>
    )
}



export default Grid