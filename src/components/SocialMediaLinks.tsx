import React from 'react'
import { BsFacebook, BsTwitter, BsGoogle, BsInstagram } from "react-icons/bs"


const SocialMediaLinks = () => {
    return (
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

            <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
            </div>

            <div>
                <a href="" className="me-4 link-secondary">
                    <BsFacebook />
                </a>
                <a href="" className="me-4 link-secondary">
                    <BsTwitter />
                </a>
                <a href="" className="me-4 link-secondary">
                    <BsGoogle />
                </a>
                <a href="" className="me-4 link-secondary">
                    <BsInstagram />
                </a>
            </div>

        </section>
    )
}

export default SocialMediaLinks