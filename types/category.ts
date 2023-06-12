export interface ICategoryModel {
    id: number;
    title: string;
    categories?: ICategoryModel[];
}
