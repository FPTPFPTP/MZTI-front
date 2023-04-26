import MenuJson from '@/constants/menu.json';
import { IBoardModel, IBoardMenu } from '@/types/board';

export const categories = MenuJson.reduce((prev: IBoardModel[], cur: IBoardMenu) => {
    return prev.concat(cur.menus);
}, []);

export const categoryUrlToId = (url: string) => {
    const category = categories.find((category) => category.url === url);
    if (category) {
        return category.id;
    }
    return 0;
};
