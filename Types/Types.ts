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