import React, { useCallback, useMemo } from 'react';
import { currencies, rtlLangs } from './utils';

function useLocalization(props) {
    const { locale } = props;
    if (!locale || !currencies[locale]) return {};
    const [lang, loc] = locale.split('-');
    
    const formatCurrency = useCallback((value) => {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currencies[locale]
        }).format(value)
    }, [locale]);

    const formatNumber = useCallback((value) => {
        return new Intl.NumberFormat(locale).format(value)
    }, [locale]);

    const flag = useMemo(() => typeof String.fromCodePoint !== 'undefined'
    ? loc.toUpperCase().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : "", [locale]);

    return {
        formatCurrency,
        formatNumber,
        flag,
        isRTL: rtlLangs.includes(lang)
    };
}

export default useLocalization;