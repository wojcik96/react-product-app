interface Product {
  id: string;
  title: string;
  description?: string;
  category?: string;
  price: string;
  image: string;
  rating?: {
    count: number;
    rate: number;
  };
}

export default Product;
