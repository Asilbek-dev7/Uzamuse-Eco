export interface Project {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  moreText?: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
}

export interface NavItem {
  name: string;
  href?: string;
  onClick?: () => void;
  target?: string;
}
