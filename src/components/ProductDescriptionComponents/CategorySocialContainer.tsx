import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { useSingleCategory } from '../../helper/hooks'

interface props {
    id?: number
}

const CategorySocialContainer: React.FC<props> = ({ id }) => {

    const getCategory = useSingleCategory(Number(id))
    const category = getCategory.data ?? undefined

    return (
        <>
            <div>Category: {category?.title}</div>
            <div>Share: <FaFacebook className='green' /> <FaTwitter className='green' /> <FaInstagram className='green' /> </div>
        </>
    )
}

export default CategorySocialContainer