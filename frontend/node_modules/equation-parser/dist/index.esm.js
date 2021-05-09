function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var ParserError = /*#__PURE__*/function (_Error) {
  _inherits(ParserError, _Error);

  var _super = _createSuper(ParserError);

  function ParserError(start, end, type, values) {
    var _this;

    _classCallCheck(this, ParserError);

    _this = _super.call(this, "Internal ".concat(type, " parse error"));

    _defineProperty(_assertThisInitialized(_this), "start", void 0);

    _defineProperty(_assertThisInitialized(_this), "end", void 0);

    _defineProperty(_assertThisInitialized(_this), "type", void 0);

    _defineProperty(_assertThisInitialized(_this), "values", void 0);

    _this.type = type;
    _this.start = start;
    _this.end = end;
    _this.values = values;
    return _this;
  }

  _createClass(ParserError, [{
    key: "getParserError",
    value: function getParserError(equation) {
      return _objectSpread2({
        type: 'parser-error',
        errorType: this.type,
        start: this.start,
        end: this.end,
        equation: equation
      }, this.values);
    }
  }]);

  return ParserError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

// Operators type map
var operatorMap = {
  '=': 'equals',
  '<': 'less-than',
  '>': 'greater-than',
  '≤': 'less-than-equals',
  '≥': 'greater-than-equals',
  '≈': 'approximates',
  '+': 'plus',
  '-': 'minus',
  '−': 'minus',
  // Minus Sign (U+2212)
  '±': 'plus-minus',
  ' ': 'multiply-implicit',
  '*': 'multiply-dot',
  '∗': 'multiply-dot',
  // Asterisk Operator (U+2217)
  '⋅': 'multiply-dot',
  // Dot Operator (U+22C5)
  '×': 'multiply-cross',
  // Multiplication Sign (U+00D7)
  '✕': 'multiply-cross',
  // Multiplication X (U+2715)
  '/': 'divide-fraction',
  '∕': 'divide-fraction',
  // Division Slash (U+2215)
  '÷': 'divide-inline',
  // Division Sign (U+00F7)
  '^': 'power',
  '?': 'operator-placeholder'
};

var isWhitespace = /\s/;
var isCharNumber = /[0-9.]/; // Leading numbers doesn't matter, since number check is before name check

var isCharName = /[0-9A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u01BF\u0391-\u03c9'"%‰°_∞]/;
var isValidNumber = /^([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/;

function endOfPattern(input, pattern, start) {
  var end = start;

  do {
    end++;
  } while (end < input.length && pattern.test(input[end]));

  return end;
}

var tokenize = function tokenize(input) {
  var result = [];
  var lastType = null;

  for (var i = 0; i < input.length; i++) {
    var current = input[i];

    if (isWhitespace.test(current)) {
      continue;
    } else if (isCharNumber.test(current)) {
      var end = endOfPattern(input, isCharNumber, i);

      if (lastType === 'number') {
        throw new ParserError(result[result.length - 1].position, end - 1, 'numberWhitespace', {});
      }

      if (lastType === 'name' || lastType === 'parens-close' || lastType === 'matrix-close') {
        result.push({
          type: 'operator',
          value: 'multiply-implicit',
          symbol: ' ',
          position: i
        });
      }

      var value = input.substring(i, end);

      if (!isValidNumber.test(value)) {
        throw new ParserError(i, end - 1, 'invalidNumber', {});
      }

      result.push({
        type: 'number',
        value: value,
        position: i
      });
      i = end - 1;
    } else if (isCharName.test(current)) {
      if (lastType === 'number' || lastType === 'name' || lastType === 'parens-close' || lastType === 'matrix-close') {
        result.push({
          type: 'operator',
          value: 'multiply-implicit',
          symbol: ' ',
          position: i
        });
      }

      var _end = endOfPattern(input, isCharName, i);

      result.push({
        type: 'name',
        value: input.substring(i, _end),
        position: i
      });
      i = _end - 1;
    } else if (current in operatorMap) {
      if (lastType === 'operator') {
        throw new ParserError(i - 1, i, 'adjecentOperator', {});
      }

      result.push({
        type: 'operator',
        value: operatorMap[current],
        symbol: current,
        position: i
      });
    } else if (current === '(') {
      if (lastType === 'number' || lastType === 'parens-close' || lastType === 'matrix-close') {
        result.push({
          type: 'operator',
          value: 'multiply-implicit',
          symbol: ' ',
          position: i
        });
      }

      result.push({
        type: 'parens-open',
        position: i
      });
    } else if (current === ')') {
      result.push({
        type: 'parens-close',
        position: i
      });
    } else if (current === '[') {
      if (lastType === 'number' || lastType === 'name' || lastType === 'parens-close') {
        result.push({
          type: 'operator',
          value: 'multiply-implicit',
          symbol: ' ',
          position: i
        });
      }

      result.push({
        type: 'matrix-open',
        position: i
      });
    } else if (current === ']') {
      result.push({
        type: 'matrix-close',
        position: i
      });
    } else if (current === ',') {
      result.push({
        type: 'comma',
        position: i
      });
    } else {
      throw new ParserError(i, i, 'invalidChar', {
        character: current
      });
    }

    lastType = result[result.length - 1].type;
  }

  return result;
};

/**
 * Compiler-error and runtime-error on unhandled type
 *
 * @param typed: Object with type-property
 * @param getMessage: get an error message for runtime errors
 */
function throwUnknownType(typed, getMessage) {
  throw new Error(getMessage(typed && typed.type || 'unknown'));
}

var precedence = {
  'equals': 1,
  'less-than': 1,
  'greater-than': 1,
  'less-than-equals': 1,
  'greater-than-equals': 1,
  'approximates': 1,
  'plus': 2,
  'minus': 2,
  'plus-minus': 2,
  'multiply-implicit': 3,
  'multiply-dot': 3,
  'multiply-cross': 3,
  'divide-fraction': 3,
  'divide-inline': 3,
  'power': 4,
  'operator-placeholder': 5
};
var unaryOperatorMap = {
  'plus': 'positive',
  'minus': 'negative',
  'plus-minus': 'positive-negative',
  'operator-placeholder': 'operator-unary-placeholder'
};
var rightAssociativeOperators = ['power'];
var parseListExpression = function parseListExpression(input, tokens, startAt) {
  var results = [];
  var subexpression;
  var i = startAt;

  do {
    subexpression = parseSubexpression(input, tokens, i);

    if (subexpression.result) {
      results.push(subexpression.result);
    }

    i = subexpression.last + 1;
  } while (subexpression.terminator === 'comma');

  return {
    results: results,
    terminator: subexpression.terminator,
    last: subexpression.last
  };
};
var parseSubexpression = function parseSubexpression(input, tokens, startAt) {
  var output = [];
  var operators = [];

  var getTokenType = function getTokenType(index) {
    return tokens[index] ? tokens[index].type : undefined;
  };

  var getTokenPosition = function getTokenPosition(index) {
    return tokens[index] && tokens[index].position;
  };

  var addOperator = function addOperator(operator) {
    var b = output.pop();
    var a = output.pop();
    var unaryType = unaryOperatorMap[operator.value];

    if (a && b) {
      output.push({
        type: operator.value,
        a: a,
        b: b
      });
    } else if (unaryType && b) {
      output.push({
        type: unaryType,
        value: b
      });
    } else if (b) {
      throw new ParserError(operator.position, operator.position, 'invalidUnary', {
        symbol: operator.symbol
      });
    } else {
      // No operands. This should never happen, all cases should be caught by operatorLast instead
      throw new Error('Unexpected parser state, operator with no operands');
    }
  };

  var prepareResult = function prepareResult(terminator, last) {
    if (tokens[last - 1].type === 'operator') {
      throw new ParserError(getTokenPosition(last - 1), getTokenPosition(last - 1), 'operatorLast', {});
    }

    while (operators.length > 0) {
      addOperator(operators.pop());
    }

    if (output.length > 1) {
      throw new ParserError(getTokenPosition(startAt), getTokenPosition(last - 1), 'multipleExpressions', {});
    }

    if (output.length === 0) {
      return {
        result: null,
        terminator: terminator,
        last: last
      };
    }

    return {
      result: output[0],
      terminator: terminator,
      last: last
    };
  };

  for (var i = startAt; i < tokens.length; i++) {
    var token = tokens[i];

    switch (token.type) {
      case 'number':
        output.push({
          type: 'number',
          value: token.value
        });
        break;

      case 'name':
        if (getTokenType(i + 1) === 'parens-open') {
          // Function
          var _parseListExpression = parseListExpression(input, tokens, i + 2),
              results = _parseListExpression.results,
              last = _parseListExpression.last,
              terminator = _parseListExpression.terminator;

          if (terminator !== 'parens-close') {
            throw new ParserError(getTokenPosition(i + 1), getTokenPosition(last - 1), 'expectedCloseParens', {});
          }

          if (token.value === '_') {
            output.push({
              type: 'function-placeholder',
              args: results
            });
          } else {
            output.push({
              type: 'function',
              name: token.value,
              args: results
            });
          }

          i = last;
        } else if (token.value === '_') {
          output.push({
            type: 'operand-placeholder'
          });
        } else {
          // Variable
          output.push({
            type: 'variable',
            name: token.value
          });
        }

        break;

      case 'matrix-open':
        if (getTokenType(i + 1) === 'matrix-open') {
          // Parsing matrix
          // [[a,b,c][d,e,f][g,h,i]]
          var values = []; // Extract all nested vectors

          var current = i + 1;

          while (getTokenType(current) === 'matrix-open') {
            var _parseListExpression2 = parseListExpression(input, tokens, current + 1),
                _results = _parseListExpression2.results,
                _last = _parseListExpression2.last,
                _terminator = _parseListExpression2.terminator;

            if (_terminator !== 'matrix-close') {
              throw new ParserError(getTokenPosition(current), getTokenPosition(_last - 1), 'expectedSquareBracket', {});
            }

            if (values.length > 0 && values[0].length !== _results.length) {
              throw new ParserError(getTokenPosition(current), getTokenPosition(_last), 'matrixMixedDimension', {
                lengthExpected: values[0].length,
                lengthReceived: _results.length
              });
            }

            if (_results.length === 0) {
              throw new ParserError(getTokenPosition(current), getTokenPosition(_last), 'matrixEmpty', {});
            }

            values.push(_results);
            current = _last + 1;
          } // The last vector-component should be followed by a closing bracket


          if (getTokenType(current) !== 'matrix-close') {
            throw new ParserError(getTokenPosition(i), getTokenPosition(current - 1), 'expectedSquareBracket', {});
          }

          output.push({
            type: 'matrix',
            n: values[0].length,
            m: values.length,
            values: values
          }); // Advance parsing past closing bracket

          i = current;
        } else {
          // Parsing single vector
          // [a,b,c]
          var _parseListExpression3 = parseListExpression(input, tokens, i + 1),
              _results2 = _parseListExpression3.results,
              _last2 = _parseListExpression3.last,
              _terminator2 = _parseListExpression3.terminator;

          if (_terminator2 !== 'matrix-close') {
            throw new ParserError(getTokenPosition(i), getTokenPosition(_last2 - 1), 'expectedSquareBracket', {});
          }

          if (_results2.length === 0) {
            throw new ParserError(getTokenPosition(i), getTokenPosition(_last2), 'vectorEmpty', {});
          }

          output.push({
            type: 'matrix',
            n: 1,
            m: _results2.length,
            values: _results2.map(function (value) {
              return [value];
            })
          });
          i = _last2;
        }

        break;

      case 'parens-open':
        {
          var _parseSubexpression = parseSubexpression(input, tokens, i + 1),
              result = _parseSubexpression.result,
              _last3 = _parseSubexpression.last,
              _terminator3 = _parseSubexpression.terminator;

          if (_terminator3 !== 'parens-close') {
            throw new ParserError(getTokenPosition(i), getTokenPosition(_last3 - 1), 'expectedCloseParens', {});
          }

          if (result === null) {
            throw new ParserError(getTokenPosition(i), getTokenPosition(_last3), 'emptyBlock', {});
          }

          output.push({
            type: 'block',
            child: result
          });
          i = _last3;
          break;
        }

      case 'operator':
        while (operators.length > 0) {
          var other = operators[operators.length - 1];
          var tokenPrecedence = precedence[token.value];
          var otherPrecedence = precedence[other.value];

          if (otherPrecedence < tokenPrecedence || rightAssociativeOperators.includes(other.value) && otherPrecedence === tokenPrecedence) {
            break;
          }

          operators.pop();
          addOperator(other);
        }

        operators.push(token);
        break;

      case 'comma':
      case 'parens-close':
      case 'matrix-close':
        return prepareResult(token.type, i);

      default:
        throwUnknownType(token, function (type) {
          return "Equation render: cannot resolve type \"".concat(type, "\"");
        });
    }
  }

  return prepareResult('end', tokens.length);
};

var parse = function parse(input) {
  try {
    var tokens = tokenize(input);

    var _parseSubexpression = parseSubexpression(input, tokens, 0),
        result = _parseSubexpression.result,
        last = _parseSubexpression.last,
        terminator = _parseSubexpression.terminator;

    if (terminator !== 'end') {
      throw new ParserError(tokens[last].position, tokens[last].position, 'expectedEnd', {});
    }

    if (result === null) {
      throw new ParserError(0, 0, 'expectedEnd', {});
    }

    return result;
  } catch (error) {
    if (error instanceof ParserError) {
      return error.getParserError(input);
    } else {
      throw error;
    }
  }
};

var renderTree = function renderTree(tree) {
  if (tree.type === 'parser-error') {
    return "".concat(tree.errorType, " error\n  ").concat(tree.equation, "\n  ").concat(''.padStart(tree.start, ' ').padEnd(tree.end + 1, '^'));
  }

  return pushTree(tree).join('\n');
};
var operatorMap$1 = {
  'equals': '=',
  'less-than': '<',
  'greater-than': '>',
  'less-than-equals': '≤',
  'greater-than-equals': '≥',
  'approximates': '≈',
  'plus': '+',
  'minus': '-',
  'plus-minus': '±',
  'multiply-implicit': '*',
  'multiply-dot': '*',
  'multiply-cross': '×',
  'divide-fraction': '/',
  'divide-inline': '÷',
  'power': '^',
  'operator-placeholder': '?'
};
var unaryOperatorMap$1 = {
  'positive': '+',
  'negative': '-',
  'positive-negative': '±',
  'operator-unary-placeholder': '?'
};

function pushTree(tree) {
  var buffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var indent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var indentType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'initial';
  var ownIndent = indent;
  var descendantIndent = indent;

  switch (indentType) {
    case 'regular':
      ownIndent += '├─ ';
      descendantIndent += '│  ';
      break;

    case 'last':
      ownIndent += '└─ ';
      descendantIndent += '   ';
      break;
  }

  switch (tree.type) {
    case 'number':
      buffer.push(ownIndent + tree.value);
      break;

    case 'variable':
      buffer.push("".concat(ownIndent, "\"").concat(tree.name, "\""));
      break;

    case 'positive':
    case 'negative':
    case 'positive-negative':
    case 'operator-unary-placeholder':
      buffer.push(ownIndent + unaryOperatorMap$1[tree.type]);
      pushTree(tree.value, buffer, descendantIndent, 'last');
      break;

    case 'block':
      buffer.push("".concat(ownIndent, "()"));
      pushTree(tree.child, buffer, descendantIndent, 'last');
      break;

    case 'equals':
    case 'less-than':
    case 'greater-than':
    case 'less-than-equals':
    case 'greater-than-equals':
    case 'approximates':
    case 'plus':
    case 'minus':
    case 'plus-minus':
    case 'multiply-implicit':
    case 'multiply-dot':
    case 'multiply-cross':
    case 'divide-fraction':
    case 'divide-inline':
    case 'power':
    case 'operator-placeholder':
      buffer.push(ownIndent + operatorMap$1[tree.type]);
      pushTree(tree.a, buffer, descendantIndent, 'regular');
      pushTree(tree.b, buffer, descendantIndent, 'last');
      break;

    case 'function':
      buffer.push("".concat(ownIndent).concat(tree.name, "()"));
      tree.args.forEach(function (arg, idx) {
        pushTree(arg, buffer, descendantIndent, idx < tree.args.length - 1 ? 'regular' : 'last');
      });
      break;

    case 'function-placeholder':
      buffer.push("".concat(ownIndent, "<placeholder>()"));
      tree.args.forEach(function (arg, idx) {
        pushTree(arg, buffer, descendantIndent, idx < tree.args.length - 1 ? 'regular' : 'last');
      });
      break;

    case 'matrix':
      if (tree.n === 1) {
        buffer.push("".concat(ownIndent, "v ").concat(tree.m));
        tree.values.forEach(function (row, idx) {
          pushTree(row[0], buffer, descendantIndent, idx < tree.m - 1 ? 'regular' : 'last');
        });
      } else {
        buffer.push("".concat(ownIndent, "m ").concat(tree.m, "x").concat(tree.n));
        tree.values.forEach(function (row, rowIdx) {
          var rowIndent = descendantIndent + (rowIdx < tree.m - 1 ? '│  ' : '   ');
          row.forEach(function (cell, cellIdx) {
            if (cellIdx === 0) {
              if (rowIdx < tree.m - 1) {
                pushTree(cell, buffer, descendantIndent + '├──┬─ ', 'initial');
              } else {
                pushTree(cell, buffer, descendantIndent + '└──┬─ ', 'initial');
              }
            } else {
              pushTree(cell, buffer, rowIndent, cellIdx < tree.n - 1 ? 'regular' : 'last');
            }
          });
        });
      }

      break;

    case 'operand-placeholder':
      buffer.push("".concat(ownIndent, "<placeholder>"));
      break;

    default:
      throwUnknownType(tree, function (type) {
        return "Equation tree to string: cannot resolve type \"".concat(type, "\"");
      });
  }

  return buffer;
}

var stringify = function stringify(tree) {
  if (tree.type === 'parser-error') {
    return tree.equation;
  }

  var buffer = [];
  stringifyTree(tree, buffer);
  return buffer.join('');
};
var operatorMap$2 = {
  'equals': ' = ',
  'less-than': ' < ',
  'greater-than': ' > ',
  'less-than-equals': ' ≤ ',
  'greater-than-equals': ' ≥ ',
  'approximates': ' ≈ ',
  'plus': ' + ',
  'minus': ' - ',
  'plus-minus': ' ± ',
  'multiply-implicit': ' ',
  'multiply-dot': ' * ',
  'multiply-cross': ' × ',
  'divide-fraction': ' / ',
  'divide-inline': ' ÷ ',
  'power': ' ^ ',
  'operator-placeholder': ' ? '
};
var unaryOperatorMap$2 = {
  'positive': '+',
  'negative': '-',
  'positive-negative': '±',
  'operator-unary-placeholder': '?'
};

function stringifyTree(tree, buffer) {
  switch (tree.type) {
    case 'number':
      buffer.push(tree.value.toString());
      break;

    case 'variable':
      buffer.push(tree.name);
      break;

    case 'positive':
    case 'negative':
    case 'positive-negative':
    case 'operator-unary-placeholder':
      buffer.push(unaryOperatorMap$2[tree.type]);
      stringifyTree(tree.value, buffer);
      break;

    case 'block':
      buffer.push('(');
      stringifyTree(tree.child, buffer);
      buffer.push(')');
      break;

    case 'plus':
    case 'minus':
    case 'plus-minus':
    case 'divide-fraction':
    case 'divide-inline':
    case 'multiply-implicit':
    case 'multiply-dot':
    case 'multiply-cross':
    case 'power':
    case 'equals':
    case 'less-than':
    case 'greater-than':
    case 'less-than-equals':
    case 'greater-than-equals':
    case 'approximates':
    case 'operator-placeholder':
      stringifyTree(tree.a, buffer);
      buffer.push(operatorMap$2[tree.type]);
      stringifyTree(tree.b, buffer);
      break;

    case 'function':
    case 'function-placeholder':
      buffer.push(tree.type === 'function' ? tree.name : '_');
      buffer.push('(');
      tree.args.forEach(function (arg, idx) {
        if (idx > 0) {
          buffer.push(',');
        }

        stringifyTree(arg, buffer);
      });
      buffer.push(')');
      break;

    case 'matrix':
      buffer.push('[');
      tree.values.forEach(function (row, rowIdx) {
        if (tree.n > 1) {
          buffer.push('[');
        } else if (rowIdx > 0) {
          buffer.push(',');
        }

        row.forEach(function (cell, cellIdx) {
          if (cellIdx > 0) {
            buffer.push(',');
          }

          stringifyTree(cell, buffer);
        });

        if (tree.n > 1) {
          buffer.push(']');
        }
      });
      buffer.push(']');
      break;

    case 'operand-placeholder':
      buffer.push('_');
      break;

    default:
      throwUnknownType(tree, function (type) {
        return "Equation tree to string: cannot resolve type \"".concat(type, "\"");
      });
  }
}

export { parse, renderTree, stringify };
