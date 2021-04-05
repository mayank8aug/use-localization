# use-localization

> Custom Hook to support localization when locale changes. The hook will accept the locale and return the localization utilities.

[![NPM](https://img.shields.io/npm/v/use-localization.svg)](https://www.npmjs.com/package/use-localization) ![npm](https://img.shields.io/npm/dm/use-localization)

## Install

```bash
npm install use-localization
```

## Usage

```jsx
import React, { useState, useMemo } from "react";
import useLocalization from 'use-localization';

function MyLocalizationComponent() {
  const [locale, setLocale] = useState('en-IN');
  const config = useMemo(() => ({ locale }), [locale]);
  const { formatNumber, formatCurrency, flag, isRTL } = useLocalization(config);
  return (
        <div>
            <div>Formatted Currency: {formatCurrency(783984.356)}</div>
            <div>Formatted Number: {formatNumber(783984.356)}</div>
            <div>Flag: {flag}</div>
            {isRTL && <div>{`${isRTL}`}</div>}
            <button type="button" onClick={() => setLocale(locale === 'en-IN' ? 'en-US' : 'en-IN')}>
                Switch to {locale === 'en-IN' ? 'US' : 'INDIA'}
            </button>
        </div>
  )
}
```

## Examples

To play around with the hook, try these interactive sample apps

[CodeSandbox](https://codesandbox.io/s/use-localization-4juus)


## Parameters

| Param | Type | Optional | Default | Description |
| --- | :---: | :---: | :---: | --- |
| config | Object | No | - | Must have the locale property present |


## Returns

An object containing below properties

| Prop | Return Type | Description |
| --- | :---: | :---: | :---: | --- |
| formatCurrency | Function | Takes any number as an argument and returns the formatted localized value with currency |
| formatNumber | Function | Takes any number as an argument and returns the formatted localized value |
| flag | Text | Text representation of the country flag based on the locale. For example, 🇮🇳 for en-IN |
| isRTL | Boolean | True, if the passed locale is RTL. For example, Arabic, Hebrew, etc. |


## Supported Locales

```bash
sq-AL, ar-DZ, ar-BH, ar-EG, ar-IQ, ar-JO, ar-KW, ar-LB, ar-LY, ar-MA, ar-OM, ar-QA, 
ar-SA, ar-SD, ar-SY, ar-TN, ar-AE, ar-YE, be-BY, bg-BG, ca-ES, zh-CN, zh-HK, zh-SG, 
zh-TW, hr-HR, cs-CZ, da-DK, nl-BE, nl-NL, en-AU, en-CA, en-IN, en-IE, en-MT, en-NZ, 
en-PH, en-SG, en-ZA, en-GB, en-US, et-EE, fi-FI, fr-BE, fr-CA, fr-FR, fr-LU, fr-CH, 
de-AT, de-DE, de-LU, de-CH, el-CY, el-GR, iw-IL, hi-IN, hu-HU, is-IS, in-ID, ga-IE, 
it-IT, it-CH, ja-JP, ko-KR, lv-LV, lt-LT, mk-MK, ms-MY, mt-MT, no-NO, pl-PL, pt-BR, 
pt-PT, ro-RO, ru-RU, sr-BA, sr-ME, sr-CS, sr-RS, sk-SK, sl-SI, es-AR, es-BO, es-CL, 
es-CO, es-CR, es-DO, es-EC, es-SV, es-GT, es-HN, es-MX, es-NI, es-PA, es-PY, es-PE, 
es-PR, es-ES, es-US, es-UY, es-VE, sv-SE, th-TH, tr-TR, uk-UA, vi-VN
```

## License

MIT © [mayank8aug](https://github.com/mayank8aug)