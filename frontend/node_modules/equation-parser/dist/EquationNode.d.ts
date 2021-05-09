export declare type EquationNodeVariable = {
    type: 'variable';
    name: string;
};
export declare type EquationNodeNumber = {
    type: 'number';
    value: string;
};
export declare type EquationNodeFunction = {
    type: 'function';
    name: string;
    args: EquationNode[];
};
export declare type EquationNodeBlock = {
    type: 'block';
    child: EquationNode;
};
declare type EquationNodeOneValue<Type> = {
    type: Type;
    value: EquationNode;
};
export declare type EquationNodePositive = EquationNodeOneValue<'positive'>;
export declare type EquationNodeNegative = EquationNodeOneValue<'negative'>;
export declare type EquationNodePositiveNegative = EquationNodeOneValue<'positive-negative'>;
declare type EquationNodeTwoValues<Type> = {
    type: Type;
    a: EquationNode;
    b: EquationNode;
};
export declare type EquationNodePlus = EquationNodeTwoValues<'plus'>;
export declare type EquationNodeMinus = EquationNodeTwoValues<'minus'>;
export declare type EquationNodePlusMinus = EquationNodeTwoValues<'plus-minus'>;
export declare type EquationNodeMultiplyImplicit = EquationNodeTwoValues<'multiply-implicit'>;
export declare type EquationNodeMultiplyDot = EquationNodeTwoValues<'multiply-dot'>;
export declare type EquationNodeMultiplyCross = EquationNodeTwoValues<'multiply-cross'>;
export declare type EquationNodeDivideFraction = EquationNodeTwoValues<'divide-fraction'>;
export declare type EquationNodeDivideInline = EquationNodeTwoValues<'divide-inline'>;
export declare type EquationNodePower = EquationNodeTwoValues<'power'>;
export declare type EquationNodeEquals = EquationNodeTwoValues<'equals'>;
export declare type EquationNodeLessThan = EquationNodeTwoValues<'less-than'>;
export declare type EquationNodeGreaterThan = EquationNodeTwoValues<'greater-than'>;
export declare type EquationNodeLessThanEquals = EquationNodeTwoValues<'less-than-equals'>;
export declare type EquationNodeGreaterThanEquals = EquationNodeTwoValues<'greater-than-equals'>;
export declare type EquationNodeApproximates = EquationNodeTwoValues<'approximates'>;
export declare type EquationNodeMatrix = {
    type: 'matrix';
    n: number;
    m: number;
    values: EquationNode[][];
};
export declare type EquationNodeOperandPlaceholder = {
    type: 'operand-placeholder';
};
export declare type EquationNodeFunctionPlaceholder = {
    type: 'function-placeholder';
    args: EquationNode[];
};
export declare type EquationNodeOperatorPlaceholder = EquationNodeTwoValues<'operator-placeholder'>;
export declare type EquationNodeOperatorUnaryPlaceholder = EquationNodeOneValue<'operator-unary-placeholder'>;
export declare type EquationNode = EquationNodeVariable | EquationNodeNumber | EquationNodePositive | EquationNodeNegative | EquationNodePositiveNegative | EquationNodeFunction | EquationNodeBlock | EquationNodePlus | EquationNodeMinus | EquationNodePlusMinus | EquationNodeMultiplyImplicit | EquationNodeMultiplyDot | EquationNodeMultiplyCross | EquationNodeDivideFraction | EquationNodeDivideInline | EquationNodePower | EquationNodeEquals | EquationNodeLessThan | EquationNodeGreaterThan | EquationNodeLessThanEquals | EquationNodeGreaterThanEquals | EquationNodeApproximates | EquationNodeMatrix | EquationNodeOperandPlaceholder | EquationNodeFunctionPlaceholder | EquationNodeOperatorPlaceholder | EquationNodeOperatorUnaryPlaceholder;
export {};
