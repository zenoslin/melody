/* * Copyright © 2019-2020 zenoslin<zenoslin@outlook.com> * Released under the MIT License. */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
	typeof define === 'function' && define.amd ? define(['vue'], factory) :
	(global = global || self, global.index = factory(global.Vue));
}(this, (function (Vue) { 'use strict';

	Vue = Vue && Object.prototype.hasOwnProperty.call(Vue, 'default') ? Vue['default'] : Vue;

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	function getCjsExportFromNamespace (n) {
		return n && n['default'] || n;
	}

	var _global = createCommonjsModule(function (module) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
	});

	var _core = createCommonjsModule(function (module) {
	var core = module.exports = { version: '2.6.11' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
	});
	var _core_1 = _core.version;

	var _isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var _anObject = function (it) {
	  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

	var _fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var _descriptors = !_fails(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});

	var document$1 = _global.document;
	// typeof document.createElement is 'object' in old IE
	var is = _isObject(document$1) && _isObject(document$1.createElement);
	var _domCreate = function (it) {
	  return is ? document$1.createElement(it) : {};
	};

	var _ie8DomDefine = !_descriptors && !_fails(function () {
	  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
	});

	// 7.1.1 ToPrimitive(input [, PreferredType])

	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var _toPrimitive = function (it, S) {
	  if (!_isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var dP = Object.defineProperty;

	var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  _anObject(O);
	  P = _toPrimitive(P, true);
	  _anObject(Attributes);
	  if (_ie8DomDefine) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var _objectDp = {
		f: f
	};

	var _propertyDesc = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var _hide = _descriptors ? function (object, key, value) {
	  return _objectDp.f(object, key, _propertyDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var hasOwnProperty = {}.hasOwnProperty;
	var _has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var id = 0;
	var px = Math.random();
	var _uid = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

	var _shared = createCommonjsModule(function (module) {
	var SHARED = '__core-js_shared__';
	var store = _global[SHARED] || (_global[SHARED] = {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: _core.version,
	  mode:  'global',
	  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
	});
	});

	var _functionToString = _shared('native-function-to-string', Function.toString);

	var _redefine = createCommonjsModule(function (module) {
	var SRC = _uid('src');

	var TO_STRING = 'toString';
	var TPL = ('' + _functionToString).split(TO_STRING);

	_core.inspectSource = function (it) {
	  return _functionToString.call(it);
	};

	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === _global) {
	    O[key] = val;
	  } else if (!safe) {
	    delete O[key];
	    _hide(O, key, val);
	  } else if (O[key]) {
	    O[key] = val;
	  } else {
	    _hide(O, key, val);
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || _functionToString.call(this);
	});
	});

	var _aFunction = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

	// optional / simple context binding

	var _ctx = function (fn, that, length) {
	  _aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
	  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
	  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
	  var key, own, out, exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
	    // extend global
	    if (target) _redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) _hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	_global.core = _core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	var _export = $export;

	var toString = {}.toString;

	var _cof = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	// fallback for non-array-like ES3 and non-enumerable old V8 strings

	// eslint-disable-next-line no-prototype-builtins
	var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return _cof(it) == 'String' ? it.split('') : Object(it);
	};

	// 7.2.1 RequireObjectCoercible(argument)
	var _defined = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

	// to indexed object, toObject with fallback for non-array-like ES3 strings


	var _toIobject = function (it) {
	  return _iobject(_defined(it));
	};

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	var _toInteger = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

	// 7.1.15 ToLength

	var min = Math.min;
	var _toLength = function (it) {
	  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

	var max = Math.max;
	var min$1 = Math.min;
	var _toAbsoluteIndex = function (index, length) {
	  index = _toInteger(index);
	  return index < 0 ? max(index + length, 0) : min$1(index, length);
	};

	// false -> Array#indexOf
	// true  -> Array#includes



	var _arrayIncludes = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = _toIobject($this);
	    var length = _toLength(O.length);
	    var index = _toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var shared = _shared('keys');

	var _sharedKey = function (key) {
	  return shared[key] || (shared[key] = _uid(key));
	};

	var arrayIndexOf = _arrayIncludes(false);
	var IE_PROTO = _sharedKey('IE_PROTO');

	var _objectKeysInternal = function (object, names) {
	  var O = _toIobject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (_has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE 8- don't enum bug keys
	var _enumBugKeys = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

	var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

	var f$1 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return _objectKeysInternal(O, hiddenKeys);
	};

	var _objectGopn = {
		f: f$1
	};

	var f$2 = Object.getOwnPropertySymbols;

	var _objectGops = {
		f: f$2
	};

	// all object keys, includes non-enumerable and symbols



	var Reflect = _global.Reflect;
	var _ownKeys = Reflect && Reflect.ownKeys || function ownKeys(it) {
	  var keys = _objectGopn.f(_anObject(it));
	  var getSymbols = _objectGops.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

	var f$3 = {}.propertyIsEnumerable;

	var _objectPie = {
		f: f$3
	};

	var gOPD = Object.getOwnPropertyDescriptor;

	var f$4 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = _toIobject(O);
	  P = _toPrimitive(P, true);
	  if (_ie8DomDefine) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
	};

	var _objectGopd = {
		f: f$4
	};

	var _createProperty = function (object, index, value) {
	  if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
	  else object[index] = value;
	};

	// https://github.com/tc39/proposal-object-getownpropertydescriptors






	_export(_export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = _toIobject(object);
	    var getDesc = _objectGopd.f;
	    var keys = _ownKeys(O);
	    var result = {};
	    var i = 0;
	    var key, desc;
	    while (keys.length > i) {
	      desc = getDesc(O, key = keys[i++]);
	      if (desc !== undefined) _createProperty(result, key, desc);
	    }
	    return result;
	  }
	});

	var _wks = createCommonjsModule(function (module) {
	var store = _shared('wks');

	var Symbol = _global.Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
	};

	$exports.store = store;
	});

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = _wks('unscopables');
	var ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});
	var _addToUnscopables = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};

	var _iterStep = function (done, value) {
	  return { value: value, done: !!done };
	};

	var _iterators = {};

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)



	var _objectKeys = Object.keys || function keys(O) {
	  return _objectKeysInternal(O, _enumBugKeys);
	};

	var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  _anObject(O);
	  var keys = _objectKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

	var document$2 = _global.document;
	var _html = document$2 && document$2.documentElement;

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



	var IE_PROTO$1 = _sharedKey('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE$1 = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = _domCreate('iframe');
	  var i = _enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  _html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
	  return createDict();
	};

	var _objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE$1] = _anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE$1] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : _objectDps(result, Properties);
	};

	var def = _objectDp.f;

	var TAG = _wks('toStringTag');

	var _setToStringTag = function (it, tag, stat) {
	  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

	var _iterCreate = function (Constructor, NAME, next) {
	  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
	  _setToStringTag(Constructor, NAME + ' Iterator');
	};

	// 7.1.13 ToObject(argument)

	var _toObject = function (it) {
	  return Object(_defined(it));
	};

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


	var IE_PROTO$2 = _sharedKey('IE_PROTO');
	var ObjectProto = Object.prototype;

	var _objectGpo = Object.getPrototypeOf || function (O) {
	  O = _toObject(O);
	  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

	var ITERATOR = _wks('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  _iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      _setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if ( typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ( (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    _hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  _iterators[NAME] = $default;
	  _iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) _redefine(proto, key, methods[key]);
	    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
	  this._t = _toIobject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return _iterStep(1);
	  }
	  if (kind == 'keys') return _iterStep(0, index);
	  if (kind == 'values') return _iterStep(0, O[index]);
	  return _iterStep(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	_iterators.Arguments = _iterators.Array;

	_addToUnscopables('keys');
	_addToUnscopables('values');
	_addToUnscopables('entries');

	var ITERATOR$1 = _wks('iterator');
	var TO_STRING_TAG = _wks('toStringTag');
	var ArrayValues = _iterators.Array;

	var DOMIterables = {
	  CSSRuleList: true, // TODO: Not spec compliant, should be false.
	  CSSStyleDeclaration: false,
	  CSSValueList: false,
	  ClientRectList: false,
	  DOMRectList: false,
	  DOMStringList: false,
	  DOMTokenList: true,
	  DataTransferItemList: false,
	  FileList: false,
	  HTMLAllCollection: false,
	  HTMLCollection: false,
	  HTMLFormElement: false,
	  HTMLSelectElement: false,
	  MediaList: true, // TODO: Not spec compliant, should be false.
	  MimeTypeArray: false,
	  NamedNodeMap: false,
	  NodeList: true,
	  PaintRequestList: false,
	  Plugin: false,
	  PluginArray: false,
	  SVGLengthList: false,
	  SVGNumberList: false,
	  SVGPathSegList: false,
	  SVGPointList: false,
	  SVGStringList: false,
	  SVGTransformList: false,
	  SourceBufferList: false,
	  StyleSheetList: true, // TODO: Not spec compliant, should be false.
	  TextTrackCueList: false,
	  TextTrackList: false,
	  TouchList: false
	};

	for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
	  var NAME = collections[i];
	  var explicit = DOMIterables[NAME];
	  var Collection = _global[NAME];
	  var proto = Collection && Collection.prototype;
	  var key;
	  if (proto) {
	    if (!proto[ITERATOR$1]) _hide(proto, ITERATOR$1, ArrayValues);
	    if (!proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
	    _iterators[NAME] = ArrayValues;
	    if (explicit) for (key in es6_array_iterator) if (!proto[key]) _redefine(proto, key, es6_array_iterator[key], true);
	  }
	}

	// most Object methods by ES6 should accept primitives



	var _objectSap = function (KEY, exec) {
	  var fn = (_core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
	};

	// 19.1.2.14 Object.keys(O)



	_objectSap('keys', function () {
	  return function keys(it) {
	    return _objectKeys(_toObject(it));
	  };
	});

	var _global$1 = createCommonjsModule(function (module) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
	});

	var _core$1 = createCommonjsModule(function (module) {
	var core = module.exports = { version: '2.6.11' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
	});
	var _core_1$1 = _core$1.version;

	var _aFunction$1 = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

	// optional / simple context binding

	var _ctx$1 = function (fn, that, length) {
	  _aFunction$1(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var _isObject$1 = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var _anObject$1 = function (it) {
	  if (!_isObject$1(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

	var _fails$1 = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var _descriptors$1 = !_fails$1(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});

	var document$3 = _global$1.document;
	// typeof document.createElement is 'object' in old IE
	var is$1 = _isObject$1(document$3) && _isObject$1(document$3.createElement);
	var _domCreate$1 = function (it) {
	  return is$1 ? document$3.createElement(it) : {};
	};

	var _ie8DomDefine$1 = !_descriptors$1 && !_fails$1(function () {
	  return Object.defineProperty(_domCreate$1('div'), 'a', { get: function () { return 7; } }).a != 7;
	});

	// 7.1.1 ToPrimitive(input [, PreferredType])

	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var _toPrimitive$1 = function (it, S) {
	  if (!_isObject$1(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !_isObject$1(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !_isObject$1(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !_isObject$1(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var dP$1 = Object.defineProperty;

	var f$5 = _descriptors$1 ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  _anObject$1(O);
	  P = _toPrimitive$1(P, true);
	  _anObject$1(Attributes);
	  if (_ie8DomDefine$1) try {
	    return dP$1(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var _objectDp$1 = {
		f: f$5
	};

	var _propertyDesc$1 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var _hide$1 = _descriptors$1 ? function (object, key, value) {
	  return _objectDp$1.f(object, key, _propertyDesc$1(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var hasOwnProperty$1 = {}.hasOwnProperty;
	var _has$1 = function (it, key) {
	  return hasOwnProperty$1.call(it, key);
	};

	var PROTOTYPE$2 = 'prototype';

	var $export$1 = function (type, name, source) {
	  var IS_FORCED = type & $export$1.F;
	  var IS_GLOBAL = type & $export$1.G;
	  var IS_STATIC = type & $export$1.S;
	  var IS_PROTO = type & $export$1.P;
	  var IS_BIND = type & $export$1.B;
	  var IS_WRAP = type & $export$1.W;
	  var exports = IS_GLOBAL ? _core$1 : _core$1[name] || (_core$1[name] = {});
	  var expProto = exports[PROTOTYPE$2];
	  var target = IS_GLOBAL ? _global$1 : IS_STATIC ? _global$1[name] : (_global$1[name] || {})[PROTOTYPE$2];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && _has$1(exports, key)) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? _ctx$1(out, _global$1)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE$2] = C[PROTOTYPE$2];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? _ctx$1(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export$1.R && expProto && !expProto[key]) _hide$1(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export$1.F = 1;   // forced
	$export$1.G = 2;   // global
	$export$1.S = 4;   // static
	$export$1.P = 8;   // proto
	$export$1.B = 16;  // bind
	$export$1.W = 32;  // wrap
	$export$1.U = 64;  // safe
	$export$1.R = 128; // real proto method for `library`
	var _export$1 = $export$1;

	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	_export$1(_export$1.S + _export$1.F * !_descriptors$1, 'Object', { defineProperty: _objectDp$1.f });

	var $Object = _core$1.Object;
	var defineProperty = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};

	var defineProperty$1 = defineProperty;

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    defineProperty$1(obj, key, {
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

	var dP$2 = _objectDp.f;
	var FProto = Function.prototype;
	var nameRE = /^\s*function ([^ (]*)/;
	var NAME$1 = 'name';

	// 19.2.4.2 name
	NAME$1 in FProto || _descriptors && dP$2(FProto, NAME$1, {
	  configurable: true,
	  get: function () {
	    try {
	      return ('' + this).match(nameRE)[1];
	    } catch (e) {
	      return '';
	    }
	  }
	});

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	var script = {
	  name: 'me-button',
	  props: {
	    text: {
	      type: String,
	      default: ''
	    },
	    size: {
	      type: String,
	      default: 'normal'
	    },
	    type: {
	      type: String,
	      default: 'default'
	    },
	    plain: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    square: {
	      type: Boolean,
	      default: false
	    },
	    round: {
	      type: Boolean,
	      default: false
	    },
	    block: {
	      type: Boolean,
	      default: false
	    },
	    color: {
	      type: String,
	      default: ''
	    },
	    nativeType: {
	      type: String,
	      default: 'button'
	    }
	  },
	  computed: {
	    buttonClass: function buttonClass() {
	      return ["me-button_".concat(this.size), "me-button_".concat(this.type), {
	        'me-button_plain': this.plain
	      }, {
	        'me-button_disabled': this.disabled
	      }, {
	        'me-button_square': this.square
	      }, {
	        'me-button_round': this.round
	      }, {
	        'me-button_block': this.block
	      }];
	    },
	    buttonStyle: function buttonStyle() {
	      if (this.color === '') return '';

	      if (this.plain) {
	        return "color:".concat(this.color, ";border-color:").concat(this.color, ";");
	      }

	      if (this.color.indexOf('linear-gradient') > -1) {
	        return "color: #fff;background:".concat(this.color, ";border:0px;");
	      }

	      return "color: #fff;background:".concat(this.color, ";border-color:").concat(this.color, ";");
	    }
	  },
	  methods: {
	    onClick: function onClick(event) {
	      this.$emit('click', event);
	    },
	    onTouchstart: function onTouchstart(event) {
	      this.$emit('touchstart', event);
	    }
	  }
	};

	function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
	    if (typeof shadowMode !== 'boolean') {
	        createInjectorSSR = createInjector;
	        createInjector = shadowMode;
	        shadowMode = false;
	    }
	    // Vue.extend constructor export interop.
	    var options = typeof script === 'function' ? script.options : script;
	    // render functions
	    if (template && template.render) {
	        options.render = template.render;
	        options.staticRenderFns = template.staticRenderFns;
	        options._compiled = true;
	        // functional template
	        if (isFunctionalTemplate) {
	            options.functional = true;
	        }
	    }
	    // scopedId
	    if (scopeId) {
	        options._scopeId = scopeId;
	    }
	    let hook;
	    if (moduleIdentifier) {
	        // server build
	        hook = function (context) {
	            // 2.3 injection
	            context =
	                context || // cached call
	                    (this.$vnode && this.$vnode.ssrContext) || // stateful
	                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
	            // 2.2 with runInNewContext: true
	            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	                context = __VUE_SSR_CONTEXT__;
	            }
	            // inject component styles
	            if (style) {
	                style.call(this, createInjectorSSR(context));
	            }
	            // register component module identifier for async chunk inference
	            if (context && context._registeredComponents) {
	                context._registeredComponents.add(moduleIdentifier);
	            }
	        };
	        // used by ssr in case component is cached and beforeCreate
	        // never gets called
	        options._ssrRegister = hook;
	    }
	    else if (style) {
	        hook = shadowMode
	            ? function (context) {
	                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
	            }
	            : function (context) {
	                style.call(this, createInjector(context));
	            };
	    }
	    if (hook) {
	        if (options.functional) {
	            // register for functional component in vue file
	            var originalRender = options.render;
	            options.render = function renderWithStyleInjection(h, context) {
	                hook.call(context);
	                return originalRender(h, context);
	            };
	        }
	        else {
	            // inject component registration as beforeCreate hook
	            var existing = options.beforeCreate;
	            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
	        }
	    }
	    return script;
	}

	/* script */
 var __vue_script__ = script;
	/* template */
	var __vue_render__ = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "button",
	    {
	      staticClass: "me-button",
	      class: _vm.buttonClass,
	      style: _vm.buttonStyle,
	      attrs: { type: _vm.nativeType, disabled: _vm.disabled },
	      on: { click: _vm.onClick, touchstart: _vm.onTouchstart }
	    },
	    [_vm._t("default", [_vm._v(_vm._s(_vm.text))])],
	    2
	  )
	};
	var __vue_staticRenderFns__ = [];
	__vue_render__._withStripped = true;

	  /* style */
	  var __vue_inject_styles__ = undefined;
	  /* scoped */
	  var __vue_scope_id__ = undefined;
	  /* module identifier */
	  var __vue_module_identifier__ = undefined;
	  /* functional template */
	  var __vue_is_functional_template__ = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__ = normalizeComponent(
	    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
	    __vue_inject_styles__,
	    __vue_script__,
	    __vue_scope_id__,
	    __vue_is_functional_template__,
	    __vue_module_identifier__,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__.install = function (Vue) {
	  Vue.component(__vue_component__.name, __vue_component__);
	};

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	var script$1 = {
	  name: 'me-nav',
	  props: {
	    title: {
	      default: 'Title'
	    },
	    rightBtnFn: {
	      default: function _default() {
	        var _this = this;

	        return function () {
	          _this.$router.back();
	        };
	      }
	    },
	    rightText: {
	      default: '返回'
	    }
	  },
	  methods: {
	    backHandler: function backHandler() {
	      this.rightBtnFn();
	    }
	  }
	};

	/* script */
 var __vue_script__$1 = script$1;
	/* template */
	var __vue_render__$1 = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("div", { staticClass: "me-nav" }, [
	    _c("div", { staticClass: "nav-content" }, [_vm._v(_vm._s(_vm.title))]),
	    _vm._v(" "),
	    _c("div", { staticClass: "nav-right", on: { click: _vm.backHandler } }, [
	      _c(
	        "svg",
	        { staticClass: "nav-right_btn", attrs: { viewBox: "0 0 1000 1000" } },
	        [
	          _c("path", {
	            attrs: {
	              "fill-rule": "evenodd",
	              d:
	                "M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z"
	            }
	          })
	        ]
	      ),
	      _vm._v(" "),
	      _c("span", { staticClass: "nav-right_text" }, [
	        _vm._v(_vm._s(_vm.rightText))
	      ])
	    ])
	  ])
	};
	var __vue_staticRenderFns__$1 = [];
	__vue_render__$1._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$1 = undefined;
	  /* scoped */
	  var __vue_scope_id__$1 = undefined;
	  /* module identifier */
	  var __vue_module_identifier__$1 = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$1 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$1 = normalizeComponent(
	    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
	    __vue_inject_styles__$1,
	    __vue_script__$1,
	    __vue_scope_id__$1,
	    __vue_is_functional_template__$1,
	    __vue_module_identifier__$1,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$1.install = function (Vue) {
	  Vue.component(__vue_component__$1.name, __vue_component__$1);
	};

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */


	var check = function (O, proto) {
	  _anObject(O);
	  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	var _setProto = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

	var setPrototypeOf = _setProto.set;
	var _inheritIfRequired = function (that, target, C) {
	  var S = target.constructor;
	  var P;
	  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf) {
	    setPrototypeOf(that, P);
	  } return that;
	};

	var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var space = '[' + _stringWs + ']';
	var non = '\u200b\u0085';
	var ltrim = RegExp('^' + space + space + '*');
	var rtrim = RegExp(space + space + '*$');

	var exporter = function (KEY, exec, ALIAS) {
	  var exp = {};
	  var FORCE = _fails(function () {
	    return !!_stringWs[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
	  if (ALIAS) exp[ALIAS] = fn;
	  _export(_export.P + _export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function (string, TYPE) {
	  string = String(_defined(string));
	  if (TYPE & 1) string = string.replace(ltrim, '');
	  if (TYPE & 2) string = string.replace(rtrim, '');
	  return string;
	};

	var _stringTrim = exporter;

	var gOPN = _objectGopn.f;
	var gOPD$1 = _objectGopd.f;
	var dP$3 = _objectDp.f;
	var $trim = _stringTrim.trim;
	var NUMBER = 'Number';
	var $Number = _global[NUMBER];
	var Base = $Number;
	var proto$1 = $Number.prototype;
	// Opera ~12 has broken Object#toString
	var BROKEN_COF = _cof(_objectCreate(proto$1)) == NUMBER;
	var TRIM = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function (argument) {
	  var it = _toPrimitive(argument, false);
	  if (typeof it == 'string' && it.length > 2) {
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0);
	    var third, radix, maxCode;
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default: return +it;
	      }
	      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
	  $Number = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value;
	    var that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? _fails(function () { proto$1.valueOf.call(that); }) : _cof(that) != NUMBER)
	        ? _inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for (var keys = _descriptors ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key$1; keys.length > j; j++) {
	    if (_has(Base, key$1 = keys[j]) && !_has($Number, key$1)) {
	      dP$3($Number, key$1, gOPD$1(Base, key$1));
	    }
	  }
	  $Number.prototype = proto$1;
	  proto$1.constructor = $Number;
	  _redefine(_global, NUMBER, $Number);
	}

	//
	//
	//
	//
	//
	//
	var script$2 = {
	  name: 'me-row',
	  props: {
	    gutter: {
	      type: [String, Number],
	      default: 0
	    },
	    type: {
	      type: String,
	      default: 'default'
	    },
	    justify: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    rowClass: function rowClass() {
	      return [{
	        'me-row_flex': this.type === 'flex'
	      }, this.justify !== '' ? "me-row_justify-".concat(this.justify) : ''];
	    },
	    rowStyle: function rowStyle() {
	      return "margin-left:".concat(-this.gutter / 2, "px;margin-right:").concat(-this.gutter / 2, "px");
	    }
	  }
	};

	/* script */
 var __vue_script__$2 = script$2;
	/* template */
	var __vue_render__$2 = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "div",
	    { staticClass: "me-row", class: _vm.rowClass, style: _vm.rowStyle },
	    [_vm._t("default")],
	    2
	  )
	};
	var __vue_staticRenderFns__$2 = [];
	__vue_render__$2._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$2 = undefined;
	  /* scoped */
	  var __vue_scope_id__$2 = undefined;
	  /* module identifier */
	  var __vue_module_identifier__$2 = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$2 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$2 = normalizeComponent(
	    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
	    __vue_inject_styles__$2,
	    __vue_script__$2,
	    __vue_scope_id__$2,
	    __vue_is_functional_template__$2,
	    __vue_module_identifier__$2,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$2.install = function (Vue) {
	  Vue.component(__vue_component__$2.name, __vue_component__$2);
	};

	//
	//
	//
	//
	//
	//
	var script$3 = {
	  name: 'me-col',
	  props: {
	    span: {
	      type: [String, Number],
	      default: ''
	    },
	    offset: {
	      type: [String, Number],
	      default: ''
	    }
	  },
	  computed: {
	    colClass: function colClass() {
	      return [+this.span > 0 ? "me-col_".concat(this.span) : '', +this.offset > 0 ? "me-col_offset-".concat(this.offset) : ''];
	    },
	    gutter: function gutter() {
	      return this.$parent && this.$parent.gutter | 0;
	    },
	    colStyle: function colStyle() {
	      return "padding-left:".concat(this.gutter / 2, "px;padding-right:").concat(this.gutter / 2, "px;");
	    }
	  }
	};

	/* script */
 var __vue_script__$3 = script$3;
	/* template */
	var __vue_render__$3 = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "div",
	    { staticClass: "me-col", class: _vm.colClass, style: _vm.colStyle },
	    [_vm._t("default")],
	    2
	  )
	};
	var __vue_staticRenderFns__$3 = [];
	__vue_render__$3._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$3 = undefined;
	  /* scoped */
	  var __vue_scope_id__$3 = undefined;
	  /* module identifier */
	  var __vue_module_identifier__$3 = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$3 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$3 = normalizeComponent(
	    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
	    __vue_inject_styles__$3,
	    __vue_script__$3,
	    __vue_scope_id__$3,
	    __vue_is_functional_template__$3,
	    __vue_module_identifier__$3,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$3.install = function (Vue) {
	  Vue.component(__vue_component__$3.name, __vue_component__$3);
	};

	var isNumber = function isNumber(str) {
	  return /^\d+(\.\d+)?$/.test(str);
	};

	var script$4 = {
	  name: 'me-icon',
	  props: {
	    name: {
	      default: ''
	    },
	    size: {
	      type: [String, Number],
	      default: '32'
	    },
	    dot: {
	      type: Boolean,
	      default: false
	    },
	    badge: {
	      type: [String, Number],
	      default: ''
	    }
	  },
	  computed: {
	    imgStyle: function imgStyle() {
	      return "width:".concat(this.addUnit(this.size), ";height:").concat(this.addUnit(this.size), ";");
	    },
	    isShowBadge: function isShowBadge() {
	      return this.dot || isNumber(this.badge) || !isNumber(this.badge) && this.badge !== '';
	    }
	  },
	  methods: {
	    addUnit: function addUnit(str) {
	      return isNumber(str) ? "".concat(str, "px") : str;
	    }
	  }
	};

	/* script */
 var __vue_script__$4 = script$4;
	/* template */
	var __vue_render__$4 = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("i", { staticClass: "me-icon" }, [
	    _c("img", {
	      staticClass: "me-icon_img",
	      style: _vm.imgStyle,
	      attrs: { src: _vm.name }
	    }),
	    _vm._v(" "),
	    _vm.isShowBadge
	      ? _c(
	          "div",
	          {
	            staticClass: "me-icon_badge",
	            class: { "me-icon_badge-dot": _vm.dot }
	          },
	          [_vm._v(_vm._s(_vm.badge))]
	        )
	      : _vm._e()
	  ])
	};
	var __vue_staticRenderFns__$4 = [];
	__vue_render__$4._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$4 = undefined;
	  /* scoped */
	  var __vue_scope_id__$4 = undefined;
	  /* module identifier */
	  var __vue_module_identifier__$4 = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$4 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$4 = normalizeComponent(
	    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
	    __vue_inject_styles__$4,
	    __vue_script__$4,
	    __vue_scope_id__$4,
	    __vue_is_functional_template__$4,
	    __vue_module_identifier__$4,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$4.install = function (Vue) {
	  Vue.component(__vue_component__$4.name, __vue_component__$4);
	};

	//
	//
	//
	//
	//
	//
	//
	//
	var script$5 = {
	  name: 'me-loading'
	};

	/* script */
 var __vue_script__$5 = script$5;
	/* template */
	var __vue_render__$5 = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("span", { staticClass: "me-loading" }, [
	    _c(
	      "svg",
	      { staticClass: "me-loading_circular", attrs: { viewBox: "25 25 50 50" } },
	      [_c("circle", { attrs: { cx: "50", cy: "50", r: "20", fill: "none" } })]
	    )
	  ])
	};
	var __vue_staticRenderFns__$5 = [];
	__vue_render__$5._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$5 = undefined;
	  /* scoped */
	  var __vue_scope_id__$5 = undefined;
	  /* module identifier */
	  var __vue_module_identifier__$5 = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$5 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$5 = normalizeComponent(
	    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
	    __vue_inject_styles__$5,
	    __vue_script__$5,
	    __vue_scope_id__$5,
	    __vue_is_functional_template__$5,
	    __vue_module_identifier__$5,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$5.install = function (Vue) {
	  Vue.component(__vue_component__$5.name, __vue_component__$5);
	};

	//
	//
	//
	//
	//
	//
	var script$6 = {
	  name: 'me-overlay',
	  props: {
	    overlayColor: {
	      type: String,
	      default: 'rgba(0, 0, 0, 0.7)'
	    },
	    transition: {
	      type: String,
	      default: 'me-fade'
	    },
	    visible: {
	      type: Boolean,
	      default: false
	    }
	  },
	  computed: {
	    overlayStyle: function overlayStyle() {
	      return "background: ".concat(this.overlayColor);
	    }
	  },
	  methods: {
	    onClick: function onClick() {
	      this.$emit('click');
	    }
	  }
	};

	/* script */
 var __vue_script__$6 = script$6;
	/* template */
	var __vue_render__$6 = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("transition", { attrs: { name: "me-fade" } }, [
	    _vm.visible
	      ? _c("div", {
	          staticClass: "me-overlay",
	          style: _vm.overlayStyle,
	          on: { click: _vm.onClick }
	        })
	      : _vm._e()
	  ])
	};
	var __vue_staticRenderFns__$6 = [];
	__vue_render__$6._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$6 = undefined;
	  /* scoped */
	  var __vue_scope_id__$6 = undefined;
	  /* module identifier */
	  var __vue_module_identifier__$6 = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$6 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$6 = normalizeComponent(
	    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
	    __vue_inject_styles__$6,
	    __vue_script__$6,
	    __vue_scope_id__$6,
	    __vue_is_functional_template__$6,
	    __vue_module_identifier__$6,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$6.install = function (Vue) {
	  Vue.component(__vue_component__$6.name, __vue_component__$6);
	};

	//
	var script$7 = {
	  name: 'me-popup',
	  components: {
	    'me-overlay': __vue_component__$6
	  },
	  props: {
	    value: Boolean,
	    position: {
	      type: String,
	      default: 'center'
	    },
	    transition: {
	      type: String,
	      default: ''
	    },
	    overlay: {
	      type: Boolean,
	      default: true
	    },
	    overlayColor: {
	      type: String,
	      default: 'rgba(0, 0, 0, 0.7)'
	    },
	    closeOnClickOverlay: {
	      type: Boolean,
	      default: true
	    }
	  },
	  data: function data() {
	    return {};
	  },
	  computed: {
	    contentClass: function contentClass() {
	      return [this.position ? "me-popup_content-".concat(this.position) : ''];
	    },
	    positionTransition: function positionTransition() {
	      switch (this.position) {
	        case 'top':
	          return 'me-slide-down';

	        case 'bottom':
	          return 'me-slide-up';

	        case 'left':
	          return 'me-slide-left';

	        case 'right':
	          return 'me-slide-right';

	        default:
	          return 'me-fade';
	      }
	    },
	    popupTransition: function popupTransition() {
	      return this.transition ? this.transition : this.positionTransition;
	    }
	  },
	  methods: {
	    handleOverlay: function handleOverlay() {
	      if (this.closeOnClickOverlay) {
	        this.$emit('input', false);
	      }
	    }
	  }
	};

	/* script */
 var __vue_script__$7 = script$7;
	/* template */
	var __vue_render__$7 = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "section",
	    [
	      _c("me-overlay", {
	        attrs: {
	          visible: _vm.value && _vm.overlay,
	          overlayColor: _vm.overlayColor
	        },
	        on: { click: _vm.handleOverlay }
	      }),
	      _vm._v(" "),
	      _c("transition", { attrs: { name: _vm.popupTransition } }, [
	        _vm.value
	          ? _c("div", { staticClass: "me-popup" }, [
	              _c(
	                "div",
	                { staticClass: "me-popup_content", class: _vm.contentClass },
	                [_vm._t("default")],
	                2
	              )
	            ])
	          : _vm._e()
	      ])
	    ],
	    1
	  )
	};
	var __vue_staticRenderFns__$7 = [];
	__vue_render__$7._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$7 = undefined;
	  /* scoped */
	  var __vue_scope_id__$7 = undefined;
	  /* module identifier */
	  var __vue_module_identifier__$7 = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$7 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$7 = normalizeComponent(
	    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
	    __vue_inject_styles__$7,
	    __vue_script__$7,
	    __vue_scope_id__$7,
	    __vue_is_functional_template__$7,
	    __vue_module_identifier__$7,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$7.install = function (Vue) {
	  Vue.component(__vue_component__$7.name, __vue_component__$7);
	};

	var quot = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function (string, tag, attribute, value) {
	  var S = String(_defined(string));
	  var p1 = '<' + tag;
	  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	var _stringHtml = function (NAME, exec) {
	  var O = {};
	  O[NAME] = exec(createHTML);
	  _export(_export.P + _export.F * _fails(function () {
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

	// B.2.3.6 String.prototype.fixed()
	_stringHtml('fixed', function (createHTML) {
	  return function fixed() {
	    return createHTML(this, 'tt', '', '');
	  };
	});

	// 7.1.4 ToInteger
	var ceil$1 = Math.ceil;
	var floor$1 = Math.floor;
	var _toInteger$1 = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor$1 : ceil$1)(it);
	};

	// 7.2.1 RequireObjectCoercible(argument)
	var _defined$1 = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

	// true  -> String#at
	// false -> String#codePointAt
	var _stringAt = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(_defined$1(that));
	    var i = _toInteger$1(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

	var _library = true;

	var _redefine$1 = _hide$1;

	var toString$1 = {}.toString;

	var _cof$1 = function (it) {
	  return toString$1.call(it).slice(8, -1);
	};

	// fallback for non-array-like ES3 and non-enumerable old V8 strings

	// eslint-disable-next-line no-prototype-builtins
	var _iobject$1 = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return _cof$1(it) == 'String' ? it.split('') : Object(it);
	};

	// to indexed object, toObject with fallback for non-array-like ES3 strings


	var _toIobject$1 = function (it) {
	  return _iobject$1(_defined$1(it));
	};

	// 7.1.15 ToLength

	var min$2 = Math.min;
	var _toLength$1 = function (it) {
	  return it > 0 ? min$2(_toInteger$1(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

	var max$1 = Math.max;
	var min$3 = Math.min;
	var _toAbsoluteIndex$1 = function (index, length) {
	  index = _toInteger$1(index);
	  return index < 0 ? max$1(index + length, 0) : min$3(index, length);
	};

	// false -> Array#indexOf
	// true  -> Array#includes



	var _arrayIncludes$1 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = _toIobject$1($this);
	    var length = _toLength$1(O.length);
	    var index = _toAbsoluteIndex$1(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var _shared$1 = createCommonjsModule(function (module) {
	var SHARED = '__core-js_shared__';
	var store = _global$1[SHARED] || (_global$1[SHARED] = {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: _core$1.version,
	  mode:  'pure' ,
	  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
	});
	});

	var id$1 = 0;
	var px$1 = Math.random();
	var _uid$1 = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id$1 + px$1).toString(36));
	};

	var shared$1 = _shared$1('keys');

	var _sharedKey$1 = function (key) {
	  return shared$1[key] || (shared$1[key] = _uid$1(key));
	};

	var arrayIndexOf$1 = _arrayIncludes$1(false);
	var IE_PROTO$3 = _sharedKey$1('IE_PROTO');

	var _objectKeysInternal$1 = function (object, names) {
	  var O = _toIobject$1(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO$3) _has$1(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (_has$1(O, key = names[i++])) {
	    ~arrayIndexOf$1(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE 8- don't enum bug keys
	var _enumBugKeys$1 = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)



	var _objectKeys$1 = Object.keys || function keys(O) {
	  return _objectKeysInternal$1(O, _enumBugKeys$1);
	};

	var _objectDps$1 = _descriptors$1 ? Object.defineProperties : function defineProperties(O, Properties) {
	  _anObject$1(O);
	  var keys = _objectKeys$1(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) _objectDp$1.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

	var document$4 = _global$1.document;
	var _html$1 = document$4 && document$4.documentElement;

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



	var IE_PROTO$4 = _sharedKey$1('IE_PROTO');
	var Empty$1 = function () { /* empty */ };
	var PROTOTYPE$3 = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict$1 = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = _domCreate$1('iframe');
	  var i = _enumBugKeys$1.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  _html$1.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict$1 = iframeDocument.F;
	  while (i--) delete createDict$1[PROTOTYPE$3][_enumBugKeys$1[i]];
	  return createDict$1();
	};

	var _objectCreate$1 = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty$1[PROTOTYPE$3] = _anObject$1(O);
	    result = new Empty$1();
	    Empty$1[PROTOTYPE$3] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$4] = O;
	  } else result = createDict$1();
	  return Properties === undefined ? result : _objectDps$1(result, Properties);
	};

	var _wks$1 = createCommonjsModule(function (module) {
	var store = _shared$1('wks');

	var Symbol = _global$1.Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid$1)('Symbol.' + name));
	};

	$exports.store = store;
	});

	var def$1 = _objectDp$1.f;

	var TAG$1 = _wks$1('toStringTag');

	var _setToStringTag$1 = function (it, tag, stat) {
	  if (it && !_has$1(it = stat ? it : it.prototype, TAG$1)) def$1(it, TAG$1, { configurable: true, value: tag });
	};

	var IteratorPrototype$1 = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	_hide$1(IteratorPrototype$1, _wks$1('iterator'), function () { return this; });

	var _iterCreate$1 = function (Constructor, NAME, next) {
	  Constructor.prototype = _objectCreate$1(IteratorPrototype$1, { next: _propertyDesc$1(1, next) });
	  _setToStringTag$1(Constructor, NAME + ' Iterator');
	};

	// 7.1.13 ToObject(argument)

	var _toObject$1 = function (it) {
	  return Object(_defined$1(it));
	};

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


	var IE_PROTO$5 = _sharedKey$1('IE_PROTO');
	var ObjectProto$1 = Object.prototype;

	var _objectGpo$1 = Object.getPrototypeOf || function (O) {
	  O = _toObject$1(O);
	  if (_has$1(O, IE_PROTO$5)) return O[IE_PROTO$5];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto$1 : null;
	};

	var ITERATOR$2 = _wks$1('iterator');
	var BUGGY$1 = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR$1 = '@@iterator';
	var KEYS$1 = 'keys';
	var VALUES$1 = 'values';

	var _iterDefine$1 = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  _iterCreate$1(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY$1 && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS$1: return function keys() { return new Constructor(this, kind); };
	      case VALUES$1: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES$1;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR$2] || proto[FF_ITERATOR$1] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = _objectGpo$1($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      _setToStringTag$1(IteratorPrototype, TAG, true);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES$1) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if (( FORCED) && (BUGGY$1 || VALUES_BUG || !proto[ITERATOR$2])) {
	    _hide$1(proto, ITERATOR$2, $default);
	  }
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES$1),
	      keys: IS_SET ? $default : getMethod(KEYS$1),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) _redefine$1(proto, key, methods[key]);
	    } else _export$1(_export$1.P + _export$1.F * (BUGGY$1 || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

	var $at = _stringAt(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	_iterDefine$1(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

	var _iterStep$1 = function (done, value) {
	  return { value: value, done: !!done };
	};

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	var es6_array_iterator$1 = _iterDefine$1(Array, 'Array', function (iterated, kind) {
	  this._t = _toIobject$1(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return _iterStep$1(1);
	  }
	  if (kind == 'keys') return _iterStep$1(0, index);
	  if (kind == 'values') return _iterStep$1(0, O[index]);
	  return _iterStep$1(0, [index, O[index]]);
	}, 'values');

	var TO_STRING_TAG$1 = _wks$1('toStringTag');

	var DOMIterables$1 = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

	for (var i$1 = 0; i$1 < DOMIterables$1.length; i$1++) {
	  var NAME$2 = DOMIterables$1[i$1];
	  var Collection$1 = _global$1[NAME$2];
	  var proto$2 = Collection$1 && Collection$1.prototype;
	  if (proto$2 && !proto$2[TO_STRING_TAG$1]) _hide$1(proto$2, TO_STRING_TAG$1, NAME$2);
	}

	var f$6 = _wks$1;

	var _wksExt = {
		f: f$6
	};

	var iterator = _wksExt.f('iterator');

	var _meta = createCommonjsModule(function (module) {
	var META = _uid$1('meta');


	var setDesc = _objectDp$1.f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !_fails$1(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!_isObject$1(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!_has$1(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!_has$1(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !_has$1(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};
	});
	var _meta_1 = _meta.KEY;
	var _meta_2 = _meta.NEED;
	var _meta_3 = _meta.fastKey;
	var _meta_4 = _meta.getWeak;
	var _meta_5 = _meta.onFreeze;

	var defineProperty$2 = _objectDp$1.f;
	var _wksDefine = function (name) {
	  var $Symbol = _core$1.Symbol || (_core$1.Symbol =  {} );
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$2($Symbol, name, { value: _wksExt.f(name) });
	};

	var f$7 = Object.getOwnPropertySymbols;

	var _objectGops$1 = {
		f: f$7
	};

	var f$8 = {}.propertyIsEnumerable;

	var _objectPie$1 = {
		f: f$8
	};

	// all enumerable object keys, includes symbols



	var _enumKeys = function (it) {
	  var result = _objectKeys$1(it);
	  var getSymbols = _objectGops$1.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = _objectPie$1.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};

	// 7.2.2 IsArray(argument)

	var _isArray = Array.isArray || function isArray(arg) {
	  return _cof$1(arg) == 'Array';
	};

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

	var hiddenKeys$1 = _enumBugKeys$1.concat('length', 'prototype');

	var f$9 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return _objectKeysInternal$1(O, hiddenKeys$1);
	};

	var _objectGopn$1 = {
		f: f$9
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

	var gOPN$1 = _objectGopn$1.f;
	var toString$2 = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN$1(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	var f$a = function getOwnPropertyNames(it) {
	  return windowNames && toString$2.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject$1(it));
	};

	var _objectGopnExt = {
		f: f$a
	};

	var gOPD$2 = Object.getOwnPropertyDescriptor;

	var f$b = _descriptors$1 ? gOPD$2 : function getOwnPropertyDescriptor(O, P) {
	  O = _toIobject$1(O);
	  P = _toPrimitive$1(P, true);
	  if (_ie8DomDefine$1) try {
	    return gOPD$2(O, P);
	  } catch (e) { /* empty */ }
	  if (_has$1(O, P)) return _propertyDesc$1(!_objectPie$1.f.call(O, P), O[P]);
	};

	var _objectGopd$1 = {
		f: f$b
	};

	// ECMAScript 6 symbols shim





	var META = _meta.KEY;





















	var gOPD$3 = _objectGopd$1.f;
	var dP$4 = _objectDp$1.f;
	var gOPN$2 = _objectGopnExt.f;
	var $Symbol = _global$1.Symbol;
	var $JSON = _global$1.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE$4 = 'prototype';
	var HIDDEN = _wks$1('_hidden');
	var TO_PRIMITIVE = _wks$1('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = _shared$1('symbol-registry');
	var AllSymbols = _shared$1('symbols');
	var OPSymbols = _shared$1('op-symbols');
	var ObjectProto$2 = Object[PROTOTYPE$4];
	var USE_NATIVE = typeof $Symbol == 'function' && !!_objectGops$1.f;
	var QObject = _global$1.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE$4] || !QObject[PROTOTYPE$4].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = _descriptors$1 && _fails$1(function () {
	  return _objectCreate$1(dP$4({}, 'a', {
	    get: function () { return dP$4(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD$3(ObjectProto$2, key);
	  if (protoDesc) delete ObjectProto$2[key];
	  dP$4(it, key, D);
	  if (protoDesc && it !== ObjectProto$2) dP$4(ObjectProto$2, key, protoDesc);
	} : dP$4;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _objectCreate$1($Symbol[PROTOTYPE$4]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto$2) $defineProperty(OPSymbols, key, D);
	  _anObject$1(it);
	  key = _toPrimitive$1(key, true);
	  _anObject$1(D);
	  if (_has$1(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!_has$1(it, HIDDEN)) dP$4(it, HIDDEN, _propertyDesc$1(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (_has$1(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _objectCreate$1(D, { enumerable: _propertyDesc$1(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP$4(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  _anObject$1(it);
	  var keys = _enumKeys(P = _toIobject$1(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _objectCreate$1(it) : $defineProperties(_objectCreate$1(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = _toPrimitive$1(key, true));
	  if (this === ObjectProto$2 && _has$1(AllSymbols, key) && !_has$1(OPSymbols, key)) return false;
	  return E || !_has$1(this, key) || !_has$1(AllSymbols, key) || _has$1(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = _toIobject$1(it);
	  key = _toPrimitive$1(key, true);
	  if (it === ObjectProto$2 && _has$1(AllSymbols, key) && !_has$1(OPSymbols, key)) return;
	  var D = gOPD$3(it, key);
	  if (D && _has$1(AllSymbols, key) && !(_has$1(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN$2(_toIobject$1(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!_has$1(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto$2;
	  var names = gOPN$2(IS_OP ? OPSymbols : _toIobject$1(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (_has$1(AllSymbols, key = names[i++]) && (IS_OP ? _has$1(ObjectProto$2, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = _uid$1(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto$2) $set.call(OPSymbols, value);
	      if (_has$1(this, HIDDEN) && _has$1(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, _propertyDesc$1(1, value));
	    };
	    if (_descriptors$1 && setter) setSymbolDesc(ObjectProto$2, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  _redefine$1($Symbol[PROTOTYPE$4], 'toString', function toString() {
	    return this._k;
	  });

	  _objectGopd$1.f = $getOwnPropertyDescriptor;
	  _objectDp$1.f = $defineProperty;
	  _objectGopn$1.f = _objectGopnExt.f = $getOwnPropertyNames;
	  _objectPie$1.f = $propertyIsEnumerable;
	  _objectGops$1.f = $getOwnPropertySymbols;

	  if (_descriptors$1 && !_library) {
	    _redefine$1(ObjectProto$2, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  _wksExt.f = function (name) {
	    return wrap(_wks$1(name));
	  };
	}

	_export$1(_export$1.G + _export$1.W + _export$1.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j$1 = 0; es6Symbols.length > j$1;)_wks$1(es6Symbols[j$1++]);

	for (var wellKnownSymbols = _objectKeys$1(_wks$1.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

	_export$1(_export$1.S + _export$1.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return _has$1(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	_export$1(_export$1.S + _export$1.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	var FAILS_ON_PRIMITIVES = _fails$1(function () { _objectGops$1.f(1); });

	_export$1(_export$1.S + _export$1.F * FAILS_ON_PRIMITIVES, 'Object', {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    return _objectGops$1.f(_toObject$1(it));
	  }
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && _export$1(_export$1.S + _export$1.F * (!USE_NATIVE || _fails$1(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!_isObject$1(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!_isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE$4][TO_PRIMITIVE] || _hide$1($Symbol[PROTOTYPE$4], TO_PRIMITIVE, $Symbol[PROTOTYPE$4].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	_setToStringTag$1($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	_setToStringTag$1(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	_setToStringTag$1(_global$1.JSON, 'JSON', true);

	var es6_object_toString = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	_wksDefine('asyncIterator');

	_wksDefine('observable');

	getCjsExportFromNamespace(es6_object_toString);

	var symbol = _core$1.Symbol;

	var isServer = Vue.prototype.$isServer;
	var isDef = function isDef(val) {
	  return val !== undefined && val !== null;
	};

	function on(target, event, handler) {
	  if (!isServer) {
	    target.addEventListener(event, handler);
	  }
	}
	function off(target, event, handler) {
	  if (!isServer) {
	    target.removeEventListener(event, handler);
	  }
	}

	function BindEventMixin(handler) {
	  function bind() {
	    if (!this.binded) {
	      handler.call(this, on, true);
	      this.binded = true;
	    }
	  }

	  function unbind() {
	    if (this.binded) {
	      handler.call(this, off, false);
	      this.binded = false;
	    }
	  }

	  return {
	    mounted: bind,
	    activated: bind,
	    deactivated: unbind,
	    beforeDestroy: unbind
	  };
	}

	// https://github.com/youzan/vant/blob/dev/src/utils/dom/scroll.ts
	function isWindow(val) {
	  return val === window;
	} // get nearest scroll element
	// http://w3help.org/zh-cn/causes/SD9013
	// http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome


	var overflowScrollReg = /scroll|auto/i;
	function getScroller(el) {
	  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
	  var node = el;

	  while (node && node.tagName !== 'HTML' && node.nodeType === 1 && node !== root) {
	    var _window$getComputedSt = window.getComputedStyle(node),
	        overflowY = _window$getComputedSt.overflowY;

	    if (overflowScrollReg.test(overflowY)) {
	      if (node.tagName !== 'BODY') return node; // see: https://github.com/youzan/vant/issues/3823

	      var _window$getComputedSt2 = window.getComputedStyle(node.parentNode),
	          htmlOverflowY = _window$getComputedSt2.overflowY;

	      if (overflowScrollReg.test(htmlOverflowY)) return node;
	    }

	    node = node.parentNode;
	  }

	  return root;
	}
	function getScrollTop(el) {
	  return 'scrollTop' in el ? el.scrollTop : el.pageYOffset;
	}
	function getRootScrollTop() {
	  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
	}

	function getElementTop(el, scroller) {
	  if (isWindow(el)) {
	    return 0;
	  }

	  var scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop();
	  return el.getBoundingClientRect().top + scrollTop;
	}

	function isHidden(el) {
	  var style = window.getComputedStyle(el);
	  var hidden = style.display === 'none'; // offsetParent returns null in the following situations:
	  // 1. The element or its parent element has the display property set to none.
	  // 2. The element has the position property set to fixed

	  var parentHidden = el.offsetParent === null && style.position !== 'fixed';
	  return hidden || parentHidden;
	}

	var script$8 = {
	  name: 'me-sticky',
	  data: function data() {
	    return {
	      fixed: false,
	      height: 0,
	      transform: 0,
	      scroller: null
	    };
	  },
	  props: {
	    zIndex: {
	      type: [Number, String],
	      default: null
	    },
	    container: {
	      default: null
	    },
	    offsetTop: {
	      type: [Number, String],
	      default: 0
	    }
	  },
	  computed: {
	    stickyStyle: function stickyStyle() {
	      return "height: ".concat(this.fixed ? "".concat(this.height, "px") : null);
	    },
	    boxStyle: function boxStyle() {
	      if (!this.fixed) return '';
	      var style = '';

	      if (isDef(this.zIndex)) {
	        style += "zindex:".concat(this.zIndex, ";");
	      }

	      if (this.offsetTop && this.fixed) {
	        style += "top:".concat(this.offsetTop, "px;");
	      }

	      if (this.transform) {
	        style += "transform:translate3d(0, ".concat(this.transform, "px, 0);");
	      }

	      return style;
	    },
	    boxClass: function boxClass() {
	      return {
	        'me-sticky_fixed': this.fixed
	      };
	    }
	  },
	  methods: {
	    onScroll: function onScroll() {
	      var _this = this;

	      if (isHidden(this.$el)) {
	        return;
	      }

	      this.height = this.$el.offsetHeight;
	      var container = this.container;
	      var offsetTop = +this.offsetTop;
	      var scrollTop = getScrollTop(window);
	      var topToPageTop = getElementTop(this.$el);

	      var emitScrollEvent = function emitScrollEvent() {
	        _this.$emit('scroll', {
	          scrollTop: scrollTop,
	          isFixed: _this.fixed
	        });
	      }; // The sticky component should be kept inside the container element


	      if (container) {
	        var bottomToPageTop = topToPageTop + container.offsetHeight;

	        if (scrollTop + offsetTop + this.height > bottomToPageTop) {
	          var distanceToBottom = this.height + scrollTop - bottomToPageTop;

	          if (distanceToBottom < this.height) {
	            this.fixed = true;
	            this.transform = -(distanceToBottom + offsetTop);
	          } else {
	            this.fixed = false;
	          }

	          emitScrollEvent();
	          return;
	        }
	      }

	      if (scrollTop + offsetTop > topToPageTop) {
	        this.fixed = true;
	        this.transform = 0;
	      } else {
	        this.fixed = false;
	      }

	      emitScrollEvent();
	    }
	  },
	  mixins: [BindEventMixin(function (bind, isBind) {
	    if (!this.scroller) {
	      this.scroller = getScroller(this.$el);
	    }

	    if (this.observer) {
	      var method = isBind ? 'observe' : 'unobserve';
	      this.observer[method](this.$el);
	    }

	    bind(this.scroller, 'scroll', this.onScroll, true);
	    this.onScroll();
	  })],
	  created: function created() {
	    var _this2 = this;

	    if (!isServer && window.IntersectionObserver) {
	      this.observer = new IntersectionObserver(function (entries) {
	        if (entries[0].intersectionRatio > 0) {
	          _this2.onScroll();
	        }
	      }, {
	        root: document.body
	      });
	    }
	  }
	};

	/* script */
 var __vue_script__$8 = script$8;
	/* template */
	var __vue_render__$8 = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("div", { style: _vm.stickyStyle }, [
	    _c(
	      "div",
	      { class: _vm.boxClass, style: _vm.boxStyle },
	      [_vm._t("default")],
	      2
	    )
	  ])
	};
	var __vue_staticRenderFns__$8 = [];
	__vue_render__$8._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$8 = undefined;
	  /* scoped */
	  var __vue_scope_id__$8 = "data-v-7949995a";
	  /* module identifier */
	  var __vue_module_identifier__$8 = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$8 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$8 = normalizeComponent(
	    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
	    __vue_inject_styles__$8,
	    __vue_script__$8,
	    __vue_scope_id__$8,
	    __vue_is_functional_template__$8,
	    __vue_module_identifier__$8,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$8.install = function (Vue) {
	  Vue.component(__vue_component__$8.name, __vue_component__$8);
	};

	//
	var script$9 = {
	  name: 'me-toast',
	  components: {
	    'me-loading': __vue_component__$5
	  },
	  data: function data() {
	    return {
	      message: '',
	      visible: false,
	      duration: 2000,
	      // 显示时间(ms)
	      timer: null,
	      type: '',
	      bgColor: 'rgba(50, 50, 51, 0.88)',
	      onOpen: null,
	      onClose: null,
	      cover: false,
	      // 透明遮罩层
	      coverColor: 'rgba(0, 0, 0, 0)',
	      transition: 'me-fade'
	    };
	  },
	  computed: {
	    toastStyle: function toastStyle() {
	      return "".concat(this.cover ? "background: ".concat(this.coverColor) : '');
	    }
	  },
	  methods: {
	    show: function show() {
	      var _this = this;

	      this.clearTimer();
	      this.visible = true;
	      typeof this.onOpen === 'function' && this.onOpen();

	      if (this.type !== 'loading' && this.duration) {
	        this.timer = setTimeout(function () {
	          _this.hide();
	        }, this.duration);
	      }
	    },
	    hide: function hide() {
	      this.clearTimer();
	      this.visible = false;
	      typeof this.onClose === 'function' && this.onClose();
	    },
	    clearTimer: function clearTimer() {
	      if (this.timer) {
	        clearTimeout(this.timer);
	        this.timer = null;
	      }
	    }
	  },
	  destroyed: function destroyed() {
	    this.timer = null;
	  }
	};

	/* script */
 var __vue_script__$9 = script$9;
	/* template */
	var __vue_render__$9 = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("transition", { attrs: { name: _vm.transition } }, [
	    _vm.visible
	      ? _c(
	          "div",
	          {
	            staticClass: "me-toast",
	            class: { "me-toast_cover": _vm.cover },
	            style: _vm.toastStyle
	          },
	          [
	            _vm.type === "loading"
	              ? _c("div", { staticClass: "me-toast_loading" }, [
	                  _c(
	                    "div",
	                    { staticClass: "me-toast_loading-spinner" },
	                    [_c("me-loading")],
	                    1
	                  ),
	                  _vm._v(" "),
	                  _c("div", {
	                    staticClass: "me-toast_loading-text",
	                    domProps: { innerHTML: _vm._s(_vm.message) }
	                  })
	                ])
	              : _vm._e(),
	            _vm._v(" "),
	            _vm.type === "text"
	              ? _c("div", { staticClass: "me-toast_inner" }, [
	                  _c("span", {
	                    staticClass: "me-toast_inner-text",
	                    domProps: { innerHTML: _vm._s(_vm.message) }
	                  })
	                ])
	              : _vm._e()
	          ]
	        )
	      : _vm._e()
	  ])
	};
	var __vue_staticRenderFns__$9 = [];
	__vue_render__$9._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$9 = undefined;
	  /* scoped */
	  var __vue_scope_id__$9 = undefined;
	  /* module identifier */
	  var __vue_module_identifier__$9 = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$9 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$9 = normalizeComponent(
	    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
	    __vue_inject_styles__$9,
	    __vue_script__$9,
	    __vue_scope_id__$9,
	    __vue_is_functional_template__$9,
	    __vue_module_identifier__$9,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
	var ToastConstructor = Vue.extend(__vue_component__$9);
	var instance;
	var defaultOptions = {
	  message: '',
	  visible: false,
	  duration: 2000,
	  // 显示时间(ms)
	  timer: null,
	  type: 'text',
	  bgColor: 'rgba(50, 50, 51, 0.88)',
	  onOpen: null,
	  onClose: null,
	  cover: false,
	  // 透明遮罩层
	  coverColor: 'rgba(0, 0, 0, 0)',
	  loadingText: '加载中...',
	  transition: 'me-fade'
	};

	var currentOptions = _objectSpread({}, defaultOptions);

	function _showToast(options) {
	  if (!instance) {
	    instance = _createInstance();
	    instance.vm = instance.$mount();
	    document.body.appendChild(instance.$el);
	  }

	  Object.assign(instance.$data, _objectSpread({}, currentOptions, {}, options));
	  Vue.nextTick(function () {
	    instance.show();
	  });
	  return instance;
	}

	function _hideToast() {
	  if (!instance) return;
	  Vue.nextTick(function () {
	    instance.hide();
	  });
	  return instance;
	}

	function _createInstance() {
	  var options = _objectSpread({}, currentOptions);

	  return new ToastConstructor({
	    data: options
	  });
	}

	function errorMsg(message) {
	  if (!message) {
	    console.warn('[Melody Toast]: message不能为空');
	    return;
	  }
	}

	var Toast$1 = function Toast(message) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  errorMsg(message);
	  return _showToast(_objectSpread({
	    type: 'text',
	    message: message
	  }, options));
	};

	Toast$1.text = function (message) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  errorMsg(message);
	  return _showToast(_objectSpread({
	    type: 'text',
	    message: message
	  }, options));
	};

	Toast$1.loading = function () {
	  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : currentOptions.loadingText;
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  errorMsg(message);
	  return _showToast(_objectSpread({
	    type: 'loading',
	    cover: true,
	    message: message
	  }, options));
	};

	Toast$1.clear = function () {
	  return _hideToast();
	};

	Toast$1.setDefaultOptions = function (options) {
	  Object.assign(currentOptions, options);
	};

	Toast$1.resetDefaultOptions = function () {
	  Object.assign(currentOptions, defaultOptions);
	};

	Toast$1.install = function (Vue) {
	  Vue.prototype['$toast'] = Toast$1;
	};

	//
	var script$a = {
	  name: 'me-dialog',
	  components: {
	    'me-overlay': __vue_component__$6,
	    'me-button': __vue_component__
	  },
	  data: function data() {
	    return {
	      visible: false,
	      title: '',
	      message: '',
	      leftBtnText: '取消',
	      showLeftBtn: false,
	      leftBtnFn: null,
	      rightBtnText: '确认',
	      showRightBtn: true,
	      rightBtnFn: null,
	      overlay: true,
	      overlayColor: 'rgba(0, 0, 0, 0.7)',
	      closeOnClickOverlay: false
	    };
	  },
	  computed: {},
	  methods: {
	    show: function show() {
	      this.visible = true;
	    },
	    hide: function hide() {
	      this.visible = false;
	    },
	    handleOverlay: function handleOverlay() {
	      if (this.closeOnClickOverlay) {
	        this.visible = false;
	      }
	    },
	    handleLeftBtn: function handleLeftBtn() {
	      if (!this.rightBtnFn) {
	        this.visible = false;
	        return;
	      }

	      typeof this.leftBtnFn === 'function' && this.leftBtnFn(this);
	    },
	    handleRightBtn: function handleRightBtn() {
	      if (!this.rightBtnFn) {
	        this.visible = false;
	        return;
	      }

	      typeof this.leftBtnFn === 'function' && this.leftBtnFn(this);
	    }
	  }
	};

	/* script */
 var __vue_script__$a = script$a;
	/* template */
	var __vue_render__$a = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "section",
	    [
	      _c("me-overlay", {
	        attrs: {
	          visible: _vm.visible && _vm.overlay,
	          overlayColor: _vm.overlayColor
	        },
	        on: { click: _vm.handleOverlay }
	      }),
	      _vm._v(" "),
	      _c("transition", { attrs: { name: "me-slide-up" } }, [
	        _vm.visible
	          ? _c("div", { staticClass: "me-dialog" }, [
	              _c("div", { staticClass: "me-dialog_content" }, [
	                _c("div", {
	                  staticClass: "me-dialog_inner-title",
	                  domProps: { innerHTML: _vm._s(_vm.title) }
	                }),
	                _vm._v(" "),
	                _c("div", {
	                  staticClass: "me-dialog_inner-message",
	                  domProps: { innerHTML: _vm._s(_vm.message) }
	                }),
	                _vm._v(" "),
	                _c(
	                  "div",
	                  { staticClass: "me-dialog_box" },
	                  [
	                    _vm.showLeftBtn
	                      ? _c(
	                          "me-button",
	                          {
	                            staticClass:
	                              "me-dialog_btn me-hairline_top me-hairline_right",
	                            on: { click: _vm.handleLeftBtn }
	                          },
	                          [_vm._v(_vm._s(_vm.leftBtnText))]
	                        )
	                      : _vm._e(),
	                    _vm._v(" "),
	                    _vm.showRightBtn
	                      ? _c(
	                          "me-button",
	                          {
	                            staticClass: "me-dialog_btn me-hairline_top",
	                            on: { click: _vm.handleRightBtn }
	                          },
	                          [_vm._v(_vm._s(_vm.rightBtnText))]
	                        )
	                      : _vm._e()
	                  ],
	                  1
	                )
	              ])
	            ])
	          : _vm._e()
	      ])
	    ],
	    1
	  )
	};
	var __vue_staticRenderFns__$a = [];
	__vue_render__$a._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$a = undefined;
	  /* scoped */
	  var __vue_scope_id__$a = undefined;
	  /* module identifier */
	  var __vue_module_identifier__$a = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$a = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$a = normalizeComponent(
	    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
	    __vue_inject_styles__$a,
	    __vue_script__$a,
	    __vue_scope_id__$a,
	    __vue_is_functional_template__$a,
	    __vue_module_identifier__$a,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
	var DialogConstructor = Vue.extend(__vue_component__$a);
	var instance$1;
	var defaultOptions$1 = {
	  title: '',
	  message: '',
	  leftBtnText: '取消',
	  showLeftBtn: false,
	  leftBtnFn: null,
	  rightBtnText: '确认',
	  showRightBtn: true,
	  rightBtnFn: null,
	  overlay: true,
	  overlayColor: 'rgba(0, 0, 0, 0.7)',
	  closeOnClickOverlay: false
	};

	var currentOptions$1 = _objectSpread$1({}, defaultOptions$1);

	function _showDialog(options) {
	  if (!instance$1) {
	    instance$1 = _createInstance$1();
	    instance$1.vm = instance$1.$mount();
	    document.body.appendChild(instance$1.$el);
	  }

	  Object.assign(instance$1.$data, _objectSpread$1({}, currentOptions$1, {}, options));
	  Vue.nextTick(function () {
	    instance$1.show();
	  });
	  return instance$1;
	}

	function _hideToast$1() {
	  if (!instance$1) return;
	  Vue.nextTick(function () {
	    instance$1.hide();
	  });
	  return instance$1;
	}

	function _createInstance$1() {
	  var options = _objectSpread$1({}, currentOptions$1);

	  return new DialogConstructor({
	    data: options
	  });
	}

	var Dialog = function Dialog(options) {
	  return _showDialog(options);
	};

	Dialog.alert = function (options) {
	  return _showDialog(options);
	};

	Dialog.confirm = function (options) {
	  return _showDialog(_objectSpread$1({
	    showLeftBtn: true
	  }, options));
	};

	Dialog.clear = function () {
	  return _hideToast$1();
	};

	Dialog.setDefaultOptions = function (options) {
	  Object.assign(currentOptions$1, options);
	};

	Dialog.resetDefaultOptions = function () {
	  Object.assign(currentOptions$1, defaultOptions$1);
	};

	Dialog.install = function (Vue) {
	  Vue.prototype['$dialog'] = Toast;
	};

	function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
	var components = [__vue_component__, __vue_component__$1, __vue_component__$2, __vue_component__$3, __vue_component__$4, __vue_component__$5, __vue_component__$6, __vue_component__$7, __vue_component__$8];
	var methods = [{
	  name: 'toast',
	  method: Toast$1
	}, {
	  name: 'dialog',
	  method: Dialog
	}];

	var install = function install(Vue) {
	  if (install.installed) return;
	  install.installed = true;
	  components.map(function (component) {
	    return Vue.component(component.name, component);
	  });
	  methods.map(function (item) {
	    return Vue.prototype["$".concat(item.name)] = item.method;
	  });
	};

	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	}

	var index = _objectSpread$2({
	  install: install
	}, components);

	return index;

})));
