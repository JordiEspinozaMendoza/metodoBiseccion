import { operatorMap } from './operatorMap';
declare type ValuesOf<T> = T[keyof T];
export declare type TokenNumber = {
    type: 'number';
    value: string;
    position: number;
};
export declare type TokenName = {
    type: 'name';
    value: string;
    position: number;
};
export declare type TokenOperator = {
    type: 'operator';
    value: ValuesOf<typeof operatorMap>;
    symbol: keyof typeof operatorMap;
    position: number;
};
export declare type TokenParensOpen = {
    type: 'parens-open';
    position: number;
};
export declare type TokenParensClose = {
    type: 'parens-close';
    position: number;
};
export declare type TokenMatrixOpen = {
    type: 'matrix-open';
    position: number;
};
export declare type TokenMatrixClose = {
    type: 'matrix-close';
    position: number;
};
export declare type TokenComma = {
    type: 'comma';
    position: number;
};
export declare type Token = TokenNumber | TokenName | TokenOperator | TokenParensOpen | TokenParensClose | TokenMatrixOpen | TokenMatrixClose | TokenComma;
export {};
