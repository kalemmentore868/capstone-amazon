export interface CartItemType {
  productId: number;
  name: string;
  quantity: number;
  price: number;
  img_url: string;
}

export interface CartType {
  userId: string;
  items: CartItemType[];
  bill: number;
}

export interface CartState {
  cart: CartType;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface ProductType {
  id: number;
  title: string;
  description?: string;
  //   category_id: number;
  //   rating: number;
  //   is_best_seller: boolean;
  img_url: string;
  //   seller_id: number;
  price: number;
  //   created_at: Date;
}

export interface UserType {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  is_admin?: boolean;
  phone_number?: string;
  token?: string;
}

export interface UserState {
  user: UserType | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
