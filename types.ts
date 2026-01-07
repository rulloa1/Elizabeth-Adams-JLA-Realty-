export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  imageUrls: string[];
  tags: string[];
  description: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface NavLink {
  label: string;
  href: string;
}