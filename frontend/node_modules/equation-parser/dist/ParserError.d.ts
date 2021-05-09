import { EquationParserError } from './EquationParserError';
declare type Error<T extends EquationParserError['errorType'], TError = EquationParserError> = TError extends {
    errorType: T;
} ? TError : never;
declare type Values<T extends EquationParserError['errorType']> = Omit<Error<T>, 'type' | 'equation' | 'start' | 'end' | 'errorType'>;
export declare class ParserError<T extends EquationParserError['errorType']> extends Error {
    start: number;
    end: number;
    type: T;
    values: Values<T>;
    constructor(start: number, end: number, type: T, values: Values<T>);
    getParserError(equation: string): Error<T, {
        type: "parser-error";
        equation: string;
        start: number;
        end: number;
    } & {
        errorType: "numberWhitespace";
    }> | Error<T, {
        type: "parser-error";
        equation: string;
        start: number;
        end: number;
    } & {
        errorType: "invalidNumber";
    }> | Error<T, {
        type: "parser-error";
        equation: string;
        start: number;
        end: number;
    } & {
        errorType: "adjecentOperator";
    }> | Error<T, {
        type: "parser-error";
        equation: string;
        start: number;
        end: number;
    } & {
        errorType: "invalidChar";
        character: string;
    }> | Error<T, {
        type: "parser-error";
        equation: string;
        start: number;
        end: number;
    } & {
        errorType: "invalidUnary";
        symbol: string;
    }> | Error<T, {
        type: "parser-error";
        equation: string;
        start: number;
        end: number;
    } & {
        errorType: "multipleExpressions";
    }> | Error<T, {
        type: "parser-error";
        equation: string;
        start: number;
        end: number;
    } & {
        errorType: "matrixMixedDimension";
        lengthExpected: number;
        lengthReceived: number;
    }> | Error<T, {
        type: "parser-error";
        equation: string;
        start: number;
        end: number;
    } & {
        errorType: "matrixEmpty";
    }> | Error<T, {
        type: "parser-error";
        equation: string;
        start: number;
        end: number;
    } & {
        errorType: "vectorEmpty";
    }> | Error<T, {
        type: "parser-error";
        equation: string;
        start: number;
        end: number;
    } & {
        errorType: "expectedEnd";
    }> | Error<T, {
        type: "parser-error";
        equation: string;
        start: number;
        end: number;
    } & {
        errorType: "expectedSquareBracket";
    }> | Error<T, {
        type: "parser-error";
        equation: string;
        start: number;
        end: number;
    } & {
        errorType: "expectedCloseParens";
    }> | Error<T, {
        type: "parser-error";
        equation: string;
        start: number;
        end: number;
    } & {
        errorType: "operatorLast";
    }> | Error<T, {
        type: "parser-error";
        equation: string;
        start: number;
        end: number;
    } & {
        errorType: "emptyBlock";
    }>;
}
export {};
