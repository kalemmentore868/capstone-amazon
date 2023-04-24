import React, { FormEvent, useState } from 'react'
import { AiOutlinePhone } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { Button, Form } from 'react-bootstrap'
import { UserType } from '../helper/types'
import { editUser } from '../redux/user'
import { useAppDispatch } from '../redux/redux-hooks'
import { errorToast, successfulToast } from '../helper/toasties'
import { useNavigate } from 'react-router-dom'

interface props {
    userData: UserType | null;
}

const EditUserForm: React.FC<props> = ({ userData }) => {
    const [firstName, setFirstName] = useState(userData?.first_name || "");
    const [lastName, setLastName] = useState(userData?.last_name || "");
    const [email, setEmail] = useState(userData?.email || "");
    const [phone_number, setPhone] = useState(userData?.phone_number || "");

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formValues = {
            first_name: firstName,
            last_name: lastName,
            email,
            phone_number,
            id: userData?.id,
            token: userData?.token
        }


        // @ts-ignore
        dispatch(editUser(formValues))
            .then(result => {

                if (result.payload) {

                    successfulToast("You Have Successfully Edited Your Profile!")
                    navigate("/")
                } else {
                    errorToast("Something went wrong, Try again")
                }
            })


    };


    return (
        <div className='mx-auto' style={{ width: "80%" }}><Form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
            <div className="d-flex flex-row align-items-center mb-4">
                <FaUser className="me-3" size="20px" />
                <Form.Group className="form-outline flex-fill mb-0"  >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={firstName}
                        onChange={(event) => setFirstName(event.target.value)} required />

                </Form.Group>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
                <FaUser className="me-3" size="20px" />
                <Form.Group className="form-outline flex-fill mb-0" >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={lastName}
                        onChange={(event) => setLastName(event.target.value)} required />

                </Form.Group>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
                <GrMail size="20px" className="me-3 " />
                <Form.Group className="form-outline flex-fill mb-0" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email}
                        onChange={(event) => setEmail(event.target.value)} required />
                </Form.Group>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
                <AiOutlinePhone size="20px" className="me-3 " />
                <Form.Group className="form-outline flex-fill mb-0" >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone number" value={phone_number}
                        onChange={(event) => setPhone(event.target.value)} required />
                </Form.Group>
            </div>


            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <Button variant="primary" size="lg" type="submit">
                    Update User
                </Button>
            </div>


        </Form></div>
    )
}

export default EditUserForm