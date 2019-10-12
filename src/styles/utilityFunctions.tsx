import { number } from "prop-types";

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

export function temp(): number {
    return 0;
}
