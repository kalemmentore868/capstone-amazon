import axios from 'axios'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { errorToast, successfulToast } from '../helper/toasties'
import { resetCart } from '../redux/cart'
import { useAppDispatch, useAppSelector } from '../redux/redux-hooks'

interface props {
    total: number;
    show: boolean;
    notes: string,
    handleClose: Function
}

const ModalC: React.FC<props> = (props: any) => {
    const { total, notes, handleClose, ...rest } = props

    const user = useAppSelector((state) => state.user.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const makePurchase = async () => {
        if (user) {
            const { id, token } = user;
            const headers = { Authorization: `Bearer ${token}` };

            try {
                const response = await axios.post(
                    `${process.env.REACT_APP_API_ENDPOINT}/orders/${id}`,
                    { notes: props.notes },
                    { headers }
                );

                successfulToast(response.data.message)
                dispatch(resetCart())
                localStorage.removeItem("cart")
                navigate("/")
            } catch (error) {
                console.log(error)
            }

        } else {
            errorToast("You must be logged in to make purchase")
            navigate("/login")
        }
    }

    return (
        <Modal {...rest} centered>
            <Modal.Header>
                <Modal.Title>Pay With Cash On Delivery</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Total:  ${total.toFixed(2)}
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between">

                <Button variant='primary' size="lg" onClick={makePurchase}>
                    Make Order
                </Button>


                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalC