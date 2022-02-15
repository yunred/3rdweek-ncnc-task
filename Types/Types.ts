import { ProductProps } from 'Components/Types/ProductType';

export interface CategoryType  {
    conCategory1s:CategoryListType[]
}

export interface CategoryListType {
    id:number,
    name: string,
    discountRate:number,
    imageUrl:string
}

export interface APICompoProps {
    InititalProps: CategoryType
}

export interface CustomerCenterProps {
    faqType: QaType[];
}

export interface QaType {
    id: number;
    key: string;
    name: string;
}

export interface QuestionContainerProps {
    question: string;
    answer: string;
    id: number;
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

export interface Options{
    count: string;
    expireAt: string;
    sellingPrice: string;
}

export interface ItemProps extends ProductProps{
    conCategory2: ConCategory2;
    conCategory2Id: number;
    discountRate: number;
    id: number;
    imageUrl: string;
    info: null | string;
    information: string;
    isOnlyAccount: number;
    minSellingPrice: number;
    name: string;
    ncSellingPrice: number;
    options: Options[];
    originalPrice: number;
    tip: null | string;
    warning:string;
}