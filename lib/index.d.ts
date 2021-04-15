declare type TProps = {
    locale: string;
};
declare function useLocalization(props: TProps): {
    formatCurrency: (value: number) => string;
    formatNumber: (value: number) => string;
    flag: string;
    isRTL: boolean;
};
export default useLocalization;
