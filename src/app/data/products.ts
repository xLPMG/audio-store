export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'headphones',
      price: 799,
      category: 'headphones',
      description: 'headphone'
    },
    {
      id: 2,
      name: 'Speaker',
      price: 699,
      category: 'speakers',
      description: 'speaker'
    },
    {
      id: 3,
      name: 'microphone',
      price: 299,
      category: 'microphones',
      description: 'mic'
    }
  ];
  