export interface ProductTypes {
  id: number;
  gender: "men" | "women" | "children";
  category: string;
  subcategory: string;
  productName: string;
  brand: string;
  pricePLN: number;
  priceUSD: number;
  photos: string[];
  description: string;
  maintenanceInfo: string;
}

export interface FavouriteProductTypes {
  productId: number;
  id: number;
  product: ProductTypes;
}

export type Currency = "PLN" | "USD";

export interface AccordionItems {
  title: string;
  content: string;
}

export type Gender = "kobieta" | "mezczyzna" | "dziecko";
