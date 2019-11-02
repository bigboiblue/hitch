import React from "react";

//TODO: THEMING Global title and global body font?

export type MenuItemTheme = {
    backgroundColor: string;
    foregroundColor: string;
    /** Unit in rem */
    fontSize: number;
    fontFamily: string;
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
        /** As a scale factor relative to other dot sizes (1 is default) */
        middleDotSize: number;
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

export type ThemeType = {
    main: {
        backgroundColor: "#9edbf0"; //May be more complex (some svg or pattern)
        dynamicBackground: true;
        foregroundColor: "#000000"; //Essentially title color
        /** Unit in rem */
        titleSize: number;
        titleFontFamily: string;
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
        titleFontFamily: string;
        /** Sized in rem */
        titleFontSize: number;
        flag: {
            switch: SwitchTheme;
            backgroundColor: string;
            foregroundColor: string;
            fontSize: number;
            fontFamily: string;
            kebabMenu: KebabMenuTheme;
        };
    };
}

/* TODO: SERVER: Replace default theme value with a theme loaded from DB */
// TODO: THEME make a type ThemeType as a theme schema, and use in all props for static checking
//This file is essentially json. Replace this with theme data from db
export const tempTheme: ThemeType = {
    main: {
        /** Unit in rem */
        titleSize: 2,
        titleFontFamily: "sans-serif",
        backgroundColor: "#9edbf0", //May be more complex (some svg or pattern)
        dynamicBackground: true,
        foregroundColor: "#000000", //Essentially title color
    },
    navbar: {
        backgroundColor: "#0e9bcc",
        size: 4.5, //in rem
        //TODO: Theme get horizontal and vertical working
        type: "vertical",
        padding: "",
        menuItem: {
            fontSize: 1,
            fontFamily: "sans-serif",
            backgroundColor: "#40b3db",
            foregroundColor: "#ffffff",
            padding: "",
            //TODO: Theming hover click effects (material design)
            hover: {
                backgroundColor: "",
                foregroundColor: "",
            },
            click: {
                backgroundColor: "",
                foregroundColor: "",
            },
        },
    },
    flagBox: {
        backgroundColor: "#ffffff",
        titleBackgroundColor: "#DDDDDD",
        titleForegroundColor: "#000000",
        titleFontSize: 1.5,
        titleFontFamily: "sans-serif",
        flag: {
            backgroundColor: "rgba(255, 255, 255, 0.0)",
            foregroundColor: "#444444",
            fontSize: 1,
            fontFamily: "sans-serif",
            switch: {
                enabledColor: "#05a1f0",
                disabledColor: "#bbbbbb",
                innerCircleColor: "#eeeeee",
                width: 3,
            },
            kebabMenu: {
                color: "#333333",
                middleDotSize: 1,
                height: 2,
                hover: {
                    backgroundColor: "",
                    foregroundColor: "",
                    middleDotSize: 1.5,
                },
                click: {
                    backgroundColor: "",
                    foregroundColor: "",
                    middleDotSize: 5.5,
                },
                dropDownMenu: {
                    outlineColor: "#0c7091",
                    padding: "",
                    menuItem: {
                        fontSize: 1,
                        fontFamily: "serif",
                        backgroundColor: "#ffffff",
                        foregroundColor: "#000000",
                        padding: "",
                        //TODO: Theming hover click effects (material design)
                        hover: {
                            backgroundColor: "",
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
};

export const ThemeContext = React.createContext(tempTheme);

