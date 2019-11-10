type Pair<T, C> = [T, C];


/** MenuItemsData passed as {title, color?, backgroundColor?, action}[] */
type MenuItemData = {
    title: string;
    callback: (...args: any[]) => any;
}

/** The object schema for a flag data object */
type FlagData = {
    _id: string;
    name: string;
    groupName: string;
    isEnabled: boolean;
    type: string;
    dateCreated: Date;
}

/**
 * @property: selectionItems is only used when the input of form item is a drop selection menu...
 *  The property: selectionItems should be an array of selection options / titles
 */
type FormItemData = {
    title: string;
    default?: string | number;
    selectionItems?: string[] | number[];
};

type Action = {
    type: string;
    payload: any;
}
