"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSign = generateSign;
const CryptoJS = require("crypto-js");
function isObject(o) {
    return typeof o === 'object' && o !== null;
}
function generateSign(params, appSecret) {
    if (isObject(params)) {
        const sortedParams = Object.keys(params)
            .filter((key) => ![undefined, null].includes(params[key]))
            .sort()
            .reduce((result, key) => {
            result[key] = params[key];
            return result;
        }, {});
        const signStr = Object.entries(sortedParams)
            .map(([key, value]) => `${key}${value}`)
            .join('');
        return CryptoJS.SHA1(appSecret + signStr).toString();
    }
}
//# sourceMappingURL=sign.js.map