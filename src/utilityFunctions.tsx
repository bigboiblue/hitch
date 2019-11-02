
/**
 * This function cannot process modulus due to % percentage being a potential css unit
 */
export function parseCssCalc(calc: string, defaultValue: string): string {
    if (!calc.includes("undefined")) {
        const mathStringOperation = calc.replace(/[^/*\-+.()0-9 ]/g, "");

        /**
         * Yes, eval is dangerous, but the string has been sanitised.
         * Only numbers, whitespace, and + - / * () . remain in the string (No A-Z).
         */
        const result = eval(mathStringOperation); // eslint-disable-line
        const unit = calc.replace(/[/*\-+.()0-9 ]/g, "");

        return `${result}${unit}`;
    }
    return defaultValue;
}

/**
 * Creates a HTMLElement with given tag name (arg1) and id (arg2), then appends
 * this to the parent provided (arg3).
 * Returns: The HTMLElement which was created and appended
 */
export function createElementWithIdAndAppend(tagName: string, id: string, parent: HTMLElement):
    HTMLElement {
    if (!document.getElementById(id)) {
        //createDropDownMenuContainer();
        const element = document.createElement(tagName);
        element.id = id;
        parent.appendChild(element);
    }
    return document.getElementById(id);
}

/**
 * Returns the midpoint of the passed DOM node (HTMLElement). The midpoint
 * returned is in the format (similar to css) {left: number; top: number} and
 * is relative to the entire window (global position)
 */
export function getMidPoint(element: HTMLElement): { left: number; top: number } {
    const {
        left, top, width, height,
    } = element.getBoundingClientRect();
    const midPoint = {
        left: left + (width / 2),
        top: top + (height / 2),
    };
    return midPoint;
}


export function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
