import { useParams } from 'react-router-dom';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/esm/Row'
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "../assets/css/ProductDetails.css"
import { useAddToCart, useFetchSingleProduct } from '../helper/UsefulFuntions';


const ProductDescriptionPage = () => {

    const { id } = useParams();

    const { isLoading, apiError, apiData } = useFetchSingleProduct(
        "GET",
        `${process.env.REACT_APP_API_ENDPOINT}/products/${id}`,
        {}
    );


    const { addToCart } = useAddToCart(apiData)





    if (isLoading) {
        return <div>Loading...</div>
    }



    return (
        <Container className="details-section">
            <Row>
                <Col className="mb-3 d-flex justify-content-center">
                    <img src={apiData?.img_url} className="PD-img" />
                </Col>
                <Col>
                    <div className="product-info">
                        <h1 className="PD-title">{apiData?.title}</h1>
                        <p className="PD-desc">{apiData?.description}</p>
                        <span className="PD-price">${apiData?.price}</span>
                        <hr className="PD-line mb-3" />
                        <div className="d-grid gap-2">
                            <Button variant='outline-success' onClick={addToCart} className='PD-button my-2'>Add To Cart</Button>
                        </div>

                        <hr className="PD-line my-3" />

                        <div>Category: Burgers</div>
                        <div>Share: <FaFacebook className='green' /> <FaTwitter className='green' /> <FaInstagram className='green' /> </div>

                        <hr className="PD-line mt-3" />
                    </div>
                </Col>
            </Row>
        </Container>
    )


}

export default ProductDescriptionPage