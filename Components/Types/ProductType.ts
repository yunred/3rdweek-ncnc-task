export interface ProductProps {
  id: number;
  name: string;
  originalPrice: number;
  createdAt: string;
  sfId: string;
  minSellingPrice: number;
  ncSellingPrice: number;
  count: number;
  information: string | null;
  tip: string | null;
  warning: string;
  discountRate: number;
  askingPrice: number;
  isRefuse: number;
  isBlock: number;
  info: string | null;
  isOnlyAccount: number;
  conCategory2Id: number;
  imageUrl: string;
  conCategory2: ConCategory2;
}

export interface ConCategory2 {
  id: number;
  name: string;
  adminUserId: number;
  priority: number;
  createdAt: string;
  conCategory1Id: number;
  info: string | null;
  imageUrl: string;
  conCategory1: ConCategory1;
}

export interface ConCategory1 {
  id: number;
  name: string;
  createdAt: string;
  priority: number;
  discountRate: number;
  info: string;
  imageUrl: string;
}
