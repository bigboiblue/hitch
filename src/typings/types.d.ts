type Pair<T, C> = [T, C];


/** MenuItemsData passed as {title, color?, backgroundColor?, action}[] */
type MenuItemData = {
    title: string;
    callback: (...args: any[]) => any;
}

/** The object schema for a flag data object */
interface FlagData {
    _id: string;
    name: string;
    isEnabled: boolean;
    type: string;
    dateCreated: number;
}
