import { useEffect, useState } from "react";
import axios from "axios";
import { addItemToCart, postAddToCart, setBill } from "../redux/cart";
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";
import { errorToast, successfulToast } from "./toasties";
import { ProductType } from "./types";

export const useAddToCart = (product: ProductType | undefined) => {
  const user = useAppSelector((state) => state.user.user);

  const dispatch = useAppDispatch();
  let cartItem: any;
  if (product) {
    cartItem = {
      productId: product.id,
      name: product.title,
      quantity: 1,
      price: product.price,
      img_url: product.img_url,
    };
  }

  const addToCart = () => {
    if (user && user.token && product) {
      const cartData = {
        productId: product.id,
        userId: user.id,
        quantity: 1,
        token: user.token,
      };
      dispatch(postAddToCart(cartData));
    } else {
      dispatch(addItemToCart(cartItem));
      dispatch(setBill());
    }
    successfulToast("Added To Cart");
  };

  return { addToCart };
};

// export const useDeleteProduct = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const deleteProduct = async (productId: number) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_API_ENDPOINT}/products/${productId}`,
//         {
//           method: "DELETE",
//         }
//       );
//       if (response.ok) {
//         setIsSuccess(true);
//         successfulToast(`Product with id: ${productId} deleted`);
//       } else {
//         setIsError(true);
//         errorToast(`Something went wrong contact admin`);
//       }
//     } catch (error) {
//       setIsError(true);
//     }
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     setIsError(false);
//     setIsSuccess(false);
//   }, []);

//   return { isLoading, isError, isSuccess, deleteProduct };
// };
