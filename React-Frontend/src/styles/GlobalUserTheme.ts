import React from "react";

//TODO: THEMING Global title and global body font?

export type MenuItemTheme = {
    backgroundColor: string;
    foregroundColor: string;
    font: string;
    textAlign: string;
    padding: string;
    hover: {
        backgroundColor: string;
        foregroundColor: string;
    };
    click: {
        backgroundColor: string;
        foregroundColor: string;
    };
}

export type DropMenuTheme = {
    outlineColor: string;
    padding: string;
    menuItem: MenuItemTheme;
}

export type KebabMenuTheme = {
    color: string;
    /** As a scale factor relative to other dot sizes (1 is default) */
    middleDotSize: number;
    /** Sized in rem */
    height: number;
    hover: {
        backgroundColor: string;
        foregroundColor: string;
    };
    click: {
        backgroundColor: string;
        foregroundColor: string;
        /** As a scale factor relative to other dot sizes (1 is default) */
        middleDotSize: number;
    };
    dropDownMenu: DropMenuTheme;
}

export type SwitchTheme = {
    enabledColor: string;
    disabledColor: string;
    innerCircleColor: string;
    /** Unit in rem */
    width: number;
}

export type ButtonTheme = {
    backgroundColor: string;
    foregroundColor: string;
    padding: string;
}

export type TableTheme = {
    titleBackgroundColor: string;
    titleForegroundColor: string;
    titleFont: string;
    backgroundColor: string;
    foregroundColor: string;
    font: string;
    border: string;
}

export type ThemeType = {
    main: {
        backgroundColor: string; //May be more complex (some svg or pattern)
        dynamicBackground: boolean;
        foregroundColor: string; //Essentially title color
        titleFont: string;
        button: ButtonTheme;
    };
    navbar: {
        backgroundColor: string;
        type: "vertical" | "horizontal";
        /** Height or width (depending in horizontal or vertical type) in rem */
        size: number;
        padding: string;
        menuItem: MenuItemTheme;
    };
    flagBox: {
        backgroundColor: string;
        titleBackgroundColor: string;
        titleForegroundColor: string;
        titleFont: string;
        flag: {
            switch: SwitchTheme;
            backgroundColor: string;
            foregroundColor: string;
            font: string;
            kebabMenu: KebabMenuTheme;
        };
    };
    table: TableTheme;
}


/* TODO: SERVER: Replace default theme value with a theme loaded from DB */
//This file is essentially json. Replace this with theme data from db
export const tempTheme: ThemeType = {
    main: {
        titleFont: "500 2rem 'Work Sans', sans-serif",
        backgroundColor: "#f5d7c4", //May be more complex (some svg or pattern)
        dynamicBackground: true,
        foregroundColor: "#57424e", //Essentially title color
        button: {
            backgroundColor: "#91667f",
            foregroundColor: "#eeeeee",
            padding: "0.5rem",
        },
    },
    navbar: {
        backgroundColor: "#6C4B5E",
        size: 4.5, //in rem
        type: "horizontal",
        padding: "",
        menuItem: {
            font: "300 0.9rem 'Work Sans', sans-serif",
            backgroundColor: "#91667f",
            foregroundColor: "#eeeeee",
            padding: "1rem 2rem",
            textAlign: "center",
            //TODO: THEMING hover click effects (material design)
            hover: {
                backgroundColor: "#a87995",
                foregroundColor: "",
            },
            click: {
                backgroundColor: "",
                foregroundColor: "",
            },
        },
    },
    flagBox: {
        backgroundColor: "#a37f98",
        titleBackgroundColor: "#5e3f54",
        titleForegroundColor: "#eeeeee",
        titleFont: "500 1.5rem 'Work Sans 300', sans-serif",
        flag: {
            backgroundColor: "rgba(255, 255, 255, 0.0)",
            foregroundColor: "#eeeeee",
            font: "300 0.9rem 'Work Sans', sans-serif",
            switch: {
                enabledColor: "#f5ac95",
                disabledColor: "#eeeeee",
                innerCircleColor: "#6C4B5E",
                width: 3,
            },
            kebabMenu: {
                color: "#333333",
                middleDotSize: 1,
                height: 2,
                hover: {
                    backgroundColor: "",
                    foregroundColor: "",
                },
                click: {
                    backgroundColor: "",
                    foregroundColor: "",
                    middleDotSize: 5.5,
                },
                dropDownMenu: {
                    outlineColor: "#5e3f54",
                    padding: "0.2rem",
                    menuItem: {
                        font: "300 0.9rem 'Work Sans', sans-serif",
                        backgroundColor: "#eeeeee",
                        foregroundColor: "#5e3f54",
                        padding: "0rem 1rem 0rem 1rem",
                        //TODO: THEMING Fix textAlign
                        textAlign: "left",
                        hover: {
                            backgroundColor: "#ffffff",
                            foregroundColor: "",
                        },
                        click: {
                            backgroundColor: "",
                            foregroundColor: "",
                        },
                    },

                },
            },
        },
    },
    table: {
        titleBackgroundColor: "#5e3f54",
        titleForegroundColor: "#ffffff",
        titleFont: "500 1.1rem 'Work Sans', sans-serif",
        backgroundColor: "#eeeeee",
        foregroundColor: "#222222",
        font: "300 1rem 'Work Sans', sans-serif",
        border: "1px solid rgba(0, 0, 0, 0.1)",
    },
};

export const ThemeContext = React.createContext(tempTheme);

