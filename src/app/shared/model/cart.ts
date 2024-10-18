import { createId } from '@paralleldrive/cuid2';
export interface Cart {
  id: string;
  items: CartItem[];
  shippingPrice: number;
}

export interface CartItem {
  productId: number;
  title: string;
  unitPrice: number;
  quantity: number;
  imageUrl: string;
  brandName: string;
  categoryName: string;
}

export class Cart implements Cart {
  id = createId();
  items: CartItem[] = [];
  shippingPrice = 0;
}

export interface CartTotals {
  subtotal: number;
  shipping: number;
  total: number;
}
