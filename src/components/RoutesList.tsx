import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RequireAdmin from "./RequireAdmin";
import RequireAuth from "./RequireAuth";
import Loader from "./Loader";
// import LoginPage from "../pages/LoginPage";

// import BestSellerPage from "../pages/BestSellerPage";
// import NotFoundPage from "../pages/NotFoundPage";
// import ProductCategoryPage from "../pages/ProductCategoryPage";
// import ProductDescriptionPage from "../pages/ProductDescriptionPage";
// import ProductListingPage from "../pages/ProductListingPage";
// import ShoppingCartPage from "../pages/ShoppingCartPage";
// import SignUpPage from "../pages/SignUpPage";
// import AdminPage from "../pages/AdminPage";
// import SupportAdmin from "./AdminComponents/SupportAdmin/SupportAdmin";
// import CreateProductPage from "../pages/CreateProductPage";
// import EditProductPage from "../pages/EditProductPage";
// import UserDashboardPage from "../pages/UserDashboardPage";
// import RequireAuth from "./RequireAuth";
// import RequireAdmin from "./RequireAdmin";
const LoginPage = lazy(() => import("../pages/LoginPage"));
const BestSellerPage = lazy(() => import("../pages/BestSellerPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const ProductCategoryPage = lazy(() => import("../pages/ProductCategoryPage"));
const ProductDescriptionPage = lazy(
  () => import("../pages/ProductDescriptionPage")
);
const ProductListingPage = lazy(() => import("../pages/ProductListingPage"));
const ShoppingCartPage = lazy(() => import("../pages/ShoppingCartPage"));
const SignUpPage = lazy(() => import("../pages/SignUpPage"));
const AdminPage = lazy(() => import("../pages/AdminPage"));
const SupportAdmin = lazy(
  () => import("./AdminComponents/SupportAdmin/SupportAdmin")
);
const CreateProductPage = lazy(() => import("../pages/CreateProductPage"));
const EditProductPage = lazy(() => import("../pages/EditProductPage"));
const UserDashboardPage = lazy(() => import("../pages/UserDashboardPage"));

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/login"
        element={
          <Suspense fallback={<Loader />}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path="/signup"
        element={
          <Suspense fallback={<Loader />}>
            <SignUpPage />
          </Suspense>
        }
      />
      <Route
        path="/best-sellers"
        element={
          <Suspense fallback={<Loader />}>
            <BestSellerPage />
          </Suspense>
        }
      />
      <Route
        path="/categories"
        element={
          <Suspense fallback={<Loader />}>
            <ProductCategoryPage />
          </Suspense>
        }
      />
      <Route
        path="/products"
        element={
          <Suspense fallback={<Loader />}>
            {" "}
            <ProductListingPage />
          </Suspense>
        }
      />
      <Route
        path="/products/:id"
        element={
          <Suspense fallback={<Loader />}>
            <ProductDescriptionPage />
          </Suspense>
        }
      />
      <Route
        path="/checkout"
        element={
          <Suspense fallback={<Loader />}>
            <ShoppingCartPage />
          </Suspense>
        }
      />
      <Route
        path="/admin"
        element={
          <Suspense fallback={<Loader />}>
            <RequireAdmin>
              <AdminPage />
            </RequireAdmin>
          </Suspense>
        }
      />
      <Route
        path="/admin-support"
        element={
          <Suspense fallback={<Loader />}>
            <RequireAdmin>
              <SupportAdmin />
            </RequireAdmin>
          </Suspense>
        }
      />
      <Route
        path="/createproduct"
        element={
          <Suspense fallback={<Loader />}>
            <RequireAdmin>
              <CreateProductPage />
            </RequireAdmin>
          </Suspense>
        }
      />
      <Route path="/edit-product/:id" element={<EditProductPage />} />
      <Route
        path="/user-dashboard/:id"
        element={
          <Suspense fallback={<Loader />}>
            <RequireAuth>
              <UserDashboardPage />
            </RequireAuth>
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<Loader />}>
            <NotFoundPage />
          </Suspense>
        }
      />{" "}
      {/* None of the above*/}
    </Routes>
  );
};

export default RoutesList;
