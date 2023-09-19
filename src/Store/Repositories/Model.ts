export interface Product {
    name: string;
    description: string;
    img: string;
    languages: string;
    stars: number;
    lastUpdated: number;
  }
  
  export interface CartProducts {
    cartproducts: Product[];
  }
  