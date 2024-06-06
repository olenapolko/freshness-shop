import {ProductInterface} from '../../../shared/interfaces/product.interface';

export const MIN_PRICE = 0;
export const MAX_PRICE = 2000;

export const PRODUCTS: ProductInterface[] = [
  {
    _id: '663387e0b5c19a94087ebeb6',
    title: 'Apple iPhone 15 128Gb Blue',
    description: 'Discover the elegance of the Apple iPhone 14 Plus in captivating Purpl…',
    rating: 4,
    price: 850,
    quantity: 15,
    brand: 'Apple',
    country: 'USA',
    images: [
      'https://res.cloudinary.com/ddqesfvvh/image/upload/v1716194190/ihone15-1.png',
      'https://res.cloudinary.com/ddqesfvvh/image/upload/v1716194190/ihone15-2.png',
      'https://res.cloudinary.com/ddqesfvvh/image/upload/v1716194190/ihone15-3.png',
      'https://res.cloudinary.com/ddqesfvvh/image/upload/v1716194190/ihone15-4.png'
    ],
    discount: 10
  },
  {
    _id: '663388d34f544f328c37be2a',
    title: 'Samsung Galaxy A15 8/256Gb Blue',
    description: 'Experience the Samsung Galaxy A15 in captivating Blue, featuring 8GB R…',
    rating: 2,
    price: 290,
    quantity: 15,
    brand: 'Samsung',
    country: 'USA',
    images: [
      'https://res.cloudinary.com/ddqesfvvh/image/upload/v1716193393/samsungA15-1.png',
      'https://res.cloudinary.com/ddqesfvvh/image/upload/v1716193393/samsungA15-2.png',
      'https://res.cloudinary.com/ddqesfvvh/image/upload/v1716193393/samsungA15-3.png',
      'https://res.cloudinary.com/ddqesfvvh/image/upload/v1716193393/samsungA15-4.png'
    ],
    discount: 10
  },
  {
    _id: '66314ac1f7f134d750895075',
    title: 'Asus Vivobook 16X Cool Silver',
    description: 'Meet the Asus Vivobook 16X K3605ZF-N1098, where elegance meets cutting…',
    rating: 5,
    price: 1150,
    quantity: 35,
    brand: 'Asus',
    country: 'USA',
    images: [
      'https://res.cloudinary.com/ddqesfvvh/image/upload/v1714829546/asus-vivo-1.png',
      'https://res.cloudinary.com/ddqesfvvh/image/upload/v1714829552/asus-vivo-2.png',
      'https://res.cloudinary.com/ddqesfvvh/image/upload/v1714829552/asus-vivo-3.png',
      'https://res.cloudinary.com/ddqesfvvh/image/upload/v1714829557/asus-vivo-4.png'
    ],
    discount: 10
  },
  {
    _id: '66326a686664a491b30383c2',
    title: 'Samsung Galaxy S24 Titanium Gray',
    description: 'Experience the pinnacle of innovation and performance with the Samsung…',
    rating: 4,
    price: 980,
    quantity: 50,
    brand: 'Samsung',
    country: 'South Korea',
    images: [
      'https://res.cloudinary.com/ddqesfvvh/image/upload/v1714841529/samsung-s24-1.png',
      'https://res.cloudinary.com/ddqesfvvh/image/upload/v1714841533/samsung-s24-2.png',
      'https://res.cloudinary.com/ddqesfvvh/image/upload/v1714841536/samsung-s24-3.png',
      'https://res.cloudinary.com/ddqesfvvh/image/upload/v1714841540/samsung-s24-4.png'
    ],
    discount: 5
  }
];
