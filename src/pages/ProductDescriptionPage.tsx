import { useParams } from 'react-router-dom';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/esm/Row'
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import "../assets/css/ProductDetails.css"
import { useAddToCart } from '../helper/UsefulFuntions';
import { useSingleProduct } from '../helper/hooks';
import Loader from '../components/Loader';
import CategorySocialContainer from '../components/ProductDescriptionComponents/CategorySocialContainer';


const ProductDescriptionPage = () => {

    const { id } = useParams();

    const getProduct = useSingleProduct(Number(id))
    const product = getProduct.data ?? undefined


    const { addToCart } = useAddToCart(product)



    if (getProduct.isLoading) {
        return <Loader />
    }



    return (
        <Container className="details-section">
            <Row>
                <Col className="mb-3 d-flex justify-content-center">
                    <img src={product?.img_url} className="PD-img" alt="product display" />
                </Col>
                <Col>
                    <div className="product-info">
                        <h1 className="PD-title">{product?.title}</h1>
                        <p className="PD-desc">{product?.description}</p>
                        <span className="PD-price">${product?.price}</span>
                        <hr className="PD-line mb-3" />
                        <div className="d-grid gap-2">
                            <Button variant='outline-success' onClick={addToCart} className='PD-button my-2'>Add To Cart</Button>
                        </div>

                        <hr className="PD-line my-3" />

                        <CategorySocialContainer id={product?.category_id} />

                        <hr className="PD-line mt-3" />
                    </div>
                </Col>
            </Row>
        </Container>
    )


}

export default ProductDescriptionPage