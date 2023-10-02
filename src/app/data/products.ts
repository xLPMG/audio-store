export interface Product {
    id: number;
    name: string;
    brand: string;
    price: number;
    category: Array<String>;
    description: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Bose QuietComfort Ultra Headphones',
      brand: 'Bose',
      price: 499.95,
      category: ['headphones', 'new'],
      description: ''
    },
    {
      id: 2,
      name: 'Bose Noise Cancelling Headphones 700',
      brand: 'Bose',
      price: 399.95,
      category: ['headphones'],
      description: ''
    },
    {
      id: 3,
      name: 'Bose QuietComfort 45 Headphones',
      brand: 'Bose',
      price: 349.95,
      category: ['headphones', 'new'],
      description: ''
    },
    {
      id: 4,
      name: 'Bose QuietComfort Ultra Earbuds',
      brand: 'Bose',
      price: 349.95,
      category: ['earphones'],
      description: ''
    },
    {
      id: 5,
      name: 'Bose SoundLink Mini II - Special Edition',
      brand: 'Bose',
      price: 169.95,
      category: ['speakers', 'new'],
      description: ''
    },
    {
      id: 6,
      name: 'Bose Surround Speakers ',
      brand: 'Bose',
      price: 399.95,
      category: ['speakers'],
      description: ''
    },
    {
      id: 7,
      name: 'Teufel Ultima 40 Active',
      brand: 'Teufel',
      price: 699.99,
      category: ['speakers'],
      description: 'Dual, high-end active 3-way speakers that do not require an amplifier or AV receiver.'
    },
    {
      id: 8,
      name: 'Teufel Theater 500',
      brand: 'Teufel',
      price: 699.99,
      category: ['speakers'],
      description: ''
    },
    {
      id: 9,
      name: 'Teufel REAL BLUE PRO',
      brand: 'Teufel',
      price: 349.99,
      category: ['headphones','new'],
      description: ''
    },
    {
      id: 10,
      name: 'Teufel AIRY SPORTS TWS',
      brand: 'Teufel',
      price: 699.99,
      category: ['earphones'],
      description: ''
    },
    {
      id: 11,
      name: 'Teufel STEREO M',
      brand: 'Teufel',
      price: 799.99,
      category: ['speakers'],
      description: 'A bookshelf speaker set with integrated aplification for Wi-Fi and Bluetooth streaming.'
    }
    ,
    {
      id: 12,
      name: 'Rode NT-USB+',
      brand: 'Rode',
      price: 199.99,
      category: ['microphones'],
      description: 'Professional USB Microphone'
    }
  ];
  