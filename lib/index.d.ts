declare const localeList: readonly string[];
declare type TProps = {
    locale: typeof localeList[number];
};
declare function useLocalization(props: TProps): {
    formatCurrency?: undefined;
    formatNumber?: undefined;
    flag?: undefined;
    isRTL?: undefined;
} | {
    formatCurrency: (value: number) => string;
    formatNumber: (value: number) => string;
    flag: string;
    isRTL: boolean;
};
export default useLocalization;
