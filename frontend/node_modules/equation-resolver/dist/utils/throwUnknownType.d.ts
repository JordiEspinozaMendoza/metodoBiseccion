/**
 * Compiler-error and runtime-error on unhandled type
 *
 * @param typed: Object with type-property
 * @param getMessage: get an error message for runtime errors
 */
export declare function throwUnknownType(typed: never, getMessage: (type: string) => string): never;
