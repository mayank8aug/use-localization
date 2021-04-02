# use-localization

> Custom Hook to support localization when locale changes. The hook will accept the locale and written the localization utilities.

[![NPM](https://img.shields.io/npm/v/use-localization.svg)](https://www.npmjs.com/package/use-localization) ![npm](https://img.shields.io/npm/dm/use-localization)

## Install

```bash
npm install --save use-localization
```

## Usage

```jsx
import React from 'react';
import useLocalization from 'use-localization';

function MyLocalizationComponent() {
  const [locale, setLocale] = useState('en-IN');
  const { formatCurrency, flag } = useLocalization({ locale });
  return (
        <div>
            <div>Formatted Currency: {formatCurrency(783984.356)}</div>
            <div>Flag: {flag}</div>
            <button type="button" onclick={() => setLocale(locale === 'en-IN' ? 'en-US' : 'en-IN')}>
                Switch to ${locale === 'en-IN' ? 'US' : 'INDIA'}
            </button>
        </div>
  )
}
```

## License

MIT © [mayank8aug](https://github.com/mayank8aug)