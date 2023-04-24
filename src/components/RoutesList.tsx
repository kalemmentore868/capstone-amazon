import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import BestSellerPage from "../pages/BestSellerPage"
import NotFoundPage from "../pages/NotFoundPage"
import ProductCategoryPage from "../pages/ProductCategoryPage"
import ProductDescriptionPage from "../pages/ProductDescriptionPage"
import ProductListingPage from "../pages/ProductListingPage"
import ShoppingCartPage from "../pages/ShoppingCartPage"
import SignUpPage from "../pages/SignUpPage"
import AdminPage from '../pages/AdminPage'
import SupportAdmin from './AdminComponents/SupportAdmin/SupportAdmin'
import CreateProductPage from '../pages/CreateProductPage'
import EditProductPage from '../pages/EditProductPage'
import UserDashboardPage from '../pages/UserDashboardPage'

const RoutesList = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/best-sellers" element={<BestSellerPage />} />
            <Route path="/categories" element={<ProductCategoryPage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/products/:id" element={<ProductDescriptionPage />} />
            <Route path="/checkout" element={<ShoppingCartPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin-support" element={<SupportAdmin />} />
            <Route path="/createproduct" element={<CreateProductPage />} />
            <Route path="/edit-product/:id" element={<EditProductPage />} />
            <Route path="/user-dashboard/:id" element={<UserDashboardPage />} />
            <Route path="*" element={<NotFoundPage />} />  {/* None of the above*/}
        </Routes>
    )
}

export default RoutesList