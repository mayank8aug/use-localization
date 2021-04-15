"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var utils_1 = require("./utils");
function useLocalization(props) {
    var locale = props.locale;
    var _a = locale.split('-'), lang = _a[0], loc = _a[1];
    var formatCurrency = react_1.useCallback(function (value) {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: utils_1.currencies[locale]
        }).format(value);
    }, [locale]);
    var formatNumber = react_1.useCallback(function (value) {
        return new Intl.NumberFormat(locale).format(value);
    }, [locale]);
    var flag = react_1.useMemo(function () { return typeof String.fromCodePoint !== 'undefined'
        ? loc.toUpperCase().replace(/./g, function (char) { return String.fromCodePoint(char.charCodeAt(0) + 127397); })
        : ""; }, [locale]);
    return {
        formatCurrency: formatCurrency,
        formatNumber: formatNumber,
        flag: flag,
        isRTL: utils_1.rtlLangs.includes(lang)
    };
}
exports.default = useLocalization;
