import { addItemToCart, postAddToCart, setBill } from "../redux/cart";
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";
import { successfulToast } from "./toasties";
import { ProductType, UserType } from "./types";

export const useAddToCart = (product: ProductType) => {
  const user = useAppSelector((state) => state.user.user);

  const dispatch = useAppDispatch();
  let cartItem = {
    productId: product.id,
    name: product.title,
    quantity: 1,
    price: product.price,
    img_url: product.img_url,
  };
  const addToCart = () => {
    if (user && user.token) {
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
