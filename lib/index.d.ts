import { LOCALES } from './utils';
declare type TProps = {
    locale: keyof typeof LOCALES;
};
declare function useLocalization(props: TProps): {
    formatCurrency: (value: number) => string;
    formatNumber: (value: number) => string;
    flag: string;
    isRTL: boolean;
};
export default useLocalization;
