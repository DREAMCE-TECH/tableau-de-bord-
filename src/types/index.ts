export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'vendor' | 'user';
  createdAt: string;
  lastLogin: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  region: string;
  vendorId: string;
  stock: number;
  image: string;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  userId: string;
  products: {
    productId: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: string;
  createdAt: string;
  updatedAt: string;
}

export interface Vendor {
  id: string;
  userId: string;
  businessName: string;
  region: string;
  phone: string;
  address: string;
  status: 'active' | 'pending' | 'suspended';
  rating: number;
  createdAt: string;
  updatedAt: string;
}