import { EquationNode } from './EquationNode';
import { EquationParserError } from './EquationParserError';
export declare const parse: (input: string) => EquationNode | EquationParserError;
