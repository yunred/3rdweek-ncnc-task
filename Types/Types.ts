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