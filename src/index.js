import React, { useCallback, useMemo } from 'react';

const currency = {
    'en-US': 'USD', // US
    'en-IN': 'INR', // INDIA
    'de-DE': 'EUR', // GERMANY
    'ja-JP': 'JPY'  // JAPAN
};

function useLocalization(props) {
    const { locale } = props;
    if (!locale) return {};
    const formatCurrency = useCallback((value) => {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency[locale]
        }).format(value)
    }, [locale]);

    const flag = useMemo(() => typeof String.fromCodePoint !== 'undefined'
    ? locale.split('-')[1].toUpperCase().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : "", [locale]);

    return {
        formatCurrency,
        flag
    };
}

export default useLocalization;