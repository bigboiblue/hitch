type Pair<T, C> = [T, C];


/** MenuItemsData passed as {title, color?, backgroundColor?, action}[] */
type MenuItemData = {
    title: string;
    color?: string;
    backgroundColor?: string;
    action: (any?) => { type: string; payload: Record<string, any> };
}
