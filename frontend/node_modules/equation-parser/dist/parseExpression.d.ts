import { EquationNode } from './EquationNode';
import { Token, TokenMatrixClose, TokenParensClose, TokenComma } from './Token';
export declare const precedence: {
    equals: number;
    'less-than': number;
    'greater-than': number;
    'less-than-equals': number;
    'greater-than-equals': number;
    approximates: number;
    plus: number;
    minus: number;
    'plus-minus': number;
    'multiply-implicit': number;
    'multiply-dot': number;
    'multiply-cross': number;
    'divide-fraction': number;
    'divide-inline': number;
    power: number;
    'operator-placeholder': number;
};
export declare const unaryOperatorMap: {
    readonly plus: "positive";
    readonly minus: "negative";
    readonly 'plus-minus': "positive-negative";
    readonly 'operator-placeholder': "operator-unary-placeholder";
};
export declare const rightAssociativeOperators: string[];
declare type Terminator = TokenMatrixClose['type'] | TokenParensClose['type'] | TokenComma['type'] | 'end';
export declare const parseListExpression: (input: string, tokens: Array<Token>, startAt: number) => {
    results: EquationNode[];
    terminator: Terminator;
    last: number;
};
export declare const parseSubexpression: (input: string, tokens: Token[], startAt: number) => {
    result: EquationNode | null;
    terminator: Terminator;
    last: number;
};
export {};
