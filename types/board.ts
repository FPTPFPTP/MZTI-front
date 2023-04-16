export interface IBoardMenu {
    id: string;
    title?: string;
    menus: IBoardModel[];
}
export interface IBoardModel {
    id: number;
    title: string;
}
