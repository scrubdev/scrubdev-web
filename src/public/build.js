/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueRouter = __webpack_require__(70);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _vueResource = __webpack_require__(71);

	var _vueResource2 = _interopRequireDefault(_vueResource);

	var _iscroll = __webpack_require__(72);

	var _iscroll2 = _interopRequireDefault(_iscroll);

	var _jquery = __webpack_require__(44);

	var _jquery2 = _interopRequireDefault(_jquery);

	__webpack_require__(73);

	var _routes = __webpack_require__(74);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vueRouter2.default);
	_vue2.default.use(_vueResource2.default);

	var App = _vue2.default.extend({
	    methods: {
	        hidedrawer: function hidedrawer() {
	            (0, _jquery2.default)(".drawer").drawer("close");
	        }
	    }
	});

	var Router = new _vueRouter2.default({});
	Router.map(_routes2.default);

	Router.start(App, "body");
	(0, _jquery2.default)(".drawer").drawer();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);
	var extend = _.extend;

	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefiexed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

	function Vue(options) {
	  this._init(options);
	}

	/**
	 * Mixin global API
	 */

	extend(Vue, __webpack_require__(11));

	/**
	 * Vue and every constructor that extends Vue has an
	 * associated options object, which can be accessed during
	 * compilation steps as `this.constructor.options`.
	 *
	 * These can be seen as the default options of every
	 * Vue instance.
	 */

	Vue.options = {
	  replace: true,
	  directives: __webpack_require__(27),
	  elementDirectives: __webpack_require__(51),
	  filters: __webpack_require__(54),
	  transitions: {},
	  components: {},
	  partials: {}
	};

	/**
	 * Build up the prototype
	 */

	var p = Vue.prototype;

	/**
	 * $data has a setter which does a bunch of
	 * teardown/setup work
	 */

	Object.defineProperty(p, '$data', {
	  get: function get() {
	    return this._data;
	  },
	  set: function set(newData) {
	    if (newData !== this._data) {
	      this._setData(newData);
	    }
	  }
	});

	/**
	 * Mixin internal instance methods
	 */

	extend(p, __webpack_require__(56));
	extend(p, __webpack_require__(57));
	extend(p, __webpack_require__(58));
	extend(p, __webpack_require__(62));
	extend(p, __webpack_require__(64));

	/**
	 * Mixin public API methods
	 */

	extend(p, __webpack_require__(65));
	extend(p, __webpack_require__(66));
	extend(p, __webpack_require__(67));
	extend(p, __webpack_require__(68));
	extend(p, __webpack_require__(69));

	module.exports = _.Vue = Vue;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var lang = __webpack_require__(3);
	var extend = lang.extend;

	extend(exports, lang);
	extend(exports, __webpack_require__(4));
	extend(exports, __webpack_require__(5));
	extend(exports, __webpack_require__(8));
	extend(exports, __webpack_require__(9));
	extend(exports, __webpack_require__(10));

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * Check is a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	exports.isReserved = function (str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	};

	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

	exports.toString = function (value) {
	  return value == null ? '' : value.toString();
	};

	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	exports.toNumber = function (value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	};

	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

	exports.toBoolean = function (value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	};

	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

	exports.stripQuotes = function (str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : false;
	};

	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	exports.camelize = function (str) {
	  return str.replace(/-(\w)/g, toUpper);
	};

	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	exports.hyphenate = function (str) {
	  return str.replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
	};

	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var classifyRE = /(?:^|[-_\/])(\w)/g;
	exports.classify = function (str) {
	  return str.replace(classifyRE, toUpper);
	};

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	exports.bind = function (fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	};

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	exports.toArray = function (list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	};

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	exports.extend = function (to, from) {
	  for (var key in from) {
	    to[key] = from[key];
	  }
	  return to;
	};

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	exports.isObject = function (obj) {
	  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	};

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString;
	exports.isPlainObject = function (obj) {
	  return toString.call(obj) === '[object Object]';
	};

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	exports.isArray = Array.isArray;

	/**
	 * Define a non-enumerable property
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	exports.define = function (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	};

	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

	exports.debounce = function (func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	};

	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

	exports.indexOf = function (arr, obj) {
	  for (var i = 0, l = arr.length; i < l; i++) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	exports.cancellable = function (fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	// can we use __proto__?
	exports.hasProto = '__proto__' in {};

	// Browser environment sniffing
	var inBrowser = exports.inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

	exports.isIE9 = inBrowser && navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0;

	exports.isAndroid = inBrowser && navigator.userAgent.toLowerCase().indexOf('android') > 0;

	// Transition property/event sniffing
	if (inBrowser && !exports.isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  exports.transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  exports.transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  exports.animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  exports.animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */

	exports.nextTick = function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function handle() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined') {
	    var counter = 1;
	    var observer = new MutationObserver(handle);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function timerFunc() {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    timerFunc = setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(handle, 0);
	  };
	}();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(2);
	var config = __webpack_require__(7);

	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	exports.query = function (el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && _.warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	};

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed byy doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	exports.inDoc = function (node) {
	  var doc = document.documentElement;
	  var parent = node && node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	};

	/**
	 * Extract an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} attr
	 */

	exports.attr = function (node, attr) {
	  attr = config.prefix + attr;
	  var val = node.getAttribute(attr);
	  if (val !== null) {
	    node.removeAttribute(attr);
	  }
	  return val;
	};

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	exports.before = function (el, target) {
	  target.parentNode.insertBefore(el, target);
	};

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	exports.after = function (el, target) {
	  if (target.nextSibling) {
	    exports.before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	};

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	exports.remove = function (el) {
	  el.parentNode.removeChild(el);
	};

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	exports.prepend = function (el, target) {
	  if (target.firstChild) {
	    exports.before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	};

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	exports.replace = function (target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	};

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	exports.on = function (el, event, cb) {
	  el.addEventListener(event, cb);
	};

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	exports.off = function (el, event, cb) {
	  el.removeEventListener(event, cb);
	};

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */

	exports.addClass = function (el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim());
	    }
	  }
	};

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */

	exports.removeClass = function (el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    el.setAttribute('class', cur.trim());
	  }
	};

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element}
	 */

	exports.extractContent = function (el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (exports.isTemplate(el) && el.content instanceof DocumentFragment) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    exports.trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	};

	/**
	 * Trim possible empty head/tail textNodes inside a parent.
	 *
	 * @param {Node} node
	 */

	exports.trimNode = function (node) {
	  trim(node, node.firstChild);
	  trim(node, node.lastChild);
	};

	function trim(parent, node) {
	  if (node && node.nodeType === 3 && !node.data.trim()) {
	    parent.removeChild(node);
	  }
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	exports.isTemplate = function (el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	};

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - component
	 * - repeat
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	exports.createAnchor = function (content, persist) {
	  return config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function cachedSetTimeout() {
	            throw new Error('setTimeout is not defined');
	        };
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function cachedClearTimeout() {
	            throw new Error('clearTimeout is not defined');
	        };
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	  /**
	   * The prefix to look for when parsing directives.
	   *
	   * @type {String}
	   */

	  prefix: 'v-',

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Strict mode.
	   * Disables asset lookup in the view parent chain.
	   */

	  strict: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether allow observer to alter data objects'
	   * __proto__.
	   *
	   * @type {Boolean}
	   */

	  proto: true,

	  /**
	   * Whether to parse mustache tags in templates.
	   *
	   * @type {Boolean}
	   */

	  interpolate: true,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

	};

	/**
	 * Interpolation delimiters.
	 * We need to mark the changed flag so that the text parser
	 * knows it needs to recompile the regex.
	 *
	 * @type {Array<String>}
	 */

	var delimiters = ['{{', '}}'];
	Object.defineProperty(module.exports, 'delimiters', {
	  get: function get() {
	    return delimiters;
	  },
	  set: function set(val) {
	    delimiters = val;
	    this._delimitersChanged = true;
	  }
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(2);
	var config = __webpack_require__(7);
	var extend = _.extend;

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

	var strats = Object.create(null);

	/**
	 * Helper that recursively merges two data objects together.
	 */

	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!to.hasOwnProperty(key)) {
	      to.$add(key, fromVal);
	    } else if (_.isObject(toVal) && _.isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}

	/**
	 * Data
	 */

	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && _.warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && _.warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */

	strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.props = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : _.isArray(childVal) ? childVal : [childVal] : parentVal;
	};

	/**
	 * 0.11 deprecation warning
	 */

	strats.paramAttributes = function () {
	  /* istanbul ignore next */
	  process.env.NODE_ENV !== 'production' && _.warn('"paramAttributes" option has been deprecated in 0.12. ' + 'Use "props" instead.');
	};

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !_.isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};

	/**
	 * Other object hashes.
	 */

	strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(parentVal);
	  extend(ret, childVal);
	  return ret;
	};

	/**
	 * Default strategy.
	 */

	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var def;
	    var ids = Object.keys(components);
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (_.commonTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && _.warn('Do not use built-in HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      def = components[key];
	      if (_.isPlainObject(def)) {
	        def.id = def.id || key;
	        components[key] = def._Ctor || (def._Ctor = _.Vue.extend(def));
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

	function guardProps(options) {
	  var props = options.props;
	  if (_.isPlainObject(props)) {
	    options.props = Object.keys(props).map(function (key) {
	      var val = props[key];
	      if (!_.isPlainObject(val)) {
	        val = { type: val };
	      }
	      val.name = key;
	      return val;
	    });
	  } else if (_.isArray(props)) {
	    options.props = props.map(function (prop) {
	      return typeof prop === 'string' ? { name: prop } : prop;
	    });
	  }
	}

	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

	function guardArrayAssets(assets) {
	  if (_.isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = asset.id || asset.options && asset.options.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && _.warn('Array-syntax assets must provide an id field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

	exports.mergeOptions = function merge(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  var options = {};
	  var key;
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = merge(parent, child.mixins[i], vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!parent.hasOwnProperty(key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	};

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @return {Object|Function}
	 */

	exports.resolveAsset = function resolve(options, type, id) {
	  var camelizedId = _.camelize(id);
	  var asset = options[type][id] || options[type][camelizedId];
	  while (!asset && options._parent && (!config.strict || options._repeat)) {
	    options = options._parent.$options;
	    asset = options[type][id] || options[type][camelizedId];
	  }
	  return asset;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _ = __webpack_require__(2);

	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {String|undefined}
	 */

	exports.commonTagRE = /^(div|p|span|img|a|br|ul|ol|li|h1|h2|h3|h4|h5|code|pre)$/;
	exports.checkComponent = function (el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (tag === 'component') {
	    // dynamic syntax
	    var exp = el.getAttribute('is');
	    el.removeAttribute('is');
	    return exp;
	  } else if (!exports.commonTagRE.test(tag) && _.resolveAsset(options, 'components', tag)) {
	    return tag;
	    /* eslint-disable no-cond-assign */
	  } else if (tag = _.attr(el, 'component')) {
	    /* eslint-enable no-cond-assign */
	    return tag;
	  }
	};

	/**
	 * Set a prop's initial value on a vm and its data object.
	 * The vm may have inherit:true so we need to make sure
	 * we don't accidentally overwrite parent value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	exports.initProp = function (vm, prop, value) {
	  if (exports.assertProp(prop, value)) {
	    var key = prop.path;
	    if (key in vm) {
	      _.define(vm, key, value, true);
	    } else {
	      vm[key] = value;
	    }
	    vm._data[key] = value;
	  }
	};

	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 */

	exports.assertProp = function (prop, value) {
	  // if a prop is not provided and is not required,
	  // skip the check.
	  if (prop.raw === null && !prop.required) {
	    return true;
	  }
	  var options = prop.options;
	  var type = options.type;
	  var valid = true;
	  var expectedType;
	  if (type) {
	    if (type === String) {
	      expectedType = 'string';
	      valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === expectedType;
	    } else if (type === Number) {
	      expectedType = 'number';
	      valid = typeof value === 'number';
	    } else if (type === Boolean) {
	      expectedType = 'boolean';
	      valid = typeof value === 'boolean';
	    } else if (type === Function) {
	      expectedType = 'function';
	      valid = typeof value === 'function';
	    } else if (type === Object) {
	      expectedType = 'object';
	      valid = _.isPlainObject(value);
	    } else if (type === Array) {
	      expectedType = 'array';
	      valid = _.isArray(value);
	    } else {
	      valid = value instanceof type;
	    }
	  }
	  if (!valid) {
	    process.env.NODE_ENV !== 'production' && _.warn('Invalid prop: type check failed for ' + prop.path + '="' + prop.raw + '".' + ' Expected ' + formatType(expectedType) + ', got ' + formatValue(value) + '.');
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator.call(null, value)) {
	      process.env.NODE_ENV !== 'production' && _.warn('Invalid prop: custom validator check failed for ' + prop.path + '="' + prop.raw + '"');
	      return false;
	    }
	  }
	  return true;
	};

	function formatType(val) {
	  return val ? val.charAt(0).toUpperCase() + val.slice(1) : 'custom type';
	}

	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	/**
	 * Enable debug utilities.
	 */

	if (process.env.NODE_ENV !== 'production') {

	  var config = __webpack_require__(7);
	  var hasConsole = typeof console !== 'undefined';

	  /**
	   * Log a message.
	   *
	   * @param {String} msg
	   */

	  exports.log = function (msg) {
	    if (hasConsole && config.debug) {
	      console.log('[Vue info]: ' + msg);
	    }
	  };

	  /**
	   * We've got a problem here.
	   *
	   * @param {String} msg
	   */

	  exports.warn = function (msg, e) {
	    if (hasConsole && (!config.silent || config.debug)) {
	      console.warn('[Vue warn]: ' + msg);
	      /* istanbul ignore if */
	      if (config.debug) {
	        console.warn((e || new Error('Warning Stack Trace')).stack);
	      }
	    }
	  };

	  /**
	   * Assert asset exists
	   */

	  exports.assertAsset = function (val, type, id) {
	    /* istanbul ignore if */
	    if (type === 'directive') {
	      if (id === 'with') {
	        exports.warn('v-with has been deprecated in ^0.12.0. ' + 'Use props instead.');
	        return;
	      }
	      if (id === 'events') {
	        exports.warn('v-events has been deprecated in ^0.12.0. ' + 'Pass down methods as callback props instead.');
	        return;
	      }
	    }
	    if (!val) {
	      exports.warn('Failed to resolve ' + type + ': ' + id);
	    }
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);
	var config = __webpack_require__(7);

	/**
	 * Expose useful internals
	 */

	exports.util = _;
	exports.config = config;
	exports.nextTick = _.nextTick;
	exports.compiler = __webpack_require__(12);

	exports.parsers = {
	  path: __webpack_require__(22),
	  text: __webpack_require__(15),
	  template: __webpack_require__(24),
	  directive: __webpack_require__(17),
	  expression: __webpack_require__(21)
	};

	/**
	 * Each instance constructor, including Vue, has a unique
	 * cid. This enables us to create wrapped "child
	 * constructors" for prototypal inheritance and cache them.
	 */

	exports.cid = 0;
	var cid = 1;

	/**
	 * Class inheritance
	 *
	 * @param {Object} extendOptions
	 */

	exports.extend = function (extendOptions) {
	  extendOptions = extendOptions || {};
	  var Super = this;
	  var Sub = createClass(extendOptions.name || Super.options.name || 'VueComponent');
	  Sub.prototype = Object.create(Super.prototype);
	  Sub.prototype.constructor = Sub;
	  Sub.cid = cid++;
	  Sub.options = _.mergeOptions(Super.options, extendOptions);
	  Sub['super'] = Super;
	  // allow further extension
	  Sub.extend = Super.extend;
	  // create asset registers, so extended classes
	  // can have their private assets too.
	  config._assetTypes.forEach(function (type) {
	    Sub[type] = Super[type];
	  });
	  return Sub;
	};

	/**
	 * A function that returns a sub-class constructor with the
	 * given name. This gives us much nicer output when
	 * logging instances in the console.
	 *
	 * @param {String} name
	 * @return {Function}
	 */

	function createClass(name) {
	  return new Function('return function ' + _.classify(name) + ' (options) { this._init(options) }')();
	}

	/**
	 * Plugin system
	 *
	 * @param {Object} plugin
	 */

	exports.use = function (plugin) {
	  // additional parameters
	  var args = _.toArray(arguments, 1);
	  args.unshift(this);
	  if (typeof plugin.install === 'function') {
	    plugin.install.apply(plugin, args);
	  } else {
	    plugin.apply(null, args);
	  }
	  return this;
	};

	/**
	 * Create asset registration methods with the following
	 * signature:
	 *
	 * @param {String} id
	 * @param {*} definition
	 */

	config._assetTypes.forEach(function (type) {
	  exports[type] = function (id, definition) {
	    if (!definition) {
	      return this.options[type + 's'][id];
	    } else {
	      if (type === 'component' && _.isPlainObject(definition)) {
	        definition.name = id;
	        definition = _.Vue.extend(definition);
	      }
	      this.options[type + 's'][id] = definition;
	    }
	  };
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);

	_.extend(exports, __webpack_require__(13));
	_.extend(exports, __webpack_require__(26));

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(2);
	var compileProps = __webpack_require__(14);
	var config = __webpack_require__(7);
	var textParser = __webpack_require__(15);
	var dirParser = __webpack_require__(17);
	var templateParser = __webpack_require__(24);
	var resolveAsset = _.resolveAsset;
	var componentDef = __webpack_require__(25);

	// terminal directives
	var terminalDirectives = ['repeat', 'if'];

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @param {Vue} [host] - host vm of transcluded content
	 * @return {Function}
	 */

	exports.compile = function (el, options, partial, host) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && el.tagName !== 'SCRIPT' && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn(vm, el) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = _.toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function () {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host);
	      if (childLinkFn) childLinkFn(vm, childNodes, host);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	};

	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

	function linkAndCapture(linker, vm) {
	  var originalDirCount = vm._directives.length;
	  linker();
	  return vm._directives.slice(originalDirCount);
	}

	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  return function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  };
	}

	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (!destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}

	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function}
	 */

	exports.compileAndLinkProps = function (vm, el, props) {
	  var propsLinkFn = compileProps(el, props);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, null);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	};

	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function}
	 */

	exports.compileRoot = function (el, options) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs) {
	        contextLinkFn = compileDirectives(containerAttrs, options);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  }

	  return function rootLinkFn(vm, el) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el);
	      }, context);
	    }

	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	};

	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && node.tagName !== 'SCRIPT') {
	    return compileElement(node, options);
	  } else if (type === 3 && config.interpolate && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}

	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as a v-attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    if (textParser.parse(el.value)) {
	      el.setAttribute('value', el.value);
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  // check terminal directives (repeat & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(el.attributes, options);
	  }
	  return linkFn;
	}

	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

	function compileTextNode(node, options) {
	  var tokens = textParser.parse(node.data);
	  if (!tokens) {
	    return null;
	  }
	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}

	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    token.type = type;
	    token.def = resolveAsset(options, 'directives', type);
	    token.descriptor = dirParser.parse(token.value)[0];
	  }
	  return el;
	}

	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = _.toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = vm.$eval(value);
	          if (token.html) {
	            _.replace(node, templateParser.parse(value, true));
	          } else {
	            node.data = value;
	          }
	        } else {
	          vm._bindDir(token.type, node, token.descriptor, token.def);
	        }
	      }
	    }
	    _.replace(el, fragClone);
	  };
	}

	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}

	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = _.toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host);
	      }
	    }
	  };
	}

	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (_.commonTagRE.test(tag)) return;
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}

	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Boolean} hasAttrs
	 * @return {Function|undefined}
	 */

	function checkComponent(el, options, hasAttrs) {
	  var componentId = _.checkComponent(el, options, hasAttrs);
	  if (componentId) {
	    var componentLinkFn = function componentLinkFn(vm, el, host) {
	      vm._bindDir('component', el, {
	        expression: componentId
	      }, componentDef, host);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}

	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

	function checkTerminalDirectives(el, options) {
	  if (_.attr(el, 'pre') !== null) {
	    return skip;
	  }
	  var value, dirName;
	  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
	    dirName = terminalDirectives[i];
	    if ((value = _.attr(el, dirName)) !== null) {
	      return makeTerminalNodeLinkFn(el, dirName, value, options);
	    }
	  }
	}

	function skip() {}
	skip.terminal = true;

	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} [def]
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn(el, dirName, value, options, def) {
	  var descriptor = dirParser.parse(value)[0];
	  // no need to call resolveAsset since terminal directives
	  // are always internal
	  def = def || options.directives[dirName];
	  var fn = function terminalNodeLinkFn(vm, el, host) {
	    vm._bindDir(dirName, el, descriptor, def, host);
	  };
	  fn.terminal = true;
	  return fn;
	}

	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, dir, dirName, dirDef;
	  while (i--) {
	    attr = attrs[i];
	    name = attr.name;
	    value = attr.value;
	    if (name.indexOf(config.prefix) === 0) {
	      dirName = name.slice(config.prefix.length);
	      dirDef = resolveAsset(options, 'directives', dirName);
	      if (process.env.NODE_ENV !== 'production') {
	        _.assertAsset(dirDef, 'directive', dirName);
	      }
	      if (dirDef) {
	        dirs.push({
	          name: dirName,
	          descriptors: dirParser.parse(value),
	          def: dirDef
	        });
	      }
	    } else if (config.interpolate) {
	      dir = collectAttrDirective(name, value, options);
	      if (dir) {
	        dirs.push(dir);
	      }
	    }
	  }
	  // sort by priority, LOW to HIGH
	  if (dirs.length) {
	    dirs.sort(directiveComparator);
	    return makeNodeLinkFn(dirs);
	  }
	}

	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    var dir, j, k;
	    while (i--) {
	      dir = directives[i];
	      if (dir._link) {
	        // custom link fn
	        dir._link(vm, el);
	      } else {
	        k = dir.descriptors.length;
	        for (j = 0; j < k; j++) {
	          vm._bindDir(dir.name, el, dir.descriptors[j], dir.def, host);
	        }
	      }
	    }
	  };
	}

	/**
	 * Check an attribute for potential dynamic bindings,
	 * and return a directive object.
	 *
	 * Special case: class interpolations are translated into
	 * v-class instead v-attr, so that it can work with user
	 * provided v-class bindings.
	 *
	 * @param {String} name
	 * @param {String} value
	 * @param {Object} options
	 * @return {Object}
	 */

	function collectAttrDirective(name, value, options) {
	  var tokens = textParser.parse(value);
	  var isClass = name === 'class';
	  if (tokens) {
	    var dirName = isClass ? 'class' : 'attr';
	    var def = options.directives[dirName];
	    var i = tokens.length;
	    var allOneTime = true;
	    while (i--) {
	      var token = tokens[i];
	      if (token.tag && !token.oneTime) {
	        allOneTime = false;
	      }
	    }
	    return {
	      def: def,
	      _link: allOneTime ? function (vm, el) {
	        el.setAttribute(name, vm.$interpolate(value));
	      } : function (vm, el) {
	        var exp = textParser.tokensToExp(tokens, vm);
	        var desc = isClass ? dirParser.parse(exp)[0] : dirParser.parse(name + ':' + exp)[0];
	        if (isClass) {
	          desc._rawClass = value;
	        }
	        vm._bindDir(dirName, el, desc, def);
	      }
	    };
	  }
	}

	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */

	function directiveComparator(a, b) {
	  a = a.def.priority || 0;
	  b = b.def.priority || 0;
	  return a > b ? 1 : -1;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(2);
	var textParser = __webpack_require__(15);
	var propDef = __webpack_require__(18);
	var propBindingModes = __webpack_require__(7)._propBindingModes;

	// regexes
	var identRE = __webpack_require__(22).identRE;
	var dataAttrRE = /^data-/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;
	var literalValueRE = /^(true|false)$|^\d.*/;

	/**
	 * Compile param attributes on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @return {Function} propsLinkFn
	 */

	module.exports = function compileProps(el, propOptions) {
	  var props = [];
	  var i = propOptions.length;
	  var options, name, attr, value, path, prop, literal, single;
	  while (i--) {
	    options = propOptions[i];
	    name = options.name;
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = _.camelize(name.replace(dataAttrRE, ''));
	    if (!identRE.test(path)) {
	      process.env.NODE_ENV !== 'production' && _.warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.');
	      continue;
	    }
	    attr = _.hyphenate(name);
	    value = el.getAttribute(attr);
	    if (value === null) {
	      attr = 'data-' + attr;
	      value = el.getAttribute(attr);
	    }
	    // create a prop descriptor
	    prop = {
	      name: name,
	      raw: value,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY
	    };
	    if (value !== null) {
	      // important so that this doesn't get compiled
	      // again as a normal attribute binding
	      el.removeAttribute(attr);
	      var tokens = textParser.parse(value);
	      if (tokens) {
	        prop.dynamic = true;
	        prop.parentPath = textParser.tokensToExp(tokens);
	        // check prop binding type.
	        single = tokens.length === 1;
	        literal = literalValueRE.test(prop.parentPath);
	        // one time: {{* prop}}
	        if (literal || single && tokens[0].oneTime) {
	          prop.mode = propBindingModes.ONE_TIME;
	        } else if (!literal && single && tokens[0].twoWay) {
	          if (settablePathRE.test(prop.parentPath)) {
	            prop.mode = propBindingModes.TWO_WAY;
	          } else {
	            process.env.NODE_ENV !== 'production' && _.warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + prop.parentPath);
	          }
	        }
	        if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	          _.warn('Prop "' + name + '" expects a two-way binding type.');
	        }
	      }
	    } else if (options && options.required) {
	      process.env.NODE_ENV !== 'production' && _.warn('Missing required prop: ' + name);
	    }
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	};

	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, el) {
	    // store resolved props info
	    vm._props = {};
	    var i = props.length;
	    var prop, path, options, value;
	    while (i--) {
	      prop = props[i];
	      path = prop.path;
	      vm._props[path] = prop;
	      options = prop.options;
	      if (prop.raw === null) {
	        // initialize absent prop
	        _.initProp(vm, prop, getDefault(options));
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (vm._context) {
	          if (prop.mode === propBindingModes.ONE_TIME) {
	            // one time binding
	            value = vm._context.$get(prop.parentPath);
	            _.initProp(vm, prop, value);
	          } else {
	            // dynamic binding
	            vm._bindDir('prop', el, prop, propDef);
	          }
	        } else {
	          process.env.NODE_ENV !== 'production' && _.warn('Cannot bind dynamic prop on a root instance' + ' with no parent: ' + prop.name + '="' + prop.raw + '"');
	        }
	      } else {
	        // literal, cast it and just set once
	        var raw = prop.raw;
	        value = options.type === Boolean && raw === '' ? true
	        // do not cast emptry string.
	        // _.toNumber casts empty string to 0.
	        : raw.trim() ? _.toBoolean(_.toNumber(raw)) : raw;
	        _.initProp(vm, prop, value);
	      }
	    }
	  };
	}

	/**
	 * Get the default value of a prop.
	 *
	 * @param {Object} options
	 * @return {*}
	 */

	function getDefault(options) {
	  // no default, return undefined
	  if (!options.hasOwnProperty('default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options.default;
	  // warn against non-factory defaults for Object & Array
	  if (_.isObject(def)) {
	    process.env.NODE_ENV !== 'production' && _.warn('Object/Array as default prop values will be shared ' + 'across multiple instances. Use a factory function ' + 'to return the default value instead.');
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def() : def;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Cache = __webpack_require__(16);
	var config = __webpack_require__(7);
	var dirParser = __webpack_require__(17);
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache, tagRE, htmlRE, firstChar, lastChar;

	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}

	/**
	 * Compile the interpolation tag regex.
	 *
	 * @return {RegExp}
	 */

	function compileRegex() {
	  config._delimitersChanged = false;
	  var open = config.delimiters[0];
	  var close = config.delimiters[1];
	  firstChar = open.charAt(0);
	  lastChar = close.charAt(close.length - 1);
	  var firstCharRE = escapeRegex(firstChar);
	  var lastCharRE = escapeRegex(lastChar);
	  var openRE = escapeRegex(open);
	  var closeRE = escapeRegex(close);
	  tagRE = new RegExp(firstCharRE + '?' + openRE + '(.+?)' + closeRE + lastCharRE + '?', 'g');
	  htmlRE = new RegExp('^' + firstCharRE + openRE + '.*' + closeRE + lastCharRE + '$');
	  // reset cache
	  cache = new Cache(1000);
	}

	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

	exports.parse = function (text) {
	  if (config._delimitersChanged) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  text = text.replace(/\n/g, '');
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, value, first, oneTime, twoWay;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    first = match[1].charCodeAt(0);
	    oneTime = first === 42; // *
	    twoWay = first === 64; // @
	    value = oneTime || twoWay ? match[1].slice(1) : match[1];
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: htmlRE.test(match[0]),
	      oneTime: oneTime,
	      twoWay: twoWay
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	};

	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */

	exports.tokensToExp = function (tokens, vm) {
	  return tokens.length > 1 ? tokens.map(function (token) {
	    return formatToken(token, vm);
	  }).join('+') : formatToken(tokens[0], vm, true);
	};

	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} single
	 * @return {String}
	 */

	function formatToken(token, vm, single) {
	  return token.tag ? vm && token.oneTime ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}

	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = dirParser.parse(exp)[0];
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * A doubly linked list-based Least Recently Used (LRU)
	 * cache. Will keep most recently used items while
	 * discarding least recently used items when its limit is
	 * reached. This is a bare-bone version of
	 * Rasmus Andersson's js-lru:
	 *
	 *   https://github.com/rsms/js-lru
	 *
	 * @param {Number} limit
	 * @constructor
	 */

	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}

	var p = Cache.prototype;

	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

	p.put = function (key, value) {
	  var entry = {
	    key: key,
	    value: value
	  };
	  this._keymap[key] = entry;
	  if (this.tail) {
	    this.tail.newer = entry;
	    entry.older = this.tail;
	  } else {
	    this.head = entry;
	  }
	  this.tail = entry;
	  if (this.size === this.limit) {
	    return this.shift();
	  } else {
	    this.size++;
	  }
	};

	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	  }
	  return entry;
	};

	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};

	module.exports = Cache;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);
	var Cache = __webpack_require__(16);
	var cache = new Cache(1000);
	var argRE = /^[^\{\?]+$|^'[^']*'$|^"[^"]*"$/;
	var filterTokenRE = /[^\s'"]+|'[^']+'|"[^"]+"/g;
	var reservedArgRE = /^in$|^-?\d+/;

	/**
	 * Parser state
	 */

	var str;
	var c, i, l;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	var begin;
	var argIndex;
	var dirs;
	var dir;
	var lastFilterIndex;
	var arg;

	/**
	 * Push a directive object into the result Array
	 */

	function pushDir() {
	  dir.raw = str.slice(begin, i).trim();
	  if (dir.expression === undefined) {
	    dir.expression = str.slice(argIndex, i).trim();
	  } else if (lastFilterIndex !== begin) {
	    pushFilter();
	  }
	  if (i === 0 || dir.expression) {
	    dirs.push(dir);
	  }
	}

	/**
	 * Push a filter to the current directive object
	 */

	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}

	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

	function processFilterArg(arg) {
	  var stripped = reservedArgRE.test(arg) ? arg : _.stripQuotes(arg);
	  return {
	    value: stripped || arg,
	    dynamic: !stripped
	  };
	}

	/**
	 * Parse a directive string into an Array of AST-like
	 * objects representing directives.
	 *
	 * Example:
	 *
	 * "click: a = a + 1 | uppercase" will yield:
	 * {
	 *   arg: 'click',
	 *   expression: 'a = a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} str
	 * @return {Array<Object>}
	 */

	exports.parse = function (s) {

	  var hit = cache.get(s);
	  if (hit) {
	    return hit;
	  }

	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = begin = argIndex = 0;
	  lastFilterIndex = 0;
	  dirs = [];
	  dir = {};
	  arg = null;

	  for (i = 0, l = str.length; i < l; i++) {
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22) inDouble = !inDouble;
	    } else if (c === 0x2C && // comma
	    !paren && !curly && !square) {
	      // reached the end of a directive
	      pushDir();
	      // reset & skip the comma
	      dir = {};
	      begin = argIndex = lastFilterIndex = i + 1;
	    } else if (c === 0x3A && // colon
	    !dir.expression && !dir.arg) {
	      // argument
	      arg = str.slice(begin, i).trim();
	      // test for valid argument here
	      // since we may have caught stuff like first half of
	      // an object literal or a ternary expression.
	      if (argRE.test(arg)) {
	        argIndex = i + 1;
	        dir.arg = _.stripQuotes(arg) || arg;
	      }
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression === undefined) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(argIndex, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }

	  if (i === 0 || begin !== i) {
	    pushDir();
	  }

	  cache.put(s, dirs);
	  return dirs;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// NOTE: the prop internal directive is compiled and linked
	// during _initScope(), before the created hook is called.
	// The purpose is to make the initial prop values available
	// inside `created` hooks and `data` functions.

	var _ = __webpack_require__(2);
	var Watcher = __webpack_require__(19);
	var bindingModes = __webpack_require__(7)._propBindingModes;

	module.exports = {

	  bind: function bind() {

	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this._descriptor;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;

	    this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      if (_.assertProp(prop, val)) {
	        child[childKey] = val;
	      }
	    });

	    // set the child initial value.
	    var value = this.parentWatcher.value;
	    if (childKey === '$data') {
	      child._data = value;
	    } else {
	      _.initProp(child, prop, value);
	    }

	    // setup two-way binding
	    if (prop.mode === bindingModes.TWO_WAY) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parent.$set(parentKey, val);
	        });
	      });
	    }
	  },

	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(2);
	var config = __webpack_require__(7);
	var Dep = __webpack_require__(20);
	var expParser = __webpack_require__(21);
	var batcher = __webpack_require__(23);
	var uid = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String} expression
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 * @constructor
	 */

	function Watcher(vm, expOrFn, cb, options) {
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = isFn ? expOrFn.toString() : expOrFn;
	  this.cb = cb;
	  this.id = ++uid; // uid for batching
	  this.active = true;
	  options = options || {};
	  this.deep = !!options.deep;
	  this.user = !!options.user;
	  this.twoWay = !!options.twoWay;
	  this.lazy = !!options.lazy;
	  this.dirty = this.lazy;
	  this.filters = options.filters;
	  this.preProcess = options.preProcess;
	  this.deps = [];
	  this.newDeps = null;
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = expParser.parse(expOrFn, options.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}

	var p = Watcher.prototype;

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	p.addDep = function (dep) {
	  var newDeps = this.newDeps;
	  var old = this.deps;
	  if (_.indexOf(newDeps, dep) < 0) {
	    newDeps.push(dep);
	    var i = _.indexOf(old, dep);
	    if (i < 0) {
	      dep.addSub(this);
	    } else {
	      old[i] = null;
	    }
	  }
	};

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	p.get = function () {
	  this.beforeGet();
	  var vm = this.vm;
	  var value;
	  try {
	    value = this.getter.call(vm, vm);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      _.warn('Error when evaluating expression "' + this.expression + '". ' + (config.debug ? '' : 'Turn on debug mode to see stack trace.'), e);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = vm._applyFilters(value, null, this.filters, false);
	  }
	  this.afterGet();
	  return value;
	};

	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

	p.set = function (value) {
	  var vm = this.vm;
	  if (this.filters) {
	    value = vm._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(vm, vm, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      _.warn('Error when evaluating setter "' + this.expression + '"', e);
	    }
	  }
	};

	/**
	 * Prepare for dependency collection.
	 */

	p.beforeGet = function () {
	  Dep.target = this;
	  this.newDeps = [];
	};

	/**
	 * Clean up for dependency collection.
	 */

	p.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (dep) {
	      dep.removeSub(this);
	    }
	  }
	  this.deps = this.newDeps;
	  this.newDeps = null;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */

	p.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (!config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    batcher.push(this);
	  }
	};

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	p.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and Array watchers should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (_.isArray(value) || this.deep) && !this.shallow) {
	      var oldValue = this.value;
	      this.value = value;
	      this.cb(value, oldValue);
	    }
	    this.queued = this.shallow = false;
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	p.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */

	p.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	p.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // we can skip this if the vm if being destroyed
	    // which can improve teardown performance.
	    if (!this.vm._isBeingDestroyed) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {Object} obj
	 */

	function traverse(obj) {
	  var key, val, i;
	  for (key in obj) {
	    val = obj[key];
	    if (_.isArray(val)) {
	      i = val.length;
	      while (i--) {
	        traverse(val[i]);
	      }
	    } else if (_.isObject(val)) {
	      traverse(val);
	    }
	  }
	}

	module.exports = Watcher;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */

	function Dep() {
	  this.subs = [];
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;

	var p = Dep.prototype;

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	p.addSub = function (sub) {
	  this.subs.push(sub);
	};

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	p.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};

	/**
	 * Add self as a dependency to the target watcher.
	 */

	p.depend = function () {
	  Dep.target.addDep(this);
	};

	/**
	 * Notify all subscribers of a new value.
	 */

	p.notify = function () {
	  // stablize the subscriber list first
	  var subs = _.toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	module.exports = Dep;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(2);
	var Path = __webpack_require__(22);
	var Cache = __webpack_require__(16);
	var expressionCache = new Cache(1000);

	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'proctected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var pathReplaceRE = /[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g;
	var booleanLiteralRE = /^(true|false)$/;

	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

	var saved = [];

	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}

	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}

	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

	function restore(str, i) {
	  return saved[i];
	}

	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	function compileExpFns(exp, needSet) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && _.warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body).replace(pathReplaceRE, rewrite).replace(restoreRE, restore);
	  var getter = makeGetter(body);
	  if (getter) {
	    return {
	      get: getter,
	      body: body,
	      set: needSet ? makeSetter(body) : null
	    };
	  }
	}

	/**
	 * Compile getter setters for a simple path.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

	function compilePathFns(exp) {
	  var getter, path;
	  if (exp.indexOf('[') < 0) {
	    // really simple path
	    path = exp.split('.');
	    path.raw = exp;
	    getter = Path.compileGetter(path);
	  } else {
	    // do the real parsing
	    path = Path.parse(exp);
	    getter = path.get;
	  }
	  return {
	    get: getter,
	    // always generate setter for simple paths
	    set: function set(obj, val) {
	      Path.set(obj, path, val);
	    }
	  };
	}

	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeGetter(body) {
	  try {
	    return new Function('scope', 'return ' + body + ';');
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && _.warn('Invalid expression. ' + 'Generated function body: ' + body);
	  }
	}

	/**
	 * Build a setter function.
	 *
	 * This is only needed in rare situations like "a[b]" where
	 * a settable path requires dynamic evaluation.
	 *
	 * This setter function may throw error when called if the
	 * expression body is not a valid left-hand expression in
	 * assignment.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeSetter(body) {
	  try {
	    return new Function('scope', 'value', body + '=value;');
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && _.warn('Invalid setter function body: ' + body);
	  }
	}

	/**
	 * Check for setter existence on a cache hit.
	 *
	 * @param {Function} hit
	 */

	function checkSetter(hit) {
	  if (!hit.set) {
	    hit.set = makeSetter(hit.body);
	  }
	}

	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	exports.parse = function (exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet) {
	      checkSetter(hit);
	    }
	    return hit;
	  }
	  // we do a simple path check to optimize for them.
	  // the check fails valid paths with unusal whitespaces,
	  // but that's too rare and we don't care.
	  // also skip boolean literals and paths that start with
	  // global "Math"
	  var res = exports.isSimplePath(exp) ? compilePathFns(exp) : compileExpFns(exp, needSet);
	  expressionCache.put(exp, res);
	  return res;
	};

	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	exports.isSimplePath = function (exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat true/false as paths
	  !booleanLiteralRE.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(2);
	var Cache = __webpack_require__(16);
	var pathCache = new Cache(1000);
	var identRE = exports.identRE = /^[$_a-zA-Z]+[\w$]*$/;

	// actions
	var APPEND = 0;
	var PUSH = 1;

	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var BEFORE_ELEMENT = 4;
	var AFTER_ZERO = 5;
	var IN_INDEX = 6;
	var IN_SINGLE_QUOTE = 7;
	var IN_DOUBLE_QUOTE = 8;
	var IN_SUB_PATH = 9;
	var AFTER_ELEMENT = 10;
	var AFTER_PATH = 11;
	var ERROR = 12;

	var pathStateMachine = [];

	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [BEFORE_ELEMENT],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [BEFORE_ELEMENT],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};

	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [BEFORE_ELEMENT, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};

	pathStateMachine[BEFORE_ELEMENT] = {
	  'ws': [BEFORE_ELEMENT],
	  '0': [AFTER_ZERO, APPEND],
	  'number': [IN_INDEX, APPEND],
	  "'": [IN_SINGLE_QUOTE, APPEND, ''],
	  '"': [IN_DOUBLE_QUOTE, APPEND, ''],
	  'ident': [IN_SUB_PATH, APPEND, '*']
	};

	pathStateMachine[AFTER_ZERO] = {
	  'ws': [AFTER_ELEMENT, PUSH],
	  ']': [IN_PATH, PUSH]
	};

	pathStateMachine[IN_INDEX] = {
	  '0': [IN_INDEX, APPEND],
	  'number': [IN_INDEX, APPEND],
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	};

	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [AFTER_ELEMENT],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};

	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [AFTER_ELEMENT],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};

	pathStateMachine[IN_SUB_PATH] = {
	  'ident': [IN_SUB_PATH, APPEND],
	  '0': [IN_SUB_PATH, APPEND],
	  'number': [IN_SUB_PATH, APPEND],
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	};

	pathStateMachine[AFTER_ELEMENT] = {
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	};

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }

	  var code = ch.charCodeAt(0);

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;

	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }

	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }

	  return 'else';
	}

	/**
	 * Parse a string path into an array of segments
	 * Todo implement cache
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parsePath(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var c, newChar, key, type, transition, action, typeMap;

	  var actions = [];
	  actions[PUSH] = function () {
	    if (key === undefined) {
	      return;
	    }
	    keys.push(key);
	    key = undefined;
	  };
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };

	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }

	  while (mode != null) {
	    index++;
	    c = path[index];

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }

	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;

	    if (transition === ERROR) {
	      return; // parse error
	    }

	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar === '*' ? newChar + c : newChar;
	      action();
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}

	/**
	 * Format a accessor segment based on its type.
	 *
	 * @param {String} key
	 * @return {Boolean}
	 */

	function formatAccessor(key) {
	  if (identRE.test(key)) {
	    // identifier
	    return '.' + key;
	  } else if (+key === key >>> 0) {
	    // bracket index
	    return '[' + key + ']';
	  } else if (key.charAt(0) === '*') {
	    return '[o' + formatAccessor(key.slice(1)) + ']';
	  } else {
	    // bracket string
	    return '["' + key.replace(/"/g, '\\"') + '"]';
	  }
	}

	/**
	 * Compiles a getter function with a fixed path.
	 * The fixed path getter supresses errors.
	 *
	 * @param {Array} path
	 * @return {Function}
	 */

	exports.compileGetter = function (path) {
	  var body = 'return o' + path.map(formatAccessor).join('');
	  return new Function('o', body);
	};

	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	exports.parse = function (path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parsePath(path);
	    if (hit) {
	      hit.get = exports.compileGetter(hit);
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	};

	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

	exports.get = function (obj, path) {
	  path = exports.parse(path);
	  if (path) {
	    return path.get(obj);
	  }
	};

	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

	exports.set = function (obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = exports.parse(path);
	  }
	  if (!path || !_.isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = original[key.slice(1)];
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!_.isObject(obj)) {
	        warnNonExistent(path);
	        obj = {};
	        last.$add(key, obj);
	      }
	    } else {
	      if (_.isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        warnNonExistent(path);
	        obj.$add(key, val);
	      }
	    }
	  }
	  return true;
	};

	function warnNonExistent(path) {
	  process.env.NODE_ENV !== 'production' && _.warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(2);
	var config = __webpack_require__(7);

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	var internalQueueDepleted = false;

	/**
	 * Reset the batcher's state.
	 */

	function reset() {
	  queue = [];
	  userQueue = [];
	  has = {};
	  circular = {};
	  waiting = internalQueueDepleted = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */

	function flush() {
	  run(queue);
	  internalQueueDepleted = true;
	  run(userQueue);
	  reset();
	}

	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

	function run(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        queue.splice(has[id], 1);
	        _.warn('You may have an infinite update loop for watcher ' + 'with expression: ' + watcher.expression);
	      }
	    }
	  }
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

	exports.push = function (watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // if an internal watcher is pushed, but the internal
	    // queue is already depleted, we run it immediately.
	    if (internalQueueDepleted && !watcher.user) {
	      watcher.run();
	      return;
	    }
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      _.nextTick(flush);
	    }
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);
	var Cache = __webpack_require__(16);
	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);

	var map = {
	  _default: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};

	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isRealTemplate(node) {
	  return _.isTemplate(node) && node.content instanceof DocumentFragment;
	}

	var tagRE = /<([\w:]+)/;
	var entityRE = /&\w+;/;

	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @return {DocumentFragment}
	 */

	function stringToFragment(templateString) {
	  // try a cache hit first
	  var hit = templateCache.get(templateString);
	  if (hit) {
	    return hit;
	  }

	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE);
	  var entityMatch = entityRE.test(templateString);

	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {

	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map._default;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');

	    node.innerHTML = prefix + templateString.trim() + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }

	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }

	  templateCache.put(templateString, frag);
	  return frag;
	}

	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment.
	  if (isRealTemplate(node)) {
	    _.trimNode(node.content);
	    return node.content;
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clone = exports.clone(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clone.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  _.trimNode(frag);
	  return frag;
	}

	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/show_bug.cgi?id=137755
	var hasBrokenTemplate = _.inBrowser ? function () {
	  var a = document.createElement('div');
	  a.innerHTML = '<template>1</template>';
	  return !a.cloneNode(true).firstChild.innerHTML;
	}() : false;

	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = _.inBrowser ? function () {
	  var t = document.createElement('textarea');
	  t.placeholder = 't';
	  return t.cloneNode(true).value === 't';
	}() : false;

	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

	exports.clone = function (node) {
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var clone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      clone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = clone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(exports.clone(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	};

	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *    Possible values include:
	 *    - DocumentFragment object
	 *    - Node object of type Template
	 *    - id selector: '#some-template-id'
	 *    - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} clone
	 * @param {Boolean} noSelector
	 * @return {DocumentFragment|undefined}
	 */

	exports.parse = function (template, clone, noSelector) {
	  var node, frag;

	  // if the template is already a document fragment,
	  // do nothing
	  if (template instanceof DocumentFragment) {
	    _.trimNode(template);
	    return clone ? exports.clone(template) : template;
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!noSelector && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }

	  return frag && clone ? exports.clone(frag) : frag;
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(2);
	var config = __webpack_require__(7);
	var templateParser = __webpack_require__(24);

	module.exports = {

	  isLiteral: true,

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   v-component="comp"
	   *
	   * - dynamic:
	   *   v-component="{{currentView}}"
	   */

	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // create a ref anchor
	      this.anchor = _.createAnchor('v-component');
	      _.replace(this.el, this.anchor);
	      // check keep-alive options.
	      // If yes, instead of destroying the active vm when
	      // hiding (v-if) or switching (dynamic literal) it,
	      // we simply remove it from the DOM and save it in a
	      // cache object, with its constructor id as the key.
	      this.keepAlive = this._checkParam('keep-alive') != null;
	      // wait for event before insertion
	      this.waitForEvent = this._checkParam('wait-for');
	      // check ref
	      this.refID = this._checkParam(config.prefix + 'ref');
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this._checkParam('inline-template') !== null) {
	        // extract inline template as a DocumentFragment
	        this.template = _.extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // if static, build right now.
	      if (!this._isDynamicLiteral) {
	        this.resolveComponent(this.expression, _.bind(this.initStatic, this));
	      } else {
	        // check dynamic component params
	        this.transMode = this._checkParam('transition-mode');
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },

	  /**
	   * Initialize a static component.
	   */

	  initStatic: function initStatic() {
	    // wait-for
	    var anchor = this.anchor;
	    var options;
	    var waitFor = this.waitForEvent;
	    if (waitFor) {
	      options = {
	        created: function created() {
	          this.$once(waitFor, function () {
	            this.$before(anchor);
	          });
	        }
	      };
	    }
	    var child = this.build(options);
	    this.setCurrent(child);
	    if (!this.waitForEvent) {
	      child.$before(anchor);
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. v-component="{{view}}"
	   */

	  update: function update(value) {
	    this.setComponent(value);
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.unsetCurrent();
	    } else {
	      this.resolveComponent(value, _.bind(function () {
	        this.unbuild(true);
	        var options;
	        var self = this;
	        var waitFor = this.waitForEvent;
	        if (waitFor) {
	          options = {
	            created: function created() {
	              this.$once(waitFor, function () {
	                self.transition(this, cb);
	              });
	            }
	          };
	        }
	        var newComponent = this.build(options);
	        if (!waitFor) {
	          this.transition(newComponent, cb);
	        }
	      }, this));
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   */

	  resolveComponent: function resolveComponent(id, cb) {
	    var self = this;
	    this.pendingComponentCb = _.cancellable(function (Component) {
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(id, this.pendingComponentCb);
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function build(extraOptions) {
	    if (this.keepAlive) {
	      var cached = this.cache[this.Component.cid];
	      if (cached) {
	        return cached;
	      }
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        el: templateParser.clone(this.el),
	        template: this.template,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.template,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        _context: this.vm
	      };
	      // extra options
	      if (extraOptions) {
	        _.extend(options, extraOptions);
	      }
	      var parent = this._host || this.vm;
	      var child = parent.$addChild(options, this.Component);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      return child;
	    }
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function unbuild(defer) {
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    this.unsetCurrent();
	    this.setCurrent(target);
	    switch (self.transMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },

	  /**
	   * Set childVM and parent ref
	   */

	  setCurrent: function setCurrent(child) {
	    this.childVM = child;
	    var refID = child._refID || this.refID;
	    if (refID) {
	      this.vm.$[refID] = child;
	    }
	  },

	  /**
	   * Unset childVM and parent ref
	   */

	  unsetCurrent: function unsetCurrent() {
	    var child = this.childVM;
	    this.childVM = null;
	    var refID = child && child._refID || this.refID;
	    if (refID) {
	      this.vm.$[refID] = null;
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    this.unsetCurrent();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(2);
	var config = __webpack_require__(7);
	var templateParser = __webpack_require__(24);

	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-repeat.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	exports.transclude = function (el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (_.isTemplate(el)) {
	    el = templateParser.parse(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<content></content>';
	    }
	    if (options.template) {
	      options._content = _.extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (el instanceof DocumentFragment) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    _.prepend(_.createAnchor('v-start', true), el);
	    el.appendChild(_.createAnchor('v-end', true));
	  }
	  return el;
	};

	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = templateParser.parse(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && _.warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || _.resolveAsset(options, 'components', tag) || replacer.hasAttribute(config.prefix + 'component') ||
	      // element directive
	      _.resolveAsset(options, 'elementDirectives', tag) ||
	      // repeat block
	      replacer.hasAttribute(config.prefix + 'repeat')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && _.warn('Invalid template option: ' + template);
	  }
	}

	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return _.toArray(el.attributes);
	  }
	}

	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class') {
	      value = to.getAttribute(name) + ' ' + value;
	      to.setAttribute(name, value);
	    }
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// manipulation directives
	exports.text = __webpack_require__(28);
	exports.html = __webpack_require__(29);
	exports.attr = __webpack_require__(30);
	exports.show = __webpack_require__(31);
	exports['class'] = __webpack_require__(33);
	exports.el = __webpack_require__(34);
	exports.ref = __webpack_require__(35);
	exports.cloak = __webpack_require__(36);
	exports.style = __webpack_require__(37);
	exports.transition = __webpack_require__(38);

	// event listener directives
	exports.on = __webpack_require__(41);
	exports.model = __webpack_require__(42);

	// logic control directives
	exports.repeat = __webpack_require__(49);
	exports['if'] = __webpack_require__(50);

	// internal directives that should not be used directly
	// but we still want to expose them for advanced usage.
	exports._component = __webpack_require__(25);
	exports._prop = __webpack_require__(18);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);

	module.exports = {

	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },

	  update: function update(value) {
	    this.el[this.attr] = _.toString(value);
	  }
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);
	var templateParser = __webpack_require__(24);

	module.exports = {

	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = _.createAnchor('v-html');
	      _.replace(this.el, this.anchor);
	    }
	  },

	  update: function update(value) {
	    value = _.toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },

	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      _.remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = templateParser.parse(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = _.toArray(frag.childNodes);
	    _.before(frag, this.anchor);
	  }
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;

	module.exports = {

	  priority: 850,

	  update: function update(value) {
	    if (this.arg) {
	      this.setAttr(this.arg, value);
	    } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	      this.objectHandler(value);
	    }
	  },

	  objectHandler: function objectHandler(value) {
	    // cache object attrs so that only changed attrs
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var attr, val;
	    for (attr in cache) {
	      if (!(attr in value)) {
	        this.setAttr(attr, null);
	        delete cache[attr];
	      }
	    }
	    for (attr in value) {
	      val = value[attr];
	      if (val !== cache[attr]) {
	        cache[attr] = val;
	        this.setAttr(attr, val);
	      }
	    }
	  },

	  setAttr: function setAttr(attr, value) {
	    if (attr === 'value' && attr in this.el) {
	      if (!this.valueRemoved) {
	        this.el.removeAttribute(attr);
	        this.valueRemoved = true;
	      }
	      this.el.value = value;
	    } else if (value != null && value !== false) {
	      if (xlinkRE.test(attr)) {
	        this.el.setAttributeNS(xlinkNS, attr, value);
	      } else {
	        this.el.setAttribute(attr, value);
	      }
	    } else {
	      this.el.removeAttribute(attr);
	    }
	  }
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var transition = __webpack_require__(32);

	module.exports = function (value) {
	  var el = this.el;
	  transition.apply(el, value ? 1 : -1, function () {
	    el.style.display = value ? '' : 'none';
	  }, this.vm);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);

	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	exports.append = function (el, target, vm, cb) {
	  apply(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	};

	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	exports.before = function (el, target, vm, cb) {
	  apply(el, 1, function () {
	    _.before(el, target);
	  }, vm, cb);
	};

	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	exports.remove = function (el, vm, cb) {
	  apply(el, -1, function () {
	    _.remove(el);
	  }, vm, cb);
	};

	/**
	 * Remove by appending to another parent with transition.
	 * This is only used in block operations.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	exports.removeThenAppend = function (el, target, vm, cb) {
	  apply(el, -1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	};

	/**
	 * Append the childNodes of a fragment to target.
	 *
	 * @param {DocumentFragment} block
	 * @param {Node} target
	 * @param {Vue} vm
	 */

	exports.blockAppend = function (block, target, vm) {
	  var nodes = _.toArray(block.childNodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    exports.before(nodes[i], target, vm);
	  }
	};

	/**
	 * Remove a block of nodes between two edge nodes.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 */

	exports.blockRemove = function (start, end, vm) {
	  var node = start.nextSibling;
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    exports.remove(node, vm);
	    node = next;
	  }
	};

	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	var apply = exports.apply = function (el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !_.transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);
	var addClass = _.addClass;
	var removeClass = _.removeClass;

	module.exports = {

	  bind: function bind() {
	    // interpolations like class="{{abc}}" are converted
	    // to v-class, and we need to remove the raw,
	    // uninterpolated className at binding time.
	    var raw = this._descriptor._rawClass;
	    if (raw) {
	      this.prevKeys = raw.trim().split(/\s+/);
	    }
	  },

	  update: function update(value) {
	    if (this.arg) {
	      // single toggle
	      if (value) {
	        addClass(this.el, this.arg);
	      } else {
	        removeClass(this.el, this.arg);
	      }
	    } else {
	      if (value && typeof value === 'string') {
	        this.handleObject(stringToObject(value));
	      } else if (_.isPlainObject(value)) {
	        this.handleObject(value);
	      } else {
	        this.cleanup();
	      }
	    }
	  },

	  handleObject: function handleObject(value) {
	    this.cleanup(value);
	    var keys = this.prevKeys = Object.keys(value);
	    for (var i = 0, l = keys.length; i < l; i++) {
	      var key = keys[i];
	      if (value[key]) {
	        addClass(this.el, key);
	      } else {
	        removeClass(this.el, key);
	      }
	    }
	  },

	  cleanup: function cleanup(value) {
	    if (this.prevKeys) {
	      var i = this.prevKeys.length;
	      while (i--) {
	        var key = this.prevKeys[i];
	        if (!value || !value.hasOwnProperty(key)) {
	          removeClass(this.el, key);
	        }
	      }
	    }
	  }
	};

	function stringToObject(value) {
	  var res = {};
	  var keys = value.trim().split(/\s+/);
	  var i = keys.length;
	  while (i--) {
	    res[keys[i]] = true;
	  }
	  return res;
	}

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {

	  isLiteral: true,

	  bind: function bind() {
	    this.vm.$$[this.expression] = this.el;
	  },

	  unbind: function unbind() {
	    delete this.vm.$$[this.expression];
	  }
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(2);

	module.exports = {

	  isLiteral: true,

	  bind: function bind() {
	    var vm = this.el.__vue__;
	    if (!vm) {
	      process.env.NODE_ENV !== 'production' && _.warn('v-ref should only be used on a component root element.');
	      return;
	    }
	    // If we get here, it means this is a `v-ref` on a
	    // child, because parent scope `v-ref` is stripped in
	    // `v-component` already. So we just record our own ref
	    // here - it will overwrite parent ref in `v-component`,
	    // if any.
	    vm._refID = this.expression;
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var config = __webpack_require__(7);

	module.exports = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('hook:compiled', function () {
	      el.removeAttribute(config.prefix + 'cloak');
	    });
	  }
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _ = __webpack_require__(2);
	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var camelRE = /([a-z])([A-Z])/g;
	var testEl = null;
	var propCache = {};

	module.exports = {

	  deep: true,

	  update: function update(value) {
	    if (this.arg) {
	      this.setProp(this.arg, value);
	    } else {
	      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	        this.objectHandler(value);
	      } else {
	        this.el.style.cssText = value;
	      }
	    }
	  },

	  objectHandler: function objectHandler(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var prop, val;
	    for (prop in cache) {
	      if (!(prop in value)) {
	        this.setProp(prop, null);
	        delete cache[prop];
	      }
	    }
	    for (prop in value) {
	      val = value[prop];
	      if (val !== cache[prop]) {
	        cache[prop] = val;
	        this.setProp(prop, val);
	      }
	    }
	  },

	  setProp: function setProp(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        value = value.replace(importantRE, '').trim();
	      }
	      this.el.style.setProperty(prop, value, isImportant);
	    } else {
	      this.el.style.removeProperty(prop);
	    }
	  }

	};

	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}

	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function prefix(prop) {
	  prop = prop.replace(camelRE, '$1-$2').toLowerCase();
	  var camel = _.camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  if (camel in testEl.style) {
	    return prop;
	  }
	  var i = prefixes.length;
	  var prefixed;
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixes[i] + prop;
	    }
	  }
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);
	var Transition = __webpack_require__(39);

	module.exports = {

	  priority: 1000,
	  isLiteral: true,

	  bind: function bind() {
	    if (!this._isDynamicLiteral) {
	      this.update(this.expression);
	    }
	  },

	  update: function update(id, oldId) {
	    var el = this.el;
	    var vm = this.el.__vue__ || this.vm;
	    var hooks = _.resolveAsset(vm.$options, 'transitions', id);
	    id = id || 'v';
	    el.__v_trans = new Transition(el, id, hooks, vm);
	    if (oldId) {
	      _.removeClass(el, oldId + '-transition');
	    }
	    _.addClass(el, id + '-transition');
	  }
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);
	var queue = __webpack_require__(40);
	var addClass = _.addClass;
	var removeClass = _.removeClass;
	var transitionEndEvent = _.transitionEndEvent;
	var animationEndEvent = _.animationEndEvent;
	var transDurationProp = _.transitionProp + 'Duration';
	var animDurationProp = _.animationProp + 'Duration';

	var TYPE_TRANSITION = 1;
	var TYPE_ANIMATION = 2;

	var uid = 0;

	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */

	function Transition(el, id, hooks, vm) {
	  this.id = uid++;
	  this.el = el;
	  this.enterClass = id + '-enter';
	  this.leaveClass = id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.typeCache = {};
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = _.bind(self[m], self);
	  });
	}

	var p = Transition.prototype;

	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

	p.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.callHookWithCb('enter');
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  queue.push(this.enterNextTick);
	};

	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

	p.enterNextTick = function () {
	  this.justEntered = true;
	  _.nextTick(function () {
	    this.justEntered = false;
	  }, this);
	  var type = this.getCssTransitionType(this.enterClass);
	  var enterDone = this.enterDone;
	  if (type === TYPE_TRANSITION) {
	    // trigger transition by removing enter class now
	    removeClass(this.el, this.enterClass);
	    this.setupCssCb(transitionEndEvent, enterDone);
	  } else if (type === TYPE_ANIMATION) {
	    this.setupCssCb(animationEndEvent, enterDone);
	  } else if (!this.pendingJsCb) {
	    enterDone();
	  }
	};

	/**
	 * The "cleanup" phase of an entering transition.
	 */

	p.enterDone = function () {
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};

	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

	p.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.callHookWithCb('leave');
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      queue.push(this.leaveNextTick);
	    }
	  }
	};

	/**
	 * The "nextTick" phase of a leaving transition.
	 */

	p.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};

	/**
	 * The "cleanup" phase of a leaving transition.
	 */

	p.leaveDone = function () {
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};

	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

	p.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    _.off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};

	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

	p.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};

	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

	p.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = _.cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};

	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

	p.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false) {
	    return;
	  }
	  var type = this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};

	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

	p.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      _.off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  _.on(el, event, onEnd);
	};

	module.exports = Transition;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);
	var queue = [];
	var queued = false;

	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

	exports.push = function (job) {
	  queue.push(job);
	  if (!queued) {
	    queued = true;
	    _.nextTick(flush);
	  }
	};

	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue.length; i++) {
	    queue[i]();
	  }
	  queue = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(2);

	module.exports = {

	  acceptStatement: true,
	  priority: 700,

	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        _.on(self.el.contentWindow, self.arg, self.handler);
	      };
	      _.on(this.el, 'load', this.iframeBind);
	    }
	  },

	  update: function update(handler) {
	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && _.warn('Directive v-on="' + this.arg + ': ' + this.expression + '" expects a function value, ' + 'got ' + handler);
	      return;
	    }
	    this.reset();
	    var vm = this.vm;
	    this.handler = function (e) {
	      e.targetVM = vm;
	      vm.$event = e;
	      var res = handler(e);
	      vm.$event = null;
	      return res;
	    };
	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      _.on(this.el, this.arg, this.handler);
	    }
	  },

	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      _.off(el, this.arg, this.handler);
	    }
	  },

	  unbind: function unbind() {
	    this.reset();
	    _.off(this.el, 'load', this.iframeBind);
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(2);

	var handlers = {
	  text: __webpack_require__(43),
	  radio: __webpack_require__(46),
	  select: __webpack_require__(47),
	  checkbox: __webpack_require__(48)
	};

	module.exports = {

	  priority: 800,
	  twoWay: true,
	  handlers: handlers,

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   *     - TODO: more types may be supplied as a plugin
	   */

	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && _.warn('It seems you are using a read-only filter with ' + 'v-model. You might want to use a two-way filter ' + 'to ensure correct behavior.');
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn('v-model does not support element type: ' + tag);
	      return;
	    }
	    handler.bind.call(this);
	    this.update = handler.update;
	    this.unbind = handler.unbind;
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = _.resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	var _ = __webpack_require__(2);

	module.exports = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    // check params
	    // - lazy: update model on "change" instead of "input"
	    var lazy = this._checkParam('lazy') != null;
	    // - number: cast value into number when updating model.
	    var number = this._checkParam('number') != null;
	    // - debounce: debounce the input listener
	    var debounce = parseInt(this._checkParam('debounce'), 10);

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!_.isAndroid) {
	      this.onComposeStart = function () {
	        composing = true;
	      };
	      this.onComposeEnd = function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        self.listener();
	      };
	      _.on(el, 'compositionstart', this.onComposeStart);
	      _.on(el, 'compositionend', this.onComposeEnd);
	    }

	    function syncToModel() {
	      var val = number ? _.toNumber(el.value) : el.value;
	      self.set(val);
	    }

	    // if the directive has filters, we need to
	    // record cursor position and restore it after updating
	    // the input with the filtered value.
	    // also force update for type="range" inputs to enable
	    // "lock in range" (see #506)
	    if (this.hasRead || el.type === 'range') {
	      this.listener = function () {
	        if (composing) return;
	        var charsOffset;
	        // some HTML5 input types throw error here
	        try {
	          // record how many chars from the end of input
	          // the cursor was at
	          charsOffset = el.value.length - el.selectionStart;
	        } catch (e) {}
	        // Fix IE10/11 infinite update cycle
	        // https://github.com/yyx990803/vue/issues/592
	        /* istanbul ignore if */
	        if (charsOffset < 0) {
	          return;
	        }
	        syncToModel();
	        _.nextTick(function () {
	          // force a value update, because in
	          // certain cases the write filters output the
	          // same result for different input values, and
	          // the Observer set events won't be triggered.
	          var newVal = self._watcher.value;
	          self.update(newVal);
	          if (charsOffset != null) {
	            var cursorPos = _.toString(newVal).length - charsOffset;
	            el.setSelectionRange(cursorPos, cursorPos);
	          }
	        });
	      };
	    } else {
	      this.listener = function () {
	        if (composing) return;
	        syncToModel();
	      };
	    }

	    if (debounce) {
	      this.listener = _.debounce(this.listener, debounce);
	    }

	    // Now attach the main listener

	    this.event = lazy ? 'change' : 'input';
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      jQuery(el).on(this.event, this.listener);
	    } else {
	      _.on(el, this.event, this.listener);
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && _.isIE9) {
	      this.onCut = function () {
	        _.nextTick(self.listener);
	      };
	      this.onDel = function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      };
	      _.on(el, 'cut', this.onCut);
	      _.on(el, 'keyup', this.onDel);
	    }

	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this._initValue = number ? _.toNumber(el.value) : el.value;
	    }
	  },

	  update: function update(value) {
	    this.el.value = _.toString(value);
	  },

	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      jQuery(el).off(this.event, this.listener);
	    } else {
	      _.off(el, this.event, this.listener);
	    }
	    if (this.onComposeStart) {
	      _.off(el, 'compositionstart', this.onComposeStart);
	      _.off(el, 'compositionend', this.onComposeEnd);
	    }
	    if (this.onCut) {
	      _.off(el, 'cut', this.onCut);
	      _.off(el, 'keyup', this.onDel);
	    }
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};/*eslint-disable no-unused-vars*//*!
	 * jQuery JavaScript Library v3.1.0
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-07-07T21:44Z
	 */(function(global,factory){"use strict";if(( false?"undefined":_typeof(module))==="object"&&_typeof(module.exports)==="object"){// For CommonJS and CommonJS-like environments where a proper `window`
	// is present, execute the factory and get jQuery.
	// For environments that do not have a `window` with a `document`
	// (such as Node.js), expose a factory as module.exports.
	// This accentuates the need for the creation of a real `window`.
	// e.g. var jQuery = require("jquery")(window);
	// See ticket #14549 for more info.
	module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}return factory(w);};}else{factory(global);}// Pass this if window is not defined yet
	})(typeof window!=="undefined"?window:undefined,function(window,noGlobal){// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";var arr=[];var document=window.document;var getProto=Object.getPrototypeOf;var _slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var fnToString=hasOwn.toString;var ObjectFunctionString=fnToString.call(Object);var support={};function DOMEval(code,doc){doc=doc||document;var script=doc.createElement("script");script.text=code;doc.head.appendChild(script).parentNode.removeChild(script);}/* global Symbol */// Defining this global in .eslintrc would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module
	var version="3.1.0",// Define a local copy of jQuery
	jQuery=function jQuery(selector,context){// The jQuery object is actually just the init constructor 'enhanced'
	// Need init if jQuery is called (just allow error to be thrown if not included)
	return new jQuery.fn.init(selector,context);},// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,// Matches dashed string for camelizing
	rmsPrefix=/^-ms-/,rdashAlpha=/-([a-z])/g,// Used by jQuery.camelCase as callback to replace()
	fcamelCase=function fcamelCase(all,letter){return letter.toUpperCase();};jQuery.fn=jQuery.prototype={// The current version of jQuery being used
	jquery:version,constructor:jQuery,// The default length of a jQuery object is 0
	length:0,toArray:function toArray(){return _slice.call(this);},// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get:function get(num){return num!=null?// Return just the one element from the set
	num<0?this[num+this.length]:this[num]:// Return all the elements in a clean array
	_slice.call(this);},// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack:function pushStack(elems){// Build a new jQuery matched element set
	var ret=jQuery.merge(this.constructor(),elems);// Add the old object onto the stack (as a reference)
	ret.prevObject=this;// Return the newly-formed element set
	return ret;},// Execute a callback for every element in the matched set.
	each:function each(callback){return jQuery.each(this,callback);},map:function map(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function slice(){return this.pushStack(_slice.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},eq:function eq(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function end(){return this.prevObject||this.constructor();},// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;// Handle a deep copy situation
	if(typeof target==="boolean"){deep=target;// Skip the boolean and the target
	target=arguments[i]||{};i++;}// Handle case when target is a string or something (possible in deep copy)
	if((typeof target==="undefined"?"undefined":_typeof(target))!=="object"&&!jQuery.isFunction(target)){target={};}// Extend jQuery itself if only one argument is passed
	if(i===length){target=this;i--;}for(;i<length;i++){// Only deal with non-null/undefined values
	if((options=arguments[i])!=null){// Extend the base object
	for(name in options){src=target[name];copy=options[name];// Prevent never-ending loop
	if(target===copy){continue;}// Recurse if we're merging plain objects or arrays
	if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}// Never move original objects, clone them
	target[name]=jQuery.extend(deep,clone,copy);// Don't bring in undefined values
	}else if(copy!==undefined){target[name]=copy;}}}}// Return the modified object
	return target;};jQuery.extend({// Unique for each copy of jQuery on the page
	expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
	isReady:true,error:function error(msg){throw new Error(msg);},noop:function noop(){},isFunction:function isFunction(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray,isWindow:function isWindow(obj){return obj!=null&&obj===obj.window;},isNumeric:function isNumeric(obj){// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type=jQuery.type(obj);return(type==="number"||type==="string")&&// parseFloat NaNs numeric-cast false positives ("")
	// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	// subtraction forces infinities to NaN
	!isNaN(obj-parseFloat(obj));},isPlainObject:function isPlainObject(obj){var proto,Ctor;// Detect obvious negatives
	// Use toString instead of jQuery.type to catch host objects
	if(!obj||toString.call(obj)!=="[object Object]"){return false;}proto=getProto(obj);// Objects with no prototype (e.g., `Object.create( null )`) are plain
	if(!proto){return true;}// Objects with prototype are plain iff they were constructed by a global Object function
	Ctor=hasOwn.call(proto,"constructor")&&proto.constructor;return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString;},isEmptyObject:function isEmptyObject(obj){/* eslint-disable no-unused-vars */// See https://github.com/eslint/eslint/issues/6125
	var name;for(name in obj){return false;}return true;},type:function type(obj){if(obj==null){return obj+"";}// Support: Android <=2.3 only (functionish RegExp)
	return(typeof obj==="undefined"?"undefined":_typeof(obj))==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj==="undefined"?"undefined":_typeof(obj);},// Evaluates a script in a global context
	globalEval:function globalEval(code){DOMEval(code);},// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase:function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function each(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}return obj;},// Support: Android <=4.0 only
	trim:function trim(text){return text==null?"":(text+"").replace(rtrim,"");},// results is for internal usage only
	makeArray:function makeArray(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}return ret;},inArray:function inArray(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge:function merge(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}first.length=i;return first;},grep:function grep(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;// Go through the array, only saving the items
	// that pass the validator function
	for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}return matches;},// arg is for internal usage only
	map:function map(elems,callback,arg){var length,value,i=0,ret=[];// Go through the array, translating each of the items to their new values
	if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}// Go through every key on the object,
	}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}// Flatten any nested arrays
	return concat.apply([],ret);},// A global GUID counter for objects
	guid:1,// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy:function proxy(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if(!jQuery.isFunction(fn)){return undefined;}// Simulated bind
	args=_slice.call(arguments,2);proxy=function proxy(){return fn.apply(context||this,args.concat(_slice.call(arguments)));};// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:Date.now,// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support:support});if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length=!!obj&&"length"in obj&&obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}return type==="array"||length===0||typeof length==="number"&&length>0&&length-1 in obj;}var Sizzle=/*!
	 * Sizzle CSS Selector Engine v2.3.0
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-01-04
	 */function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,// Local document vars
	setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,// Instance-specific data
	expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function sortOrder(a,b){if(a===b){hasDuplicate=true;}return 0;},// Instance methods
	hasOwn={}.hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf=function indexOf(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// Regular expressions
	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace="[\\x20\\t\\r\\n\\f]",// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+// Operator (capture 2)
	"*([*^$|!~]?=)"+whitespace+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
	"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
	// 1. quoted (capture 3; capture 4 or capture 5)
	"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+// 2. simple (capture 6)
	"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+// 3. anything else (capture 2)
	".*"+")\\)|)",// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),// For use in libraries implementing .is()
	// We use this for POS matching in `select`
	"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function funescape(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;// NaN means non-codepoint
	// Support: Firefox<24
	// Workaround erroneous numeric interpretation of +"0x"
	return high!==high||escapedWhitespace?escaped:high<0?// BMP codepoint
	String.fromCharCode(high+0x10000):// Supplemental Plane codepoint (surrogate pair)
	String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,fcssescape=function fcssescape(ch,asCodePoint){if(asCodePoint){// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
	if(ch==="\0"){return"�";}// Control characters and (dependent upon position) numbers get escaped as code points
	return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ";}// Other potentially-special ASCII characters get backslash-escaped
	return"\\"+ch;},// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler=function unloadHandler(){setDocument();},disabledAncestor=addCombinator(function(elem){return elem.disabled===true;},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
	try{push.apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes);// Support: Android<4.0
	// Detect silently failing push.apply
	arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?// Leverage slice if possible
	function(target,els){push_native.apply(target,slice.call(els));}:// Support: IE<9
	// Otherwise append directly
	function(target,els){var j=target.length,i=0;// Can't trust NodeList.length
	while(target[j++]=els[i++]){}target.length=j-1;}};}function Sizzle(selector,context,results,seed){var m,i,elem,nid,match,groups,newSelector,newContext=context&&context.ownerDocument,// nodeType defaults to 9, since context defaults to document
	nodeType=context?context.nodeType:9;results=results||[];// Return early from calls with invalid selector or context
	if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}// Try to shortcut find operations (as opposed to filters) in HTML documents
	if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}context=context||document;if(documentIsHTML){// If the selector is sufficiently simple, try using a "get*By*" DOM method
	// (excepting DocumentFragment context, where the methods don't exist)
	if(nodeType!==11&&(match=rquickExpr.exec(selector))){// ID selector
	if(m=match[1]){// Document context
	if(nodeType===9){if(elem=context.getElementById(m)){// Support: IE, Opera, Webkit
	// TODO: identify versions
	// getElementById can match elements by name instead of ID
	if(elem.id===m){results.push(elem);return results;}}else{return results;}// Element context
	}else{// Support: IE, Opera, Webkit
	// TODO: identify versions
	// getElementById can match elements by name instead of ID
	if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}// Type selector
	}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;// Class selector
	}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}// Take advantage of querySelectorAll
	if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(nodeType!==1){newContext=context;newSelector=selector;// qSA looks outside Element context, which is not what we want
	// Thanks to Andrew Dupont for this workaround technique
	// Support: IE <=8
	// Exclude object elements
	}else if(context.nodeName.toLowerCase()!=="object"){// Capture the context ID, setting it first if necessary
	if(nid=context.getAttribute("id")){nid=nid.replace(rcssescape,fcssescape);}else{context.setAttribute("id",nid=expando);}// Prefix every selector in the list
	groups=tokenize(selector);i=groups.length;while(i--){groups[i]="#"+nid+" "+toSelector(groups[i]);}newSelector=groups.join(",");// Expand context for sibling selectors
	newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(nid===expando){context.removeAttribute("id");}}}}}}// All others
	return select(selector.replace(rtrim,"$1"),context,results,seed);}/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */function createCache(){var keys=[];function cache(key,value){// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
	if(keys.push(key+" ")>Expr.cacheLength){// Only keep the most recent entries
	delete cache[keys.shift()];}return cache[key+" "]=value;}return cache;}/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */function markFunction(fn){fn[expando]=true;return fn;}/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */function assert(fn){var el=document.createElement("fieldset");try{return!!fn(el);}catch(e){return false;}finally{// Remove from its parent by default
	if(el.parentNode){el.parentNode.removeChild(el);}// release memory in IE
	el=null;}}/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&a.sourceIndex-b.sourceIndex;// Use IE sourceIndex if available on both nodes
	if(diff){return diff;}// Check if b follows a
	if(cur){while(cur=cur.nextSibling){if(cur===b){return-1;}}}return a?1:-1;}/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */function createDisabledPseudo(disabled){// Known :disabled false positives:
	// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
	// not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function(elem){// Check form elements and option elements for explicit disabling
	return"label"in elem&&elem.disabled===disabled||"form"in elem&&elem.disabled===disabled||// Check non-disabled form elements for fieldset[disabled] ancestors
	"form"in elem&&elem.disabled===false&&(// Support: IE6-11+
	// Ancestry is covered for us
	elem.isDisabled===disabled||// Otherwise, assume any non-<option> under fieldset[disabled] is disabled
	/* jshint -W018 */elem.isDisabled!==!disabled&&("label"in elem||!disabledAncestor(elem))!==disabled);};}/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;// Match elements found at the specified indexes
	while(i--){if(seed[j=matchIndexes[i]]){seed[j]=!(matches[j]=seed[j]);}}});});}/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}// Expose support vars for convenience
	support=Sizzle.support={};/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */isXML=Sizzle.isXML=function(elem){// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */setDocument=Sizzle.setDocument=function(node){var hasCompare,subWindow,doc=node?node.ownerDocument||node:preferredDoc;// Return early if doc is invalid or already selected
	if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}// Update global variables
	document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if(preferredDoc!==document&&(subWindow=document.defaultView)&&subWindow.top!==subWindow){// Support: IE 11, Edge
	if(subWindow.addEventListener){subWindow.addEventListener("unload",unloadHandler,false);// Support: IE 9 - 10 only
	}else if(subWindow.attachEvent){subWindow.attachEvent("onunload",unloadHandler);}}/* Attributes
		---------------------------------------------------------------------- */// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes=assert(function(el){el.className="i";return!el.getAttribute("className");});/* getElement(s)By*
		---------------------------------------------------------------------- */// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName=assert(function(el){el.appendChild(document.createComment(""));return!el.getElementsByTagName("*").length;});// Support: IE<9
	support.getElementsByClassName=rnative.test(document.getElementsByClassName);// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById=assert(function(el){docElem.appendChild(el).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;});// ID find and filter
	if(support.getById){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var m=context.getElementById(id);return m?[m]:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};}else{// Support: IE6/7
	// getElementById is not reliable as a find shortcut
	delete Expr.find["ID"];Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};}// Tag
	Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);// DocumentFragment nodes don't have gEBTN
	}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
	results=context.getElementsByTagName(tag);// Filter out possible comments
	if(tag==="*"){while(elem=results[i++]){if(elem.nodeType===1){tmp.push(elem);}}return tmp;}return results;};// Class
	Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};/* QSA/matchesSelector
		---------------------------------------------------------------------- */// QSA and matchesSelector support
	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches=[];// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA=[];if(support.qsa=rnative.test(document.querySelectorAll)){// Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert(function(el){// Select is set to empty string on purpose
	// This is to test IE's treatment of not explicitly
	// setting a boolean content attribute,
	// since its presence should be enough
	// https://bugs.jquery.com/ticket/12359
	docElem.appendChild(el).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";// Support: IE8, Opera 11-12.16
	// Nothing should be selected when empty strings follow ^= or $= or *=
	// The test attribute must be unknown in Opera but "safe" for WinRT
	// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
	if(el.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}// Support: IE8
	// Boolean attributes and "value" are not treated correctly
	if(!el.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
	if(!el.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}// Webkit/Opera - :checked should return selected option elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	// IE8 throws error here and will not see later tests
	if(!el.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}// Support: Safari 8+, iOS 8+
	// https://bugs.webkit.org/show_bug.cgi?id=136851
	// In-page `selector#id sibling-combinator selector` fails
	if(!el.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(el){el.innerHTML="<a href='' disabled='disabled'></a>"+"<select disabled='disabled'><option/></select>";// Support: Windows 8 Native Apps
	// The type and name attributes are restricted during .innerHTML assignment
	var input=document.createElement("input");input.setAttribute("type","hidden");el.appendChild(input).setAttribute("name","D");// Support: IE8
	// Enforce case-sensitivity of name attribute
	if(el.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
	// IE8 throws error here and will not see later tests
	if(el.querySelectorAll(":enabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}// Support: IE9-11+
	// IE's :disabled selector does not pick up the children of disabled fieldsets
	docElem.appendChild(el).disabled=true;if(el.querySelectorAll(":disabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}// Opera 10-11 does not throw on post-comma invalid pseudos
	el.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}if(support.matchesSelector=rnative.test(matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)){assert(function(el){// Check to see if it's possible to do matchesSelector
	// on a disconnected node (IE 9)
	support.disconnectedMatch=matches.call(el,"*");// This should fail with an exception
	// Gecko does not error, returns false instead
	matches.call(el,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));/* Contains
		---------------------------------------------------------------------- */hasCompare=rnative.test(docElem.compareDocumentPosition);// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return true;}}}return false;};/* Sorting
		---------------------------------------------------------------------- */// Document order sorting
	sortOrder=hasCompare?function(a,b){// Flag for duplicate removal
	if(a===b){hasDuplicate=true;return 0;}// Sort on method existence if only one input has compareDocumentPosition
	var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}// Calculate position if both inputs belong to the same document
	compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):// Otherwise we know they are disconnected
	1;// Disconnected nodes
	if(compare&1||!support.sortDetached&&b.compareDocumentPosition(a)===compare){// Choose the first element that is related to our preferred document
	if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;}// Maintain original order
	return sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;}return compare&4?-1:1;}:function(a,b){// Exit early if the nodes are identical
	if(a===b){hasDuplicate=true;return 0;}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];// Parentless nodes are either documents or disconnected
	if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;// If the nodes are siblings, we can do a quick check
	}else if(aup===bup){return siblingCheck(a,b);}// Otherwise we need full lists of their ancestors for comparison
	cur=a;while(cur=cur.parentNode){ap.unshift(cur);}cur=b;while(cur=cur.parentNode){bp.unshift(cur);}// Walk down the tree looking for a discrepancy
	while(ap[i]===bp[i]){i++;}return i?// Do a sibling check if the nodes have a common ancestor
	siblingCheck(ap[i],bp[i]):// Otherwise nodes in our document sort first
	ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){// Set document vars if needed
	if((elem.ownerDocument||elem)!==document){setDocument(elem);}// Make sure that attribute selectors are quoted
	expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);// IE 9's matchesSelector returns false on disconnected nodes
	if(ret||support.disconnectedMatch||// As well, disconnected nodes are said to be in a document
	// fragment in IE 9
	elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){// Set document vars if needed
	if((context.ownerDocument||context)!==document){setDocument(context);}return contains(context,elem);};Sizzle.attr=function(elem,name){// Set document vars if needed
	if((elem.ownerDocument||elem)!==document){setDocument(elem);}var fn=Expr.attrHandle[name.toLowerCase()],// Don't get fooled by Object.prototype properties (jQuery #13807)
	val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.escape=function(sel){return(sel+"").replace(rcssescape,fcssescape);};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while(elem=results[i++]){if(elem===results[i]){j=duplicates.push(i);}}while(j--){results.splice(duplicates[j],1);}}// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput=null;return results;};/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){// If no nodeType, this is expected to be an array
	while(node=elem[i++]){// Do not traverse comment nodes
	ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){// Use textContent for elements
	// innerText usage removed for consistency of new lines (jQuery #11153)
	if(typeof elem.textContent==="string"){return elem.textContent;}else{// Traverse its children
	for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}// Do not include comment or processing instruction nodes
	return ret;};Expr=Sizzle.selectors={// Can be adjusted by the user
	cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function ATTR(match){match[1]=match[1].replace(runescape,funescape);// Move the given value to match[3] whether quoted or unquoted
	match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}return match.slice(0,4);},"CHILD":function CHILD(match){/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){// nth-* requires argument
	if(!match[3]){Sizzle.error(match[0]);}// numeric x and y parameters for Expr.filter.CHILD
	// remember that false/true cast respectively to 0/1
	match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+(match[7]+match[8]||match[3]==="odd");// other types prohibit arguments
	}else if(match[3]){Sizzle.error(match[0]);}return match;},"PSEUDO":function PSEUDO(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}// Accept quoted arguments as-is
	if(match[3]){match[2]=match[4]||match[5]||"";// Strip excess characters from unquoted arguments
	}else if(unquoted&&rpseudo.test(unquoted)&&(// Get excess from tokenize (recursively)
	excess=tokenize(unquoted,true))&&(// advance to the next closing parenthesis
	excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){// excess is a negative index
	match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}// Return only captures needed by the pseudo filter method (type and argument)
	return match.slice(0,3);}},filter:{"TAG":function TAG(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function CLASS(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function ATTR(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}if(!operator){return true;}result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function CHILD(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?// Shortcut for :nth-*(n)
	function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){// :(first|last|only)-(child|of-type)
	if(simple){while(dir){node=elem;while(node=node[dir]){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}// Reverse direction for :only-* (if we haven't yet done so)
	start=dir=type==="only"&&!start&&"nextSibling";}return true;}start=[forward?parent.firstChild:parent.lastChild];// non-xml :nth-child(...) stores cache data on `parent`
	if(forward&&useCache){// Seek `elem` from a previously-cached index
	// ...in a gzip-friendly way
	node=parent;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while(node=++nodeIndex&&node&&node[dir]||(// Fallback to seeking `elem` from the start
	diff=nodeIndex=0)||start.pop()){// When found, cache indexes on `parent` and break
	if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else{// Use previously-cached element index if available
	if(useCache){// ...in a gzip-friendly way
	node=elem;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}// xml :nth-child(...)
	// or :nth-last-child(...) or :nth(-last)?-of-type(...)
	if(diff===false){// Use the same loop as above to seek `elem` from the start
	while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){// Cache the index of each encountered element
	if(useCache){outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}if(node===elem){break;}}}}}// Incorporate the offset, then check against cycle size
	diff-=last;return diff===first||diff%first===0&&diff/first>=0;}};},"PSEUDO":function PSEUDO(pseudo,argument){// pseudo-class names are case-insensitive
	// http://www.w3.org/TR/selectors/#pseudo-classes
	// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
	// Remember that setFilters inherits from pseudos
	var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);// The user may use createPseudo to indicate that
	// arguments are needed to create the filter function
	// just as Sizzle does
	if(fn[expando]){return fn(argument);}// But maintain support for old signatures
	if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}return fn;}},pseudos:{// Potentially complex pseudos
	"not":markFunction(function(selector){// Trim the selector passed to compile
	// to avoid treating leading and trailing
	// spaces as combinators
	var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;// Match elements unmatched by `matcher`
	while(i--){if(elem=unmatched[i]){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);// Don't keep the element (issue #299)
	input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),// "Whether an element is represented by a :lang() selector
	// is based solely on the element's language value
	// being equal to the identifier C,
	// or beginning with the identifier C immediately followed by "-".
	// The matching of C against the element's language value is performed case-insensitively.
	// The identifier C does not have to be a valid language name."
	// http://www.w3.org/TR/selectors/#lang-pseudo
	"lang":markFunction(function(lang){// lang value must be a valid identifier
	if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if(elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang")){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),// Miscellaneous
	"target":function target(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function root(elem){return elem===docElem;},"focus":function focus(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},// Boolean properties
	"enabled":createDisabledPseudo(false),"disabled":createDisabledPseudo(true),"checked":function checked(elem){// In CSS3, :checked should return both checked and selected elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	var nodeName=elem.nodeName.toLowerCase();return nodeName==="input"&&!!elem.checked||nodeName==="option"&&!!elem.selected;},"selected":function selected(elem){// Accessing this property makes selected-by-default
	// options in Safari work properly
	if(elem.parentNode){elem.parentNode.selectedIndex;}return elem.selected===true;},// Contents
	"empty":function empty(elem){// http://www.w3.org/TR/selectors/#empty-pseudo
	// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
	//   but not by others (comment: 8; processing instruction: 7; etc.)
	// nodeType < 6 works because attributes (2) do not appear as children
	for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}return true;},"parent":function parent(elem){return!Expr.pseudos["empty"](elem);},// Element/input types
	"header":function header(elem){return rheader.test(elem.nodeName);},"input":function input(elem){return rinputs.test(elem.nodeName);},"button":function button(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function text(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&(// Support: IE<8
	// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
	(attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},// Position-in-collection
	"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];// Add button/input type pseudos
	for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}// Easy API for creating new setFilters
	function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){// Comma and first run
	if(!matched||(match=rcomma.exec(soFar))){if(match){// Don't consume trailing commas as valid
	soFar=soFar.slice(match[0].length)||soFar;}groups.push(tokens=[]);}matched=false;// Combinators
	if(match=rcombinators.exec(soFar)){matched=match.shift();tokens.push({value:matched,// Cast descendant combinators to space
	type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}// Filters
	for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}if(!matched){break;}}// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly?soFar.length:soFar?Sizzle.error(selector):// Cache the tokens
	tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}return selector;}function addCombinator(matcher,combinator,base){var dir=combinator.dir,skip=combinator.next,key=skip||dir,checkNonElements=base&&key==="parentNode",doneName=done++;return combinator.first?// Check against closest ancestor/preceding element
	function(elem,context,xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}}:// Check against all ancestor/preceding elements
	function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
	if(xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if(skip&&skip===elem.nodeName.toLowerCase()){elem=elem[dir]||elem;}else if((oldCache=uniqueCache[key])&&oldCache[0]===dirruns&&oldCache[1]===doneName){// Assign to newCache so results back-propagate to previous elements
	return newCache[2]=oldCache[2];}else{// Reuse newcache so results back-propagate to previous elements
	uniqueCache[key]=newCache;// A match means we're done; a fail means we have to keep checking
	if(newCache[2]=matcher(elem,context,xml)){return true;}}}}}};}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}return true;}:matchers[0];}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}return results;}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if(elem=unmatched[i]){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}return newUnmatched;}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,// Get initial elements from seed or context
	elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),// Prefilter to get matcher input, preserving a map for seed-results synchronization
	matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
	postFinder||(seed?preFilter:preexisting||postFilter)?// ...intermediate processing is necessary
	[]:// ...otherwise use results directly
	results:matcherIn;// Find primary matches
	if(matcher){matcher(matcherIn,matcherOut,context,xml);}// Apply postFilter
	if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);// Un-match failing elements by moving them back to matcherIn
	i=temp.length;while(i--){if(elem=temp[i]){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}if(seed){if(postFinder||preFilter){if(postFinder){// Get the final matcherOut by condensing this intermediate into postFinder contexts
	temp=[];i=matcherOut.length;while(i--){if(elem=matcherOut[i]){// Restore matcherIn since elem is not yet a final match
	temp.push(matcherIn[i]=elem);}}postFinder(null,matcherOut=[],temp,xml);}// Move matched elements from seed to results to keep them synchronized
	i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}// Add elements to results, through postFinder if defined
	}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,// The foundational matcher ensures that elements are reachable from top-level context(s)
	matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=!leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));// Avoid hanging onto element (issue #299)
	checkContext=null;return ret;}];for(;i<len;i++){if(matcher=Expr.relative[tokens[i].type]){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);// Return special upon seeing a positional matcher
	if(matcher[expando]){// Find the next relative operator (if any) for proper handling
	j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
	tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&toSelector(tokens));}matchers.push(matcher);}}return elementMatcher(matchers);}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function superMatcher(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,// We must always have either seed elements or outermost context
	elems=seed||byElement&&Expr.find["TAG"]("*",outermost),// Use integer dirruns iff this is the outermost matcher
	dirrunsUnique=dirruns+=contextBackup==null?1:Math.random()||0.1,len=elems.length;if(outermost){outermostContext=context===document||context||outermost;}// Add elements passing elementMatchers directly to results
	// Support: IE<9, Safari
	// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
	for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML;}while(matcher=elementMatchers[j++]){if(matcher(elem,context||document,xml)){results.push(elem);break;}}if(outermost){dirruns=dirrunsUnique;}}// Track unmatched elements for set filters
	if(bySet){// They will have gone through all possible matchers
	if(elem=!matcher&&elem){matchedCount--;}// Lengthen the array for every element, matched or not
	if(seed){unmatched.push(elem);}}}// `i` is now the count of elements visited above, and adding it to `matchedCount`
	// makes the latter nonnegative.
	matchedCount+=i;// Apply set filters to unmatched elements
	// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
	// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
	// no element matchers and no seed.
	// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
	// case, which will result in a "00" `matchedCount` that differs from `i` but is also
	// numerically zero.
	if(bySet&&i!==matchedCount){j=0;while(matcher=setMatchers[j++]){matcher(unmatched,setMatched,context,xml);}if(seed){// Reintegrate element matches to eliminate the need for sorting
	if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}// Discard index placeholder values to get only actual matches
	setMatched=condense(setMatched);}// Add matches to results
	push.apply(results,setMatched);// Seedless set matches succeeding multiple successful matchers stipulate sorting
	if(outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1){Sizzle.uniqueSort(results);}}// Override manipulation of globals by nested matchers
	if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}compile=Sizzle.compile=function(selector,match/* Internal Use Only */){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){// Generate a function of recursive functions that can be used to check each element
	if(!match){match=tokenize(selector);}i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}// Cache the compiled function
	cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));// Save selector and tokenization
	cached.selector=selector;}return cached;};/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize(selector=compiled.selector||selector);results=results||[];// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if(match.length===1){// Reduce context if the leading compound selector is an ID
	tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;// Precompiled matchers will still verify ancestry, so step up a level
	}else if(compiled){context=context.parentNode;}selector=selector.slice(tokens.shift().value.length);}// Fetch a seed set for right-to-left matching
	i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];// Abort if we hit a combinator
	if(Expr.relative[type=token.type]){break;}if(find=Expr.find[type]){// Search, expanding context for leading sibling combinators
	if(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context)){// If seed is empty or no tokens remain, we can return early
	tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}break;}}}}// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};// One-time assignments
	// Sort stability
	support.sortStable=expando.split("").sort(sortOrder).join("")===expando;// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates=!!hasDuplicate;// Initialize against the default document
	setDocument();// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached=assert(function(el){// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition(document.createElement("fieldset"))&1;});// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if(!assert(function(el){el.innerHTML="<a href='#'></a>";return el.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if(!support.attributes||!assert(function(el){el.innerHTML="<input/>";el.firstChild.setAttribute("value","");return el.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if(!assert(function(el){return el.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}return Sizzle;}(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;// Deprecated
	jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;jQuery.escapeSelector=Sizzle.escape;var dir=function dir(elem,_dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[_dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}matched.push(elem);}}return matched;};var _siblings=function _siblings(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}return matched;};var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;var risSimple=/^.[^:#\[\.,]*$/;// Implement the identical functionality for filter and not
	function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem===qualifier!==not;});}if(typeof qualifier==="string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}qualifier=jQuery.filter(qualifier,elements);}return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not&&elem.nodeType===1;});}jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function find(selector){var i,ret,len=this.length,self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}ret=this.pushStack([]);for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}return len>1?jQuery.uniqueSort(ret):ret;},filter:function filter(selector){return this.pushStack(winnow(this,selector||[],false));},not:function not(selector){return this.pushStack(winnow(this,selector||[],true));},is:function is(selector){return!!winnow(this,// If this is a positional/relative selector, check membership in the returned set
	// so $("p:first").is("p:last") won't return true for a doc with two "p".
	typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});// Initialize a jQuery object
	// A central reference to the root jQuery(document)
	var rootjQuery,// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;// HANDLE: $(""), $(null), $(undefined), $(false)
	if(!selector){return this;}// Method init() accepts an alternate rootjQuery
	// so migrate can support jQuery.sub (gh-2101)
	root=root||rootjQuery;// Handle HTML strings
	if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){// Assume that strings that start and end with <> are HTML and skip the regex check
	match=[null,selector,null];}else{match=rquickExpr.exec(selector);}// Match html or make sure no context is specified for #id
	if(match&&(match[1]||!context)){// HANDLE: $(html) -> $(array)
	if(match[1]){context=context instanceof jQuery?context[0]:context;// Option to run scripts is true for back-compat
	// Intentionally let the error be thrown if parseHTML is not present
	jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));// HANDLE: $(html, props)
	if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){// Properties of context are called as methods if possible
	if(jQuery.isFunction(this[match])){this[match](context[match]);// ...and otherwise set as attributes
	}else{this.attr(match,context[match]);}}}return this;// HANDLE: $(#id)
	}else{elem=document.getElementById(match[2]);if(elem){// Inject the element directly into the jQuery object
	this[0]=elem;this.length=1;}return this;}// HANDLE: $(expr, $(...))
	}else if(!context||context.jquery){return(context||root).find(selector);// HANDLE: $(expr, context)
	// (which is just equivalent to: $(context).find(expr)
	}else{return this.constructor(context).find(selector);}// HANDLE: $(DOMElement)
	}else if(selector.nodeType){this[0]=selector;this.length=1;return this;// HANDLE: $(function)
	// Shortcut for document ready
	}else if(jQuery.isFunction(selector)){return root.ready!==undefined?root.ready(selector):// Execute immediately if ready is not present
	selector(jQuery);}return jQuery.makeArray(selector,this);};// Give the init function the jQuery prototype for later instantiation
	init.prototype=jQuery.fn;// Initialize central reference
	rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function has(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function closest(selectors,context){var cur,i=0,l=this.length,matched=[],targets=typeof selectors!=="string"&&jQuery(selectors);// Positional selectors never match, since there's no _selection_ context
	if(!rneedsContext.test(selectors)){for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){// Always skip document fragments
	if(cur.nodeType<11&&(targets?targets.index(cur)>-1:// Don't pass non-elements to Sizzle
	cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}}return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},// Determine the position of an element within the set
	index:function index(elem){// No argument, return index in parent
	if(!elem){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1;}// Index in selector
	if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}// Locate the position of the desired element
	return indexOf.call(this,// If it receives a jQuery object, the first element is used
	elem.jquery?elem[0]:elem);},add:function add(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function addBack(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}return cur;}jQuery.each({parent:function parent(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function parents(elem){return dir(elem,"parentNode");},parentsUntil:function parentsUntil(elem,i,until){return dir(elem,"parentNode",until);},next:function next(elem){return sibling(elem,"nextSibling");},prev:function prev(elem){return sibling(elem,"previousSibling");},nextAll:function nextAll(elem){return dir(elem,"nextSibling");},prevAll:function prevAll(elem){return dir(elem,"previousSibling");},nextUntil:function nextUntil(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function prevUntil(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function siblings(elem){return _siblings((elem.parentNode||{}).firstChild,elem);},children:function children(elem){return _siblings(elem.firstChild);},contents:function contents(elem){return elem.contentDocument||jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}if(this.length>1){// Remove duplicates
	if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}// Reverse order for parents* and prev-derivatives
	if(rparentsprev.test(name)){matched.reverse();}}return this.pushStack(matched);};});var rnotwhite=/\S+/g;// Convert String-formatted options into Object-formatted ones
	function createOptions(options){var object={};jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=true;});return object;}/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */jQuery.Callbacks=function(options){// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var// Flag to know if list is currently firing
	firing,// Last fire value for non-forgettable lists
	memory,// Flag to know if list was already fired
	_fired,// Flag to prevent firing
	_locked,// Actual callback list
	list=[],// Queue of execution data for repeatable lists
	queue=[],// Index of currently firing callback (modified by add/remove as needed)
	firingIndex=-1,// Fire callbacks
	fire=function fire(){// Enforce single-firing
	_locked=options.once;// Execute callbacks for all pending executions,
	// respecting firingIndex overrides and runtime changes
	_fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){// Run callback and check for early termination
	if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){// Jump to end and forget the data so .add doesn't re-fire
	firingIndex=list.length;memory=false;}}}// Forget the data if we're done with it
	if(!options.memory){memory=false;}firing=false;// Clean up if we're done firing for good
	if(_locked){// Keep an empty list if we have data for future add calls
	if(memory){list=[];// Otherwise, this object is spent
	}else{list="";}}},// Actual Callbacks object
	self={// Add a callback or a collection of callbacks to the list
	add:function add(){if(list){// If we have memory from a past run, we should fire after adding
	if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}(function add(args){jQuery.each(args,function(_,arg){if(jQuery.isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&jQuery.type(arg)!=="string"){// Inspect recursively
	add(arg);}});})(arguments);if(memory&&!firing){fire();}}return this;},// Remove a callback from the list
	remove:function remove(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);// Handle firing indexes
	if(index<=firingIndex){firingIndex--;}}});return this;},// Check if a given callback is in the list.
	// If no argument is given, return whether or not list has callbacks attached.
	has:function has(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},// Remove all callbacks from the list
	empty:function empty(){if(list){list=[];}return this;},// Disable .fire and .add
	// Abort any current/pending executions
	// Clear all callbacks and values
	disable:function disable(){_locked=queue=[];list=memory="";return this;},disabled:function disabled(){return!list;},// Disable .fire
	// Also disable .add unless we have memory (since it would have no effect)
	// Abort any pending executions
	lock:function lock(){_locked=queue=[];if(!memory&&!firing){list=memory="";}return this;},locked:function locked(){return!!_locked;},// Call all callbacks with the given context and arguments
	fireWith:function fireWith(context,args){if(!_locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}return this;},// Call all the callbacks with the given arguments
	fire:function fire(){self.fireWith(this,arguments);return this;},// To know if the callbacks have already been called at least once
	fired:function fired(){return!!_fired;}};return self;};function Identity(v){return v;}function Thrower(ex){throw ex;}function adoptValue(value,resolve,reject){var method;try{// Check for promise aspect first to privilege synchronous behavior
	if(value&&jQuery.isFunction(method=value.promise)){method.call(value).done(resolve).fail(reject);// Other thenables
	}else if(value&&jQuery.isFunction(method=value.then)){method.call(value,resolve,reject);// Other non-thenables
	}else{// Support: Android 4.0 only
	// Strict mode functions invoked without .call/.apply get global-object context
	resolve.call(undefined,value);}// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	}catch(value){// Support: Android 4.0 only
	// Strict mode functions invoked without .call/.apply get global-object context
	reject.call(undefined,value);}}jQuery.extend({Deferred:function Deferred(func){var tuples=[// action, add listener, callbacks,
	// ... .then handlers, argument index, [final state]
	["notify","progress",jQuery.Callbacks("memory"),jQuery.Callbacks("memory"),2],["resolve","done",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),0,"resolved"],["reject","fail",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),1,"rejected"]],_state="pending",_promise={state:function state(){return _state;},always:function always(){deferred.done(arguments).fail(arguments);return this;},"catch":function _catch(fn){return _promise.then(null,fn);},// Keep pipe for back-compat
	pipe:function pipe()/* fnDone, fnFail, fnProgress */{var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
	var fn=jQuery.isFunction(fns[tuple[4]])&&fns[tuple[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
	// deferred.done(function() { bind to newDefer or newDefer.resolve })
	// deferred.fail(function() { bind to newDefer or newDefer.reject })
	deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this,fn?[returned]:arguments);}});});fns=null;}).promise();},then:function then(onFulfilled,onRejected,onProgress){var maxDepth=0;function resolve(depth,deferred,handler,special){return function(){var that=this,args=arguments,mightThrow=function mightThrow(){var returned,then;// Support: Promises/A+ section 2.3.3.3.3
	// https://promisesaplus.com/#point-59
	// Ignore double-resolution attempts
	if(depth<maxDepth){return;}returned=handler.apply(that,args);// Support: Promises/A+ section 2.3.1
	// https://promisesaplus.com/#point-48
	if(returned===deferred.promise()){throw new TypeError("Thenable self-resolution");}// Support: Promises/A+ sections 2.3.3.1, 3.5
	// https://promisesaplus.com/#point-54
	// https://promisesaplus.com/#point-75
	// Retrieve `then` only once
	then=returned&&(// Support: Promises/A+ section 2.3.4
	// https://promisesaplus.com/#point-64
	// Only check objects and functions for thenability
	(typeof returned==="undefined"?"undefined":_typeof(returned))==="object"||typeof returned==="function")&&returned.then;// Handle a returned thenable
	if(jQuery.isFunction(then)){// Special processors (notify) just wait for resolution
	if(special){then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special));// Normal processors (resolve) also hook into progress
	}else{// ...and disregard older resolution values
	maxDepth++;then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special),resolve(maxDepth,deferred,Identity,deferred.notifyWith));}// Handle all other returned values
	}else{// Only substitute handlers pass on context
	// and multiple values (non-spec behavior)
	if(handler!==Identity){that=undefined;args=[returned];}// Process the value(s)
	// Default process is resolve
	(special||deferred.resolveWith)(that,args);}},// Only normal processors (resolve) catch and reject exceptions
	process=special?mightThrow:function(){try{mightThrow();}catch(e){if(jQuery.Deferred.exceptionHook){jQuery.Deferred.exceptionHook(e,process.stackTrace);}// Support: Promises/A+ section 2.3.3.3.4.1
	// https://promisesaplus.com/#point-61
	// Ignore post-resolution exceptions
	if(depth+1>=maxDepth){// Only substitute handlers pass on context
	// and multiple values (non-spec behavior)
	if(handler!==Thrower){that=undefined;args=[e];}deferred.rejectWith(that,args);}}};// Support: Promises/A+ section 2.3.3.3.1
	// https://promisesaplus.com/#point-57
	// Re-resolve promises immediately to dodge false rejection from
	// subsequent errors
	if(depth){process();}else{// Call an optional hook to record the stack, in case of exception
	// since it's otherwise lost when execution goes async
	if(jQuery.Deferred.getStackHook){process.stackTrace=jQuery.Deferred.getStackHook();}window.setTimeout(process);}};}return jQuery.Deferred(function(newDefer){// progress_handlers.add( ... )
	tuples[0][3].add(resolve(0,newDefer,jQuery.isFunction(onProgress)?onProgress:Identity,newDefer.notifyWith));// fulfilled_handlers.add( ... )
	tuples[1][3].add(resolve(0,newDefer,jQuery.isFunction(onFulfilled)?onFulfilled:Identity));// rejected_handlers.add( ... )
	tuples[2][3].add(resolve(0,newDefer,jQuery.isFunction(onRejected)?onRejected:Thrower));}).promise();},// Get a promise for this deferred
	// If obj is provided, the promise aspect is added to the object
	promise:function promise(obj){return obj!=null?jQuery.extend(obj,_promise):_promise;}},deferred={};// Add list-specific methods
	jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[5];// promise.progress = list.add
	// promise.done = list.add
	// promise.fail = list.add
	_promise[tuple[1]]=list.add;// Handle state
	if(stateString){list.add(function(){// state = "resolved" (i.e., fulfilled)
	// state = "rejected"
	_state=stateString;},// rejected_callbacks.disable
	// fulfilled_callbacks.disable
	tuples[3-i][2].disable,// progress_callbacks.lock
	tuples[0][2].lock);}// progress_handlers.fire
	// fulfilled_handlers.fire
	// rejected_handlers.fire
	list.add(tuple[3].fire);// deferred.notify = function() { deferred.notifyWith(...) }
	// deferred.resolve = function() { deferred.resolveWith(...) }
	// deferred.reject = function() { deferred.rejectWith(...) }
	deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?undefined:this,arguments);return this;};// deferred.notifyWith = list.fireWith
	// deferred.resolveWith = list.fireWith
	// deferred.rejectWith = list.fireWith
	deferred[tuple[0]+"With"]=list.fireWith;});// Make the deferred a promise
	_promise.promise(deferred);// Call given func if any
	if(func){func.call(deferred,deferred);}// All done!
	return deferred;},// Deferred helper
	when:function when(singleValue){var// count of uncompleted subordinates
	remaining=arguments.length,// count of unprocessed arguments
	i=remaining,// subordinate fulfillment data
	resolveContexts=Array(i),resolveValues=_slice.call(arguments),// the master Deferred
	master=jQuery.Deferred(),// subordinate callback factory
	updateFunc=function updateFunc(i){return function(value){resolveContexts[i]=this;resolveValues[i]=arguments.length>1?_slice.call(arguments):value;if(! --remaining){master.resolveWith(resolveContexts,resolveValues);}};};// Single- and empty arguments are adopted like Promise.resolve
	if(remaining<=1){adoptValue(singleValue,master.done(updateFunc(i)).resolve,master.reject);// Use .then() to unwrap secondary thenables (cf. gh-3000)
	if(master.state()==="pending"||jQuery.isFunction(resolveValues[i]&&resolveValues[i].then)){return master.then();}}// Multiple arguments are aggregated like Promise.all array elements
	while(i--){adoptValue(resolveValues[i],updateFunc(i),master.reject);}return master.promise();}});// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;jQuery.Deferred.exceptionHook=function(error,stack){// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if(window.console&&window.console.warn&&error&&rerrorNames.test(error.name)){window.console.warn("jQuery.Deferred exception: "+error.message,error.stack,stack);}};jQuery.readyException=function(error){window.setTimeout(function(){throw error;});};// The deferred used on DOM ready
	var readyList=jQuery.Deferred();jQuery.fn.ready=function(fn){readyList.then(fn)// Wrap jQuery.readyException in a function so that the lookup
	// happens at the time of error handling instead of callback
	// registration.
	.catch(function(error){jQuery.readyException(error);});return this;};jQuery.extend({// Is the DOM ready to be used? Set to true once it occurs.
	isReady:false,// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait:1,// Hold (or release) the ready event
	holdReady:function holdReady(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},// Handle when the DOM is ready
	ready:function ready(wait){// Abort if there are pending holds or we're already ready
	if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}// Remember that the DOM is ready
	jQuery.isReady=true;// If a normal DOM Ready event fired, decrement, and wait if need be
	if(wait!==true&&--jQuery.readyWait>0){return;}// If there are functions bound, to execute
	readyList.resolveWith(document,[jQuery]);}});jQuery.ready.then=readyList.then;// The ready event handler and self cleanup method
	function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if(document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll){// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout(jQuery.ready);}else{// Use the handy event callback
	document.addEventListener("DOMContentLoaded",completed);// A fallback to window.onload, that will always work
	window.addEventListener("load",completed);}// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access=function access(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;// Sets many values
	if(jQuery.type(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}// Sets one value
	}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}if(bulk){// Bulk operations run against the entire set
	if(raw){fn.call(elems,value);fn=null;// ...except when executing function values
	}else{bulk=fn;fn=function fn(elem,key,value){return bulk.call(jQuery(elem),value);};}}if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}return chainable?elems:// Gets
	bulk?fn.call(elems):len?fn(elems[0],key):emptyGet;};var acceptData=function acceptData(owner){// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType===1||owner.nodeType===9||!+owner.nodeType;};function Data(){this.expando=jQuery.expando+Data.uid++;}Data.uid=1;Data.prototype={cache:function cache(owner){// Check if the owner object already has a cache
	var value=owner[this.expando];// If not, create one
	if(!value){value={};// We can accept data for non-element nodes in modern browsers,
	// but we should not, see #8335.
	// Always return an empty object.
	if(acceptData(owner)){// If it is a node unlikely to be stringify-ed or looped over
	// use plain assignment
	if(owner.nodeType){owner[this.expando]=value;// Otherwise secure it in a non-enumerable property
	// configurable must be true to allow the property to be
	// deleted when data is removed
	}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}return value;},set:function set(owner,data,value){var prop,cache=this.cache(owner);// Handle: [ owner, key, value ] args
	// Always use camelCase key (gh-2257)
	if(typeof data==="string"){cache[jQuery.camelCase(data)]=value;// Handle: [ owner, { properties } ] args
	}else{// Copy the properties one-by-one to the cache object
	for(prop in data){cache[jQuery.camelCase(prop)]=data[prop];}}return cache;},get:function get(owner,key){return key===undefined?this.cache(owner):// Always use camelCase key (gh-2257)
	owner[this.expando]&&owner[this.expando][jQuery.camelCase(key)];},access:function access(owner,key,value){// In cases where either:
	//
	//   1. No key was specified
	//   2. A string key was specified, but no value provided
	//
	// Take the "read" path and allow the get method to determine
	// which value to return, respectively either:
	//
	//   1. The entire cache object
	//   2. The data stored at the key
	//
	if(key===undefined||key&&typeof key==="string"&&value===undefined){return this.get(owner,key);}// When the key is not a string, or both a key and value
	// are specified, set or extend (existing objects) with either:
	//
	//   1. An object of properties
	//   2. A key and value
	//
	this.set(owner,key,value);// Since the "set" path can have two possible entry points
	// return the expected data based on which path was taken[*]
	return value!==undefined?value:key;},remove:function remove(owner,key){var i,cache=owner[this.expando];if(cache===undefined){return;}if(key!==undefined){// Support array or space separated string of keys
	if(jQuery.isArray(key)){// If key is an array of keys...
	// We always set camelCase keys, so remove that.
	key=key.map(jQuery.camelCase);}else{key=jQuery.camelCase(key);// If a key with the spaces exists, use it.
	// Otherwise, create an array by matching non-whitespace
	key=key in cache?[key]:key.match(rnotwhite)||[];}i=key.length;while(i--){delete cache[key[i]];}}// Remove the expando if there's no more data
	if(key===undefined||jQuery.isEmptyObject(cache)){// Support: Chrome <=35 - 45
	// Webkit & Blink performance suffers when deleting properties
	// from DOM nodes, so set to undefined instead
	// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
	if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function hasData(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function dataAttr(elem,key,data){var name;// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:// Only convert to a number if it doesn't change the string
	+data+""===data?+data:rbrace.test(data)?JSON.parse(data):data;}catch(e){}// Make sure we set the data so it isn't changed later
	dataUser.set(elem,key,data);}else{data=undefined;}}return data;}jQuery.extend({hasData:function hasData(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function data(elem,name,_data){return dataUser.access(elem,name,_data);},removeData:function removeData(elem,name){dataUser.remove(elem,name);},// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data:function _data(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function _removeData(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function data(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;// Gets all values
	if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){// Support: IE 11 only
	// The attrs elements can be null (#14894)
	if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}dataPriv.set(elem,"hasDataAttrs",true);}}return data;}// Sets multiple values
	if((typeof key==="undefined"?"undefined":_typeof(key))==="object"){return this.each(function(){dataUser.set(this,key);});}return access(this,function(value){var data;// The calling jQuery object (element matches) is not empty
	// (and therefore has an element appears at this[ 0 ]) and the
	// `value` parameter was not undefined. An empty jQuery object
	// will result in `undefined` for elem = this[ 0 ] which will
	// throw an exception if an attempt to read a data cache is made.
	if(elem&&value===undefined){// Attempt to get data from the cache
	// The key will always be camelCased in Data
	data=dataUser.get(elem,key);if(data!==undefined){return data;}// Attempt to "discover" the data in
	// HTML5 custom data-* attrs
	data=dataAttr(elem,key);if(data!==undefined){return data;}// We tried really hard, but the data doesn't exist.
	return;}// Set the data...
	this.each(function(){// We always store the camelCased key
	dataUser.set(this,key,value);});},null,value,arguments.length>1,null,true);},removeData:function removeData(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function queue(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);// Speed up dequeue by getting out quickly if this is just a lookup
	if(data){if(!queue||jQuery.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}return queue||[];}},dequeue:function dequeue(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function next(){jQuery.dequeue(elem,type);};// If the fx queue is dequeued, always remove the progress sentinel
	if(fn==="inprogress"){fn=queue.shift();startLength--;}if(fn){// Add a progress sentinel to prevent the fx queue from being
	// automatically dequeued
	if(type==="fx"){queue.unshift("inprogress");}// Clear up the last queue stop function
	delete hooks.stop;fn.call(elem,next,hooks);}if(!startLength&&hooks){hooks.empty.fire();}},// Not public - generate a queueHooks object, or return the current one
	_queueHooks:function _queueHooks(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function queue(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}if(arguments.length<setter){return jQuery.queue(this[0],type);}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);// Ensure a hooks for this queue
	jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function dequeue(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function clearQueue(type){return this.queue(type||"fx",[]);},// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise:function promise(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function resolve(){if(! --count){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}resolve();return defer.promise(obj);}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var isHiddenWithinTree=function isHiddenWithinTree(elem,el){// isHiddenWithinTree might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem=el||elem;// Inline style trumps all
	return elem.style.display==="none"||elem.style.display===""&&// Otherwise, check computed style
	// Support: Firefox <=43 - 45
	// Disconnected elements can have computed display: none, so first confirm that elem is
	// in the document.
	jQuery.contains(elem.ownerDocument,elem)&&jQuery.css(elem,"display")==="none";};var swap=function swap(elem,options,callback,args){var ret,name,old={};// Remember the old values, and insert the new ones
	for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}ret=callback.apply(elem,args||[]);// Revert the old values
	for(name in options){elem.style[name]=old[name];}return ret;};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale=1,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),// Starting value computation is required for potential unit mismatches
	initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){// Trust units reported by jQuery.css
	unit=unit||initialInUnit[3];// Make sure we update the tween properties later on
	valueParts=valueParts||[];// Iteratively approximate from a nonzero starting point
	initialInUnit=+initial||1;do{// If previous iteration zeroed out, double until we get *something*.
	// Use string for doubling so we don't accidentally see scale as unchanged below
	scale=scale||".5";// Adjust and apply
	initialInUnit=initialInUnit/scale;jQuery.style(elem,prop,initialInUnit+unit);// Update scale, tolerating zero or NaN from tween.cur()
	// Break the loop if scale is unchanged or perfect, or if we've just had enough.
	}while(scale!==(scale=currentValue()/initial)&&scale!==1&&--maxIterations);}if(valueParts){initialInUnit=+initialInUnit||+initial||0;// Apply relative offset (+=/-=) if specified
	adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}return adjusted;}var defaultDisplayMap={};function getDefaultDisplay(elem){var temp,doc=elem.ownerDocument,nodeName=elem.nodeName,display=defaultDisplayMap[nodeName];if(display){return display;}temp=doc.body.appendChild(doc.createElement(nodeName)),display=jQuery.css(temp,"display");temp.parentNode.removeChild(temp);if(display==="none"){display="block";}defaultDisplayMap[nodeName]=display;return display;}function showHide(elements,show){var display,elem,values=[],index=0,length=elements.length;// Determine new display value for elements that need to change
	for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}display=elem.style.display;if(show){// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
	// check is required in this first loop unless we have a nonempty display value (either
	// inline or about-to-be-restored)
	if(display==="none"){values[index]=dataPriv.get(elem,"display")||null;if(!values[index]){elem.style.display="";}}if(elem.style.display===""&&isHiddenWithinTree(elem)){values[index]=getDefaultDisplay(elem);}}else{if(display!=="none"){values[index]="none";// Remember what we're overwriting
	dataPriv.set(elem,"display",display);}}}// Set the display of the elements in a second loop to avoid constant reflow
	for(index=0;index<length;index++){if(values[index]!=null){elements[index].style.display=values[index];}}return elements;}jQuery.fn.extend({show:function show(){return showHide(this,true);},hide:function hide(){return showHide(this);},toggle:function toggle(state){if(typeof state==="boolean"){return state?this.show():this.hide();}return this.each(function(){if(isHiddenWithinTree(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});var rcheckableType=/^(?:checkbox|radio)$/i;var rtagName=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i;var rscriptType=/^$|\/(?:java|ecma)script/i;// We have to close these tags to support XHTML (#13200)
	var wrapMap={// Support: IE <=9 only
	option:[1,"<select multiple='multiple'>","</select>"],// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};// Support: IE <=9 only
	wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret=typeof context.getElementsByTagName!=="undefined"?context.getElementsByTagName(tag||"*"):typeof context.querySelectorAll!=="undefined"?context.querySelectorAll(tag||"*"):[];return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],ret):ret;}// Mark scripts as having already been evaluated
	function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){// Add nodes directly
	if(jQuery.type(elem)==="object"){// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,elem.nodeType?[elem]:elem);// Convert non-html into a text node
	}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));// Convert html into DOM nodes
	}else{tmp=tmp||fragment.appendChild(context.createElement("div"));// Deserialize a standard representation
	tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];// Descend through wrappers to the right content
	j=wrap[0];while(j--){tmp=tmp.lastChild;}// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,tmp.childNodes);// Remember the top-level container
	tmp=fragment.firstChild;// Ensure the created nodes are orphaned (#12392)
	tmp.textContent="";}}}// Remove wrapper from fragment
	fragment.textContent="";i=0;while(elem=nodes[i++]){// Skip elements already in the context collection (trac-4087)
	if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}continue;}contains=jQuery.contains(elem.ownerDocument,elem);// Append to fragment
	tmp=getAll(fragment.appendChild(elem),"script");// Preserve script evaluation history
	if(contains){setGlobalEval(tmp);}// Capture executables
	if(scripts){j=0;while(elem=tmp[j++]){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}return fragment;}(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var documentElement=document.documentElement;var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}function returnFalse(){return false;}// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement(){try{return document.activeElement;}catch(err){}}function _on(elem,types,selector,data,fn,one){var origFn,type;// Types can be a map of types/handlers
	if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){// ( types-Object, selector, data )
	if(typeof selector!=="string"){// ( types-Object, data )
	data=data||selector;selector=undefined;}for(type in types){_on(elem,type,selector,data,types[type],one);}return elem;}if(data==null&&fn==null){// ( types, fn )
	fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){// ( types, selector, fn )
	fn=data;data=undefined;}else{// ( types, data, fn )
	fn=data;data=selector;selector=undefined;}}if(fn===false){fn=returnFalse;}else if(!fn){return elem;}if(one===1){origFn=fn;fn=function fn(event){// Can use an empty set, since event contains the info
	jQuery().off(event);return origFn.apply(this,arguments);};// Use same guid so caller can remove using origFn
	fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */jQuery.event={global:{},add:function add(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);// Don't attach events to noData or text/comment nodes (but allow plain objects)
	if(!elemData){return;}// Caller can pass in an object of custom data in lieu of the handler
	if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}// Ensure that invalid selectors throw exceptions at attach time
	// Evaluate against documentElement in case elem is a non-element node (e.g., document)
	if(selector){jQuery.find.matchesSelector(documentElement,selector);}// Make sure that the handler has a unique ID, used to find/remove it later
	if(!handler.guid){handler.guid=jQuery.guid++;}// Init the element's event structure and main handler, if this is the first
	if(!(events=elemData.events)){events=elemData.events={};}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){// Discard the second event of a jQuery.event.trigger() and
	// when an event is called after a page has unloaded
	return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}// Handle multiple events separated by a space
	types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// There *must* be a type, no attaching namespace-only handlers
	if(!type){continue;}// If event changes its type, use the special event handlers for the changed type
	special=jQuery.event.special[type]||{};// If selector defined, determine special event api type, otherwise given type
	type=(selector?special.delegateType:special.bindType)||type;// Update special based on newly reset type
	special=jQuery.event.special[type]||{};// handleObj is passed to all event handlers
	handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);// Init the event handler queue if we're the first
	if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;// Only use addEventListener if the special events handler returns false
	if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}// Add to the element's handler list, delegates in front
	if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}// Keep track of which events have ever been used, for event optimization
	jQuery.event.global[type]=true;}},// Detach an event or set of events from an element
	remove:function remove(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}// Once for each type.namespace in types; type may be omitted
	types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// Unbind all events (on this namespace, if provided) for the element
	if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}continue;}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");// Remove matching events
	origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}if(special.remove){special.remove.call(elem,handleObj);}}}// Remove generic event handler if we removed something and no more handlers exist
	// (avoids potential for endless recursion during removal of special event handlers)
	if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}delete events[type];}}// Remove data and the expando if it's no longer used
	if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function dispatch(nativeEvent){// Make a writable jQuery.Event from the native event object
	var event=jQuery.event.fix(nativeEvent);var i,j,ret,matched,handleObj,handlerQueue,args=new Array(arguments.length),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};// Use the fix-ed jQuery.Event rather than the (read-only) native event
	args[0]=event;for(i=1;i<arguments.length;i++){args[i]=arguments[i];}event.delegateTarget=this;// Call the preDispatch hook for the mapped type, and let it bail if desired
	if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}// Determine handlers
	handlerQueue=jQuery.event.handlers.call(this,event,handlers);// Run delegates first; they may want to stop propagation beneath us
	i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){// Triggered event must either 1) have no namespace, or 2) have namespace(s)
	// a subset or equal to those in the bound event (both can have no namespace).
	if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}// Call the postDispatch hook for the mapped type
	if(special.postDispatch){special.postDispatch.call(this,event);}return event.result;},handlers:function handlers(event,_handlers){var i,matches,sel,handleObj,handlerQueue=[],delegateCount=_handlers.delegateCount,cur=event.target;// Support: IE <=9
	// Find delegate handlers
	// Black-hole SVG <use> instance trees (#13180)
	//
	// Support: Firefox <=42
	// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
	if(delegateCount&&cur.nodeType&&(event.type!=="click"||isNaN(event.button)||event.button<1)){for(;cur!==this;cur=cur.parentNode||this){// Don't check non-elements (#13208)
	// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
	if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){matches=[];for(i=0;i<delegateCount;i++){handleObj=_handlers[i];// Don't conflict with Object.prototype properties (#13203)
	sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}if(matches[sel]){matches.push(handleObj);}}if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}}// Add the remaining (directly-bound) handlers
	if(delegateCount<_handlers.length){handlerQueue.push({elem:this,handlers:_handlers.slice(delegateCount)});}return handlerQueue;},addProp:function addProp(name,hook){Object.defineProperty(jQuery.Event.prototype,name,{enumerable:true,configurable:true,get:jQuery.isFunction(hook)?function(){if(this.originalEvent){return hook(this.originalEvent);}}:function(){if(this.originalEvent){return this.originalEvent[name];}},set:function set(value){Object.defineProperty(this,name,{enumerable:true,configurable:true,writable:true,value:value});}});},fix:function fix(originalEvent){return originalEvent[jQuery.expando]?originalEvent:new jQuery.Event(originalEvent);},special:{load:{// Prevent triggered image.load events from bubbling to window.load
	noBubble:true},focus:{// Fire native event if possible so blur/focus sequence is correct
	trigger:function trigger(){if(this!==safeActiveElement()&&this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function trigger(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{// For checkbox, fire native event so checked state will be right
	trigger:function trigger(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){this.click();return false;}},// For cross-browser consistency, don't fire native .click() on links
	_default:function _default(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function postDispatch(event){// Support: Firefox 20+
	// Firefox doesn't alert if the returnValue field is not set.
	if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};jQuery.removeEvent=function(elem,type,handle){// This "if" is needed for plain objects
	if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){// Allow instantiation without the 'new' keyword
	if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}// Event object
	if(src&&src.type){this.originalEvent=src;this.type=src.type;// Events bubbling up the document may have been marked as prevented
	// by a handler lower down the tree; reflect the correct value.
	this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&// Support: Android <=2.3 only
	src.returnValue===false?returnTrue:returnFalse;// Create target properties
	// Support: Safari <=6 - 7 only
	// Target should not be a text node (#504, #13143)
	this.target=src.target&&src.target.nodeType===3?src.target.parentNode:src.target;this.currentTarget=src.currentTarget;this.relatedTarget=src.relatedTarget;// Event type
	}else{this.type=src;}// Put explicitly provided properties onto the event object
	if(props){jQuery.extend(this,props);}// Create a timestamp if incoming event doesn't have one
	this.timeStamp=src&&src.timeStamp||jQuery.now();// Mark it as fixed
	this[jQuery.expando]=true;};// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function preventDefault(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault();}},stopPropagation:function stopPropagation(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation();}},stopImmediatePropagation:function stopImmediatePropagation(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation();}this.stopPropagation();}};// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each({altKey:true,bubbles:true,cancelable:true,changedTouches:true,ctrlKey:true,detail:true,eventPhase:true,metaKey:true,pageX:true,pageY:true,shiftKey:true,view:true,"char":true,charCode:true,key:true,keyCode:true,button:true,buttons:true,clientX:true,clientY:true,offsetX:true,offsetY:true,pointerId:true,pointerType:true,screenX:true,screenY:true,targetTouches:true,toElement:true,touches:true,which:function which(event){var button=event.button;// Add which for key events
	if(event.which==null&&rkeyEvent.test(event.type)){return event.charCode!=null?event.charCode:event.keyCode;}// Add which for click: 1 === left; 2 === middle; 3 === right
	if(!event.which&&button!==undefined&&rmouseEvent.test(event.type)){return button&1?1:button&2?3:button&4?2:0;}return event.which;}},jQuery.event.addProp);// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function handle(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;// For mouseenter/leave call the handler if related is outside the target.
	// NB: No relatedTarget if the mouse left/entered the browser window
	if(!related||related!==target&&!jQuery.contains(target,related)){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}return ret;}};});jQuery.fn.extend({on:function on(types,selector,data,fn){return _on(this,types,selector,data,fn);},one:function one(types,selector,data,fn){return _on(this,types,selector,data,fn,1);},off:function off(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){// ( event )  dispatched jQuery.Event
	handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){// ( types-object [, selector] )
	for(type in types){this.off(type,selector,types[type]);}return this;}if(selector===false||typeof selector==="function"){// ( types [, fn] )
	fn=selector;selector=undefined;}if(fn===false){fn=returnFalse;}return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var/* eslint-disable max-len */// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,/* eslint-enable */// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml=/<script|<style|<link/i,// checked="checked" or checked
	rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function manipulationTarget(elem,content){if(jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")){return elem.getElementsByTagName("tbody")[0]||elem;}return elem;}// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}return elem;}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;}// 1. Copy private data: events, handlers, etc.
	if(dataPriv.hasData(src)){pdataOld=dataPriv.access(src);pdataCur=dataPriv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}// 2. Copy user data
	if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}// Fix IE bugs, see support tests
	function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
	if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;// Fails to return the selected option to the default selected state when cloning options
	}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}function domManip(collection,args,callback,ignored){// Flatten any nested arrays
	args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);// We can't cloneNode fragments that contain checked, in WebKit
	if(isFunction||l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value)){return collection.each(function(index){var self=collection.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}domManip(self,args,callback,ignored);});}if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}// Require either new content or an interest in ignored elements to invoke the callback
	if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;// Use the original fragment for the last item
	// instead of the first because it can end up
	// being emptied incorrectly in certain situations (#8070).
	for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);// Keep references to cloned scripts for later restoration
	if(hasScripts){// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(scripts,getAll(node,"script"));}}callback.call(collection[i],node,i);}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;// Reenable scripts
	jQuery.map(scripts,restoreScript);// Evaluate executable scripts on first document insertion
	for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){// Optional AJAX dependency, but won't run scripts if not present
	if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else{DOMEval(node.textContent.replace(rcleanScript,""),doc);}}}}}}return collection;}function _remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}if(node.parentNode){if(keepData&&jQuery.contains(node.ownerDocument,node)){setGlobalEval(getAll(node,"script"));}node.parentNode.removeChild(node);}}return elem;}jQuery.extend({htmlPrefilter:function htmlPrefilter(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function clone(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem);// Fix IE cloning issues
	if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
	destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}// Copy the events from the original to the clone
	if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}// Preserve script evaluation history
	destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}// Return the cloned set
	return clone;},cleanData:function cleanData(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if(data=elem[dataPriv.expando]){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);// This is a shortcut to avoid jQuery.event.remove's overhead
	}else{jQuery.removeEvent(elem,type,data.handle);}}}// Support: Chrome <=35 - 45+
	// Assign undefined instead of using delete, see Data#remove
	elem[dataPriv.expando]=undefined;}if(elem[dataUser.expando]){// Support: Chrome <=35 - 45+
	// Assign undefined instead of using delete, see Data#remove
	elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({detach:function detach(selector){return _remove(this,selector,true);},remove:function remove(selector){return _remove(this,selector);},text:function text(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function append(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function prepend(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function before(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function after(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function empty(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){// Prevent memory leaks
	jQuery.cleanData(getAll(elem,false));// Remove any remaining nodes
	elem.textContent="";}}return this;},clone:function clone(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function html(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}// See if we can take a shortcut and just use innerHTML
	if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};// Remove element nodes and prevent memory leaks
	if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}elem=0;// If using innerHTML throws an exception, use the fallback method
	}catch(e){}}if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function replaceWith(){var ignored=[];// Make the changes, replacing each non-ignored context element with the new content
	return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}// Force callback invocation
	},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);// Support: Android <=4.0 only, PhantomJS 1 only
	// .get() because push.apply(_, arraylike) throws on ancient WebKit
	push.apply(ret,elems.get());}return this.pushStack(ret);};});var rmargin=/^margin/;var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function getStyles(elem){// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
	// IE throws on elements created in popups
	// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
	var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}return view.getComputedStyle(elem);};(function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests(){// This is a singleton, we need to execute it only once
	if(!div){return;}div.style.cssText="box-sizing:border-box;"+"position:relative;display:block;"+"margin:auto;border:1px;padding:1px;"+"top:1%;width:50%";div.innerHTML="";documentElement.appendChild(container);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
	reliableMarginLeftVal=divStyle.marginLeft==="2px";boxSizingReliableVal=divStyle.width==="4px";// Support: Android 4.0 - 4.3 only
	// Some styles come back with percentage values, even though they shouldn't
	div.style.marginRight="50%";pixelMarginRightVal=divStyle.marginRight==="4px";documentElement.removeChild(container);// Nullify the div so it wouldn't be stored in the memory and
	// it will also be a sign that checks already performed
	div=null;}var pixelPositionVal,boxSizingReliableVal,pixelMarginRightVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");// Finish early in limited (non-browser) environments
	if(!div.style){return;}// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;"+"padding:0;margin-top:1px;position:absolute";container.appendChild(div);jQuery.extend(support,{pixelPosition:function pixelPosition(){computeStyleTests();return pixelPositionVal;},boxSizingReliable:function boxSizingReliable(){computeStyleTests();return boxSizingReliableVal;},pixelMarginRight:function pixelMarginRight(){computeStyleTests();return pixelMarginRightVal;},reliableMarginLeft:function reliableMarginLeft(){computeStyleTests();return reliableMarginLeftVal;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if(computed){ret=computed.getPropertyValue(name)||computed[name];if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}// A tribute to the "awesome hack by Dean Edwards"
	// Android Browser returns percentage for some values,
	// but width seems to be reliably pixels.
	// This is against the CSSOM draft spec:
	// https://drafts.csswg.org/cssom/#resolved-values
	if(!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)){// Remember the original values
	width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;// Put in the new values to get a computed value out
	style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;// Revert the changed values
	style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}return ret!==undefined?// Support: IE <=9 - 11 only
	// IE returns zIndex value as an integer.
	ret+"":ret;}function addGetHookIf(conditionFn,hookFn){// Define the hook, we'll check on the first run if it's really needed.
	return{get:function get(){if(conditionFn()){// Hook not needed (or it's not possible to use it due
	// to missing dependency), remove it.
	delete this.get;return;}// Hook needed; redefine it so that the support test is not executed again.
	return(this.get=hookFn).apply(this,arguments);}};}var// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap=/^(none|table(?!-c[ea]).+)/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","Moz","ms"],emptyStyle=document.createElement("div").style;// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(name){// Shortcut for names that are not vendor prefixed
	if(name in emptyStyle){return name;}// Check for vendor prefixed names
	var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}function setPositiveNumber(elem,value,subtract){// Any relative (+/-) values have already been
	// normalized at this point
	var matches=rcssNum.exec(value);return matches?// Guard against undefined "subtract", e.g., when used as in cssHooks
	Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")?// If we already have the right measurement, avoid augmentation
	4:// Otherwise initialize for horizontal or vertical properties
	name==="width"?1:0,val=0;for(;i<4;i+=2){// Both box models exclude margin, so add it if we want it
	if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}if(isBorderBox){// border-box includes padding, so remove it if we want content
	if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}// At this point, extra isn't border nor margin, so remove border
	if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{// At this point, extra isn't content, so add padding
	val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);// At this point, extra isn't content nor padding, so add border
	if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}return val;}function getWidthOrHeight(elem,name,extra){// Start with offset property, which is equivalent to the border-box value
	var val,valueIsBorderBox=true,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if(elem.getClientRects().length){val=elem.getBoundingClientRect()[name];}// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if(val<=0||val==null){// Fall back to computed then uncomputed css if necessary
	val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];}// Computed unit is not pixels. Stop here and return.
	if(rnumnonpx.test(val)){return val;}// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]);// Normalize "", auto, and prepare for extra
	val=parseFloat(val)||0;}// Use the active box-sizing model to add/subtract irrelevant styles
	return val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles)+"px";}jQuery.extend({// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks:{opacity:{get:function get(elem,computed){if(computed){// We should always get a number back from opacity
	var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},// Don't automatically add "px" to these possibly-unitless properties
	cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps:{"float":"cssFloat"},// Get and set the style property on a DOM Node
	style:function style(elem,name,value,extra){// Don't set styles on text and comment nodes
	if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}// Make sure that we're working with the right name
	var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);// Gets hook for the prefixed version, then unprefixed version
	hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// Check if we're setting a value
	if(value!==undefined){type=typeof value==="undefined"?"undefined":_typeof(value);// Convert "+=" or "-=" to relative numbers (#7345)
	if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);// Fixes bug #9237
	type="number";}// Make sure that null and NaN values aren't set (#7116)
	if(value==null||value!==value){return;}// If a number was passed in, add the unit (except for certain CSS properties)
	if(type==="number"){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}// background-* props affect original clone's values
	if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}// If a hook was provided, use that value, otherwise just set the specified value
	if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){style[name]=value;}}else{// If a hook was provided get the non-computed value from there
	if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}// Otherwise just get the value from the style object
	return style[name];}},css:function css(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name);// Make sure that we're working with the right name
	name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);// Try prefixed name followed by the unprefixed name
	hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// If a hook was provided get the computed value from there
	if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}// Otherwise, if a way to get the computed value exists, use that
	if(val===undefined){val=curCSS(elem,name,styles);}// Convert "normal" to computed value
	if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}// Make numeric if forced or a qualifier was provided and val looks numeric
	if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function get(elem,computed,extra){if(computed){// Certain elements can have dimension info if we invisibly show them
	// but it must have a current display style that would benefit
	return rdisplayswap.test(jQuery.css(elem,"display"))&&(// Support: Safari 8+
	// Table columns in Safari have non-zero offsetWidth & zero
	// getBoundingClientRect().width unless display is changed.
	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	!elem.getClientRects().length||!elem.getBoundingClientRect().width)?swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function set(elem,value,extra){var matches,styles=extra&&getStyles(elem),subtract=extra&&augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles);// Convert to pixels if value adjustment is needed
	if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[name]=value;value=jQuery.css(elem,name);}return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});// These hooks are used by animate to expand properties
	jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function expand(value){var i=0,expanded={},// Assumes a single number if not a string
	parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function css(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}return map;}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function init(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function cur(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function run(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function get(tween){var result;// Use a property on the element directly when it is not a DOM element,
	// or when there is no matching style property that exists.
	if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}// Passing an empty string as a 3rd parameter to .css will automatically
	// attempt a parseFloat and fallback to a string if the parse fails.
	// Simple values such as "10px" are parsed to Float;
	// complex values such as "rotate(1rad)" are returned as-is.
	result=jQuery.css(tween.elem,tween.prop,"");// Empty strings, null, undefined and "auto" are converted to 0.
	return!result||result==="auto"?0:result;},set:function set(tween){// Use step hook for back compat.
	// Use cssHook if its there.
	// Use .style if available and use plain properties where available.
	if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function set(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function linear(p){return p;},swing:function swing(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init;// Back compat <1.8 extension point
	jQuery.fx.step={};var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function raf(){if(timerId){window.requestAnimationFrame(raf);jQuery.fx.tick();}}// Animations created synchronously will run synchronously
	function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return fxNow=jQuery.now();}// Generate parameters to create a standard animation
	function genFx(type,includeWidth){var which,i=0,attrs={height:type};// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}if(includeWidth){attrs.opacity=attrs.width=type;}return attrs;}function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(tween=collection[index].call(animation,prop,value)){// We're done with this property
	return tween;}}}function defaultPrefilter(elem,props,opts){var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,isBox="width"in props||"height"in props,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHiddenWithinTree(elem),dataShow=dataPriv.get(elem,"fxshow");// Queue-skipping animations hijack the fx hooks
	if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}hooks.unqueued++;anim.always(function(){// Ensure the complete handler is called before this completes
	anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}// Detect show/hide animations
	for(prop in props){value=props[prop];if(rfxtypes.test(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){// Pretend to be hidden if this is a "show" and
	// there is still data from a stopped show/hide
	if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;// Ignore all other no-op show/hide data
	}else{continue;}}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}}// Bail out if this is a no-op like .hide().hide()
	propTween=!jQuery.isEmptyObject(props);if(!propTween&&jQuery.isEmptyObject(orig)){return;}// Restrict "overflow" and "display" styles during box animations
	if(isBox&&elem.nodeType===1){// Support: IE <=9 - 11, Edge 12 - 13
	// Record all 3 overflow attributes because IE does not infer the shorthand
	// from identically-valued overflowX and overflowY
	opts.overflow=[style.overflow,style.overflowX,style.overflowY];// Identify a display type, preferring old show/hide data over the CSS cascade
	restoreDisplay=dataShow&&dataShow.display;if(restoreDisplay==null){restoreDisplay=dataPriv.get(elem,"display");}display=jQuery.css(elem,"display");if(display==="none"){if(restoreDisplay){display=restoreDisplay;}else{// Get nonempty value(s) by temporarily forcing visibility
	showHide([elem],true);restoreDisplay=elem.style.display||restoreDisplay;display=jQuery.css(elem,"display");showHide([elem]);}}// Animate inline elements as inline-block
	if(display==="inline"||display==="inline-block"&&restoreDisplay!=null){if(jQuery.css(elem,"float")==="none"){// Restore the original display value at the end of pure show/hide animations
	if(!propTween){anim.done(function(){style.display=restoreDisplay;});if(restoreDisplay==null){display=style.display;restoreDisplay=display==="none"?"":display;}}style.display="inline-block";}}}if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}// Implement show/hide animations
	propTween=false;for(prop in orig){// General show/hide setup for this element animation
	if(!propTween){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{display:restoreDisplay});}// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
	if(toggle){dataShow.hidden=!hidden;}// Show elements before animating them
	if(hidden){showHide([elem],true);}/* eslint-disable no-loop-func */anim.done(function(){/* eslint-enable no-loop-func */// The final step of a "hide" animation is actually hiding the element
	if(!hidden){showHide([elem]);}dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});}// Per-property setup
	propTween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=propTween.start;if(hidden){propTween.end=propTween.start;propTween.start=0;}}}}function propFilter(props,specialEasing){var index,name,easing,value,hooks;// camelCase, specialEasing and expand cssHook pass
	for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}if(index!==name){props[name]=value;delete props[index];}hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];// Not quite $.extend, this won't overwrite existing keys.
	// Reusing 'index' because we have the correct "name"
	for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){// Don't match elem in the :animated selector
	delete tick.elem;}),tick=function tick(){if(stopped){return false;}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),// Support: Android 2.3 only
	// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
	temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function createTween(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function stop(gotoEnd){var index=0,// If we are going to the end, we want to run all the tweens
	// otherwise we skip this part
	length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}// Resolve when we played the last frame; otherwise, reject
	if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(jQuery.isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=jQuery.proxy(result.stop,result);}return result;}}jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));// attach callbacks from options
	return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function tweener(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnotwhite);}var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function prefilter(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&(typeof speed==="undefined"?"undefined":_typeof(speed))==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};// Go to the end state if fx are off or if document is hidden
	if(jQuery.fx.off||document.hidden){opt.duration=0;}else{opt.duration=typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;}// Normalize opt.queue - true/undefined/null -> "fx"
	if(opt.queue==null||opt.queue===true){opt.queue="fx";}// Queueing
	opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function fadeTo(speed,to,easing,callback){// Show any hidden elements after setting opacity to 0
	return this.filter(isHiddenWithinTree).css("opacity",0).show()// Animate to the value specified
	.end().animate({opacity:to},speed,easing,callback);},animate:function animate(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function doAnimation(){// Operate on a copy of prop so per-property easing won't be lost
	var anim=Animation(this,jQuery.extend({},prop),optall);// Empty animations, or finishing resolves immediately
	if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function stop(type,clearQueue,gotoEnd){var stopQueue=function stopQueue(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}if(clearQueue&&type!==false){this.queue(type||"fx",[]);}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}// Start the next in the queue if the last step wasn't forced.
	// Timers currently will call their complete callbacks, which
	// will dequeue but only if they were gotoEnd.
	if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function finish(type){if(type!==false){type=type||"fx";}return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;// Enable finishing flag on private data
	data.finish=true;// Empty the queue first
	jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}// Look for any active animations, and finish them
	for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}// Look for any animations in the old queue and finish them
	for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}// Turn off finishing flag
	delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});// Generate shortcuts for custom animations
	jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];// Checks the timer has not already been removed
	if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}if(!timers.length){jQuery.fx.stop();}fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else{jQuery.timers.pop();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=window.requestAnimationFrame?window.requestAnimationFrame(raf):window.setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){if(window.cancelAnimationFrame){window.cancelAnimationFrame(timerId);}else{window.clearInterval(timerId);}timerId=null;};jQuery.fx.speeds={slow:600,fast:200,// Default speed
	_default:400};// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn=input.value!=="";// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected=opt.selected;// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function attr(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function removeAttr(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function attr(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set attributes on text, comment and attribute nodes
	if(nType===3||nType===8||nType===2){return;}// Fallback to prop when attributes are not supported
	if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}// Attribute hooks are determined by the lowercase version
	// Grab necessary hook if one is defined
	if(nType!==1||!jQuery.isXMLDoc(elem)){hooks=jQuery.attrHooks[name.toLowerCase()]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}elem.setAttribute(name,value+"");return value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}ret=jQuery.find.attr(elem,name);// Non-existent attributes return null, we normalize to undefined
	return ret==null?undefined:ret;},attrHooks:{type:{set:function set(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}return value;}}}},removeAttr:function removeAttr(elem,value){var name,i=0,attrNames=value&&value.match(rnotwhite);if(attrNames&&elem.nodeType===1){while(name=attrNames[i++]){elem.removeAttribute(name);}}}});// Hooks for boolean attributes
	boolHook={set:function set(elem,value,name){if(value===false){// Remove boolean attributes when set to false
	jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle,lowercaseName=name.toLowerCase();if(!isXML){// Avoid an infinite loop by temporarily removing this function from the getter
	handle=attrHandle[lowercaseName];attrHandle[lowercaseName]=ret;ret=getter(elem,name,isXML)!=null?lowercaseName:null;attrHandle[lowercaseName]=handle;}return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function prop(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function removeProp(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function prop(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set properties on text, comment and attribute nodes
	if(nType===3||nType===8||nType===2){return;}if(nType!==1||!jQuery.isXMLDoc(elem)){// Fix name and attach hooks
	name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}return elem[name]=value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}return elem[name];},propHooks:{tabIndex:{get:function get(elem){// Support: IE <=9 - 11 only
	// elem.tabIndex doesn't always return the
	// correct value when it hasn't been explicitly set
	// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
	// Use proper attribute retrieval(#12072)
	var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:-1;}}},propFix:{"for":"htmlFor","class":"className"}});// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if(!support.optSelected){jQuery.propHooks.selected={get:function get(elem){var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}return null;},set:function set(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});var rclass=/[\t\r\n\f]/g;function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}jQuery.fn.extend({addClass:function addClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while(elem=this[i++]){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while(clazz=classes[j++]){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}// Only assign if different to avoid unneeded rendering.
	finalValue=jQuery.trim(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},removeClass:function removeClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}if(!arguments.length){return this.attr("class","");}if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while(elem=this[i++]){curValue=getClass(elem);// This expression is here for better compressibility (see addClass)
	cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while(clazz=classes[j++]){// Remove *all* instances
	while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}}// Only assign if different to avoid unneeded rendering.
	finalValue=jQuery.trim(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},toggleClass:function toggleClass(value,stateVal){var type=typeof value==="undefined"?"undefined":_typeof(value);if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}return this.each(function(){var className,i,self,classNames;if(type==="string"){// Toggle individual class names
	i=0;self=jQuery(this);classNames=value.match(rnotwhite)||[];while(className=classNames[i++]){// Check each className given, space separated list
	if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}// Toggle whole class name
	}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){// Store className if set
	dataPriv.set(this,"__className__",className);}// If the element has a class name or if we're passed `false`,
	// then remove the whole classname (if there was one, the above saved it).
	// Otherwise bring back whatever was previously saved (if anything),
	// falling back to the empty string if nothing was stored.
	if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function hasClass(selector){var className,elem,i=0;className=" "+selector+" ";while(elem=this[i++]){if(elem.nodeType===1&&(" "+getClass(elem)+" ").replace(rclass," ").indexOf(className)>-1){return true;}}return false;}});var rreturn=/\r/g,rspaces=/[\x20\t\r\n\f]+/g;jQuery.fn.extend({val:function val(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}ret=elem.value;return typeof ret==="string"?// Handle most common string cases
	ret.replace(rreturn,""):// Handle cases where value is null/undef or number
	ret==null?"":ret;}return;}isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}if(isFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}// Treat null/undefined as ""; convert numbers to string
	if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];// If set returns undefined, fall back to normal setting
	if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function get(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:// Support: IE <=10 - 11 only
	// option.text throws exceptions (#14686, #14858)
	// Strip and collapse whitespace
	// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
	jQuery.trim(jQuery.text(elem)).replace(rspaces," ");}},select:{get:function get(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one",values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;// Loop through all the selected options
	for(;i<max;i++){option=options[i];// Support: IE <=9 only
	// IE8-9 doesn't update selected after form reset (#2551)
	if((option.selected||i===index)&&// Don't return options that are disabled or in a disabled optgroup
	!option.disabled&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){// Get the specific value for the option
	value=jQuery(option).val();// We don't need an array for one selects
	if(one){return value;}// Multi-Selects return an array
	values.push(value);}}return values;},set:function set(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];/* eslint-disable no-cond-assign */if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}/* eslint-enable no-cond-assign */}// Force browsers to behave consistently when non-matching value is set
	if(!optionSet){elem.selectedIndex=-1;}return values;}}}});// Radios and checkboxes getter/setter
	jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function set(elem,value){if(jQuery.isArray(value)){return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1;}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});// Return jQuery for attributes-only inclusion
	var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/;jQuery.extend(jQuery.event,{trigger:function trigger(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;// Don't do events on text and comment nodes
	if(elem.nodeType===3||elem.nodeType===8){return;}// focus/blur morphs to focusin/out; ensure we're not firing them right now
	if(rfocusMorph.test(type+jQuery.event.triggered)){return;}if(type.indexOf(".")>-1){// Namespaced trigger; create a regexp to match event type in handle()
	namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}ontype=type.indexOf(":")<0&&"on"+type;// Caller can pass in a jQuery.Event object, Object, or just an event type string
	event=event[jQuery.expando]?event:new jQuery.Event(type,(typeof event==="undefined"?"undefined":_typeof(event))==="object"&&event);// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
	event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;// Clean up the event in case it is being reused
	event.result=undefined;if(!event.target){event.target=elem;}// Clone any incoming data and prepend the event, creating the handler arg list
	data=data==null?[event]:jQuery.makeArray(data,[event]);// Allow special events to draw outside the lines
	special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}// Determine event propagation path in advance, per W3C events spec (#9951)
	// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
	if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}// Only add window if we got to document (e.g., not plain obj or detached DOM)
	if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}// Fire handlers on the event path
	i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;// jQuery handler
	handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}// Native handler
	handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}event.type=type;// If nobody prevented the default action, do it now
	if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){// Call a native DOM method on the target with the same name as the event.
	// Don't do default actions on window, that's where global variables be (#6170)
	if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){// Don't re-trigger an onFOO event when we call its FOO() method
	tmp=elem[ontype];if(tmp){elem[ontype]=null;}// Prevent re-triggering of the same event, since we already bubbled it above
	jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}return event.result;},// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate:function simulate(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);}});jQuery.fn.extend({trigger:function trigger(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function triggerHandler(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup contextmenu").split(" "),function(i,name){// Handle event binding
	jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function hover(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});support.focusin="onfocusin"in window;// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){// Attach a single capturing handler on the document while someone wants focusin/focusout
	var handler=function handler(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function setup(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function teardown(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else{dataPriv.access(doc,fix,attaches);}}};});}var location=window.location;var nonce=jQuery.now();var rquery=/\?/;// Cross-browser xml parsing
	jQuery.parseXML=function(data){var xml;if(!data||typeof data!=="string"){return null;}// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try{xml=new window.DOMParser().parseFromString(data,"text/xml");}catch(e){xml=undefined;}if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}return xml;};var rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){// Serialize array item.
	jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){// Treat each array item as a scalar.
	add(prefix,v);}else{// Item is non-scalar (array or object), encode its numeric index.
	buildParams(prefix+"["+((typeof v==="undefined"?"undefined":_typeof(v))==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){// Serialize object item.
	for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{// Serialize scalar item.
	add(prefix,obj);}}// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param=function(a,traditional){var prefix,s=[],add=function add(key,valueOrFunction){// If value is a function, invoke it and use its return value
	var value=jQuery.isFunction(valueOrFunction)?valueOrFunction():valueOrFunction;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value==null?"":value);};// If an array was passed in, assume that it is an array of form elements.
	if(jQuery.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){// Serialize the form elements
	jQuery.each(a,function(){add(this.name,this.value);});}else{// If traditional, encode the "old" way (the way 1.3.2 or older
	// did it), otherwise encode params recursively.
	for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}// Return the resulting serialization
	return s.join("&");};jQuery.fn.extend({serialize:function serialize(){return jQuery.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
	var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
	return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});var r20=/%20/g,rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,// #7653, #8125, #8152: local protocol detection
	rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */prefilters={},/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */transports={},// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes="*/".concat("*"),// Anchor tag for parsing the document origin
	originAnchor=document.createElement("a");originAnchor.href=location.href;// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure){// dataTypeExpression is optional and defaults to "*"
	return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];if(jQuery.isFunction(func)){// For each dataType in the dataTypeExpression
	while(dataType=dataTypes[i++]){// Prepend if requested
	if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);// Otherwise append
	}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure===transports;function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))[key]=src[key];}}if(deep){jQuery.extend(true,target,deep);}return target;}/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;// Remove auto dataType and get content-type in the process
	while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}// Check if we're dealing with a known content-type
	if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}// Check to see if we have a response for the expected dataType
	if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{// Try convertible dataTypes
	for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}if(!firstDataType){firstDataType=type;}}// Or just use first one
	finalDataType=finalDataType||firstDataType;}// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}}/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},// Work with a copy of dataTypes in case we need to modify it for conversion
	dataTypes=s.dataTypes.slice();// Create converters map with lowercased keys
	if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}current=dataTypes.shift();// Convert to each sequential dataType
	while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}// Apply the dataFilter if provided
	if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}prev=current;current=dataTypes.shift();if(current){// There's only work to do if current dataType is non-auto
	if(current==="*"){current=prev;// Convert response if prev dataType is non-auto and differs from current
	}else if(prev!=="*"&&prev!==current){// Seek a direct converter
	conv=converters[prev+" "+current]||converters["* "+current];// If none found, seek a pair
	if(!conv){for(conv2 in converters){// If conv2 outputs current
	tmp=conv2.split(" ");if(tmp[1]===current){// If prev can be converted to accepted input
	conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){// Condense equivalence converters
	if(conv===true){conv=converters[conv2];// Otherwise, insert the intermediate dataType
	}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}break;}}}}// Apply converter (if not an equivalence)
	if(conv!==true){// Unless errors are allowed to bubble, catch and return them
	if(conv&&s.throws){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}return{state:"success",data:response};}jQuery.extend({// Counter for holding the number of active queries
	active:0,// Last-Modified header cache for next request
	lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
	// Keys separate source (or catchall "*") and destination types with a single space
	converters:{// Convert anything to text
	"* text":String,// Text to html (true = no transformation)
	"text html":true,// Evaluate text as a json expression
	"text json":JSON.parse,// Parse text as xml
	"text xml":jQuery.parseXML},// For options that shouldn't be deep extended:
	// you can add your own custom options here if
	// and when you create one that shouldn't be
	// deep extended (see ajaxExtend)
	flatOptions:{url:true,context:true}},// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup:function ajaxSetup(target,settings){return settings?// Building a settings object
	ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):// Extending ajaxSettings
	ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),// Main method
	ajax:function ajax(url,options){// If url is an object, simulate pre-1.5 signature
	if((typeof url==="undefined"?"undefined":_typeof(url))==="object"){options=url;url=undefined;}// Force options to be an object
	options=options||{};var transport,// URL without anti-cache param
	cacheURL,// Response headers
	responseHeadersString,responseHeaders,// timeout handle
	timeoutTimer,// Url cleanup var
	urlAnchor,// Request state (becomes false upon send and true upon completion)
	completed,// To know if global events are to be dispatched
	fireGlobals,// Loop variable
	i,// uncached part of the url
	uncached,// Create the final options object
	s=jQuery.ajaxSetup({},options),// Callbacks context
	callbackContext=s.context||s,// Context for global events is callbackContext if it is a DOM node or jQuery collection
	globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,// Deferreds
	deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),// Status-dependent callbacks
	_statusCode=s.statusCode||{},// Headers (they are sent all at once)
	requestHeaders={},requestHeadersNames={},// Default abort message
	strAbort="canceled",// Fake xhr
	jqXHR={readyState:0,// Builds headers hashtable if needed
	getResponseHeader:function getResponseHeader(key){var match;if(completed){if(!responseHeaders){responseHeaders={};while(match=rheaders.exec(responseHeadersString)){responseHeaders[match[1].toLowerCase()]=match[2];}}match=responseHeaders[key.toLowerCase()];}return match==null?null:match;},// Raw string
	getAllResponseHeaders:function getAllResponseHeaders(){return completed?responseHeadersString:null;},// Caches the header
	setRequestHeader:function setRequestHeader(name,value){if(completed==null){name=requestHeadersNames[name.toLowerCase()]=requestHeadersNames[name.toLowerCase()]||name;requestHeaders[name]=value;}return this;},// Overrides response content-type header
	overrideMimeType:function overrideMimeType(type){if(completed==null){s.mimeType=type;}return this;},// Status-dependent callbacks
	statusCode:function statusCode(map){var code;if(map){if(completed){// Execute the appropriate callbacks
	jqXHR.always(map[jqXHR.status]);}else{// Lazy-add the new callbacks in a way that preserves old ones
	for(code in map){_statusCode[code]=[_statusCode[code],map[code]];}}}return this;},// Cancel the request
	abort:function abort(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}done(0,finalText);return this;}};// Attach deferreds
	deferred.promise(jqXHR);// Add protocol if not provided (prefilters might expect it)
	// Handle falsy url in the settings object (#10093: consistency with old signature)
	// We also use the url parameter if available
	s.url=((url||s.url||location.href)+"").replace(rprotocol,location.protocol+"//");// Alias method option to type as per ticket #12004
	s.type=options.method||options.type||s.method||s.type;// Extract dataTypes list
	s.dataTypes=(s.dataType||"*").toLowerCase().match(rnotwhite)||[""];// A cross-domain request is in order when the origin doesn't match the current origin.
	if(s.crossDomain==null){urlAnchor=document.createElement("a");// Support: IE <=8 - 11, Edge 12 - 13
	// IE throws exception on accessing the href property if url is malformed,
	// e.g. http://example.com:80x/
	try{urlAnchor.href=s.url;// Support: IE <=8 - 11 only
	// Anchor's host property isn't correctly set when s.url is relative
	urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
	// it can be rejected by the transport if it is invalid
	s.crossDomain=true;}}// Convert data if not already a string
	if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}// Apply prefilters
	inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);// If request was aborted inside a prefilter, stop there
	if(completed){return jqXHR;}// We can fire global events as of now if asked to
	// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
	fireGlobals=jQuery.event&&s.global;// Watch for a new set of requests
	if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}// Uppercase the type
	s.type=s.type.toUpperCase();// Determine if request has content
	s.hasContent=!rnoContent.test(s.type);// Save the URL in case we're toying with the If-Modified-Since
	// and/or If-None-Match header later on
	// Remove hash to simplify url manipulation
	cacheURL=s.url.replace(rhash,"");// More options handling for requests with no content
	if(!s.hasContent){// Remember the hash so we can put it back
	uncached=s.url.slice(cacheURL.length);// If data is available, append data to url
	if(s.data){cacheURL+=(rquery.test(cacheURL)?"&":"?")+s.data;// #9682: remove data so that it's not used in an eventual retry
	delete s.data;}// Add anti-cache in uncached url if needed
	if(s.cache===false){cacheURL=cacheURL.replace(rts,"");uncached=(rquery.test(cacheURL)?"&":"?")+"_="+nonce++ +uncached;}// Put hash and anti-cache on the URL that will be requested (gh-1732)
	s.url=cacheURL+uncached;// Change '%20' to '+' if this is encoded form body content (gh-2658)
	}else if(s.data&&s.processData&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0){s.data=s.data.replace(r20,"+");}// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}// Set the correct header, if data is being sent
	if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}// Set the Accepts header for the server, depending on the dataType
	jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);// Check for headers option
	for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}// Allow custom headers/mimetypes and early abort
	if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||completed)){// Abort if not done already and return
	return jqXHR.abort();}// Aborting is no longer a cancellation
	strAbort="abort";// Install callbacks on deferreds
	completeDeferred.add(s.complete);jqXHR.done(s.success);jqXHR.fail(s.error);// Get transport
	transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);// If no transport, we auto-abort
	if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;// Send global event
	if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}// If request was aborted inside ajaxSend, stop there
	if(completed){return jqXHR;}// Timeout
	if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}try{completed=false;transport.send(requestHeaders,done);}catch(e){// Rethrow post-completion exceptions
	if(completed){throw e;}// Propagate others as results
	done(-1,e);}}// Callback for when everything is done
	function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;// Ignore repeat invocations
	if(completed){return;}completed=true;// Clear timeout if it exists
	if(timeoutTimer){window.clearTimeout(timeoutTimer);}// Dereference transport for early garbage collection
	// (no matter how long the jqXHR object will be used)
	transport=undefined;// Cache response headers
	responseHeadersString=headers||"";// Set readyState
	jqXHR.readyState=status>0?4:0;// Determine if successful
	isSuccess=status>=200&&status<300||status===304;// Get response data
	if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}// Convert no matter what (that way responseXXX fields are always set)
	response=ajaxConvert(s,response,jqXHR,isSuccess);// If successful, handle type chaining
	if(isSuccess){// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}// if no content
	if(status===204||s.type==="HEAD"){statusText="nocontent";// if not modified
	}else if(status===304){statusText="notmodified";// If we have data, let's convert it
	}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{// Extract error from statusText and normalize for non-aborts
	error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}// Set data for the fake xhr object
	jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";// Success/Error
	if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}// Status-dependent callbacks
	jqXHR.statusCode(_statusCode);_statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}// Complete
	completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);// Handle the global AJAX counter
	if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}}return jqXHR;},getJSON:function getJSON(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function getScript(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){// Shift arguments if data argument was omitted
	if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}// The url can be an options object (which then must have .url)
	return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,// Make this explicit, since user can override this through ajaxSetup (#11264)
	type:"GET",dataType:"script",cache:true,async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function wrapAll(html){var wrap;if(this[0]){if(jQuery.isFunction(html)){html=html.call(this[0]);}// The elements to wrap the target around
	wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}return elem;}).append(this);}return this;},wrapInner:function wrapInner(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function wrap(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function unwrap(selector){this.parent(selector).not("body").each(function(){jQuery(this).replaceWith(this.childNodes);});return this;}});jQuery.expr.pseudos.hidden=function(elem){return!jQuery.expr.pseudos.visible(elem);};jQuery.expr.pseudos.visible=function(elem){return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);};jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={// File protocol always yields status code 0, assume 200
	0:200,// Support: IE <=9 only
	// #1450: sometimes IE returns 1223 when it should be 204
	1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&"withCredentials"in xhrSupported;support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var _callback,errorCallback;// Cross domain only allowed if supported through XMLHttpRequest
	if(support.cors||xhrSupported&&!options.crossDomain){return{send:function send(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);// Apply custom fields if provided
	if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}// Override mime type if needed
	if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}// X-Requested-With header
	// For cross-domain requests, seeing as conditions for a preflight are
	// akin to a jigsaw puzzle, we simply never set it to be sure.
	// (it can always be set on a per-request basis or even using ajaxSetup)
	// For same-domain requests, won't change header if already provided.
	if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}// Set headers
	for(i in headers){xhr.setRequestHeader(i,headers[i]);}// Callback
	_callback=function callback(type){return function(){if(_callback){_callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){// Support: IE <=9 only
	// On a manual native abort, IE9 throws
	// errors on any property access that is not readyState
	if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(// File: protocol always yields status 0; see #8605, #14207
	xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,// Support: IE <=9 only
	// IE9 has no XHR2 but throws on binary (trac-11426)
	// For XHR2 non-text, let the caller handle it (gh-2498)
	(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};// Listen to events
	xhr.onload=_callback();errorCallback=xhr.onerror=_callback("error");// Support: IE 9 only
	// Use onreadystatechange to replace onabort
	// to handle uncaught aborts
	if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){// Check readyState before timeout as it changes
	if(xhr.readyState===4){// Allow onerror to be called first,
	// but that will not handle a native abort
	// Also, save errorCallback to a variable
	// as xhr.onerror cannot be accessed
	window.setTimeout(function(){if(_callback){errorCallback();}});}};}// Create the abort callback
	_callback=_callback("abort");try{// Do send the request (this may raise an exception)
	xhr.send(options.hasContent&&options.data||null);}catch(e){// #14683: Only rethrow if this hasn't been notified as an error yet
	if(_callback){throw e;}}},abort:function abort(){if(_callback){_callback();}}};}});// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter(function(s){if(s.crossDomain){s.contents.script=false;}});// Install script dataType
	jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function textScript(text){jQuery.globalEval(text);return text;}}});// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}if(s.crossDomain){s.type="GET";}});// Bind script tag hack transport
	jQuery.ajaxTransport("script",function(s){// This transport only deals with cross domain requests
	if(s.crossDomain){var script,_callback2;return{send:function send(_,complete){script=jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",_callback2=function callback(evt){script.remove();_callback2=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});// Use native DOM manipulation to avoid our domManip AJAX trickery
	document.head.appendChild(script[0]);},abort:function abort(){if(_callback2){_callback2();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
	jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+nonce++;this[callback]=true;return callback;}});// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if(jsonProp||s.dataTypes[0]==="jsonp"){// Get callback name, remembering preexisting value associated with it
	callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;// Insert callback into url or form data
	if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}// Use data converter to retrieve json after script execution
	s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}return responseContainer[0];};// Force json dataType
	s.dataTypes[0]="json";// Install callback
	overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};// Clean-up function (fires after converters)
	jqXHR.always(function(){// If previous value didn't exist - remove it
	if(overwritten===undefined){jQuery(window).removeProp(callbackName);// Otherwise restore preexisting value
	}else{window[callbackName]=overwritten;}// Save back as free
	if(s[callbackName]){// Make sure that re-using the options doesn't screw things around
	s.jsonpCallback=originalSettings.jsonpCallback;// Save the callback name for future use
	oldCallbacks.push(callbackName);}// Call if it was a function and we have a response
	if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}responseContainer=overwritten=undefined;});// Delegate to script
	return"script";}});// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument=function(){var body=document.implementation.createHTMLDocument("").body;body.innerHTML="<form></form><form></form>";return body.childNodes.length===2;}();// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML=function(data,context,keepScripts){if(typeof data!=="string"){return[];}if(typeof context==="boolean"){keepScripts=context;context=false;}var base,parsed,scripts;if(!context){// Stop scripts or inline event handlers from being executed immediately
	// by using document.implementation
	if(support.createHTMLDocument){context=document.implementation.createHTMLDocument("");// Set the base href for the created document
	// so any parsed elements with URLs
	// are based on the document's URL (gh-2965)
	base=context.createElement("base");base.href=document.location.href;context.head.appendChild(base);}else{context=document;}}parsed=rsingleTag.exec(data);scripts=!keepScripts&&[];// Single tag
	if(parsed){return[context.createElement(parsed[1])];}parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}return jQuery.merge([],parsed.childNodes);};/**
	 * Load a url into a page
	 */jQuery.fn.load=function(url,params,callback){var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=jQuery.trim(url.slice(off));url=url.slice(0,off);}// If it's a function
	if(jQuery.isFunction(params)){// We assume that it's the callback
	callback=params;params=undefined;// Otherwise, build a param string
	}else if(params&&(typeof params==="undefined"?"undefined":_typeof(params))==="object"){type="POST";}// If we have elements to modify, make the request
	if(self.length>0){jQuery.ajax({url:url,// If "type" variable is undefined, then "GET" method will be used.
	// Make value of this field explicit since
	// user can override it through ajaxSetup method
	type:type||"GET",dataType:"html",data:params}).done(function(responseText){// Save response for use in complete callback
	response=arguments;self.html(selector?// If a selector was specified, locate the right elements in a dummy div
	// Exclude scripts to avoid IE 'Permission Denied' errors
	jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):// Otherwise use the full result
	responseText);// If the request succeeds, this function gets "data", "status", "jqXHR"
	// but they are ignored because response was set above.
	// If it fails, this function gets "jqXHR", "status", "error"
	}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}return this;};// Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.pseudos.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};/**
	 * Gets a window from an element
	 */function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9&&elem.defaultView;}jQuery.offset={setOffset:function setOffset(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};// Set position first, in-case top/left are set even on static elem
	if(position==="static"){elem.style.position="relative";}curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;// Need to be able to calculate position if either
	// top or left is auto and position is either absolute or fixed
	if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}if(jQuery.isFunction(options)){// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
	options=options.call(elem,i,jQuery.extend({},curOffset));}if(options.top!=null){props.top=options.top-curOffset.top+curTop;}if(options.left!=null){props.left=options.left-curOffset.left+curLeft;}if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function offset(options){// Preserve chaining for setter
	if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}var docElem,win,rect,doc,elem=this[0];if(!elem){return;}// Support: IE <=11 only
	// Running getBoundingClientRect on a
	// disconnected node in IE throws an error
	if(!elem.getClientRects().length){return{top:0,left:0};}rect=elem.getBoundingClientRect();// Make sure element is not hidden (display: none)
	if(rect.width||rect.height){doc=elem.ownerDocument;win=getWindow(doc);docElem=doc.documentElement;return{top:rect.top+win.pageYOffset-docElem.clientTop,left:rect.left+win.pageXOffset-docElem.clientLeft};}// Return zeros for disconnected and hidden elements (gh-2310)
	return rect;},position:function position(){if(!this[0]){return;}var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0};// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
	// because it is its only offset parent
	if(jQuery.css(elem,"position")==="fixed"){// Assume getBoundingClientRect is there when computed position is fixed
	offset=elem.getBoundingClientRect();}else{// Get *real* offsetParent
	offsetParent=this.offsetParent();// Get correct offsets
	offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();}// Add offsetParent borders
	parentOffset={top:parentOffset.top+jQuery.css(offsetParent[0],"borderTopWidth",true),left:parentOffset.left+jQuery.css(offsetParent[0],"borderLeftWidth",true)};}// Subtract parent offsets and element margins
	return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent:function offsetParent(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}return offsetParent||documentElement;});}});// Create scrollLeft and scrollTop methods
	jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?win[prop]:elem[method];}if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);// If curCSS returns percentage, fallback to offset
	return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){// Margin is only for outerHeight, outerWidth
	jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
	return funcName.indexOf("outer")===0?elem["inner"+name]:elem.document.documentElement["client"+name];}// Get document width or height
	if(elem.nodeType===9){doc=elem.documentElement;// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
	// whichever is greatest
	return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}return value===undefined?// Get width or height on the element, requesting but not forcing parseFloat
	jQuery.css(elem,type,extra):// Set width or height on the element
	jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable);};});});jQuery.fn.extend({bind:function bind(types,data,fn){return this.on(types,null,data,fn);},unbind:function unbind(types,fn){return this.off(types,null,fn);},delegate:function delegate(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function undelegate(selector,types,fn){// ( namespace ) or ( selector, types [, fn] )
	return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);}});jQuery.parseJSON=JSON.parse;// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return jQuery;}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}var// Map over jQuery in case of overwrite
	_jQuery=window.jQuery,// Map over the $ in case of overwrite
	_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}return jQuery;};// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if(!noGlobal){window.jQuery=window.$=jQuery;}return jQuery;});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)(module)))

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);

	module.exports = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var number = this._checkParam('number') != null;
	    function getValue() {
	      return number ? _.toNumber(el.value) : el.value;
	    }
	    this.listener = function () {
	      self.set(getValue());
	    };
	    _.on(el, 'change', this.listener);
	    if (el.checked) {
	      this._initValue = getValue();
	    }
	  },

	  update: function update(value) {
	    /* eslint-disable eqeqeq */
	    this.el.checked = value == this.el.value;
	    /* eslint-enable eqeqeq */
	  },

	  unbind: function unbind() {
	    _.off(this.el, 'change', this.listener);
	  }
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(2);
	var Watcher = __webpack_require__(19);
	var dirParser = __webpack_require__(17);

	module.exports = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    // update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };
	    // check options param
	    var optionsParam = this._checkParam('options');
	    if (optionsParam) {
	      initOptions.call(this, optionsParam);
	    }
	    this.number = this._checkParam('number') != null;
	    this.multiple = el.hasAttribute('multiple');
	    this.listener = function () {
	      var value = self.multiple ? getMultiValue(el) : el.value;
	      value = self.number ? _.isArray(value) ? value.map(_.toNumber) : _.toNumber(value) : value;
	      self.set(value);
	    };
	    _.on(el, 'change', this.listener);
	    checkInitialValue.call(this);
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate);
	  },

	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    if (!value && value !== 0) {
	      if (this.defaultOption) {
	        this.defaultOption.selected = true;
	      }
	      return;
	    }
	    var multi = this.multiple && _.isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var option;
	    while (i--) {
	      option = options[i];
	      /* eslint-disable eqeqeq */
	      option.selected = multi ? indexOf(value, option.value) > -1 : value == option.value;
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function unbind() {
	    _.off(this.el, 'change', this.listener);
	    this.vm.$off('hook:attached', this.forceUpdate);
	    if (this.optionWatcher) {
	      this.optionWatcher.teardown();
	    }
	  }

	};

	/**
	 * Initialize the option list from the param.
	 *
	 * @param {String} expression
	 */

	function initOptions(expression) {
	  var self = this;
	  var el = self.el;
	  var defaultOption = self.defaultOption = self.el.options[0];
	  var descriptor = dirParser.parse(expression)[0];
	  function optionUpdateWatcher(value) {
	    if (_.isArray(value)) {
	      // clear old options.
	      // cannot reset innerHTML here because IE family get
	      // confused during compilation.
	      var i = el.options.length;
	      while (i--) {
	        var option = el.options[i];
	        if (option !== defaultOption) {
	          el.removeChild(option);
	        }
	      }
	      buildOptions(el, value);
	      self.forceUpdate();
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn('Invalid options value for v-model: ' + value);
	    }
	  }
	  this.optionWatcher = new Watcher(this.vm, descriptor.expression, optionUpdateWatcher, {
	    deep: true,
	    filters: descriptor.filters
	  });
	  // update with initial value
	  optionUpdateWatcher(this.optionWatcher.value);
	}

	/**
	 * Build up option elements. IE9 doesn't create options
	 * when setting innerHTML on <select> elements, so we have
	 * to use DOM API here.
	 *
	 * @param {Element} parent - a <select> or an <optgroup>
	 * @param {Array} options
	 */

	function buildOptions(parent, options) {
	  var op, el;
	  for (var i = 0, l = options.length; i < l; i++) {
	    op = options[i];
	    if (!op.options) {
	      el = document.createElement('option');
	      if (typeof op === 'string') {
	        el.text = el.value = op;
	      } else {
	        if (op.value != null) {
	          el.value = op.value;
	        }
	        el.text = op.text || op.value || '';
	        if (op.disabled) {
	          el.disabled = true;
	        }
	      }
	    } else {
	      el = document.createElement('optgroup');
	      el.label = op.label;
	      buildOptions(el, op.options);
	    }
	    parent.appendChild(el);
	  }
	}

	/**
	 * Check the initial value for selected options.
	 */

	function checkInitialValue() {
	  var initValue;
	  var options = this.el.options;
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (options[i].hasAttribute('selected')) {
	      if (this.multiple) {
	        (initValue || (initValue = [])).push(options[i].value);
	      } else {
	        initValue = options[i].value;
	      }
	    }
	  }
	  if (typeof initValue !== 'undefined') {
	    this._initValue = this.number ? _.toNumber(initValue) : initValue;
	  }
	}

	/**
	 * Helper to extract a value array for select[multiple]
	 *
	 * @param {SelectElement} el
	 * @return {Array}
	 */

	function getMultiValue(el) {
	  return Array.prototype.filter.call(el.options, filterSelected).map(getOptionValue);
	}

	function filterSelected(op) {
	  return op.selected;
	}

	function getOptionValue(op) {
	  return op.value || op.text;
	}

	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with soft equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

	function indexOf(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    /* eslint-disable eqeqeq */
	    if (arr[i] == val) return i;
	    /* eslint-enable eqeqeq */
	  }
	  return -1;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);

	module.exports = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    this.listener = function () {
	      self.set(el.checked);
	    };
	    _.on(el, 'change', this.listener);
	    if (el.checked) {
	      this._initValue = el.checked;
	    }
	  },

	  update: function update(value) {
	    this.el.checked = !!value;
	  },

	  unbind: function unbind() {
	    _.off(this.el, 'change', this.listener);
	  }
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _ = __webpack_require__(2);
	var config = __webpack_require__(7);
	var isObject = _.isObject;
	var isPlainObject = _.isPlainObject;
	var textParser = __webpack_require__(15);
	var expParser = __webpack_require__(21);
	var templateParser = __webpack_require__(24);
	var compiler = __webpack_require__(12);
	var uid = 0;

	// async component resolution states
	var UNRESOLVED = 0;
	var PENDING = 1;
	var RESOLVED = 2;
	var ABORTED = 3;

	module.exports = {

	  /**
	   * Setup.
	   */

	  bind: function bind() {
	    // support for item in array syntax
	    var inMatch = this.expression.match(/(.*) in (.*)/);
	    if (inMatch) {
	      this.arg = inMatch[1];
	      this._watcherExp = inMatch[2];
	    }
	    // uid as a cache identifier
	    this.id = '__v_repeat_' + ++uid;

	    // setup anchor nodes
	    this.start = _.createAnchor('v-repeat-start');
	    this.end = _.createAnchor('v-repeat-end');
	    _.replace(this.el, this.end);
	    _.before(this.start, this.end);

	    // check if this is a block repeat
	    this.template = _.isTemplate(this.el) ? templateParser.parse(this.el, true) : this.el;

	    // check for trackby param
	    this.idKey = this._checkParam('track-by');
	    // check for transition stagger
	    var stagger = +this._checkParam('stagger');
	    this.enterStagger = +this._checkParam('enter-stagger') || stagger;
	    this.leaveStagger = +this._checkParam('leave-stagger') || stagger;

	    // check for v-ref/v-el
	    this.refID = this._checkParam(config.prefix + 'ref');
	    this.elID = this._checkParam(config.prefix + 'el');

	    // check other directives that need to be handled
	    // at v-repeat level
	    this.checkIf();
	    this.checkComponent();

	    // create cache object
	    this.cache = Object.create(null);

	    // some helpful tips...
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && this.el.tagName === 'OPTION') {
	      _.warn('Don\'t use v-repeat for v-model options; ' + 'use the `options` param instead: ' + 'http://vuejs.org/guide/forms.html#Dynamic_Select_Options');
	    }
	  },

	  /**
	   * Warn against v-if usage.
	   */

	  checkIf: function checkIf() {
	    if (_.attr(this.el, 'if') !== null) {
	      process.env.NODE_ENV !== 'production' && _.warn('Don\'t use v-if with v-repeat. ' + 'Use v-show or the "filterBy" filter instead.');
	    }
	  },

	  /**
	   * Check the component constructor to use for repeated
	   * instances. If static we resolve it now, otherwise it
	   * needs to be resolved at build time with actual data.
	   */

	  checkComponent: function checkComponent() {
	    this.componentState = UNRESOLVED;
	    var options = this.vm.$options;
	    var id = _.checkComponent(this.el, options);
	    if (!id) {
	      // default constructor
	      this.Component = _.Vue;
	      // inline repeats should inherit
	      this.inline = true;
	      // important: transclude with no options, just
	      // to ensure block start and block end
	      this.template = compiler.transclude(this.template);
	      var copy = _.extend({}, options);
	      copy._asComponent = false;
	      this._linkFn = compiler.compile(this.template, copy);
	    } else {
	      this.Component = null;
	      this.asComponent = true;
	      // check inline-template
	      if (this._checkParam('inline-template') !== null) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = _.extractContent(this.el, true);
	      }
	      var tokens = textParser.parse(id);
	      if (tokens) {
	        // dynamic component to be resolved later
	        var componentExp = textParser.tokensToExp(tokens);
	        this.componentGetter = expParser.parse(componentExp).get;
	      } else {
	        // static
	        this.componentId = id;
	        this.pendingData = null;
	      }
	    }
	  },

	  resolveComponent: function resolveComponent() {
	    this.componentState = PENDING;
	    this.vm._resolveComponent(this.componentId, _.bind(function (Component) {
	      if (this.componentState === ABORTED) {
	        return;
	      }
	      this.Component = Component;
	      this.componentState = RESOLVED;
	      this.realUpdate(this.pendingData);
	      this.pendingData = null;
	    }, this));
	  },

	  /**
	  * Resolve a dynamic component to use for an instance.
	  * The tricky part here is that there could be dynamic
	  * components depending on instance data.
	  *
	  * @param {Object} data
	  * @param {Object} meta
	  * @return {Function}
	  */

	  resolveDynamicComponent: function resolveDynamicComponent(data, meta) {
	    // create a temporary context object and copy data
	    // and meta properties onto it.
	    // use _.define to avoid accidentally overwriting scope
	    // properties.
	    var context = Object.create(this.vm);
	    var key;
	    for (key in data) {
	      _.define(context, key, data[key]);
	    }
	    for (key in meta) {
	      _.define(context, key, meta[key]);
	    }
	    var id = this.componentGetter.call(context, context);
	    var Component = _.resolveAsset(this.vm.$options, 'components', id);
	    if (process.env.NODE_ENV !== 'production') {
	      _.assertAsset(Component, 'component', id);
	    }
	    if (!Component.options) {
	      process.env.NODE_ENV !== 'production' && _.warn('Async resolution is not supported for v-repeat ' + '+ dynamic component. (component: ' + id + ')');
	      return _.Vue;
	    }
	    return Component;
	  },

	  /**
	   * Update.
	   * This is called whenever the Array mutates. If we have
	   * a component, we might need to wait for it to resolve
	   * asynchronously.
	   *
	   * @param {Array|Number|String} data
	   */

	  update: function update(data) {
	    if (this.componentId) {
	      var state = this.componentState;
	      if (state === UNRESOLVED) {
	        this.pendingData = data;
	        // once resolved, it will call realUpdate
	        this.resolveComponent();
	      } else if (state === PENDING) {
	        this.pendingData = data;
	      } else if (state === RESOLVED) {
	        this.realUpdate(data);
	      }
	    } else {
	      this.realUpdate(data);
	    }
	  },

	  /**
	   * The real update that actually modifies the DOM.
	   *
	   * @param {Array|Number|String} data
	   */

	  realUpdate: function realUpdate(data) {
	    this.vms = this.diff(data, this.vms);
	    // update v-ref
	    if (this.refID) {
	      this.vm.$[this.refID] = this.converted ? toRefObject(this.vms) : this.vms;
	    }
	    if (this.elID) {
	      this.vm.$$[this.elID] = this.vms.map(function (vm) {
	        return vm.$el;
	      });
	    }
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   * @param {Array} oldVms
	   * @return {Array}
	   */

	  diff: function diff(data, oldVms) {
	    var idKey = this.idKey;
	    var converted = this.converted;
	    var start = this.start;
	    var end = this.end;
	    var inDoc = _.inDoc(start);
	    var alias = this.arg;
	    var init = !oldVms;
	    var vms = new Array(data.length);
	    var obj, raw, vm, i, l, primitive;
	    // First pass, go through the new Array and fill up
	    // the new vms array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      obj = data[i];
	      raw = converted ? obj.$value : obj;
	      primitive = !isObject(raw);
	      vm = !init && this.getVm(raw, i, converted ? obj.$key : null);
	      if (vm) {
	        // reusable instance
	        vm._reused = true;
	        vm.$index = i; // update $index
	        // update data for track-by or object repeat,
	        // since in these two cases the data is replaced
	        // rather than mutated.
	        if (idKey || converted || primitive) {
	          if (alias) {
	            vm[alias] = raw;
	          } else if (_.isPlainObject(raw)) {
	            vm.$data = raw;
	          } else {
	            vm.$value = raw;
	          }
	        }
	      } else {
	        // new instance
	        vm = this.build(obj, i, true);
	        vm._reused = false;
	      }
	      vms[i] = vm;
	      // insert if this is first run
	      if (init) {
	        vm.$before(end);
	      }
	    }
	    // if this is the first run, we're done.
	    if (init) {
	      return vms;
	    }
	    // Second pass, go through the old vm instances and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldVms.length - vms.length;
	    for (i = 0, l = oldVms.length; i < l; i++) {
	      vm = oldVms[i];
	      if (!vm._reused) {
	        this.uncacheVm(vm);
	        vm.$destroy(false, true); // defer cleanup until removal
	        this.remove(vm, removalIndex++, totalRemoved, inDoc);
	      }
	    }
	    // final pass, move/insert new instances into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = vms.length; i < l; i++) {
	      vm = vms[i];
	      // this is the vm that we should be after
	      targetPrev = vms[i - 1];
	      prevEl = targetPrev ? targetPrev._staggerCb ? targetPrev._staggerAnchor : targetPrev._fragmentEnd || targetPrev.$el : start;
	      if (vm._reused && !vm._staggerCb) {
	        currentPrev = findPrevVm(vm, start, this.id);
	        if (currentPrev !== targetPrev) {
	          this.move(vm, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(vm, insertionIndex++, prevEl, inDoc);
	      }
	      vm._reused = false;
	    }
	    return vms;
	  },

	  /**
	   * Build a new instance and cache it.
	   *
	   * @param {Object} data
	   * @param {Number} index
	   * @param {Boolean} needCache
	   */

	  build: function build(data, index, needCache) {
	    var meta = { $index: index };
	    if (this.converted) {
	      meta.$key = data.$key;
	    }
	    var raw = this.converted ? data.$value : data;
	    var alias = this.arg;
	    if (alias) {
	      data = {};
	      data[alias] = raw;
	    } else if (!isPlainObject(raw)) {
	      // non-object values
	      data = {};
	      meta.$value = raw;
	    } else {
	      // default
	      data = raw;
	    }
	    // resolve constructor
	    var Component = this.Component || this.resolveDynamicComponent(data, meta);
	    var parent = this._host || this.vm;
	    var vm = parent.$addChild({
	      el: templateParser.clone(this.template),
	      data: data,
	      inherit: this.inline,
	      template: this.inlineTemplate,
	      // repeater meta, e.g. $index, $key
	      _meta: meta,
	      // mark this as an inline-repeat instance
	      _repeat: this.inline,
	      // is this a component?
	      _asComponent: this.asComponent,
	      // linker cachable if no inline-template
	      _linkerCachable: !this.inlineTemplate && Component !== _.Vue,
	      // pre-compiled linker for simple repeats
	      _linkFn: this._linkFn,
	      // identifier, shows that this vm belongs to this collection
	      _repeatId: this.id,
	      // transclusion content owner
	      _context: this.vm
	    }, Component);
	    // cache instance
	    if (needCache) {
	      this.cacheVm(raw, vm, index, this.converted ? meta.$key : null);
	    }
	    // sync back changes for two-way bindings of primitive values
	    var dir = this;
	    if (this.rawType === 'object' && isPrimitive(raw)) {
	      vm.$watch(alias || '$value', function (val) {
	        if (dir.filters) {
	          process.env.NODE_ENV !== 'production' && _.warn('You seem to be mutating the $value reference of ' + 'a v-repeat instance (likely through v-model) ' + 'and filtering the v-repeat at the same time. ' + 'This will not work properly with an Array of ' + 'primitive values. Please use an Array of ' + 'Objects instead.');
	        }
	        dir._withLock(function () {
	          if (dir.converted) {
	            dir.rawValue[vm.$key] = val;
	          } else {
	            dir.rawValue.$set(vm.$index, val);
	          }
	        });
	      });
	    }
	    return vm;
	  },

	  /**
	   * Unbind, teardown everything
	   */

	  unbind: function unbind() {
	    this.componentState = ABORTED;
	    if (this.refID) {
	      this.vm.$[this.refID] = null;
	    }
	    if (this.vms) {
	      var i = this.vms.length;
	      var vm;
	      while (i--) {
	        vm = this.vms[i];
	        this.uncacheVm(vm);
	        vm.$destroy();
	      }
	    }
	  },

	  /**
	   * Cache a vm instance based on its data.
	   *
	   * If the data is an object, we save the vm's reference on
	   * the data object as a hidden property. Otherwise we
	   * cache them in an object and for each primitive value
	   * there is an array in case there are duplicates.
	   *
	   * @param {Object} data
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheVm: function cacheVm(data, vm, index, key) {
	    var idKey = this.idKey;
	    var cache = this.cache;
	    var primitive = !isObject(data);
	    var id;
	    if (key || idKey || primitive) {
	      id = idKey ? idKey === '$index' ? index : data[idKey] : key || index;
	      if (!cache[id]) {
	        cache[id] = vm;
	      } else if (!primitive && idKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && _.warn('Duplicate track-by key in v-repeat: ' + id);
	      }
	    } else {
	      id = this.id;
	      if (data.hasOwnProperty(id)) {
	        if (data[id] === null) {
	          data[id] = vm;
	        } else {
	          process.env.NODE_ENV !== 'production' && _.warn('Duplicate objects are not supported in v-repeat ' + 'when using components or transitions.');
	        }
	      } else {
	        _.define(data, id, vm);
	      }
	    }
	    vm._raw = data;
	  },

	  /**
	   * Try to get a cached instance from a piece of data.
	   *
	   * @param {Object} data
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Vue|undefined}
	   */

	  getVm: function getVm(data, index, key) {
	    var idKey = this.idKey;
	    var primitive = !isObject(data);
	    if (key || idKey || primitive) {
	      var id = idKey ? idKey === '$index' ? index : data[idKey] : key || index;
	      return this.cache[id];
	    } else {
	      return data[this.id];
	    }
	  },

	  /**
	   * Delete a cached vm instance.
	   *
	   * @param {Vue} vm
	   */

	  uncacheVm: function uncacheVm(vm) {
	    var data = vm._raw;
	    var idKey = this.idKey;
	    var index = vm.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = vm.hasOwnProperty('$key') && vm.$key;
	    var primitive = !isObject(data);
	    if (idKey || key || primitive) {
	      var id = idKey ? idKey === '$index' ? index : data[idKey] : key || index;
	      this.cache[id] = null;
	    } else {
	      data[this.id] = null;
	      vm._raw = null;
	    }
	  },

	  /**
	   * Insert an instance.
	   *
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDoc
	   */

	  insert: function insert(vm, index, prevEl, inDoc) {
	    if (vm._staggerCb) {
	      vm._staggerCb.cancel();
	      vm._staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(vm, index, null, 'enter');
	    if (inDoc && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = vm._staggerAnchor;
	      if (!anchor) {
	        anchor = vm._staggerAnchor = _.createAnchor('stagger-anchor');
	        anchor.__vue__ = vm;
	      }
	      _.after(anchor, prevEl);
	      var op = vm._staggerCb = _.cancellable(function () {
	        vm._staggerCb = null;
	        vm.$before(anchor);
	        _.remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      vm.$after(prevEl);
	    }
	  },

	  /**
	   * Move an already inserted instance.
	   *
	   * @param {Vue} vm
	   * @param {Node} prevEl
	   */

	  move: function move(vm, prevEl) {
	    vm.$after(prevEl, null, false);
	  },

	  /**
	   * Remove an instance.
	   *
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {Boolean} inDoc
	   */

	  remove: function remove(vm, index, total, inDoc) {
	    if (vm._staggerCb) {
	      vm._staggerCb.cancel();
	      vm._staggerCb = null;
	      // it's not possible for the same vm to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this vm is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(vm, index, total, 'leave');
	    if (inDoc && staggerAmount) {
	      var op = vm._staggerCb = _.cancellable(function () {
	        vm._staggerCb = null;
	        remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      remove();
	    }
	    function remove() {
	      vm.$remove(function () {
	        vm._cleanup();
	      });
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {String} type
	   * @param {Number} total
	   */

	  getStagger: function getStagger(vm, index, total, type) {
	    type = type + 'Stagger';
	    var transition = vm.$el.__v_trans;
	    var hooks = transition && transition.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(vm, index, total) : index * this[type];
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters, and convert non-Array objects to arrays.
	   *
	   * This function will be bound to this directive instance
	   * and passed into the watcher.
	   *
	   * @param {*} value
	   * @return {Array}
	   * @private
	   */

	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    var type = this.rawType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	    if (!isPlainObject(value)) {
	      this.converted = false;
	      if (type === 'number') {
	        value = range(value);
	      } else if (type === 'string') {
	        value = _.toArray(value);
	      }
	      return value || [];
	    } else {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      this.converted = true;
	      return res;
	    }
	  }
	};

	/**
	 * Helper to find the previous element that is an instance
	 * root node. This is necessary because a destroyed vm's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its __vue__ reference
	 * should have been removed so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return vm that is bound to this v-repeat. (see #929)
	 *
	 * @param {Vue} vm
	 * @param {Comment|Text} anchor
	 * @return {Vue}
	 */

	function findPrevVm(vm, anchor, id) {
	  var el = vm.$el.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  while ((!el.__vue__ || el.__vue__.$options._repeatId !== id) && el !== anchor) {
	    el = el.previousSibling;
	  }
	  return el.__vue__;
	}

	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

	function range(n) {
	  var i = -1;
	  var ret = new Array(n);
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}

	/**
	 * Convert a vms array to an object ref for v-ref on an
	 * Object value.
	 *
	 * @param {Array} vms
	 * @return {Object}
	 */

	function toRefObject(vms) {
	  var ref = {};
	  for (var i = 0, l = vms.length; i < l; i++) {
	    ref[vms[i].$key] = vms[i];
	  }
	  return ref;
	}

	/**
	 * Check if a value is a primitive one:
	 * String, Number, Boolean, null or undefined.
	 *
	 * @param {*} value
	 * @return {Boolean}
	 */

	function isPrimitive(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return value == null || type === 'string' || type === 'number' || type === 'boolean';
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(2);
	var compiler = __webpack_require__(12);
	var templateParser = __webpack_require__(24);
	var transition = __webpack_require__(32);
	var Cache = __webpack_require__(16);
	var cache = new Cache(1000);

	module.exports = {

	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      this.start = _.createAnchor('v-if-start');
	      this.end = _.createAnchor('v-if-end');
	      _.replace(el, this.end);
	      _.before(this.start, this.end);
	      if (_.isTemplate(el)) {
	        this.template = templateParser.parse(el, true);
	      } else {
	        this.template = document.createDocumentFragment();
	        this.template.appendChild(templateParser.clone(el));
	      }
	      // compile the nested partial
	      var cacheId = (this.vm.constructor.cid || '') + el.outerHTML;
	      this.linker = cache.get(cacheId);
	      if (!this.linker) {
	        this.linker = compiler.compile(this.template, this.vm.$options, true, // partial
	        this._host // important
	        );
	        cache.put(cacheId, this.linker);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.');
	      this.invalid = true;
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      // avoid duplicate compiles, since update() can be
	      // called with different truthy values
	      if (!this.unlink) {
	        this.link(templateParser.clone(this.template), this.linker);
	      }
	    } else {
	      this.teardown();
	    }
	  },

	  link: function link(frag, linker) {
	    var vm = this.vm;
	    this.unlink = linker(vm, frag);
	    transition.blockAppend(frag, this.end, vm);
	    // call attached for all the child components created
	    // during the compilation
	    if (_.inDoc(vm.$el)) {
	      var children = this.getContainedComponents();
	      if (children) children.forEach(callAttach);
	    }
	  },

	  teardown: function teardown() {
	    if (!this.unlink) return;
	    // collect children beforehand
	    var children;
	    if (_.inDoc(this.vm.$el)) {
	      children = this.getContainedComponents();
	    }
	    transition.blockRemove(this.start, this.end, this.vm);
	    if (children) children.forEach(callDetach);
	    this.unlink();
	    this.unlink = null;
	  },

	  getContainedComponents: function getContainedComponents() {
	    var vm = this.vm;
	    var start = this.start.nextSibling;
	    var end = this.end;

	    function contains(c) {
	      var cur = start;
	      var next;
	      while (next !== end) {
	        next = cur.nextSibling;
	        if (cur === c.$el || cur.contains && cur.contains(c.$el)) {
	          return true;
	        }
	        cur = next;
	      }
	      return false;
	    }

	    return vm.$children.length && vm.$children.filter(contains);
	  },

	  unbind: function unbind() {
	    if (this.unlink) this.unlink();
	  }

	};

	function callAttach(child) {
	  if (!child._isAttached) {
	    child._callHook('attached');
	  }
	}

	function callDetach(child) {
	  if (child._isAttached) {
	    child._callHook('detached');
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.content = __webpack_require__(52);
	exports.partial = __webpack_require__(53);

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);
	var clone = __webpack_require__(24).clone;

	// This is the elementDirective that handles <content>
	// transclusions. It relies on the raw content of an
	// instance being stored as `$options._content` during
	// the transclude phase.

	module.exports = {

	  bind: function bind() {
	    var vm = this.vm;
	    var host = vm;
	    // we need find the content context, which is the
	    // closest non-inline-repeater instance.
	    while (host.$options._repeat) {
	      host = host.$parent;
	    }
	    var raw = host.$options._content;
	    var content;
	    if (!raw) {
	      this.fallback();
	      return;
	    }
	    var context = host._context;
	    var selector = this._checkParam('select');
	    if (!selector) {
	      // Default content
	      var self = this;
	      var compileDefaultContent = function compileDefaultContent() {
	        self.compile(extractFragment(raw.childNodes, raw, true), context, vm);
	      };
	      if (!host._isCompiled) {
	        // defer until the end of instance compilation,
	        // because the default outlet must wait until all
	        // other possible outlets with selectors have picked
	        // out their contents.
	        host.$once('hook:compiled', compileDefaultContent);
	      } else {
	        compileDefaultContent();
	      }
	    } else {
	      // select content
	      var nodes = raw.querySelectorAll(selector);
	      if (nodes.length) {
	        content = extractFragment(nodes, raw);
	        if (content.hasChildNodes()) {
	          this.compile(content, context, vm);
	        } else {
	          this.fallback();
	        }
	      } else {
	        this.fallback();
	      }
	    }
	  },

	  fallback: function fallback() {
	    this.compile(_.extractContent(this.el, true), this.vm);
	  },

	  compile: function compile(content, context, host) {
	    if (content && context) {
	      this.unlink = context.$compile(content, host);
	    }
	    if (content) {
	      _.replace(this.el, content);
	    } else {
	      _.remove(this.el);
	    }
	  },

	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};

	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @param {Element} parent
	 * @param {Boolean} main
	 * @return {DocumentFragment}
	 */

	function extractFragment(nodes, parent, main) {
	  var frag = document.createDocumentFragment();
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    // if this is the main outlet, we want to skip all
	    // previously selected nodes;
	    // otherwise, we want to mark the node as selected.
	    // clone the node so the original raw content remains
	    // intact. this ensures proper re-compilation in cases
	    // where the outlet is inside a conditional block
	    if (main && !node.__v_selected) {
	      frag.appendChild(clone(node));
	    } else if (!main && node.parentNode === parent) {
	      node.__v_selected = true;
	      frag.appendChild(clone(node));
	    }
	  }
	  return frag;
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(2);
	var templateParser = __webpack_require__(24);
	var textParser = __webpack_require__(15);
	var compiler = __webpack_require__(12);
	var Cache = __webpack_require__(16);
	var cache = new Cache(1000);

	// v-partial reuses logic from v-if
	var vIf = __webpack_require__(50);

	module.exports = {

	  link: vIf.link,
	  teardown: vIf.teardown,
	  getContainedComponents: vIf.getContainedComponents,

	  bind: function bind() {
	    var el = this.el;
	    this.start = _.createAnchor('v-partial-start');
	    this.end = _.createAnchor('v-partial-end');
	    _.replace(el, this.end);
	    _.before(this.start, this.end);
	    var id = el.getAttribute('name');
	    var tokens = textParser.parse(id);
	    if (tokens) {
	      // dynamic partial
	      this.setupDynamic(tokens);
	    } else {
	      // static partial
	      this.insert(id);
	    }
	  },

	  setupDynamic: function setupDynamic(tokens) {
	    var self = this;
	    var exp = textParser.tokensToExp(tokens);
	    this.unwatch = this.vm.$watch(exp, function (value) {
	      self.teardown();
	      self.insert(value);
	    }, {
	      immediate: true,
	      user: false
	    });
	  },

	  insert: function insert(id) {
	    var partial = _.resolveAsset(this.vm.$options, 'partials', id);
	    if (process.env.NODE_ENV !== 'production') {
	      _.assertAsset(partial, 'partial', id);
	    }
	    if (partial) {
	      var frag = templateParser.parse(partial, true);
	      // cache partials based on constructor id.
	      var cacheId = (this.vm.constructor.cid || '') + partial;
	      var linker = this.compile(frag, cacheId);
	      // this is provided by v-if
	      this.link(frag, linker);
	    }
	  },

	  compile: function compile(frag, cacheId) {
	    var hit = cache.get(cacheId);
	    if (hit) return hit;
	    var linker = compiler.compile(frag, this.vm.$options, true);
	    cache.put(cacheId, linker);
	    return linker;
	  },

	  unbind: function unbind() {
	    if (this.unlink) this.unlink();
	    if (this.unwatch) this.unwatch();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);

	/**
	 * Stringify value.
	 *
	 * @param {Number} indent
	 */

	exports.json = {
	  read: function read(value, indent) {
	    return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
	  },
	  write: function write(value) {
	    try {
	      return JSON.parse(value);
	    } catch (e) {
	      return value;
	    }
	  }
	};

	/**
	 * 'abc' => 'Abc'
	 */

	exports.capitalize = function (value) {
	  if (!value && value !== 0) return '';
	  value = value.toString();
	  return value.charAt(0).toUpperCase() + value.slice(1);
	};

	/**
	 * 'abc' => 'ABC'
	 */

	exports.uppercase = function (value) {
	  return value || value === 0 ? value.toString().toUpperCase() : '';
	};

	/**
	 * 'AbC' => 'abc'
	 */

	exports.lowercase = function (value) {
	  return value || value === 0 ? value.toString().toLowerCase() : '';
	};

	/**
	 * 12345 => $12,345.00
	 *
	 * @param {String} sign
	 */

	var digitsRE = /(\d{3})(?=\d)/g;
	exports.currency = function (value, currency) {
	  value = parseFloat(value);
	  if (!isFinite(value) || !value && value !== 0) return '';
	  currency = currency || '$';
	  var stringified = Math.abs(value).toFixed(2);
	  var _int = stringified.slice(0, -3);
	  var i = _int.length % 3;
	  var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	  var _float = stringified.slice(-3);
	  var sign = value < 0 ? '-' : '';
	  return currency + sign + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	};

	/**
	 * 'item' => 'items'
	 *
	 * @params
	 *  an array of strings corresponding to
	 *  the single, double, triple ... forms of the word to
	 *  be pluralized. When the number to be pluralized
	 *  exceeds the length of the args, it will use the last
	 *  entry in the array.
	 *
	 *  e.g. ['single', 'double', 'triple', 'multiple']
	 */

	exports.pluralize = function (value) {
	  var args = _.toArray(arguments, 1);
	  return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
	};

	/**
	 * A special filter that takes a handler function,
	 * wraps it so it only gets triggered on specific
	 * keypresses. v-on only.
	 *
	 * @param {String} key
	 */

	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  'delete': 46,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};

	exports.key = function (handler, key) {
	  if (!handler) return;
	  var code = keyCodes[key];
	  if (!code) {
	    code = parseInt(key, 10);
	  }
	  return function (e) {
	    if (e.keyCode === code) {
	      return handler.call(this, e);
	    }
	  };
	};

	// expose keycode hash
	exports.key.keyCodes = keyCodes;

	/**
	 * Install special array filters
	 */

	_.extend(exports, __webpack_require__(55));

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);
	var Path = __webpack_require__(22);

	/**
	 * Filter filter for v-repeat
	 *
	 * @param {String} searchKey
	 * @param {String} [delimiter]
	 * @param {String} dataKey
	 */

	exports.filterBy = function (arr, search, delimiter, dataKey) {
	  // allow optional `in` delimiter
	  // because why not
	  if (delimiter && delimiter !== 'in') {
	    dataKey = delimiter;
	  }
	  if (search == null) {
	    return arr;
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  return arr.filter(function (item) {
	    return dataKey ? contains(Path.get(item, dataKey), search) : contains(item, search);
	  });
	};

	/**
	 * Filter filter for v-repeat
	 *
	 * @param {String} sortKey
	 * @param {String} reverse
	 */

	exports.orderBy = function (arr, sortKey, reverse) {
	  if (!sortKey) {
	    return arr;
	  }
	  var order = 1;
	  if (arguments.length > 2) {
	    if (reverse === '-1') {
	      order = -1;
	    } else {
	      order = reverse ? -1 : 1;
	    }
	  }
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(function (a, b) {
	    if (sortKey !== '$key' && sortKey !== '$value') {
	      if (a && '$value' in a) a = a.$value;
	      if (b && '$value' in b) b = b.$value;
	    }
	    a = _.isObject(a) ? Path.get(a, sortKey) : a;
	    b = _.isObject(b) ? Path.get(b, sortKey) : b;
	    return a === b ? 0 : a > b ? order : -order;
	  });
	};

	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

	function contains(val, search) {
	  if (_.isPlainObject(val)) {
	    for (var key in val) {
	      if (contains(val[key], search)) {
	        return true;
	      }
	    }
	  } else if (_.isArray(val)) {
	    var i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var mergeOptions = __webpack_require__(2).mergeOptions;

	/**
	 * The main init sequence. This is called for every
	 * instance, including ones that are created from extended
	 * constructors.
	 *
	 * @param {Object} options - this options object should be
	 *                           the result of merging class
	 *                           options and the options passed
	 *                           in to the constructor.
	 */

	exports._init = function (options) {

	  options = options || {};

	  this.$el = null;
	  this.$parent = options._parent;
	  this.$root = options._root || this;
	  this.$children = [];
	  this.$ = {}; // child vm references
	  this.$$ = {}; // element references
	  this._watchers = []; // all watchers as an array
	  this._directives = []; // all directives
	  this._childCtors = {}; // inherit:true constructors

	  // a flag to avoid this being observed
	  this._isVue = true;

	  // events bookkeeping
	  this._events = {}; // registered callbacks
	  this._eventsCount = {}; // for $broadcast optimization
	  this._eventCancelled = false; // for event cancellation

	  // fragment instance properties
	  this._isFragment = false;
	  this._fragmentStart = // @type {CommentNode}
	  this._fragmentEnd = null; // @type {CommentNode}

	  // lifecycle state
	  this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = false;
	  this._unlinkFn = null;

	  // context: the scope in which the component was used,
	  // and the scope in which props and contents of this
	  // instance should be compiled in.
	  this._context = options._context || options._parent;

	  // push self into parent / transclusion host
	  if (this.$parent) {
	    this.$parent.$children.push(this);
	  }

	  // props used in v-repeat diffing
	  this._reused = false;
	  this._staggerOp = null;

	  // merge options.
	  options = this.$options = mergeOptions(this.constructor.options, options, this);

	  // initialize data as empty object.
	  // it will be filled up in _initScope().
	  this._data = {};

	  // initialize data observation and scope inheritance.
	  this._initScope();

	  // setup event system and option events.
	  this._initEvents();

	  // call created hook
	  this._callHook('created');

	  // if `el` option is passed, start compilation.
	  if (options.el) {
	    this.$mount(options.el);
	  }
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _ = __webpack_require__(2);
	var inDoc = _.inDoc;

	/**
	 * Setup the instance's option events & watchers.
	 * If the value is a string, we pull it from the
	 * instance's methods by name.
	 */

	exports._initEvents = function () {
	  var options = this.$options;
	  registerCallbacks(this, '$on', options.events);
	  registerCallbacks(this, '$watch', options.watch);
	};

	/**
	 * Register callbacks for option events and watchers.
	 *
	 * @param {Vue} vm
	 * @param {String} action
	 * @param {Object} hash
	 */

	function registerCallbacks(vm, action, hash) {
	  if (!hash) return;
	  var handlers, key, i, j;
	  for (key in hash) {
	    handlers = hash[key];
	    if (_.isArray(handlers)) {
	      for (i = 0, j = handlers.length; i < j; i++) {
	        register(vm, action, key, handlers[i]);
	      }
	    } else {
	      register(vm, action, key, handlers);
	    }
	  }
	}

	/**
	 * Helper to register an event/watch callback.
	 *
	 * @param {Vue} vm
	 * @param {String} action
	 * @param {String} key
	 * @param {Function|String|Object} handler
	 * @param {Object} [options]
	 */

	function register(vm, action, key, handler, options) {
	  var type = typeof handler === 'undefined' ? 'undefined' : _typeof(handler);
	  if (type === 'function') {
	    vm[action](key, handler, options);
	  } else if (type === 'string') {
	    var methods = vm.$options.methods;
	    var method = methods && methods[handler];
	    if (method) {
	      vm[action](key, method, options);
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".');
	    }
	  } else if (handler && type === 'object') {
	    register(vm, action, key, handler.handler, handler);
	  }
	}

	/**
	 * Setup recursive attached/detached calls
	 */

	exports._initDOMHooks = function () {
	  this.$on('hook:attached', onAttached);
	  this.$on('hook:detached', onDetached);
	};

	/**
	 * Callback to recursively call attached hook on children
	 */

	function onAttached() {
	  if (!this._isAttached) {
	    this._isAttached = true;
	    this.$children.forEach(callAttach);
	  }
	}

	/**
	 * Iterator to call attached hook
	 *
	 * @param {Vue} child
	 */

	function callAttach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}

	/**
	 * Callback to recursively call detached hook on children
	 */

	function onDetached() {
	  if (this._isAttached) {
	    this._isAttached = false;
	    this.$children.forEach(callDetach);
	  }
	}

	/**
	 * Iterator to call detached hook
	 *
	 * @param {Vue} child
	 */

	function callDetach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}

	/**
	 * Trigger all handlers for a hook
	 *
	 * @param {String} hook
	 */

	exports._callHook = function (hook) {
	  var handlers = this.$options[hook];
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(this);
	    }
	  }
	  this.$emit('hook:' + hook);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(2);
	var compiler = __webpack_require__(12);
	var Observer = __webpack_require__(59);
	var Dep = __webpack_require__(20);
	var Watcher = __webpack_require__(19);

	/**
	 * Setup the scope of an instance, which contains:
	 * - observed data
	 * - computed properties
	 * - user methods
	 * - meta properties
	 */

	exports._initScope = function () {
	  this._initProps();
	  this._initMeta();
	  this._initMethods();
	  this._initData();
	  this._initComputed();
	};

	/**
	 * Initialize props.
	 */

	exports._initProps = function () {
	  var options = this.$options;
	  var el = options.el;
	  var props = options.props;
	  if (props && !el) {
	    process.env.NODE_ENV !== 'production' && _.warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.');
	  }
	  // make sure to convert string selectors into element now
	  el = options.el = _.query(el);
	  this._propsUnlinkFn = el && props ? compiler.compileAndLinkProps(this, el, props) : null;
	};

	/**
	 * Initialize the data.
	 */

	exports._initData = function () {
	  var propsData = this._data;
	  var optionsDataFn = this.$options.data;
	  var optionsData = optionsDataFn && optionsDataFn();
	  if (optionsData) {
	    this._data = optionsData;
	    for (var prop in propsData) {
	      if (this._props[prop].raw !== null || !optionsData.hasOwnProperty(prop)) {
	        optionsData.$set(prop, propsData[prop]);
	      }
	    }
	  }
	  var data = this._data;
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var i, key;
	  i = keys.length;
	  while (i--) {
	    key = keys[i];
	    if (!_.isReserved(key)) {
	      this._proxy(key);
	    }
	  }
	  // observe data
	  Observer.create(data, this);
	};

	/**
	 * Swap the isntance's $data. Called in $data's setter.
	 *
	 * @param {Object} newData
	 */

	exports._setData = function (newData) {
	  newData = newData || {};
	  var oldData = this._data;
	  this._data = newData;
	  var keys, key, i;
	  // copy props.
	  // this should only happen during a v-repeat of component
	  // that also happens to have compiled props.
	  var props = this.$options.props;
	  if (props) {
	    i = props.length;
	    while (i--) {
	      key = props[i].name;
	      if (key !== '$data' && !newData.hasOwnProperty(key)) {
	        newData.$set(key, oldData[key]);
	      }
	    }
	  }
	  // unproxy keys not present in new data
	  keys = Object.keys(oldData);
	  i = keys.length;
	  while (i--) {
	    key = keys[i];
	    if (!_.isReserved(key) && !(key in newData)) {
	      this._unproxy(key);
	    }
	  }
	  // proxy keys not already proxied,
	  // and trigger change for changed values
	  keys = Object.keys(newData);
	  i = keys.length;
	  while (i--) {
	    key = keys[i];
	    if (!this.hasOwnProperty(key) && !_.isReserved(key)) {
	      // new property
	      this._proxy(key);
	    }
	  }
	  oldData.__ob__.removeVm(this);
	  Observer.create(newData, this);
	  this._digest();
	};

	/**
	 * Proxy a property, so that
	 * vm.prop === vm._data.prop
	 *
	 * @param {String} key
	 */

	exports._proxy = function (key) {
	  // need to store ref to self here
	  // because these getter/setters might
	  // be called by child instances!
	  var self = this;
	  Object.defineProperty(self, key, {
	    configurable: true,
	    enumerable: true,
	    get: function proxyGetter() {
	      return self._data[key];
	    },
	    set: function proxySetter(val) {
	      self._data[key] = val;
	    }
	  });
	};

	/**
	 * Unproxy a property.
	 *
	 * @param {String} key
	 */

	exports._unproxy = function (key) {
	  delete this[key];
	};

	/**
	 * Force update on every watcher in scope.
	 */

	exports._digest = function () {
	  var i = this._watchers.length;
	  while (i--) {
	    this._watchers[i].update(true); // shallow updates
	  }
	  var children = this.$children;
	  i = children.length;
	  while (i--) {
	    var child = children[i];
	    if (child.$options.inherit) {
	      child._digest();
	    }
	  }
	};

	/**
	 * Setup computed properties. They are essentially
	 * special getter/setters
	 */

	function noop() {}
	exports._initComputed = function () {
	  var computed = this.$options.computed;
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key];
	      var def = {
	        enumerable: true,
	        configurable: true
	      };
	      if (typeof userDef === 'function') {
	        def.get = makeComputedGetter(userDef, this);
	        def.set = noop;
	      } else {
	        def.get = userDef.get ? makeComputedGetter(userDef.get, this) : noop;
	        def.set = userDef.set ? _.bind(userDef.set, this) : noop;
	      }
	      Object.defineProperty(this, key, def);
	    }
	  }
	};

	function makeComputedGetter(getter, owner) {
	  var watcher = new Watcher(owner, getter, null, {
	    lazy: true
	  });
	  return function computedGetter() {
	    if (watcher.dirty) {
	      watcher.evaluate();
	    }
	    if (Dep.target) {
	      watcher.depend();
	    }
	    return watcher.value;
	  };
	}

	/**
	 * Setup instance methods. Methods must be bound to the
	 * instance since they might be called by children
	 * inheriting them.
	 */

	exports._initMethods = function () {
	  var methods = this.$options.methods;
	  if (methods) {
	    for (var key in methods) {
	      this[key] = _.bind(methods[key], this);
	    }
	  }
	};

	/**
	 * Initialize meta information like $index, $key & $value.
	 */

	exports._initMeta = function () {
	  var metas = this.$options._meta;
	  if (metas) {
	    for (var key in metas) {
	      this._defineMeta(key, metas[key]);
	    }
	  }
	};

	/**
	 * Define a meta property, e.g $index, $key, $value
	 * which only exists on the vm instance but not in $data.
	 *
	 * @param {String} key
	 * @param {*} value
	 */

	exports._defineMeta = function (key, value) {
	  var dep = new Dep();
	  Object.defineProperty(this, key, {
	    enumerable: true,
	    configurable: true,
	    get: function metaGetter() {
	      if (Dep.target) {
	        dep.depend();
	      }
	      return value;
	    },
	    set: function metaSetter(val) {
	      if (val !== value) {
	        value = val;
	        dep.notify();
	      }
	    }
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);
	var config = __webpack_require__(7);
	var Dep = __webpack_require__(20);
	var arrayMethods = __webpack_require__(60);
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	__webpack_require__(61);

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  _.define(value, '__ob__', this);
	  if (_.isArray(value)) {
	    var augment = config.proto && _.hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}

	// Static methods

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	Observer.create = function (value, vm) {
	  var ob;
	  if (value && value.hasOwnProperty('__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (_.isObject(value) && !Object.isFrozen(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	};

	// Instance methods

	var p = Observer.prototype;

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object. Properties prefixed with `$` or `_`
	 * and accessor properties are ignored.
	 *
	 * @param {Object} obj
	 */

	p.walk = function (obj) {
	  var keys = Object.keys(obj);
	  var i = keys.length;
	  var key, prefix;
	  while (i--) {
	    key = keys[i];
	    prefix = key.charCodeAt(0);
	    if (prefix !== 0x24 && prefix !== 0x5F) {
	      // skip $ or _
	      this.convert(key, obj[key]);
	    }
	  }
	};

	/**
	 * Try to carete an observer for a child value,
	 * and if value is array, link dep to the array.
	 *
	 * @param {*} val
	 * @return {Dep|undefined}
	 */

	p.observe = function (val) {
	  return Observer.create(val);
	};

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	p.observeArray = function (items) {
	  var i = items.length;
	  while (i--) {
	    this.observe(items[i]);
	  }
	};

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	p.convert = function (key, val) {
	  var ob = this;
	  var childOb = ob.observe(val);
	  var dep = new Dep();
	  Object.defineProperty(ob.value, key, {
	    enumerable: true,
	    configurable: true,
	    get: function get() {
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (_.isArray(val)) {
	          for (var e, i = 0, l = val.length; i < l; i++) {
	            e = val[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return val;
	    },
	    set: function set(newVal) {
	      if (newVal === val) return;
	      val = newVal;
	      childOb = ob.observe(newVal);
	      dep.notify();
	    }
	  });
	};

	/**
	 * Add an owner vm, so that when $add/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	p.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	p.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function protoAugment(target, src) {
	  target.__proto__ = src;
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment(target, src, keys) {
	  var i = keys.length;
	  var key;
	  while (i--) {
	    key = keys[i];
	    _.define(target, key, src[key]);
	  }
	}

	module.exports = Observer;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  _.define(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	_.define(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = index + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});

	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */

	_.define(arrayProto, '$remove', function $remove(index) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  if (typeof index !== 'number') {
	    index = _.indexOf(this, index);
	  }
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});

	module.exports = arrayMethods;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);
	var objProto = Object.prototype;

	/**
	 * Add a new property to an observed object
	 * and emits corresponding event
	 *
	 * @param {String} key
	 * @param {*} val
	 * @public
	 */

	_.define(objProto, '$add', function $add(key, val) {
	  if (this.hasOwnProperty(key)) return;
	  var ob = this.__ob__;
	  if (!ob || _.isReserved(key)) {
	    this[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	});

	/**
	 * Set a property on an observed object, calling add to
	 * ensure the property is observed.
	 *
	 * @param {String} key
	 * @param {*} val
	 * @public
	 */

	_.define(objProto, '$set', function $set(key, val) {
	  this.$add(key, val);
	  this[key] = val;
	});

	/**
	 * Deletes a property from an observed object
	 * and emits corresponding event
	 *
	 * @param {String} key
	 * @public
	 */

	_.define(objProto, '$delete', function $delete(key) {
	  if (!this.hasOwnProperty(key)) return;
	  delete this[key];
	  var ob = this.__ob__;
	  if (!ob || _.isReserved(key)) {
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);
	var Directive = __webpack_require__(63);
	var compiler = __webpack_require__(12);

	/**
	 * Transclude, compile and link element.
	 *
	 * If a pre-compiled linker is available, that means the
	 * passed in element will be pre-transcluded and compiled
	 * as well - all we need to do is to call the linker.
	 *
	 * Otherwise we need to call transclude/compile/link here.
	 *
	 * @param {Element} el
	 * @return {Element}
	 */

	exports._compile = function (el) {
	  var options = this.$options;
	  var host = this._host;
	  if (options._linkFn) {
	    // pre-transcluded with linker, just use it
	    this._initElement(el);
	    this._unlinkFn = options._linkFn(this, el, host);
	  } else {
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = compiler.transclude(el, options);
	    this._initElement(el);

	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var rootLinker = compiler.compileRoot(el, options);

	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compiler.compile(el, options);
	      }
	    }

	    // link phase
	    var rootUnlinkFn = rootLinker(this, el);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compiler.compile(el, options)(this, el, host);

	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };

	    // finally replace original
	    if (options.replace) {
	      _.replace(original, el);
	    }
	  }
	  return el;
	};

	/**
	 * Initialize instance element. Called in the public
	 * $mount() method.
	 *
	 * @param {Element} el
	 */

	exports._initElement = function (el) {
	  if (el instanceof DocumentFragment) {
	    this._isFragment = true;
	    this.$el = this._fragmentStart = el.firstChild;
	    this._fragmentEnd = el.lastChild;
	    // set persisted text anchors to empty
	    if (this._fragmentStart.nodeType === 3) {
	      this._fragmentStart.data = this._fragmentEnd.data = '';
	    }
	    this._blockFragment = el;
	  } else {
	    this.$el = el;
	  }
	  this.$el.__vue__ = this;
	  this._callHook('beforeCompile');
	};

	/**
	 * Create and bind a directive to an element.
	 *
	 * @param {String} name - directive name
	 * @param {Node} node   - target node
	 * @param {Object} desc - parsed directive descriptor
	 * @param {Object} def  - directive definition object
	 * @param {Vue|undefined} host - transclusion host component
	 */

	exports._bindDir = function (name, node, desc, def, host) {
	  this._directives.push(new Directive(name, node, this, desc, def, host));
	};

	/**
	 * Teardown an instance, unobserves the data, unbind all the
	 * directives, turn off all the event listeners, etc.
	 *
	 * @param {Boolean} remove - whether to remove the DOM node.
	 * @param {Boolean} deferCleanup - if true, defer cleanup to
	 *                                 be called later
	 */

	exports._destroy = function (remove, deferCleanup) {
	  if (this._isBeingDestroyed) {
	    return;
	  }
	  this._callHook('beforeDestroy');
	  this._isBeingDestroyed = true;
	  var i;
	  // remove self from parent. only necessary
	  // if parent is not being destroyed as well.
	  var parent = this.$parent;
	  if (parent && !parent._isBeingDestroyed) {
	    parent.$children.$remove(this);
	  }
	  // destroy all children.
	  i = this.$children.length;
	  while (i--) {
	    this.$children[i].$destroy();
	  }
	  // teardown props
	  if (this._propsUnlinkFn) {
	    this._propsUnlinkFn();
	  }
	  // teardown all directives. this also tearsdown all
	  // directive-owned watchers.
	  if (this._unlinkFn) {
	    this._unlinkFn();
	  }
	  i = this._watchers.length;
	  while (i--) {
	    this._watchers[i].teardown();
	  }
	  // remove reference to self on $el
	  if (this.$el) {
	    this.$el.__vue__ = null;
	  }
	  // remove DOM element
	  var self = this;
	  if (remove && this.$el) {
	    this.$remove(function () {
	      self._cleanup();
	    });
	  } else if (!deferCleanup) {
	    this._cleanup();
	  }
	};

	/**
	 * Clean up to ensure garbage collection.
	 * This is called after the leave transition if there
	 * is any.
	 */

	exports._cleanup = function () {
	  // remove reference from data ob
	  // frozen object may not have observer.
	  if (this._data.__ob__) {
	    this._data.__ob__.removeVm(this);
	  }
	  // Clean up references to private properties and other
	  // instances. preserve reference to _data so that proxy
	  // accessors still work. The only potential side effect
	  // here is that mutating the instance after it's destroyed
	  // may affect the state of other components that are still
	  // observing the same object, but that seems to be a
	  // reasonable responsibility for the user rather than
	  // always throwing an error on them.
	  this.$el = this.$parent = this.$root = this.$children = this._watchers = this._directives = null;
	  // call the last hook...
	  this._isDestroyed = true;
	  this._callHook('destroyed');
	  // turn off all instance listeners.
	  this.$off();
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);
	var config = __webpack_require__(7);
	var Watcher = __webpack_require__(19);
	var textParser = __webpack_require__(15);
	var expParser = __webpack_require__(21);

	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {String} name
	 * @param {Node} el
	 * @param {Vue} vm
	 * @param {Object} descriptor
	 *                 - {String} expression
	 *                 - {String} [arg]
	 *                 - {Array<Object>} [filters]
	 * @param {Object} def - directive definition object
	 * @param {Vue|undefined} host - transclusion host target
	 * @constructor
	 */

	function Directive(name, el, vm, descriptor, def, host) {
	  // public
	  this.name = name;
	  this.el = el;
	  this.vm = vm;
	  // copy descriptor props
	  this.raw = descriptor.raw;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.filters = descriptor.filters;
	  // private
	  this._descriptor = descriptor;
	  this._host = host;
	  this._locked = false;
	  this._bound = false;
	  // init
	  this._bind(def);
	}

	var p = Directive.prototype;

	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 *
	 * @param {Object} def
	 */

	p._bind = function (def) {
	  if ((this.name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    this.el.removeAttribute(config.prefix + this.name);
	  }
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    _.extend(this, def);
	  }
	  this._watcherExp = this.expression;
	  this._checkDynamicLiteral();
	  if (this.bind) {
	    this.bind();
	  }
	  if (this._watcherExp && (this.update || this.twoWay) && (!this.isLiteral || this._isDynamicLiteral) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    var update = this._update = this.update ? function (val, oldVal) {
	      if (!dir._locked) {
	        dir.update(val, oldVal);
	      }
	    } : function () {}; // noop if no update is provided
	    // pre-process hook called before the value is piped
	    // through the filters. used in v-repeat.
	    var preProcess = this._preProcess ? _.bind(this._preProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this._watcherExp, update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess
	    });
	    if (this._initValue != null) {
	      watcher.set(this._initValue);
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	  this._bound = true;
	};

	/**
	 * check if this is a dynamic literal binding.
	 *
	 * e.g. v-component="{{currentView}}"
	 */

	p._checkDynamicLiteral = function () {
	  var expression = this.expression;
	  if (expression && this.isLiteral) {
	    var tokens = textParser.parse(expression);
	    if (tokens) {
	      var exp = textParser.tokensToExp(tokens);
	      this.expression = this.vm.$get(exp);
	      this._watcherExp = exp;
	      this._isDynamicLiteral = true;
	    }
	  }
	};

	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. v-on="click: a++"
	 *
	 * @return {Boolean}
	 */

	p._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !expParser.isSimplePath(expression)) {
	    var fn = expParser.parse(expression).get;
	    var vm = this.vm;
	    var handler = function handler() {
	      fn.call(vm, vm);
	    };
	    if (this.filters) {
	      handler = vm._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};

	/**
	 * Check for an attribute directive param, e.g. lazy
	 *
	 * @param {String} name
	 * @return {String}
	 */

	p._checkParam = function (name) {
	  var param = this.el.getAttribute(name);
	  if (param !== null) {
	    this.el.removeAttribute(name);
	    param = this.vm.$interpolate(param);
	  }
	  return param;
	};

	/**
	 * Teardown the watcher and call unbind.
	 */

	p._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    this.vm = this.el = this._watcher = null;
	  }
	};

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

	p.set = function (value) {
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  }
	};

	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

	p._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  _.nextTick(function () {
	    self._locked = false;
	  });
	};

	module.exports = Directive;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(2);

	/**
	 * Apply a list of filter (descriptors) to a value.
	 * Using plain for loops here because this will be called in
	 * the getter of any watcher with filters so it is very
	 * performance sensitive.
	 *
	 * @param {*} value
	 * @param {*} [oldValue]
	 * @param {Array} filters
	 * @param {Boolean} write
	 * @return {*}
	 */

	exports._applyFilters = function (value, oldValue, filters, write) {
	  var filter, fn, args, arg, offset, i, l, j, k;
	  for (i = 0, l = filters.length; i < l; i++) {
	    filter = filters[i];
	    fn = _.resolveAsset(this.$options, 'filters', filter.name);
	    if (process.env.NODE_ENV !== 'production') {
	      _.assertAsset(fn, 'filter', filter.name);
	    }
	    if (!fn) continue;
	    fn = write ? fn.write : fn.read || fn;
	    if (typeof fn !== 'function') continue;
	    args = write ? [value, oldValue] : [value];
	    offset = write ? 2 : 1;
	    if (filter.args) {
	      for (j = 0, k = filter.args.length; j < k; j++) {
	        arg = filter.args[j];
	        args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	      }
	    }
	    value = fn.apply(this, args);
	  }
	  return value;
	};

	/**
	 * Resolve a component, depending on whether the component
	 * is defined normally or using an async factory function.
	 * Resolves synchronously if already resolved, otherwise
	 * resolves asynchronously and caches the resolved
	 * constructor on the factory.
	 *
	 * @param {String} id
	 * @param {Function} cb
	 */

	exports._resolveComponent = function (id, cb) {
	  var factory = _.resolveAsset(this.$options, 'components', id);
	  if (process.env.NODE_ENV !== 'production') {
	    _.assertAsset(factory, 'component', id);
	  }
	  if (!factory) {
	    return;
	  }
	  // async component factory
	  if (!factory.options) {
	    if (factory.resolved) {
	      // cached
	      cb(factory.resolved);
	    } else if (factory.requested) {
	      // pool callbacks
	      factory.pendingCallbacks.push(cb);
	    } else {
	      factory.requested = true;
	      var cbs = factory.pendingCallbacks = [cb];
	      factory(function resolve(res) {
	        if (_.isPlainObject(res)) {
	          res = _.Vue.extend(res);
	        }
	        // cache resolved
	        factory.resolved = res;
	        // invoke callbacks
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res);
	        }
	      }, function reject(reason) {
	        process.env.NODE_ENV !== 'production' && _.warn('Failed to resolve async component: ' + id + '. ' + (reason ? '\nReason: ' + reason : ''));
	      });
	    }
	  } else {
	    // normal component
	    cb(factory);
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Watcher = __webpack_require__(19);
	var Path = __webpack_require__(22);
	var textParser = __webpack_require__(15);
	var dirParser = __webpack_require__(17);
	var expParser = __webpack_require__(21);
	var filterRE = /[^|]\|[^|]/;

	/**
	 * Get the value from an expression on this vm.
	 *
	 * @param {String} exp
	 * @return {*}
	 */

	exports.$get = function (exp) {
	  var res = expParser.parse(exp);
	  if (res) {
	    try {
	      return res.get.call(this, this);
	    } catch (e) {}
	  }
	};

	/**
	 * Set the value from an expression on this vm.
	 * The expression must be a valid left-hand
	 * expression in an assignment.
	 *
	 * @param {String} exp
	 * @param {*} val
	 */

	exports.$set = function (exp, val) {
	  var res = expParser.parse(exp, true);
	  if (res && res.set) {
	    res.set.call(this, this, val);
	  }
	};

	/**
	 * Add a property on the VM
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	exports.$add = function (key, val) {
	  this._data.$add(key, val);
	};

	/**
	 * Delete a property on the VM
	 *
	 * @param {String} key
	 */

	exports.$delete = function (key) {
	  this._data.$delete(key);
	};

	/**
	 * Watch an expression, trigger callback when its
	 * value changes.
	 *
	 * @param {String} exp
	 * @param {Function} cb
	 * @param {Object} [options]
	 *                 - {Boolean} deep
	 *                 - {Boolean} immediate
	 *                 - {Boolean} user
	 * @return {Function} - unwatchFn
	 */

	exports.$watch = function (exp, cb, options) {
	  var vm = this;
	  var wrappedCb = function wrappedCb(val, oldVal) {
	    cb.call(vm, val, oldVal);
	  };
	  var watcher = new Watcher(vm, exp, wrappedCb, {
	    deep: options && options.deep,
	    user: !options || options.user !== false
	  });
	  if (options && options.immediate) {
	    wrappedCb(watcher.value);
	  }
	  return function unwatchFn() {
	    watcher.teardown();
	  };
	};

	/**
	 * Evaluate a text directive, including filters.
	 *
	 * @param {String} text
	 * @return {String}
	 */

	exports.$eval = function (text) {
	  // check for filters.
	  if (filterRE.test(text)) {
	    var dir = dirParser.parse(text)[0];
	    // the filter regex check might give false positive
	    // for pipes inside strings, so it's possible that
	    // we don't get any filters here
	    var val = this.$get(dir.expression);
	    return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	  } else {
	    // no filter
	    return this.$get(text);
	  }
	};

	/**
	 * Interpolate a piece of template text.
	 *
	 * @param {String} text
	 * @return {String}
	 */

	exports.$interpolate = function (text) {
	  var tokens = textParser.parse(text);
	  var vm = this;
	  if (tokens) {
	    return tokens.length === 1 ? vm.$eval(tokens[0].value) : tokens.map(function (token) {
	      return token.tag ? vm.$eval(token.value) : token.value;
	    }).join('');
	  } else {
	    return text;
	  }
	};

	/**
	 * Log instance data as a plain JS object
	 * so that it is easier to inspect in console.
	 * This method assumes console is available.
	 *
	 * @param {String} [path]
	 */

	exports.$log = function (path) {
	  var data = path ? Path.get(this._data, path) : this._data;
	  if (data) {
	    data = JSON.parse(JSON.stringify(data));
	  }
	  console.log(data);
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);
	var transition = __webpack_require__(32);

	/**
	 * Convenience on-instance nextTick. The callback is
	 * auto-bound to the instance, and this avoids component
	 * modules having to rely on the global Vue.
	 *
	 * @param {Function} fn
	 */

	exports.$nextTick = function (fn) {
	  _.nextTick(fn, this);
	};

	/**
	 * Append instance to target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */

	exports.$appendTo = function (target, cb, withTransition) {
	  return insert(this, target, cb, withTransition, append, transition.append);
	};

	/**
	 * Prepend instance to target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */

	exports.$prependTo = function (target, cb, withTransition) {
	  target = query(target);
	  if (target.hasChildNodes()) {
	    this.$before(target.firstChild, cb, withTransition);
	  } else {
	    this.$appendTo(target, cb, withTransition);
	  }
	  return this;
	};

	/**
	 * Insert instance before target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */

	exports.$before = function (target, cb, withTransition) {
	  return insert(this, target, cb, withTransition, before, transition.before);
	};

	/**
	 * Insert instance after target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */

	exports.$after = function (target, cb, withTransition) {
	  target = query(target);
	  if (target.nextSibling) {
	    this.$before(target.nextSibling, cb, withTransition);
	  } else {
	    this.$appendTo(target.parentNode, cb, withTransition);
	  }
	  return this;
	};

	/**
	 * Remove instance from DOM
	 *
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */

	exports.$remove = function (cb, withTransition) {
	  if (!this.$el.parentNode) {
	    return cb && cb();
	  }
	  var inDoc = this._isAttached && _.inDoc(this.$el);
	  // if we are not in document, no need to check
	  // for transitions
	  if (!inDoc) withTransition = false;
	  var op;
	  var self = this;
	  var realCb = function realCb() {
	    if (inDoc) self._callHook('detached');
	    if (cb) cb();
	  };
	  if (this._isFragment && !this._blockFragment.hasChildNodes()) {
	    op = withTransition === false ? append : transition.removeThenAppend;
	    blockOp(this, this._blockFragment, op, realCb);
	  } else {
	    op = withTransition === false ? remove : transition.remove;
	    op(this.$el, this, realCb);
	  }
	  return this;
	};

	/**
	 * Shared DOM insertion function.
	 *
	 * @param {Vue} vm
	 * @param {Element} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition]
	 * @param {Function} op1 - op for non-transition insert
	 * @param {Function} op2 - op for transition insert
	 * @return vm
	 */

	function insert(vm, target, cb, withTransition, op1, op2) {
	  target = query(target);
	  var targetIsDetached = !_.inDoc(target);
	  var op = withTransition === false || targetIsDetached ? op1 : op2;
	  var shouldCallHook = !targetIsDetached && !vm._isAttached && !_.inDoc(vm.$el);
	  if (vm._isFragment) {
	    blockOp(vm, target, op, cb);
	  } else {
	    op(vm.$el, target, vm, cb);
	  }
	  if (shouldCallHook) {
	    vm._callHook('attached');
	  }
	  return vm;
	}

	/**
	 * Execute a transition operation on a fragment instance,
	 * iterating through all its block nodes.
	 *
	 * @param {Vue} vm
	 * @param {Node} target
	 * @param {Function} op
	 * @param {Function} cb
	 */

	function blockOp(vm, target, op, cb) {
	  var current = vm._fragmentStart;
	  var end = vm._fragmentEnd;
	  var next;
	  while (next !== end) {
	    next = current.nextSibling;
	    op(current, target, vm);
	    current = next;
	  }
	  op(end, target, vm, cb);
	}

	/**
	 * Check for selectors
	 *
	 * @param {String|Element} el
	 */

	function query(el) {
	  return typeof el === 'string' ? document.querySelector(el) : el;
	}

	/**
	 * Append operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Node} target
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */

	function append(el, target, vm, cb) {
	  target.appendChild(el);
	  if (cb) cb();
	}

	/**
	 * InsertBefore operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Node} target
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */

	function before(el, target, vm, cb) {
	  _.before(el, target);
	  if (cb) cb();
	}

	/**
	 * Remove operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */

	function remove(el, vm, cb) {
	  _.remove(el);
	  if (cb) cb();
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */

	exports.$on = function (event, fn) {
	  (this._events[event] || (this._events[event] = [])).push(fn);
	  modifyListenerCount(this, event, 1);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */

	exports.$once = function (event, fn) {
	  var self = this;
	  function on() {
	    self.$off(event, on);
	    fn.apply(this, arguments);
	  }
	  on.fn = fn;
	  this.$on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */

	exports.$off = function (event, fn) {
	  var cbs;
	  // all
	  if (!arguments.length) {
	    if (this.$parent) {
	      for (event in this._events) {
	        cbs = this._events[event];
	        if (cbs) {
	          modifyListenerCount(this, event, -cbs.length);
	        }
	      }
	    }
	    this._events = {};
	    return this;
	  }
	  // specific event
	  cbs = this._events[event];
	  if (!cbs) {
	    return this;
	  }
	  if (arguments.length === 1) {
	    modifyListenerCount(this, event, -cbs.length);
	    this._events[event] = null;
	    return this;
	  }
	  // specific handler
	  var cb;
	  var i = cbs.length;
	  while (i--) {
	    cb = cbs[i];
	    if (cb === fn || cb.fn === fn) {
	      modifyListenerCount(this, event, -1);
	      cbs.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Trigger an event on self.
	 *
	 * @param {String} event
	 */

	exports.$emit = function (event) {
	  this._eventCancelled = false;
	  var cbs = this._events[event];
	  if (cbs) {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length - 1;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i + 1];
	    }
	    i = 0;
	    cbs = cbs.length > 1 ? _.toArray(cbs) : cbs;
	    for (var l = cbs.length; i < l; i++) {
	      if (cbs[i].apply(this, args) === false) {
	        this._eventCancelled = true;
	      }
	    }
	  }
	  return this;
	};

	/**
	 * Recursively broadcast an event to all children instances.
	 *
	 * @param {String} event
	 * @param {...*} additional arguments
	 */

	exports.$broadcast = function (event) {
	  // if no child has registered for this event,
	  // then there's no need to broadcast.
	  if (!this._eventsCount[event]) return;
	  var children = this.$children;
	  for (var i = 0, l = children.length; i < l; i++) {
	    var child = children[i];
	    child.$emit.apply(child, arguments);
	    if (!child._eventCancelled) {
	      child.$broadcast.apply(child, arguments);
	    }
	  }
	  return this;
	};

	/**
	 * Recursively propagate an event up the parent chain.
	 *
	 * @param {String} event
	 * @param {...*} additional arguments
	 */

	exports.$dispatch = function () {
	  var parent = this.$parent;
	  while (parent) {
	    parent.$emit.apply(parent, arguments);
	    parent = parent._eventCancelled ? null : parent.$parent;
	  }
	  return this;
	};

	/**
	 * Modify the listener counts on all parents.
	 * This bookkeeping allows $broadcast to return early when
	 * no child has listened to a certain event.
	 *
	 * @param {Vue} vm
	 * @param {String} event
	 * @param {Number} count
	 */

	var hookRE = /^hook:/;
	function modifyListenerCount(vm, event, count) {
	  var parent = vm.$parent;
	  // hooks do not get broadcasted so no need
	  // to do bookkeeping for them
	  if (!parent || !count || hookRE.test(event)) return;
	  while (parent) {
	    parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	    parent = parent.$parent;
	  }
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(2);

	/**
	 * Create a child instance that prototypally inherits
	 * data on parent. To achieve that we create an intermediate
	 * constructor with its prototype pointing to parent.
	 *
	 * @param {Object} opts
	 * @param {Function} [BaseCtor]
	 * @return {Vue}
	 * @public
	 */

	exports.$addChild = function (opts, BaseCtor) {
	  BaseCtor = BaseCtor || _.Vue;
	  opts = opts || {};
	  var parent = this;
	  var ChildVue;
	  var inherit = opts.inherit !== undefined ? opts.inherit : BaseCtor.options.inherit;
	  if (inherit) {
	    var ctors = parent._childCtors;
	    ChildVue = ctors[BaseCtor.cid];
	    if (!ChildVue) {
	      var optionName = BaseCtor.options.name;
	      var className = optionName ? _.classify(optionName) : 'VueComponent';
	      ChildVue = new Function('return function ' + className + ' (options) {' + 'this.constructor = ' + className + ';' + 'this._init(options) }')();
	      ChildVue.options = BaseCtor.options;
	      ChildVue.linker = BaseCtor.linker;
	      // important: transcluded inline repeaters should
	      // inherit from outer scope rather than host
	      ChildVue.prototype = opts._context || this;
	      ctors[BaseCtor.cid] = ChildVue;
	    }
	  } else {
	    ChildVue = BaseCtor;
	  }
	  opts._parent = parent;
	  opts._root = parent.$root;
	  var child = new ChildVue(opts);
	  return child;
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(2);
	var compiler = __webpack_require__(12);

	/**
	 * Set instance target element and kick off the compilation
	 * process. The passed in `el` can be a selector string, an
	 * existing Element, or a DocumentFragment (for block
	 * instances).
	 *
	 * @param {Element|DocumentFragment|string} el
	 * @public
	 */

	exports.$mount = function (el) {
	  if (this._isCompiled) {
	    process.env.NODE_ENV !== 'production' && _.warn('$mount() should be called only once.');
	    return;
	  }
	  el = _.query(el);
	  if (!el) {
	    el = document.createElement('div');
	  }
	  this._compile(el);
	  this._isCompiled = true;
	  this._callHook('compiled');
	  this._initDOMHooks();
	  if (_.inDoc(this.$el)) {
	    this._callHook('attached');
	    ready.call(this);
	  } else {
	    this.$once('hook:attached', ready);
	  }
	  return this;
	};

	/**
	 * Mark an instance as ready.
	 */

	function ready() {
	  this._isAttached = true;
	  this._isReady = true;
	  this._callHook('ready');
	}

	/**
	 * Teardown the instance, simply delegate to the internal
	 * _destroy.
	 */

	exports.$destroy = function (remove, deferCleanup) {
	  this._destroy(remove, deferCleanup);
	};

	/**
	 * Partially compile a piece of DOM and return a
	 * decompile function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Vue} [host]
	 * @return {Function}
	 */

	exports.$compile = function (el, host) {
	  return compiler.compile(el, this.$options, true, host)(this, el);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.VueRouter = factory();
	})(undefined, function () {
	  'use strict';

	  var babelHelpers = {};

	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }

	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;

	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }

	      this.matcher.add(this.path, target);

	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };

	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }

	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },

	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;

	      var match = generateMatch(path, matcher, delegate);

	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }

	      callback(match);
	    }
	  };

	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;

	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }

	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }

	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }

	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;

	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);

	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }

	  function map(callback, addRouteCallback) {
	    var matcher = new Matcher();

	    callback(generateMatch("", matcher, this.delegate));

	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }

	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

	  var noWarning = false;
	  function warn(msg) {
	    if (!noWarning && typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  function tryDecode(uri, asComponent) {
	    try {
	      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
	    } catch (e) {
	      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
	    }
	  }

	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }

	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat

	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;

	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },

	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },

	    generate: function generate() {
	      return this.string;
	    }
	  };

	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },

	    regex: function regex() {
	      return "([^/]+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },

	    regex: function regex() {
	      return "(.+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };

	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }

	    var segments = route.split("/"),
	        results = [];

	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';

	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;

	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }

	    specificity.val = +specificity.val;

	    return results;
	  }

	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.

	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }

	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];

	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

	        if (isEqual) {
	          return child;
	        }
	      }
	    },

	    put: function put(charSpec) {
	      var state;

	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }

	      // Make a new state for the character spec
	      state = new State(charSpec);

	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);

	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }

	      // Return the new state
	      return state;
	    },

	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;

	      // DEBUG "  " + debugState(this)
	      var returned = [];

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];

	        charSpec = child.charSpec;

	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }

	      return returned;
	    }

	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };

	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }
	   function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/

	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }

	  function recognizeChar(states, ch) {
	    var nextStates = [];

	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];

	      nextStates = nextStates.concat(state.match(ch));
	    }

	    return nextStates;
	  }

	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };

	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });

	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);

	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};

	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }

	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }

	    return result;
	  }

	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;

	      currentState = currentState.put(ch);
	    });

	    return currentState;
	  }

	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return tryDecode(part, true);
	  }

	  // The main interface

	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };

	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;

	      var isEmpty = true;

	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];

	        var segments = parse(route.path, names, specificity);

	        allSegments = allSegments.concat(segments);

	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];

	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }

	          isEmpty = false;

	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";

	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }

	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }

	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }

	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;

	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },

	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }

	      return result;
	    },

	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },

	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      var segments = route.segments;

	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];

	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }

	        output += "/";
	        output += segment.generate(params);
	      }

	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }

	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }

	      return output;
	    },

	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }

	      if (pairs.length === 0) {
	        return '';
	      }

	      return "?" + pairs.join("&");
	    },

	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },

	    recognize: function recognize(path, silent) {
	      noWarning = silent;
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;

	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        if (queryString) {
	          queryParams = this.parseQueryString(queryString);
	        }
	      }

	      path = tryDecode(path);
	      if (!path) return;

	      // DEBUG GROUP path

	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }

	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }

	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }

	      // END DEBUG GROUP

	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }

	      states = sortSolutions(solutions);

	      var state = solutions[0];

	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };

	  RouteRecognizer.prototype.map = map;

	  var genQuery = RouteRecognizer.prototype.generateQueryString;

	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */

	  function warn$1(msg) {
	    /* istanbul ignore next */
	    if (typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */

	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }

	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */

	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }

	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */

	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }

	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */

	  var resolver = undefined;

	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }

	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */

	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};

	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }

	  var hashRE = /#.*$/;

	  var HTML5History = function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);

	      if (root && root !== '/') {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }

	    HTML5History.prototype.start = function start() {
	      var _this = this;

	      this.listener = function (e) {
	        var url = location.pathname + location.search;
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };

	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };

	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };

	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };

	    return HTML5History;
	  }();

	  var HashHistory = function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);

	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }

	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(path.replace(/^#!?/, '') + query);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };

	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };

	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };

	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };

	    return HashHistory;
	  }();

	  var AbstractHistory = function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);

	      this.onChange = onChange;
	      this.currentPath = '/';
	    }

	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };

	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };

	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };

	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };

	    return AbstractHistory;
	  }();

	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */

	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }

	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }

	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }

	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }

	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */

	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }

	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');

	    view.depth = depth;
	    view.activated = false;

	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);

	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;

	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);

	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);

	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });

	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }

	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };

	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };

	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };

	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };

	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }

	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */

	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }

	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */

	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }

	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */

	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }

	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */

	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */

	  var RouteTransition = function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);

	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }

	    /**
	     * Abort current transition and return to previous location.
	     */

	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };

	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */

	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };

	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;

	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();

	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });

	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }

	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase

	            // Update router current route
	            transition.router._onTransitionValidated(transition);

	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });

	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };

	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };

	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */

	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;

	      var transition = this;
	      var nextCalled = false;

	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };

	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn$1('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };

	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };

	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn$1('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };

	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };

	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };

	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };

	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }

	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };

	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */

	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;

	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };

	    return RouteTransition;
	  }();

	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }

	  var internalKeysRE = /^(component|subRoutes|fullPath)$/;

	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */

	  var Route = function Route(path, router) {
	    var _this = this;

	    babelHelpers.classCallCheck(this, Route);

	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // internal reference to router
	    Object.defineProperty(this, 'router', {
	      enumerable: false,
	      value: router
	    });
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };

	  function applyOverride(Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;

	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };

	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };

	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;

	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }

	  function View(Vue) {

	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);

	    // with some overrides
	    _.extend(viewDef, {

	      _isRouterView: true,

	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);

	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }

	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },

	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });

	    Vue.elementDirective('router-view', viewDef);
	  }

	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;

	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link(Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;

	    var onPriority = Vue.directive('on').priority;
	    var LINK_UPDATE = '__vue-router-link-update__';

	    var activeId = 0;

	    Vue.directive('link-active', {
	      priority: 9999,
	      bind: function bind() {
	        var _this = this;

	        var id = String(activeId++);
	        // collect v-links contained within this element.
	        // we need do this here before the parent-child relationship
	        // gets messed up by terminal directives (if, for, components)
	        var childLinks = this.el.querySelectorAll('[v-link]');
	        for (var i = 0, l = childLinks.length; i < l; i++) {
	          var link = childLinks[i];
	          var existingId = link.getAttribute(LINK_UPDATE);
	          var value = existingId ? existingId + ',' + id : id;
	          // leave a mark on the link element which can be persisted
	          // through fragment clones.
	          link.setAttribute(LINK_UPDATE, value);
	        }
	        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
	          if (link.activeIds.indexOf(id) > -1) {
	            link.updateClasses(path, _this.el);
	          }
	        });
	      },
	      unbind: function unbind() {
	        this.vm.$off(LINK_UPDATE, this.cb);
	      }
	    });

	    Vue.directive('link', {
	      priority: onPriority - 2,

	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn$1('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check v-link-active ids
	        var activeIds = this.el.getAttribute(LINK_UPDATE);
	        if (activeIds) {
	          this.el.removeAttribute(LINK_UPDATE);
	          this.activeIds = activeIds.split(',');
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },

	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },

	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;

	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            var path = el.pathname;
	            if (this.router.history.root) {
	              path = path.replace(this.router.history.rootRE, '');
	            }
	            this.router.go({
	              path: path,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },

	      onRouteUpdate: function onRouteUpdate(route) {
	        // router.stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router.stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        if (this.activeIds) {
	          this.vm.$emit(LINK_UPDATE, this, route.path);
	        } else {
	          this.updateClasses(route.path, this.el);
	        }
	      },

	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },

	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },

	      updateClasses: function updateClasses(path, el) {
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
	          toggleClasses(el, this.prevActiveClass, removeClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        }
	      },

	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });

	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }

	    // this function is copied from v-bind:class implementation until
	    // we properly expose it...
	    function toggleClasses(el, key, fn) {
	      key = key.trim();
	      if (key.indexOf(' ') === -1) {
	        fn(el, key);
	        return;
	      }
	      var keys = key.split(/\s+/);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        fn(el, keys[i]);
	      }
	    }
	  }

	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };

	  // late bind during install
	  var Vue = undefined;

	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */

	  var Router = function () {
	    function Router() {
	      var _this = this;

	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);

	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }

	      // Vue instances
	      this.app = null;
	      this._children = [];

	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();

	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];

	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;

	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;

	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;

	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });

	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }

	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */

	    // API ===================================================

	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */

	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };

	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */

	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };

	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */

	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this.stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };

	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */

	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };

	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */

	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn$1('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }

	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }

	      this.history.start();
	    };

	    /**
	     * Stop listening to route changes.
	     */

	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };

	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */

	    Router.prototype.stringifyPath = function stringifyPath(path) {
	      var generatedPath = '';
	      if (path && (typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
	        } else if (path.path) {
	          generatedPath = encodeURI(path.path);
	        }
	        if (path.query) {
	          // note: the generated query string is pre-URL-encoded by the recognizer
	          var query = this._recognizer.generateQueryString(path.query);
	          if (generatedPath.indexOf('?') > -1) {
	            generatedPath += '&' + query.slice(1);
	          } else {
	            generatedPath += query;
	          }
	        }
	      } else {
	        generatedPath = encodeURI(path ? path + '' : '');
	      }
	      return generatedPath;
	    };

	    // Internal methods ======================================

	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */

	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };

	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */

	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };

	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */

	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };

	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */

	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };

	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */

	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;

	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };

	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */

	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path, true);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };

	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;

	      if (this._checkGuard(path)) {
	        return;
	      }

	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;

	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }

	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);

	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;

	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }

	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };

	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }

	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }

	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };

	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */

	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };

	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };

	    return Router;
	  }();

	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn$1('invalid component for route "' + path + '".');
	    }
	  }

	  /* Installation */

	  Router.installed = false;

	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */

	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn$1('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };

	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }

	  return Router;
	});

/***/ },
/* 71 */
/***/ function(module, exports) {

	/*!
	 * vue-resource v0.9.3
	 * https://github.com/vuejs/vue-resource
	 * Released under the MIT License.
	 */

	'use strict';

	/**
	 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
	 */

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var RESOLVED = 0;
	var REJECTED = 1;
	var PENDING = 2;

	function Promise$2(executor) {

	    this.state = PENDING;
	    this.value = undefined;
	    this.deferred = [];

	    var promise = this;

	    try {
	        executor(function (x) {
	            promise.resolve(x);
	        }, function (r) {
	            promise.reject(r);
	        });
	    } catch (e) {
	        promise.reject(e);
	    }
	}

	Promise$2.reject = function (r) {
	    return new Promise$2(function (resolve, reject) {
	        reject(r);
	    });
	};

	Promise$2.resolve = function (x) {
	    return new Promise$2(function (resolve, reject) {
	        resolve(x);
	    });
	};

	Promise$2.all = function all(iterable) {
	    return new Promise$2(function (resolve, reject) {
	        var count = 0,
	            result = [];

	        if (iterable.length === 0) {
	            resolve(result);
	        }

	        function resolver(i) {
	            return function (x) {
	                result[i] = x;
	                count += 1;

	                if (count === iterable.length) {
	                    resolve(result);
	                }
	            };
	        }

	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$2.resolve(iterable[i]).then(resolver(i), reject);
	        }
	    });
	};

	Promise$2.race = function race(iterable) {
	    return new Promise$2(function (resolve, reject) {
	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$2.resolve(iterable[i]).then(resolve, reject);
	        }
	    });
	};

	var p$1 = Promise$2.prototype;

	p$1.resolve = function resolve(x) {
	    var promise = this;

	    if (promise.state === PENDING) {
	        if (x === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }

	        var called = false;

	        try {
	            var then = x && x['then'];

	            if (x !== null && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && typeof then === 'function') {
	                then.call(x, function (x) {
	                    if (!called) {
	                        promise.resolve(x);
	                    }
	                    called = true;
	                }, function (r) {
	                    if (!called) {
	                        promise.reject(r);
	                    }
	                    called = true;
	                });
	                return;
	            }
	        } catch (e) {
	            if (!called) {
	                promise.reject(e);
	            }
	            return;
	        }

	        promise.state = RESOLVED;
	        promise.value = x;
	        promise.notify();
	    }
	};

	p$1.reject = function reject(reason) {
	    var promise = this;

	    if (promise.state === PENDING) {
	        if (reason === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }

	        promise.state = REJECTED;
	        promise.value = reason;
	        promise.notify();
	    }
	};

	p$1.notify = function notify() {
	    var promise = this;

	    nextTick(function () {
	        if (promise.state !== PENDING) {
	            while (promise.deferred.length) {
	                var deferred = promise.deferred.shift(),
	                    onResolved = deferred[0],
	                    onRejected = deferred[1],
	                    resolve = deferred[2],
	                    reject = deferred[3];

	                try {
	                    if (promise.state === RESOLVED) {
	                        if (typeof onResolved === 'function') {
	                            resolve(onResolved.call(undefined, promise.value));
	                        } else {
	                            resolve(promise.value);
	                        }
	                    } else if (promise.state === REJECTED) {
	                        if (typeof onRejected === 'function') {
	                            resolve(onRejected.call(undefined, promise.value));
	                        } else {
	                            reject(promise.value);
	                        }
	                    }
	                } catch (e) {
	                    reject(e);
	                }
	            }
	        }
	    });
	};

	p$1.then = function then(onResolved, onRejected) {
	    var promise = this;

	    return new Promise$2(function (resolve, reject) {
	        promise.deferred.push([onResolved, onRejected, resolve, reject]);
	        promise.notify();
	    });
	};

	p$1.catch = function (onRejected) {
	    return this.then(undefined, onRejected);
	};

	var PromiseObj = window.Promise || Promise$2;

	function Promise$1(executor, context) {

	    if (executor instanceof PromiseObj) {
	        this.promise = executor;
	    } else {
	        this.promise = new PromiseObj(executor.bind(context));
	    }

	    this.context = context;
	}

	Promise$1.all = function (iterable, context) {
	    return new Promise$1(PromiseObj.all(iterable), context);
	};

	Promise$1.resolve = function (value, context) {
	    return new Promise$1(PromiseObj.resolve(value), context);
	};

	Promise$1.reject = function (reason, context) {
	    return new Promise$1(PromiseObj.reject(reason), context);
	};

	Promise$1.race = function (iterable, context) {
	    return new Promise$1(PromiseObj.race(iterable), context);
	};

	var p = Promise$1.prototype;

	p.bind = function (context) {
	    this.context = context;
	    return this;
	};

	p.then = function (fulfilled, rejected) {

	    if (fulfilled && fulfilled.bind && this.context) {
	        fulfilled = fulfilled.bind(this.context);
	    }

	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }

	    return new Promise$1(this.promise.then(fulfilled, rejected), this.context);
	};

	p.catch = function (rejected) {

	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }

	    return new Promise$1(this.promise.catch(rejected), this.context);
	};

	p.finally = function (callback) {

	    return this.then(function (value) {
	        callback.call(this);
	        return value;
	    }, function (reason) {
	        callback.call(this);
	        return PromiseObj.reject(reason);
	    });
	};

	var debug = false;
	var util = {};
	var array = [];
	function Util(Vue) {
	    util = Vue.util;
	    debug = Vue.config.debug || !Vue.config.silent;
	}

	function warn(msg) {
	    if (typeof console !== 'undefined' && debug) {
	        console.warn('[VueResource warn]: ' + msg);
	    }
	}

	function error(msg) {
	    if (typeof console !== 'undefined') {
	        console.error(msg);
	    }
	}

	function nextTick(cb, ctx) {
	    return util.nextTick(cb, ctx);
	}

	function trim(str) {
	    return str.replace(/^\s*|\s*$/g, '');
	}

	var isArray = Array.isArray;

	function isString(val) {
	    return typeof val === 'string';
	}

	function isBoolean(val) {
	    return val === true || val === false;
	}

	function isFunction(val) {
	    return typeof val === 'function';
	}

	function isObject(obj) {
	    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	}

	function isPlainObject(obj) {
	    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
	}

	function isFormData(obj) {
	    return typeof FormData !== 'undefined' && obj instanceof FormData;
	}

	function when(value, fulfilled, rejected) {

	    var promise = Promise$1.resolve(value);

	    if (arguments.length < 2) {
	        return promise;
	    }

	    return promise.then(fulfilled, rejected);
	}

	function options(fn, obj, opts) {

	    opts = opts || {};

	    if (isFunction(opts)) {
	        opts = opts.call(obj);
	    }

	    return merge(fn.bind({ $vm: obj, $options: opts }), fn, { $options: opts });
	}

	function each(obj, iterator) {

	    var i, key;

	    if (typeof obj.length == 'number') {
	        for (i = 0; i < obj.length; i++) {
	            iterator.call(obj[i], obj[i], i);
	        }
	    } else if (isObject(obj)) {
	        for (key in obj) {
	            if (obj.hasOwnProperty(key)) {
	                iterator.call(obj[key], obj[key], key);
	            }
	        }
	    }

	    return obj;
	}

	var assign = Object.assign || _assign;

	function merge(target) {

	    var args = array.slice.call(arguments, 1);

	    args.forEach(function (source) {
	        _merge(target, source, true);
	    });

	    return target;
	}

	function defaults(target) {

	    var args = array.slice.call(arguments, 1);

	    args.forEach(function (source) {

	        for (var key in source) {
	            if (target[key] === undefined) {
	                target[key] = source[key];
	            }
	        }
	    });

	    return target;
	}

	function _assign(target) {

	    var args = array.slice.call(arguments, 1);

	    args.forEach(function (source) {
	        _merge(target, source);
	    });

	    return target;
	}

	function _merge(target, source, deep) {
	    for (var key in source) {
	        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
	                target[key] = {};
	            }
	            if (isArray(source[key]) && !isArray(target[key])) {
	                target[key] = [];
	            }
	            _merge(target[key], source[key], deep);
	        } else if (source[key] !== undefined) {
	            target[key] = source[key];
	        }
	    }
	}

	function root(options, next) {

	    var url = next(options);

	    if (isString(options.root) && !url.match(/^(https?:)?\//)) {
	        url = options.root + '/' + url;
	    }

	    return url;
	}

	function query(options, next) {

	    var urlParams = Object.keys(Url.options.params),
	        query = {},
	        url = next(options);

	    each(options.params, function (value, key) {
	        if (urlParams.indexOf(key) === -1) {
	            query[key] = value;
	        }
	    });

	    query = Url.params(query);

	    if (query) {
	        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
	    }

	    return url;
	}

	/**
	 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
	 */

	function expand(url, params, variables) {

	    var tmpl = parse(url),
	        expanded = tmpl.expand(params);

	    if (variables) {
	        variables.push.apply(variables, tmpl.vars);
	    }

	    return expanded;
	}

	function parse(template) {

	    var operators = ['+', '#', '.', '/', ';', '?', '&'],
	        variables = [];

	    return {
	        vars: variables,
	        expand: function expand(context) {
	            return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
	                if (expression) {

	                    var operator = null,
	                        values = [];

	                    if (operators.indexOf(expression.charAt(0)) !== -1) {
	                        operator = expression.charAt(0);
	                        expression = expression.substr(1);
	                    }

	                    expression.split(/,/g).forEach(function (variable) {
	                        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
	                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
	                        variables.push(tmp[1]);
	                    });

	                    if (operator && operator !== '+') {

	                        var separator = ',';

	                        if (operator === '?') {
	                            separator = '&';
	                        } else if (operator !== '#') {
	                            separator = operator;
	                        }

	                        return (values.length !== 0 ? operator : '') + values.join(separator);
	                    } else {
	                        return values.join(',');
	                    }
	                } else {
	                    return encodeReserved(literal);
	                }
	            });
	        }
	    };
	}

	function getValues(context, operator, key, modifier) {

	    var value = context[key],
	        result = [];

	    if (isDefined(value) && value !== '') {
	        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
	            value = value.toString();

	            if (modifier && modifier !== '*') {
	                value = value.substring(0, parseInt(modifier, 10));
	            }

	            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	        } else {
	            if (modifier === '*') {
	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            result.push(encodeValue(operator, value[k], k));
	                        }
	                    });
	                }
	            } else {
	                var tmp = [];

	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        tmp.push(encodeValue(operator, value));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            tmp.push(encodeURIComponent(k));
	                            tmp.push(encodeValue(operator, value[k].toString()));
	                        }
	                    });
	                }

	                if (isKeyOperator(operator)) {
	                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
	                } else if (tmp.length !== 0) {
	                    result.push(tmp.join(','));
	                }
	            }
	        }
	    } else {
	        if (operator === ';') {
	            result.push(encodeURIComponent(key));
	        } else if (value === '' && (operator === '&' || operator === '?')) {
	            result.push(encodeURIComponent(key) + '=');
	        } else if (value === '') {
	            result.push('');
	        }
	    }

	    return result;
	}

	function isDefined(value) {
	    return value !== undefined && value !== null;
	}

	function isKeyOperator(operator) {
	    return operator === ';' || operator === '&' || operator === '?';
	}

	function encodeValue(operator, value, key) {

	    value = operator === '+' || operator === '#' ? encodeReserved(value) : encodeURIComponent(value);

	    if (key) {
	        return encodeURIComponent(key) + '=' + value;
	    } else {
	        return value;
	    }
	}

	function encodeReserved(str) {
	    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
	        if (!/%[0-9A-Fa-f]/.test(part)) {
	            part = encodeURI(part);
	        }
	        return part;
	    }).join('');
	}

	function template(options) {

	    var variables = [],
	        url = expand(options.url, options.params, variables);

	    variables.forEach(function (key) {
	        delete options.params[key];
	    });

	    return url;
	}

	/**
	 * Service for URL templating.
	 */

	var ie = document.documentMode;
	var el = document.createElement('a');

	function Url(url, params) {

	    var self = this || {},
	        options = url,
	        transform;

	    if (isString(url)) {
	        options = { url: url, params: params };
	    }

	    options = merge({}, Url.options, self.$options, options);

	    Url.transforms.forEach(function (handler) {
	        transform = factory(handler, transform, self.$vm);
	    });

	    return transform(options);
	}

	/**
	 * Url options.
	 */

	Url.options = {
	    url: '',
	    root: null,
	    params: {}
	};

	/**
	 * Url transforms.
	 */

	Url.transforms = [template, query, root];

	/**
	 * Encodes a Url parameter string.
	 *
	 * @param {Object} obj
	 */

	Url.params = function (obj) {

	    var params = [],
	        escape = encodeURIComponent;

	    params.add = function (key, value) {

	        if (isFunction(value)) {
	            value = value();
	        }

	        if (value === null) {
	            value = '';
	        }

	        this.push(escape(key) + '=' + escape(value));
	    };

	    serialize(params, obj);

	    return params.join('&').replace(/%20/g, '+');
	};

	/**
	 * Parse a URL and return its components.
	 *
	 * @param {String} url
	 */

	Url.parse = function (url) {

	    if (ie) {
	        el.href = url;
	        url = el.href;
	    }

	    el.href = url;

	    return {
	        href: el.href,
	        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
	        port: el.port,
	        host: el.host,
	        hostname: el.hostname,
	        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
	        search: el.search ? el.search.replace(/^\?/, '') : '',
	        hash: el.hash ? el.hash.replace(/^#/, '') : ''
	    };
	};

	function factory(handler, next, vm) {
	    return function (options) {
	        return handler.call(vm, options, next);
	    };
	}

	function serialize(params, obj, scope) {

	    var array = isArray(obj),
	        plain = isPlainObject(obj),
	        hash;

	    each(obj, function (value, key) {

	        hash = isObject(value) || isArray(value);

	        if (scope) {
	            key = scope + '[' + (plain || hash ? key : '') + ']';
	        }

	        if (!scope && array) {
	            params.add(value.name, value.value);
	        } else if (hash) {
	            serialize(params, value, key);
	        } else {
	            params.add(key, value);
	        }
	    });
	}

	function xdrClient(request) {
	    return new Promise$1(function (resolve) {

	        var xdr = new XDomainRequest(),
	            handler = function handler(event) {

	            var response = request.respondWith(xdr.responseText, {
	                status: xdr.status,
	                statusText: xdr.statusText
	            });

	            resolve(response);
	        };

	        request.abort = function () {
	            return xdr.abort();
	        };

	        xdr.open(request.method, request.getUrl(), true);
	        xdr.timeout = 0;
	        xdr.onload = handler;
	        xdr.onerror = handler;
	        xdr.ontimeout = function () {};
	        xdr.onprogress = function () {};
	        xdr.send(request.getBody());
	    });
	}

	var ORIGIN_URL = Url.parse(location.href);
	var SUPPORTS_CORS = 'withCredentials' in new XMLHttpRequest();

	function cors(request, next) {

	    if (!isBoolean(request.crossOrigin) && crossOrigin(request)) {
	        request.crossOrigin = true;
	    }

	    if (request.crossOrigin) {

	        if (!SUPPORTS_CORS) {
	            request.client = xdrClient;
	        }

	        delete request.emulateHTTP;
	    }

	    next();
	}

	function crossOrigin(request) {

	    var requestUrl = Url.parse(Url(request));

	    return requestUrl.protocol !== ORIGIN_URL.protocol || requestUrl.host !== ORIGIN_URL.host;
	}

	function body(request, next) {

	    if (request.emulateJSON && isPlainObject(request.body)) {
	        request.body = Url.params(request.body);
	        request.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	    }

	    if (isFormData(request.body)) {
	        delete request.headers['Content-Type'];
	    }

	    if (isPlainObject(request.body)) {
	        request.body = JSON.stringify(request.body);
	    }

	    next(function (response) {

	        var contentType = response.headers['Content-Type'];

	        if (isString(contentType) && contentType.indexOf('application/json') === 0) {

	            try {
	                response.data = response.json();
	            } catch (e) {
	                response.data = null;
	            }
	        } else {
	            response.data = response.text();
	        }
	    });
	}

	function jsonpClient(request) {
	    return new Promise$1(function (resolve) {

	        var name = request.jsonp || 'callback',
	            callback = '_jsonp' + Math.random().toString(36).substr(2),
	            body = null,
	            handler,
	            script;

	        handler = function handler(event) {

	            var status = 0;

	            if (event.type === 'load' && body !== null) {
	                status = 200;
	            } else if (event.type === 'error') {
	                status = 404;
	            }

	            resolve(request.respondWith(body, { status: status }));

	            delete window[callback];
	            document.body.removeChild(script);
	        };

	        request.params[name] = callback;

	        window[callback] = function (result) {
	            body = JSON.stringify(result);
	        };

	        script = document.createElement('script');
	        script.src = request.getUrl();
	        script.type = 'text/javascript';
	        script.async = true;
	        script.onload = handler;
	        script.onerror = handler;

	        document.body.appendChild(script);
	    });
	}

	function jsonp(request, next) {

	    if (request.method == 'JSONP') {
	        request.client = jsonpClient;
	    }

	    next(function (response) {

	        if (request.method == 'JSONP') {
	            response.data = response.json();
	        }
	    });
	}

	function before(request, next) {

	    if (isFunction(request.before)) {
	        request.before.call(this, request);
	    }

	    next();
	}

	/**
	 * HTTP method override Interceptor.
	 */

	function method(request, next) {

	    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
	        request.headers['X-HTTP-Method-Override'] = request.method;
	        request.method = 'POST';
	    }

	    next();
	}

	function header(request, next) {

	    request.method = request.method.toUpperCase();
	    request.headers = assign({}, Http.headers.common, !request.crossOrigin ? Http.headers.custom : {}, Http.headers[request.method.toLowerCase()], request.headers);

	    next();
	}

	/**
	 * Timeout Interceptor.
	 */

	function timeout(request, next) {

	    var timeout;

	    if (request.timeout) {
	        timeout = setTimeout(function () {
	            request.abort();
	        }, request.timeout);
	    }

	    next(function (response) {

	        clearTimeout(timeout);
	    });
	}

	function xhrClient(request) {
	    return new Promise$1(function (resolve) {

	        var xhr = new XMLHttpRequest(),
	            handler = function handler(event) {

	            var response = request.respondWith('response' in xhr ? xhr.response : xhr.responseText, {
	                status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
	                statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText),
	                headers: parseHeaders(xhr.getAllResponseHeaders())
	            });

	            resolve(response);
	        };

	        request.abort = function () {
	            return xhr.abort();
	        };

	        xhr.open(request.method, request.getUrl(), true);
	        xhr.timeout = 0;
	        xhr.onload = handler;
	        xhr.onerror = handler;

	        if (request.progress) {
	            if (request.method === 'GET') {
	                xhr.addEventListener('progress', request.progress);
	            } else if (/^(POST|PUT)$/i.test(request.method)) {
	                xhr.upload.addEventListener('progress', request.progress);
	            }
	        }

	        if (request.credentials === true) {
	            xhr.withCredentials = true;
	        }

	        each(request.headers || {}, function (value, header) {
	            xhr.setRequestHeader(header, value);
	        });

	        xhr.send(request.getBody());
	    });
	}

	function parseHeaders(str) {

	    var headers = {},
	        value,
	        name,
	        i;

	    each(trim(str).split('\n'), function (row) {

	        i = row.indexOf(':');
	        name = trim(row.slice(0, i));
	        value = trim(row.slice(i + 1));

	        if (headers[name]) {

	            if (isArray(headers[name])) {
	                headers[name].push(value);
	            } else {
	                headers[name] = [headers[name], value];
	            }
	        } else {

	            headers[name] = value;
	        }
	    });

	    return headers;
	}

	function Client(context) {

	    var reqHandlers = [sendRequest],
	        resHandlers = [],
	        handler;

	    if (!isObject(context)) {
	        context = null;
	    }

	    function Client(request) {
	        return new Promise$1(function (resolve) {

	            function exec() {

	                handler = reqHandlers.pop();

	                if (isFunction(handler)) {
	                    handler.call(context, request, next);
	                } else {
	                    warn('Invalid interceptor of type ' + (typeof handler === 'undefined' ? 'undefined' : _typeof(handler)) + ', must be a function');
	                    next();
	                }
	            }

	            function next(response) {

	                if (isFunction(response)) {

	                    resHandlers.unshift(response);
	                } else if (isObject(response)) {

	                    resHandlers.forEach(function (handler) {
	                        response = when(response, function (response) {
	                            return handler.call(context, response) || response;
	                        });
	                    });

	                    when(response, resolve);

	                    return;
	                }

	                exec();
	            }

	            exec();
	        }, context);
	    }

	    Client.use = function (handler) {
	        reqHandlers.push(handler);
	    };

	    return Client;
	}

	function sendRequest(request, resolve) {

	    var client = request.client || xhrClient;

	    resolve(client(request));
	}

	var classCallCheck = function classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	};

	/**
	 * HTTP Response.
	 */

	var Response = function () {
	    function Response(body, _ref) {
	        var url = _ref.url;
	        var headers = _ref.headers;
	        var status = _ref.status;
	        var statusText = _ref.statusText;
	        classCallCheck(this, Response);

	        this.url = url;
	        this.body = body;
	        this.headers = headers || {};
	        this.status = status || 0;
	        this.statusText = statusText || '';
	        this.ok = status >= 200 && status < 300;
	    }

	    Response.prototype.text = function text() {
	        return this.body;
	    };

	    Response.prototype.blob = function blob() {
	        return new Blob([this.body]);
	    };

	    Response.prototype.json = function json() {
	        return JSON.parse(this.body);
	    };

	    return Response;
	}();

	var Request = function () {
	    function Request(options) {
	        classCallCheck(this, Request);

	        this.method = 'GET';
	        this.body = null;
	        this.params = {};
	        this.headers = {};

	        assign(this, options);
	    }

	    Request.prototype.getUrl = function getUrl() {
	        return Url(this);
	    };

	    Request.prototype.getBody = function getBody() {
	        return this.body;
	    };

	    Request.prototype.respondWith = function respondWith(body, options) {
	        return new Response(body, assign(options || {}, { url: this.getUrl() }));
	    };

	    return Request;
	}();

	/**
	 * Service for sending network requests.
	 */

	var CUSTOM_HEADERS = { 'X-Requested-With': 'XMLHttpRequest' };
	var COMMON_HEADERS = { 'Accept': 'application/json, text/plain, */*' };
	var JSON_CONTENT_TYPE = { 'Content-Type': 'application/json;charset=utf-8' };

	function Http(options) {

	    var self = this || {},
	        client = Client(self.$vm);

	    defaults(options || {}, self.$options, Http.options);

	    Http.interceptors.forEach(function (handler) {
	        client.use(handler);
	    });

	    return client(new Request(options)).then(function (response) {

	        return response.ok ? response : Promise$1.reject(response);
	    }, function (response) {

	        if (response instanceof Error) {
	            error(response);
	        }

	        return Promise$1.reject(response);
	    });
	}

	Http.options = {};

	Http.headers = {
	    put: JSON_CONTENT_TYPE,
	    post: JSON_CONTENT_TYPE,
	    patch: JSON_CONTENT_TYPE,
	    delete: JSON_CONTENT_TYPE,
	    custom: CUSTOM_HEADERS,
	    common: COMMON_HEADERS
	};

	Http.interceptors = [before, timeout, method, body, jsonp, header, cors];

	['get', 'delete', 'head', 'jsonp'].forEach(function (method) {

	    Http[method] = function (url, options) {
	        return this(assign(options || {}, { url: url, method: method }));
	    };
	});

	['post', 'put', 'patch'].forEach(function (method) {

	    Http[method] = function (url, body, options) {
	        return this(assign(options || {}, { url: url, method: method, body: body }));
	    };
	});

	function Resource(url, params, actions, options) {

	    var self = this || {},
	        resource = {};

	    actions = assign({}, Resource.actions, actions);

	    each(actions, function (action, name) {

	        action = merge({ url: url, params: params || {} }, options, action);

	        resource[name] = function () {
	            return (self.$http || Http)(opts(action, arguments));
	        };
	    });

	    return resource;
	}

	function opts(action, args) {

	    var options = assign({}, action),
	        params = {},
	        body;

	    switch (args.length) {

	        case 2:

	            params = args[0];
	            body = args[1];

	            break;

	        case 1:

	            if (/^(POST|PUT|PATCH)$/i.test(options.method)) {
	                body = args[0];
	            } else {
	                params = args[0];
	            }

	            break;

	        case 0:

	            break;

	        default:

	            throw 'Expected up to 4 arguments [params, body], got ' + args.length + ' arguments';
	    }

	    options.body = body;
	    options.params = assign({}, options.params, params);

	    return options;
	}

	Resource.actions = {

	    get: { method: 'GET' },
	    save: { method: 'POST' },
	    query: { method: 'GET' },
	    update: { method: 'PUT' },
	    remove: { method: 'DELETE' },
	    delete: { method: 'DELETE' }

	};

	function plugin(Vue) {

	    if (plugin.installed) {
	        return;
	    }

	    Util(Vue);

	    Vue.url = Url;
	    Vue.http = Http;
	    Vue.resource = Resource;
	    Vue.Promise = Promise$1;

	    Object.defineProperties(Vue.prototype, {

	        $url: {
	            get: function get() {
	                return options(Vue.url, this, this.$options.url);
	            }
	        },

	        $http: {
	            get: function get() {
	                return options(Vue.http, this, this.$options.http);
	            }
	        },

	        $resource: {
	            get: function get() {
	                return Vue.resource.bind(this);
	            }
	        },

	        $promise: {
	            get: function get() {
	                var _this = this;

	                return function (executor) {
	                    return new Vue.Promise(executor, _this);
	                };
	            }
	        }

	    });
	}

	if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(plugin);
	}

	module.exports = plugin;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
	(function (window, document, Math) {
		var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
			window.setTimeout(callback, 1000 / 60);
		};

		var utils = function () {
			var me = {};

			var _elementStyle = document.createElement('div').style;
			var _vendor = function () {
				var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
				    transform,
				    i = 0,
				    l = vendors.length;

				for (; i < l; i++) {
					transform = vendors[i] + 'ransform';
					if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
				}

				return false;
			}();

			function _prefixStyle(style) {
				if (_vendor === false) return false;
				if (_vendor === '') return style;
				return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
			}

			me.getTime = Date.now || function getTime() {
				return new Date().getTime();
			};

			me.extend = function (target, obj) {
				for (var i in obj) {
					target[i] = obj[i];
				}
			};

			me.addEvent = function (el, type, fn, capture) {
				el.addEventListener(type, fn, !!capture);
			};

			me.removeEvent = function (el, type, fn, capture) {
				el.removeEventListener(type, fn, !!capture);
			};

			me.prefixPointerEvent = function (pointerEvent) {
				return window.MSPointerEvent ? 'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8) : pointerEvent;
			};

			me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
				var distance = current - start,
				    speed = Math.abs(distance) / time,
				    destination,
				    duration;

				deceleration = deceleration === undefined ? 0.0006 : deceleration;

				destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1);
				duration = speed / deceleration;

				if (destination < lowerMargin) {
					destination = wrapperSize ? lowerMargin - wrapperSize / 2.5 * (speed / 8) : lowerMargin;
					distance = Math.abs(destination - current);
					duration = distance / speed;
				} else if (destination > 0) {
					destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
					distance = Math.abs(current) + destination;
					duration = distance / speed;
				}

				return {
					destination: Math.round(destination),
					duration: duration
				};
			};

			var _transform = _prefixStyle('transform');

			me.extend(me, {
				hasTransform: _transform !== false,
				hasPerspective: _prefixStyle('perspective') in _elementStyle,
				hasTouch: 'ontouchstart' in window,
				hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
				hasTransition: _prefixStyle('transition') in _elementStyle
			});

			/*
	  This should find all Android browsers lower than build 535.19 (both stock browser and webview)
	  - galaxy S2 is ok
	     - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
	     - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	    - galaxy S3 is badAndroid (stock brower, webview)
	      `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	    - galaxy S4 is badAndroid (stock brower, webview)
	      `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	    - galaxy S5 is OK
	      `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	    - galaxy S6 is OK
	      `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	   */
			me.isBadAndroid = function () {
				var appVersion = window.navigator.appVersion;
				// Android browser is not a chrome browser.
				if (/Android/.test(appVersion) && !/Chrome\/\d/.test(appVersion)) {
					var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
					if (safariVersion && (typeof safariVersion === 'undefined' ? 'undefined' : _typeof(safariVersion)) === "object" && safariVersion.length >= 2) {
						return parseFloat(safariVersion[1]) < 535.19;
					} else {
						return true;
					}
				} else {
					return false;
				}
			}();

			me.extend(me.style = {}, {
				transform: _transform,
				transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
				transitionDuration: _prefixStyle('transitionDuration'),
				transitionDelay: _prefixStyle('transitionDelay'),
				transformOrigin: _prefixStyle('transformOrigin')
			});

			me.hasClass = function (e, c) {
				var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
				return re.test(e.className);
			};

			me.addClass = function (e, c) {
				if (me.hasClass(e, c)) {
					return;
				}

				var newclass = e.className.split(' ');
				newclass.push(c);
				e.className = newclass.join(' ');
			};

			me.removeClass = function (e, c) {
				if (!me.hasClass(e, c)) {
					return;
				}

				var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
				e.className = e.className.replace(re, ' ');
			};

			me.offset = function (el) {
				var left = -el.offsetLeft,
				    top = -el.offsetTop;

				// jshint -W084
				while (el = el.offsetParent) {
					left -= el.offsetLeft;
					top -= el.offsetTop;
				}
				// jshint +W084

				return {
					left: left,
					top: top
				};
			};

			me.preventDefaultException = function (el, exceptions) {
				for (var i in exceptions) {
					if (exceptions[i].test(el[i])) {
						return true;
					}
				}

				return false;
			};

			me.extend(me.eventType = {}, {
				touchstart: 1,
				touchmove: 1,
				touchend: 1,

				mousedown: 2,
				mousemove: 2,
				mouseup: 2,

				pointerdown: 3,
				pointermove: 3,
				pointerup: 3,

				MSPointerDown: 3,
				MSPointerMove: 3,
				MSPointerUp: 3
			});

			me.extend(me.ease = {}, {
				quadratic: {
					style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
					fn: function fn(k) {
						return k * (2 - k);
					}
				},
				circular: {
					style: 'cubic-bezier(0.1, 0.57, 0.1, 1)', // Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
					fn: function fn(k) {
						return Math.sqrt(1 - --k * k);
					}
				},
				back: {
					style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
					fn: function fn(k) {
						var b = 4;
						return (k = k - 1) * k * ((b + 1) * k + b) + 1;
					}
				},
				bounce: {
					style: '',
					fn: function fn(k) {
						if ((k /= 1) < 1 / 2.75) {
							return 7.5625 * k * k;
						} else if (k < 2 / 2.75) {
							return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
						} else if (k < 2.5 / 2.75) {
							return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
						} else {
							return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
						}
					}
				},
				elastic: {
					style: '',
					fn: function fn(k) {
						var f = 0.22,
						    e = 0.4;

						if (k === 0) {
							return 0;
						}
						if (k == 1) {
							return 1;
						}

						return e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1;
					}
				}
			});

			me.tap = function (e, eventName) {
				var ev = document.createEvent('Event');
				ev.initEvent(eventName, true, true);
				ev.pageX = e.pageX;
				ev.pageY = e.pageY;
				e.target.dispatchEvent(ev);
			};

			me.click = function (e) {
				var target = e.target,
				    ev;

				if (!/(SELECT|INPUT|TEXTAREA)/i.test(target.tagName)) {
					ev = document.createEvent('MouseEvents');
					ev.initMouseEvent('click', true, true, e.view, 1, target.screenX, target.screenY, target.clientX, target.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);

					ev._constructed = true;
					target.dispatchEvent(ev);
				}
			};

			return me;
		}();
		function IScroll(el, options) {
			this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
			this.scroller = this.wrapper.children[0];
			this.scrollerStyle = this.scroller.style; // cache style for better performance

			this.options = {

				resizeScrollbars: true,

				mouseWheelSpeed: 20,

				snapThreshold: 0.334,

				// INSERT POINT: OPTIONS
				disablePointer: !utils.hasPointer,
				disableTouch: utils.hasPointer || !utils.hasTouch,
				disableMouse: utils.hasPointer || utils.hasTouch,
				startX: 0,
				startY: 0,
				scrollY: true,
				directionLockThreshold: 5,
				momentum: true,

				bounce: true,
				bounceTime: 600,
				bounceEasing: '',

				preventDefault: true,
				preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

				HWCompositing: true,
				useTransition: true,
				useTransform: true,
				bindToWrapper: typeof window.onmousedown === "undefined"
			};

			for (var i in options) {
				this.options[i] = options[i];
			}

			// Normalize options
			this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

			this.options.useTransition = utils.hasTransition && this.options.useTransition;
			this.options.useTransform = utils.hasTransform && this.options.useTransform;

			this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
			this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

			// If you want eventPassthrough I have to lock one of the axes
			this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
			this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

			// With eventPassthrough we also need lockDirection mechanism
			this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
			this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

			this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

			this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

			if (this.options.tap === true) {
				this.options.tap = 'tap';
			}

			if (this.options.shrinkScrollbars == 'scale') {
				this.options.useTransition = false;
			}

			this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

			// INSERT POINT: NORMALIZATION

			// Some defaults
			this.x = 0;
			this.y = 0;
			this.directionX = 0;
			this.directionY = 0;
			this._events = {};

			// INSERT POINT: DEFAULTS

			this._init();
			this.refresh();

			this.scrollTo(this.options.startX, this.options.startY);
			this.enable();
		}

		IScroll.prototype = {
			version: '5.2.0',

			_init: function _init() {
				this._initEvents();

				if (this.options.scrollbars || this.options.indicators) {
					this._initIndicators();
				}

				if (this.options.mouseWheel) {
					this._initWheel();
				}

				if (this.options.snap) {
					this._initSnap();
				}

				if (this.options.keyBindings) {
					this._initKeys();
				}

				// INSERT POINT: _init
			},

			destroy: function destroy() {
				this._initEvents(true);
				clearTimeout(this.resizeTimeout);
				this.resizeTimeout = null;
				this._execEvent('destroy');
			},

			_transitionEnd: function _transitionEnd(e) {
				if (e.target != this.scroller || !this.isInTransition) {
					return;
				}

				this._transitionTime();
				if (!this.resetPosition(this.options.bounceTime)) {
					this.isInTransition = false;
					this._execEvent('scrollEnd');
				}
			},

			_start: function _start(e) {
				// React to left mouse button only
				if (utils.eventType[e.type] != 1) {
					// for button property
					// http://unixpapa.com/js/mouse.html
					var button;
					if (!e.which) {
						/* IE case */
						button = e.button < 2 ? 0 : e.button == 4 ? 1 : 2;
					} else {
						/* All others */
						button = e.button;
					}
					if (button !== 0) {
						return;
					}
				}

				if (!this.enabled || this.initiated && utils.eventType[e.type] !== this.initiated) {
					return;
				}

				if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
					e.preventDefault();
				}

				var point = e.touches ? e.touches[0] : e,
				    pos;

				this.initiated = utils.eventType[e.type];
				this.moved = false;
				this.distX = 0;
				this.distY = 0;
				this.directionX = 0;
				this.directionY = 0;
				this.directionLocked = 0;

				this.startTime = utils.getTime();

				if (this.options.useTransition && this.isInTransition) {
					this._transitionTime();
					this.isInTransition = false;
					pos = this.getComputedPosition();
					this._translate(Math.round(pos.x), Math.round(pos.y));
					this._execEvent('scrollEnd');
				} else if (!this.options.useTransition && this.isAnimating) {
					this.isAnimating = false;
					this._execEvent('scrollEnd');
				}

				this.startX = this.x;
				this.startY = this.y;
				this.absStartX = this.x;
				this.absStartY = this.y;
				this.pointX = point.pageX;
				this.pointY = point.pageY;

				this._execEvent('beforeScrollStart');
			},

			_move: function _move(e) {
				if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
					return;
				}

				if (this.options.preventDefault) {
					// increases performance on Android? TODO: check!
					e.preventDefault();
				}

				var point = e.touches ? e.touches[0] : e,
				    deltaX = point.pageX - this.pointX,
				    deltaY = point.pageY - this.pointY,
				    timestamp = utils.getTime(),
				    newX,
				    newY,
				    absDistX,
				    absDistY;

				this.pointX = point.pageX;
				this.pointY = point.pageY;

				this.distX += deltaX;
				this.distY += deltaY;
				absDistX = Math.abs(this.distX);
				absDistY = Math.abs(this.distY);

				// We need to move at least 10 pixels for the scrolling to initiate
				if (timestamp - this.endTime > 300 && absDistX < 10 && absDistY < 10) {
					return;
				}

				// If you are scrolling in one direction lock the other
				if (!this.directionLocked && !this.options.freeScroll) {
					if (absDistX > absDistY + this.options.directionLockThreshold) {
						this.directionLocked = 'h'; // lock horizontally
					} else if (absDistY >= absDistX + this.options.directionLockThreshold) {
						this.directionLocked = 'v'; // lock vertically
					} else {
						this.directionLocked = 'n'; // no lock
					}
				}

				if (this.directionLocked == 'h') {
					if (this.options.eventPassthrough == 'vertical') {
						e.preventDefault();
					} else if (this.options.eventPassthrough == 'horizontal') {
						this.initiated = false;
						return;
					}

					deltaY = 0;
				} else if (this.directionLocked == 'v') {
					if (this.options.eventPassthrough == 'horizontal') {
						e.preventDefault();
					} else if (this.options.eventPassthrough == 'vertical') {
						this.initiated = false;
						return;
					}

					deltaX = 0;
				}

				deltaX = this.hasHorizontalScroll ? deltaX : 0;
				deltaY = this.hasVerticalScroll ? deltaY : 0;

				newX = this.x + deltaX;
				newY = this.y + deltaY;

				// Slow down if outside of the boundaries
				if (newX > 0 || newX < this.maxScrollX) {
					newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
				}
				if (newY > 0 || newY < this.maxScrollY) {
					newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
				}

				this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
				this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

				if (!this.moved) {
					this._execEvent('scrollStart');
				}

				this.moved = true;

				this._translate(newX, newY);

				/* REPLACE START: _move */

				if (timestamp - this.startTime > 300) {
					this.startTime = timestamp;
					this.startX = this.x;
					this.startY = this.y;
				}

				/* REPLACE END: _move */
			},

			_end: function _end(e) {
				if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
					return;
				}

				if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
					e.preventDefault();
				}

				var point = e.changedTouches ? e.changedTouches[0] : e,
				    momentumX,
				    momentumY,
				    duration = utils.getTime() - this.startTime,
				    newX = Math.round(this.x),
				    newY = Math.round(this.y),
				    distanceX = Math.abs(newX - this.startX),
				    distanceY = Math.abs(newY - this.startY),
				    time = 0,
				    easing = '';

				this.isInTransition = 0;
				this.initiated = 0;
				this.endTime = utils.getTime();

				// reset if we are outside of the boundaries
				if (this.resetPosition(this.options.bounceTime)) {
					return;
				}

				this.scrollTo(newX, newY); // ensures that the last position is rounded

				// we scrolled less than 10 pixels
				if (!this.moved) {
					if (this.options.tap) {
						utils.tap(e, this.options.tap);
					}

					if (this.options.click) {
						utils.click(e);
					}

					this._execEvent('scrollCancel');
					return;
				}

				if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
					this._execEvent('flick');
					return;
				}

				// start momentum animation if needed
				if (this.options.momentum && duration < 300) {
					momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
					momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
					newX = momentumX.destination;
					newY = momentumY.destination;
					time = Math.max(momentumX.duration, momentumY.duration);
					this.isInTransition = 1;
				}

				if (this.options.snap) {
					var snap = this._nearestSnap(newX, newY);
					this.currentPage = snap;
					time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
					newX = snap.x;
					newY = snap.y;

					this.directionX = 0;
					this.directionY = 0;
					easing = this.options.bounceEasing;
				}

				// INSERT POINT: _end

				if (newX != this.x || newY != this.y) {
					// change easing function when scroller goes out of the boundaries
					if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
						easing = utils.ease.quadratic;
					}

					this.scrollTo(newX, newY, time, easing);
					return;
				}

				this._execEvent('scrollEnd');
			},

			_resize: function _resize() {
				var that = this;

				clearTimeout(this.resizeTimeout);

				this.resizeTimeout = setTimeout(function () {
					that.refresh();
				}, this.options.resizePolling);
			},

			resetPosition: function resetPosition(time) {
				var x = this.x,
				    y = this.y;

				time = time || 0;

				if (!this.hasHorizontalScroll || this.x > 0) {
					x = 0;
				} else if (this.x < this.maxScrollX) {
					x = this.maxScrollX;
				}

				if (!this.hasVerticalScroll || this.y > 0) {
					y = 0;
				} else if (this.y < this.maxScrollY) {
					y = this.maxScrollY;
				}

				if (x == this.x && y == this.y) {
					return false;
				}

				this.scrollTo(x, y, time, this.options.bounceEasing);

				return true;
			},

			disable: function disable() {
				this.enabled = false;
			},

			enable: function enable() {
				this.enabled = true;
			},

			refresh: function refresh() {
				var rf = this.wrapper.offsetHeight; // Force reflow

				this.wrapperWidth = this.wrapper.clientWidth;
				this.wrapperHeight = this.wrapper.clientHeight;

				/* REPLACE START: refresh */

				this.scrollerWidth = this.scroller.offsetWidth;
				this.scrollerHeight = this.scroller.offsetHeight;

				this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
				this.maxScrollY = this.wrapperHeight - this.scrollerHeight;

				/* REPLACE END: refresh */

				this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
				this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

				if (!this.hasHorizontalScroll) {
					this.maxScrollX = 0;
					this.scrollerWidth = this.wrapperWidth;
				}

				if (!this.hasVerticalScroll) {
					this.maxScrollY = 0;
					this.scrollerHeight = this.wrapperHeight;
				}

				this.endTime = 0;
				this.directionX = 0;
				this.directionY = 0;

				this.wrapperOffset = utils.offset(this.wrapper);

				this._execEvent('refresh');

				this.resetPosition();

				// INSERT POINT: _refresh
			},

			on: function on(type, fn) {
				if (!this._events[type]) {
					this._events[type] = [];
				}

				this._events[type].push(fn);
			},

			off: function off(type, fn) {
				if (!this._events[type]) {
					return;
				}

				var index = this._events[type].indexOf(fn);

				if (index > -1) {
					this._events[type].splice(index, 1);
				}
			},

			_execEvent: function _execEvent(type) {
				if (!this._events[type]) {
					return;
				}

				var i = 0,
				    l = this._events[type].length;

				if (!l) {
					return;
				}

				for (; i < l; i++) {
					this._events[type][i].apply(this, [].slice.call(arguments, 1));
				}
			},

			scrollBy: function scrollBy(x, y, time, easing) {
				x = this.x + x;
				y = this.y + y;
				time = time || 0;

				this.scrollTo(x, y, time, easing);
			},

			scrollTo: function scrollTo(x, y, time, easing) {
				easing = easing || utils.ease.circular;

				this.isInTransition = this.options.useTransition && time > 0;
				var transitionType = this.options.useTransition && easing.style;
				if (!time || transitionType) {
					if (transitionType) {
						this._transitionTimingFunction(easing.style);
						this._transitionTime(time);
					}
					this._translate(x, y);
				} else {
					this._animate(x, y, time, easing.fn);
				}
			},

			scrollToElement: function scrollToElement(el, time, offsetX, offsetY, easing) {
				el = el.nodeType ? el : this.scroller.querySelector(el);

				if (!el) {
					return;
				}

				var pos = utils.offset(el);

				pos.left -= this.wrapperOffset.left;
				pos.top -= this.wrapperOffset.top;

				// if offsetX/Y are true we center the element to the screen
				if (offsetX === true) {
					offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
				}
				if (offsetY === true) {
					offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
				}

				pos.left -= offsetX || 0;
				pos.top -= offsetY || 0;

				pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
				pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

				time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;

				this.scrollTo(pos.left, pos.top, time, easing);
			},

			_transitionTime: function _transitionTime(time) {
				time = time || 0;

				var durationProp = utils.style.transitionDuration;
				this.scrollerStyle[durationProp] = time + 'ms';

				if (!time && utils.isBadAndroid) {
					this.scrollerStyle[durationProp] = '0.0001ms';
					// remove 0.0001ms
					var self = this;
					rAF(function () {
						if (self.scrollerStyle[durationProp] === '0.0001ms') {
							self.scrollerStyle[durationProp] = '0s';
						}
					});
				}

				if (this.indicators) {
					for (var i = this.indicators.length; i--;) {
						this.indicators[i].transitionTime(time);
					}
				}

				// INSERT POINT: _transitionTime
			},

			_transitionTimingFunction: function _transitionTimingFunction(easing) {
				this.scrollerStyle[utils.style.transitionTimingFunction] = easing;

				if (this.indicators) {
					for (var i = this.indicators.length; i--;) {
						this.indicators[i].transitionTimingFunction(easing);
					}
				}

				// INSERT POINT: _transitionTimingFunction
			},

			_translate: function _translate(x, y) {
				if (this.options.useTransform) {

					/* REPLACE START: _translate */

					this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

					/* REPLACE END: _translate */
				} else {
					x = Math.round(x);
					y = Math.round(y);
					this.scrollerStyle.left = x + 'px';
					this.scrollerStyle.top = y + 'px';
				}

				this.x = x;
				this.y = y;

				if (this.indicators) {
					for (var i = this.indicators.length; i--;) {
						this.indicators[i].updatePosition();
					}
				}

				// INSERT POINT: _translate
			},

			_initEvents: function _initEvents(remove) {
				var eventType = remove ? utils.removeEvent : utils.addEvent,
				    target = this.options.bindToWrapper ? this.wrapper : window;

				eventType(window, 'orientationchange', this);
				eventType(window, 'resize', this);

				if (this.options.click) {
					eventType(this.wrapper, 'click', this, true);
				}

				if (!this.options.disableMouse) {
					eventType(this.wrapper, 'mousedown', this);
					eventType(target, 'mousemove', this);
					eventType(target, 'mousecancel', this);
					eventType(target, 'mouseup', this);
				}

				if (utils.hasPointer && !this.options.disablePointer) {
					eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
					eventType(target, utils.prefixPointerEvent('pointermove'), this);
					eventType(target, utils.prefixPointerEvent('pointercancel'), this);
					eventType(target, utils.prefixPointerEvent('pointerup'), this);
				}

				if (utils.hasTouch && !this.options.disableTouch) {
					eventType(this.wrapper, 'touchstart', this);
					eventType(target, 'touchmove', this);
					eventType(target, 'touchcancel', this);
					eventType(target, 'touchend', this);
				}

				eventType(this.scroller, 'transitionend', this);
				eventType(this.scroller, 'webkitTransitionEnd', this);
				eventType(this.scroller, 'oTransitionEnd', this);
				eventType(this.scroller, 'MSTransitionEnd', this);
			},

			getComputedPosition: function getComputedPosition() {
				var matrix = window.getComputedStyle(this.scroller, null),
				    x,
				    y;

				if (this.options.useTransform) {
					matrix = matrix[utils.style.transform].split(')')[0].split(', ');
					x = +(matrix[12] || matrix[4]);
					y = +(matrix[13] || matrix[5]);
				} else {
					x = +matrix.left.replace(/[^-\d.]/g, '');
					y = +matrix.top.replace(/[^-\d.]/g, '');
				}

				return { x: x, y: y };
			},
			_initIndicators: function _initIndicators() {
				var interactive = this.options.interactiveScrollbars,
				    customStyle = typeof this.options.scrollbars != 'string',
				    indicators = [],
				    indicator;

				var that = this;

				this.indicators = [];

				if (this.options.scrollbars) {
					// Vertical scrollbar
					if (this.options.scrollY) {
						indicator = {
							el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
							interactive: interactive,
							defaultScrollbars: true,
							customStyle: customStyle,
							resize: this.options.resizeScrollbars,
							shrink: this.options.shrinkScrollbars,
							fade: this.options.fadeScrollbars,
							listenX: false
						};

						this.wrapper.appendChild(indicator.el);
						indicators.push(indicator);
					}

					// Horizontal scrollbar
					if (this.options.scrollX) {
						indicator = {
							el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
							interactive: interactive,
							defaultScrollbars: true,
							customStyle: customStyle,
							resize: this.options.resizeScrollbars,
							shrink: this.options.shrinkScrollbars,
							fade: this.options.fadeScrollbars,
							listenY: false
						};

						this.wrapper.appendChild(indicator.el);
						indicators.push(indicator);
					}
				}

				if (this.options.indicators) {
					// TODO: check concat compatibility
					indicators = indicators.concat(this.options.indicators);
				}

				for (var i = indicators.length; i--;) {
					this.indicators.push(new Indicator(this, indicators[i]));
				}

				// TODO: check if we can use array.map (wide compatibility and performance issues)
				function _indicatorsMap(fn) {
					if (that.indicators) {
						for (var i = that.indicators.length; i--;) {
							fn.call(that.indicators[i]);
						}
					}
				}

				if (this.options.fadeScrollbars) {
					this.on('scrollEnd', function () {
						_indicatorsMap(function () {
							this.fade();
						});
					});

					this.on('scrollCancel', function () {
						_indicatorsMap(function () {
							this.fade();
						});
					});

					this.on('scrollStart', function () {
						_indicatorsMap(function () {
							this.fade(1);
						});
					});

					this.on('beforeScrollStart', function () {
						_indicatorsMap(function () {
							this.fade(1, true);
						});
					});
				}

				this.on('refresh', function () {
					_indicatorsMap(function () {
						this.refresh();
					});
				});

				this.on('destroy', function () {
					_indicatorsMap(function () {
						this.destroy();
					});

					delete this.indicators;
				});
			},

			_initWheel: function _initWheel() {
				utils.addEvent(this.wrapper, 'wheel', this);
				utils.addEvent(this.wrapper, 'mousewheel', this);
				utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

				this.on('destroy', function () {
					clearTimeout(this.wheelTimeout);
					this.wheelTimeout = null;
					utils.removeEvent(this.wrapper, 'wheel', this);
					utils.removeEvent(this.wrapper, 'mousewheel', this);
					utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
				});
			},

			_wheel: function _wheel(e) {
				if (!this.enabled) {
					return;
				}

				e.preventDefault();

				var wheelDeltaX,
				    wheelDeltaY,
				    newX,
				    newY,
				    that = this;

				if (this.wheelTimeout === undefined) {
					that._execEvent('scrollStart');
				}

				// Execute the scrollEnd event after 400ms the wheel stopped scrolling
				clearTimeout(this.wheelTimeout);
				this.wheelTimeout = setTimeout(function () {
					if (!that.options.snap) {
						that._execEvent('scrollEnd');
					}
					that.wheelTimeout = undefined;
				}, 400);

				if ('deltaX' in e) {
					if (e.deltaMode === 1) {
						wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
						wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
					} else {
						wheelDeltaX = -e.deltaX;
						wheelDeltaY = -e.deltaY;
					}
				} else if ('wheelDeltaX' in e) {
					wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
					wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
				} else if ('wheelDelta' in e) {
					wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
				} else if ('detail' in e) {
					wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
				} else {
					return;
				}

				wheelDeltaX *= this.options.invertWheelDirection;
				wheelDeltaY *= this.options.invertWheelDirection;

				if (!this.hasVerticalScroll) {
					wheelDeltaX = wheelDeltaY;
					wheelDeltaY = 0;
				}

				if (this.options.snap) {
					newX = this.currentPage.pageX;
					newY = this.currentPage.pageY;

					if (wheelDeltaX > 0) {
						newX--;
					} else if (wheelDeltaX < 0) {
						newX++;
					}

					if (wheelDeltaY > 0) {
						newY--;
					} else if (wheelDeltaY < 0) {
						newY++;
					}

					this.goToPage(newX, newY);

					return;
				}

				newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
				newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

				this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
				this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

				if (newX > 0) {
					newX = 0;
				} else if (newX < this.maxScrollX) {
					newX = this.maxScrollX;
				}

				if (newY > 0) {
					newY = 0;
				} else if (newY < this.maxScrollY) {
					newY = this.maxScrollY;
				}

				this.scrollTo(newX, newY, 0);

				// INSERT POINT: _wheel
			},

			_initSnap: function _initSnap() {
				this.currentPage = {};

				if (typeof this.options.snap == 'string') {
					this.options.snap = this.scroller.querySelectorAll(this.options.snap);
				}

				this.on('refresh', function () {
					var i = 0,
					    l,
					    m = 0,
					    n,
					    cx,
					    cy,
					    x = 0,
					    y,
					    stepX = this.options.snapStepX || this.wrapperWidth,
					    stepY = this.options.snapStepY || this.wrapperHeight,
					    el;

					this.pages = [];

					if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
						return;
					}

					if (this.options.snap === true) {
						cx = Math.round(stepX / 2);
						cy = Math.round(stepY / 2);

						while (x > -this.scrollerWidth) {
							this.pages[i] = [];
							l = 0;
							y = 0;

							while (y > -this.scrollerHeight) {
								this.pages[i][l] = {
									x: Math.max(x, this.maxScrollX),
									y: Math.max(y, this.maxScrollY),
									width: stepX,
									height: stepY,
									cx: x - cx,
									cy: y - cy
								};

								y -= stepY;
								l++;
							}

							x -= stepX;
							i++;
						}
					} else {
						el = this.options.snap;
						l = el.length;
						n = -1;

						for (; i < l; i++) {
							if (i === 0 || el[i].offsetLeft <= el[i - 1].offsetLeft) {
								m = 0;
								n++;
							}

							if (!this.pages[m]) {
								this.pages[m] = [];
							}

							x = Math.max(-el[i].offsetLeft, this.maxScrollX);
							y = Math.max(-el[i].offsetTop, this.maxScrollY);
							cx = x - Math.round(el[i].offsetWidth / 2);
							cy = y - Math.round(el[i].offsetHeight / 2);

							this.pages[m][n] = {
								x: x,
								y: y,
								width: el[i].offsetWidth,
								height: el[i].offsetHeight,
								cx: cx,
								cy: cy
							};

							if (x > this.maxScrollX) {
								m++;
							}
						}
					}

					this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

					// Update snap threshold if needed
					if (this.options.snapThreshold % 1 === 0) {
						this.snapThresholdX = this.options.snapThreshold;
						this.snapThresholdY = this.options.snapThreshold;
					} else {
						this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
						this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
					}
				});

				this.on('flick', function () {
					var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.x - this.startX), 1000), Math.min(Math.abs(this.y - this.startY), 1000)), 300);

					this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, time);
				});
			},

			_nearestSnap: function _nearestSnap(x, y) {
				if (!this.pages.length) {
					return { x: 0, y: 0, pageX: 0, pageY: 0 };
				}

				var i = 0,
				    l = this.pages.length,
				    m = 0;

				// Check if we exceeded the snap threshold
				if (Math.abs(x - this.absStartX) < this.snapThresholdX && Math.abs(y - this.absStartY) < this.snapThresholdY) {
					return this.currentPage;
				}

				if (x > 0) {
					x = 0;
				} else if (x < this.maxScrollX) {
					x = this.maxScrollX;
				}

				if (y > 0) {
					y = 0;
				} else if (y < this.maxScrollY) {
					y = this.maxScrollY;
				}

				for (; i < l; i++) {
					if (x >= this.pages[i][0].cx) {
						x = this.pages[i][0].x;
						break;
					}
				}

				l = this.pages[i].length;

				for (; m < l; m++) {
					if (y >= this.pages[0][m].cy) {
						y = this.pages[0][m].y;
						break;
					}
				}

				if (i == this.currentPage.pageX) {
					i += this.directionX;

					if (i < 0) {
						i = 0;
					} else if (i >= this.pages.length) {
						i = this.pages.length - 1;
					}

					x = this.pages[i][0].x;
				}

				if (m == this.currentPage.pageY) {
					m += this.directionY;

					if (m < 0) {
						m = 0;
					} else if (m >= this.pages[0].length) {
						m = this.pages[0].length - 1;
					}

					y = this.pages[0][m].y;
				}

				return {
					x: x,
					y: y,
					pageX: i,
					pageY: m
				};
			},

			goToPage: function goToPage(x, y, time, easing) {
				easing = easing || this.options.bounceEasing;

				if (x >= this.pages.length) {
					x = this.pages.length - 1;
				} else if (x < 0) {
					x = 0;
				}

				if (y >= this.pages[x].length) {
					y = this.pages[x].length - 1;
				} else if (y < 0) {
					y = 0;
				}

				var posX = this.pages[x][y].x,
				    posY = this.pages[x][y].y;

				time = time === undefined ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;

				this.currentPage = {
					x: posX,
					y: posY,
					pageX: x,
					pageY: y
				};

				this.scrollTo(posX, posY, time, easing);
			},

			next: function next(time, easing) {
				var x = this.currentPage.pageX,
				    y = this.currentPage.pageY;

				x++;

				if (x >= this.pages.length && this.hasVerticalScroll) {
					x = 0;
					y++;
				}

				this.goToPage(x, y, time, easing);
			},

			prev: function prev(time, easing) {
				var x = this.currentPage.pageX,
				    y = this.currentPage.pageY;

				x--;

				if (x < 0 && this.hasVerticalScroll) {
					x = 0;
					y--;
				}

				this.goToPage(x, y, time, easing);
			},

			_initKeys: function _initKeys(e) {
				// default key bindings
				var keys = {
					pageUp: 33,
					pageDown: 34,
					end: 35,
					home: 36,
					left: 37,
					up: 38,
					right: 39,
					down: 40
				};
				var i;

				// if you give me characters I give you keycode
				if (_typeof(this.options.keyBindings) == 'object') {
					for (i in this.options.keyBindings) {
						if (typeof this.options.keyBindings[i] == 'string') {
							this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
						}
					}
				} else {
					this.options.keyBindings = {};
				}

				for (i in keys) {
					this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
				}

				utils.addEvent(window, 'keydown', this);

				this.on('destroy', function () {
					utils.removeEvent(window, 'keydown', this);
				});
			},

			_key: function _key(e) {
				if (!this.enabled) {
					return;
				}

				var snap = this.options.snap,
				    // we are using this alot, better to cache it
				newX = snap ? this.currentPage.pageX : this.x,
				    newY = snap ? this.currentPage.pageY : this.y,
				    now = utils.getTime(),
				    prevTime = this.keyTime || 0,
				    acceleration = 0.250,
				    pos;

				if (this.options.useTransition && this.isInTransition) {
					pos = this.getComputedPosition();

					this._translate(Math.round(pos.x), Math.round(pos.y));
					this.isInTransition = false;
				}

				this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

				switch (e.keyCode) {
					case this.options.keyBindings.pageUp:
						if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
							newX += snap ? 1 : this.wrapperWidth;
						} else {
							newY += snap ? 1 : this.wrapperHeight;
						}
						break;
					case this.options.keyBindings.pageDown:
						if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
							newX -= snap ? 1 : this.wrapperWidth;
						} else {
							newY -= snap ? 1 : this.wrapperHeight;
						}
						break;
					case this.options.keyBindings.end:
						newX = snap ? this.pages.length - 1 : this.maxScrollX;
						newY = snap ? this.pages[0].length - 1 : this.maxScrollY;
						break;
					case this.options.keyBindings.home:
						newX = 0;
						newY = 0;
						break;
					case this.options.keyBindings.left:
						newX += snap ? -1 : 5 + this.keyAcceleration >> 0;
						break;
					case this.options.keyBindings.up:
						newY += snap ? 1 : 5 + this.keyAcceleration >> 0;
						break;
					case this.options.keyBindings.right:
						newX -= snap ? -1 : 5 + this.keyAcceleration >> 0;
						break;
					case this.options.keyBindings.down:
						newY -= snap ? 1 : 5 + this.keyAcceleration >> 0;
						break;
					default:
						return;
				}

				if (snap) {
					this.goToPage(newX, newY);
					return;
				}

				if (newX > 0) {
					newX = 0;
					this.keyAcceleration = 0;
				} else if (newX < this.maxScrollX) {
					newX = this.maxScrollX;
					this.keyAcceleration = 0;
				}

				if (newY > 0) {
					newY = 0;
					this.keyAcceleration = 0;
				} else if (newY < this.maxScrollY) {
					newY = this.maxScrollY;
					this.keyAcceleration = 0;
				}

				this.scrollTo(newX, newY, 0);

				this.keyTime = now;
			},

			_animate: function _animate(destX, destY, duration, easingFn) {
				var that = this,
				    startX = this.x,
				    startY = this.y,
				    startTime = utils.getTime(),
				    destTime = startTime + duration;

				function step() {
					var now = utils.getTime(),
					    newX,
					    newY,
					    easing;

					if (now >= destTime) {
						that.isAnimating = false;
						that._translate(destX, destY);

						if (!that.resetPosition(that.options.bounceTime)) {
							that._execEvent('scrollEnd');
						}

						return;
					}

					now = (now - startTime) / duration;
					easing = easingFn(now);
					newX = (destX - startX) * easing + startX;
					newY = (destY - startY) * easing + startY;
					that._translate(newX, newY);

					if (that.isAnimating) {
						rAF(step);
					}
				}

				this.isAnimating = true;
				step();
			},
			handleEvent: function handleEvent(e) {
				switch (e.type) {
					case 'touchstart':
					case 'pointerdown':
					case 'MSPointerDown':
					case 'mousedown':
						this._start(e);
						break;
					case 'touchmove':
					case 'pointermove':
					case 'MSPointerMove':
					case 'mousemove':
						this._move(e);
						break;
					case 'touchend':
					case 'pointerup':
					case 'MSPointerUp':
					case 'mouseup':
					case 'touchcancel':
					case 'pointercancel':
					case 'MSPointerCancel':
					case 'mousecancel':
						this._end(e);
						break;
					case 'orientationchange':
					case 'resize':
						this._resize();
						break;
					case 'transitionend':
					case 'webkitTransitionEnd':
					case 'oTransitionEnd':
					case 'MSTransitionEnd':
						this._transitionEnd(e);
						break;
					case 'wheel':
					case 'DOMMouseScroll':
					case 'mousewheel':
						this._wheel(e);
						break;
					case 'keydown':
						this._key(e);
						break;
					case 'click':
						if (this.enabled && !e._constructed) {
							e.preventDefault();
							e.stopPropagation();
						}
						break;
				}
			}
		};
		function createDefaultScrollbar(direction, interactive, type) {
			var scrollbar = document.createElement('div'),
			    indicator = document.createElement('div');

			if (type === true) {
				scrollbar.style.cssText = 'position:absolute;z-index:9999';
				indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
			}

			indicator.className = 'iScrollIndicator';

			if (direction == 'h') {
				if (type === true) {
					scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
					indicator.style.height = '100%';
				}
				scrollbar.className = 'iScrollHorizontalScrollbar';
			} else {
				if (type === true) {
					scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
					indicator.style.width = '100%';
				}
				scrollbar.className = 'iScrollVerticalScrollbar';
			}

			scrollbar.style.cssText += ';overflow:hidden';

			if (!interactive) {
				scrollbar.style.pointerEvents = 'none';
			}

			scrollbar.appendChild(indicator);

			return scrollbar;
		}

		function Indicator(scroller, options) {
			this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
			this.wrapperStyle = this.wrapper.style;
			this.indicator = this.wrapper.children[0];
			this.indicatorStyle = this.indicator.style;
			this.scroller = scroller;

			this.options = {
				listenX: true,
				listenY: true,
				interactive: false,
				resize: true,
				defaultScrollbars: false,
				shrink: false,
				fade: false,
				speedRatioX: 0,
				speedRatioY: 0
			};

			for (var i in options) {
				this.options[i] = options[i];
			}

			this.sizeRatioX = 1;
			this.sizeRatioY = 1;
			this.maxPosX = 0;
			this.maxPosY = 0;

			if (this.options.interactive) {
				if (!this.options.disableTouch) {
					utils.addEvent(this.indicator, 'touchstart', this);
					utils.addEvent(window, 'touchend', this);
				}
				if (!this.options.disablePointer) {
					utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
					utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
				}
				if (!this.options.disableMouse) {
					utils.addEvent(this.indicator, 'mousedown', this);
					utils.addEvent(window, 'mouseup', this);
				}
			}

			if (this.options.fade) {
				this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
				var durationProp = utils.style.transitionDuration;
				this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';
				// remove 0.0001ms
				var self = this;
				if (utils.isBadAndroid) {
					rAF(function () {
						if (self.wrapperStyle[durationProp] === '0.0001ms') {
							self.wrapperStyle[durationProp] = '0s';
						}
					});
				}
				this.wrapperStyle.opacity = '0';
			}
		}

		Indicator.prototype = {
			handleEvent: function handleEvent(e) {
				switch (e.type) {
					case 'touchstart':
					case 'pointerdown':
					case 'MSPointerDown':
					case 'mousedown':
						this._start(e);
						break;
					case 'touchmove':
					case 'pointermove':
					case 'MSPointerMove':
					case 'mousemove':
						this._move(e);
						break;
					case 'touchend':
					case 'pointerup':
					case 'MSPointerUp':
					case 'mouseup':
					case 'touchcancel':
					case 'pointercancel':
					case 'MSPointerCancel':
					case 'mousecancel':
						this._end(e);
						break;
				}
			},

			destroy: function destroy() {
				if (this.options.fadeScrollbars) {
					clearTimeout(this.fadeTimeout);
					this.fadeTimeout = null;
				}
				if (this.options.interactive) {
					utils.removeEvent(this.indicator, 'touchstart', this);
					utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
					utils.removeEvent(this.indicator, 'mousedown', this);

					utils.removeEvent(window, 'touchmove', this);
					utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
					utils.removeEvent(window, 'mousemove', this);

					utils.removeEvent(window, 'touchend', this);
					utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
					utils.removeEvent(window, 'mouseup', this);
				}

				if (this.options.defaultScrollbars) {
					this.wrapper.parentNode.removeChild(this.wrapper);
				}
			},

			_start: function _start(e) {
				var point = e.touches ? e.touches[0] : e;

				e.preventDefault();
				e.stopPropagation();

				this.transitionTime();

				this.initiated = true;
				this.moved = false;
				this.lastPointX = point.pageX;
				this.lastPointY = point.pageY;

				this.startTime = utils.getTime();

				if (!this.options.disableTouch) {
					utils.addEvent(window, 'touchmove', this);
				}
				if (!this.options.disablePointer) {
					utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
				}
				if (!this.options.disableMouse) {
					utils.addEvent(window, 'mousemove', this);
				}

				this.scroller._execEvent('beforeScrollStart');
			},

			_move: function _move(e) {
				var point = e.touches ? e.touches[0] : e,
				    deltaX,
				    deltaY,
				    newX,
				    newY,
				    timestamp = utils.getTime();

				if (!this.moved) {
					this.scroller._execEvent('scrollStart');
				}

				this.moved = true;

				deltaX = point.pageX - this.lastPointX;
				this.lastPointX = point.pageX;

				deltaY = point.pageY - this.lastPointY;
				this.lastPointY = point.pageY;

				newX = this.x + deltaX;
				newY = this.y + deltaY;

				this._pos(newX, newY);

				// INSERT POINT: indicator._move

				e.preventDefault();
				e.stopPropagation();
			},

			_end: function _end(e) {
				if (!this.initiated) {
					return;
				}

				this.initiated = false;

				e.preventDefault();
				e.stopPropagation();

				utils.removeEvent(window, 'touchmove', this);
				utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
				utils.removeEvent(window, 'mousemove', this);

				if (this.scroller.options.snap) {
					var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

					var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);

					if (this.scroller.x != snap.x || this.scroller.y != snap.y) {
						this.scroller.directionX = 0;
						this.scroller.directionY = 0;
						this.scroller.currentPage = snap;
						this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
					}
				}

				if (this.moved) {
					this.scroller._execEvent('scrollEnd');
				}
			},

			transitionTime: function transitionTime(time) {
				time = time || 0;
				var durationProp = utils.style.transitionDuration;
				this.indicatorStyle[durationProp] = time + 'ms';

				if (!time && utils.isBadAndroid) {
					this.indicatorStyle[durationProp] = '0.0001ms';
					// remove 0.0001ms
					var self = this;
					rAF(function () {
						if (self.indicatorStyle[durationProp] === '0.0001ms') {
							self.indicatorStyle[durationProp] = '0s';
						}
					});
				}
			},

			transitionTimingFunction: function transitionTimingFunction(easing) {
				this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
			},

			refresh: function refresh() {
				this.transitionTime();

				if (this.options.listenX && !this.options.listenY) {
					this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
				} else if (this.options.listenY && !this.options.listenX) {
					this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
				} else {
					this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
				}

				if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
					utils.addClass(this.wrapper, 'iScrollBothScrollbars');
					utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

					if (this.options.defaultScrollbars && this.options.customStyle) {
						if (this.options.listenX) {
							this.wrapper.style.right = '8px';
						} else {
							this.wrapper.style.bottom = '8px';
						}
					}
				} else {
					utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
					utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

					if (this.options.defaultScrollbars && this.options.customStyle) {
						if (this.options.listenX) {
							this.wrapper.style.right = '2px';
						} else {
							this.wrapper.style.bottom = '2px';
						}
					}
				}

				var r = this.wrapper.offsetHeight; // force refresh

				if (this.options.listenX) {
					this.wrapperWidth = this.wrapper.clientWidth;
					if (this.options.resize) {
						this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
						this.indicatorStyle.width = this.indicatorWidth + 'px';
					} else {
						this.indicatorWidth = this.indicator.clientWidth;
					}

					this.maxPosX = this.wrapperWidth - this.indicatorWidth;

					if (this.options.shrink == 'clip') {
						this.minBoundaryX = -this.indicatorWidth + 8;
						this.maxBoundaryX = this.wrapperWidth - 8;
					} else {
						this.minBoundaryX = 0;
						this.maxBoundaryX = this.maxPosX;
					}

					this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX;
				}

				if (this.options.listenY) {
					this.wrapperHeight = this.wrapper.clientHeight;
					if (this.options.resize) {
						this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
						this.indicatorStyle.height = this.indicatorHeight + 'px';
					} else {
						this.indicatorHeight = this.indicator.clientHeight;
					}

					this.maxPosY = this.wrapperHeight - this.indicatorHeight;

					if (this.options.shrink == 'clip') {
						this.minBoundaryY = -this.indicatorHeight + 8;
						this.maxBoundaryY = this.wrapperHeight - 8;
					} else {
						this.minBoundaryY = 0;
						this.maxBoundaryY = this.maxPosY;
					}

					this.maxPosY = this.wrapperHeight - this.indicatorHeight;
					this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY;
				}

				this.updatePosition();
			},

			updatePosition: function updatePosition() {
				var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
				    y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

				if (!this.options.ignoreBoundaries) {
					if (x < this.minBoundaryX) {
						if (this.options.shrink == 'scale') {
							this.width = Math.max(this.indicatorWidth + x, 8);
							this.indicatorStyle.width = this.width + 'px';
						}
						x = this.minBoundaryX;
					} else if (x > this.maxBoundaryX) {
						if (this.options.shrink == 'scale') {
							this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
							this.indicatorStyle.width = this.width + 'px';
							x = this.maxPosX + this.indicatorWidth - this.width;
						} else {
							x = this.maxBoundaryX;
						}
					} else if (this.options.shrink == 'scale' && this.width != this.indicatorWidth) {
						this.width = this.indicatorWidth;
						this.indicatorStyle.width = this.width + 'px';
					}

					if (y < this.minBoundaryY) {
						if (this.options.shrink == 'scale') {
							this.height = Math.max(this.indicatorHeight + y * 3, 8);
							this.indicatorStyle.height = this.height + 'px';
						}
						y = this.minBoundaryY;
					} else if (y > this.maxBoundaryY) {
						if (this.options.shrink == 'scale') {
							this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
							this.indicatorStyle.height = this.height + 'px';
							y = this.maxPosY + this.indicatorHeight - this.height;
						} else {
							y = this.maxBoundaryY;
						}
					} else if (this.options.shrink == 'scale' && this.height != this.indicatorHeight) {
						this.height = this.indicatorHeight;
						this.indicatorStyle.height = this.height + 'px';
					}
				}

				this.x = x;
				this.y = y;

				if (this.scroller.options.useTransform) {
					this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
				} else {
					this.indicatorStyle.left = x + 'px';
					this.indicatorStyle.top = y + 'px';
				}
			},

			_pos: function _pos(x, y) {
				if (x < 0) {
					x = 0;
				} else if (x > this.maxPosX) {
					x = this.maxPosX;
				}

				if (y < 0) {
					y = 0;
				} else if (y > this.maxPosY) {
					y = this.maxPosY;
				}

				x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
				y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

				this.scroller.scrollTo(x, y);
			},

			fade: function fade(val, hold) {
				if (hold && !this.visible) {
					return;
				}

				clearTimeout(this.fadeTimeout);
				this.fadeTimeout = null;

				var time = val ? 250 : 500,
				    delay = val ? 0 : 300;

				val = val ? '1' : '0';

				this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

				this.fadeTimeout = setTimeout(function (val) {
					this.wrapperStyle.opacity = val;
					this.visible = +val;
				}.bind(this, val), delay);
			}
		};

		IScroll.utils = utils;

		if (typeof module != 'undefined' && module.exports) {
			module.exports = IScroll;
		} else if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return IScroll;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.IScroll = IScroll;
		}
	})(window, document, Math);

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(IScroll) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*!
	 * jquery-drawer v3.2.0
	 * Flexible drawer menu using jQuery, iScroll and CSS.
	 * http://git.blivesta.com/drawer
	 * License : MIT
	 * Author : blivesta <design@blivesta.com> (http://blivesta.com/)
	 */

	;(function umd(factory) {
	  'use strict';

	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(44)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
	    module.exports = factory(require('jquery'));
	  } else {
	    factory(jQuery);
	  }
	})(function Drawer($) {
	  'use strict';

	  var namespace = 'drawer';
	  var touches = typeof document.ontouchstart != 'undefined';
	  var __ = {
	    init: function init(options) {
	      options = $.extend({
	        iscroll: {
	          mouseWheel: true,
	          preventDefault: false
	        },
	        showOverlay: true
	      }, options);

	      __.settings = {
	        state: false,
	        events: {
	          opened: 'drawer.opened',
	          closed: 'drawer.closed'
	        },
	        dropdownEvents: {
	          opened: 'shown.bs.dropdown',
	          closed: 'hidden.bs.dropdown'
	        }
	      };

	      __.settings.class = $.extend({
	        nav: 'drawer-nav',
	        toggle: 'drawer-toggle',
	        overlay: 'drawer-overlay',
	        open: 'drawer-open',
	        close: 'drawer-close',
	        dropdown: 'drawer-dropdown'
	      }, options.class);

	      return this.each(function instantiateDrawer() {
	        var _this = this;
	        var $this = $(this);
	        var data = $this.data(namespace);

	        if (!data) {
	          options = $.extend({}, options);
	          $this.data(namespace, { options: options });

	          __.refresh.call(_this);

	          if (options.showOverlay) {
	            __.addOverlay.call(_this);
	          }

	          $('.' + __.settings.class.toggle).on('click.' + namespace, function toggle() {
	            __.toggle.call(_this);
	            return _this.iScroll.refresh();
	          });

	          $(window).resize(function close() {
	            __.close.call(_this);
	            return _this.iScroll.refresh();
	          });

	          $('.' + __.settings.class.dropdown).on(__.settings.dropdownEvents.opened + ' ' + __.settings.dropdownEvents.closed, function onOpenedOrClosed() {
	            return _this.iScroll.refresh();
	          });
	        }
	      }); // end each
	    },

	    refresh: function refresh() {
	      this.iScroll = new IScroll('.' + __.settings.class.nav, $(this).data(namespace).options.iscroll);
	    },

	    addOverlay: function addOverlay() {
	      var _this = this;
	      var $this = $(this);
	      var $overlay = $('<div>').addClass(__.settings.class.overlay + ' ' + __.settings.class.toggle);

	      return $this.append($overlay);
	    },

	    toggle: function toggle() {
	      var _this = this;

	      if (__.settings.state) {
	        return __.close.call(_this);
	      } else {
	        return __.open.call(_this);
	      }
	    },

	    open: function open() {
	      var $this = $(this);

	      if (touches) {
	        $this.on('touchmove.' + namespace, function disableTouch(event) {
	          event.preventDefault();
	        });
	      }

	      return $this.removeClass(__.settings.class.close).addClass(__.settings.class.open).css({ 'overflow': 'hidden' }).drawerCallback(function triggerOpenedListeners() {
	        __.settings.state = true;
	        $this.trigger(__.settings.events.opened);
	      });
	    },

	    close: function close() {
	      var $this = $(this);

	      if (touches) $this.off('touchmove.' + namespace);

	      return $this.removeClass(__.settings.class.open).addClass(__.settings.class.close).css({ 'overflow': 'auto' }).drawerCallback(function triggerClosedListeners() {
	        __.settings.state = false;
	        $this.trigger(__.settings.events.closed);
	      });
	    },

	    destroy: function destroy() {
	      return this.each(function destroyEach() {
	        var $this = $(this);
	        $(window).off('.' + namespace);
	        $this.removeData(namespace);
	      });
	    }

	  };

	  $.fn.drawerCallback = function drawerCallback(callback) {
	    var end = 'transitionend webkitTransitionEnd';
	    return this.each(function setAnimationEndHandler() {
	      var $this = $(this);
	      $this.on(end, function invokeCallbackOnAnimationEnd() {
	        $this.off(end);
	        return callback.call(this);
	      });
	    });
	  };

	  $.fn.drawer = function drawer(method) {
	    if (__[method]) {
	      return __[method].apply(this, Array.prototype.slice.call(arguments, 1));
	    } else if ((typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' || !method) {
	      return __.init.apply(this, arguments);
	    } else {
	      $.error('Method ' + method + ' does not exist on jQuery.' + namespace);
	    }
	  };
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(72)))

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _loading = __webpack_require__(75);

	var _loading2 = _interopRequireDefault(_loading);

	var _home = __webpack_require__(78);

	var _home2 = _interopRequireDefault(_home);

	var _favorites = __webpack_require__(81);

	var _favorites2 = _interopRequireDefault(_favorites);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = {
	    "/": { name: "Loading", component: _loading2.default },
	    "/home": { name: "Home", component: _home2.default },
	    "/favorites": { name: "Favorites", component: _favorites2.default }
	};

	exports.default = routes;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(76)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/web-src/component/loading.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(77)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./loading.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _jquery = __webpack_require__(44);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    ready: function ready() {
	        var _this = this;

	        setTimeout(function () {
	            (0, _jquery2.default)(".plane-wrap").addClass("feiji-leave");
	            setTimeout(function () {
	                return _this.$router.go("/home");
	            }, 1250);
	        }, 3500);
	    }
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <div class=\"load-screen\">\n        <div class=\"bg-full\"></div>\n        <div class=\"centerup loading\"></div>\n\n        <div class=\"plane-wrap feiji-transition\">\n            <img src=\"/static/assets/plane.png\" class=\"centerup\" alt=\"scrubdev\" height=\"125px\">\n        </div>\n\n        <div style=\"color: yellowgreen; top: calc(50% + 50px);\" class=\"centerup\">\n            <i class=\"fa fa-cog fa-spin fa-3x fa-fw\"></i>\n            <span class=\"sr-only\">Loading...</span>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(79)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/web-src/component/home.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(80)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./home.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 79 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    ready: function ready() {}
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <h3><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i> Dashboard</h3>\n        </div>\n\n        <div class=\"row\" style=\"margin-left: 45px;\">\n            <table class=\"temp\">\n                <tr>\n                    <th> </th>\n                    <th> </th>\n                    <th> </th>\n                    <th> </th>\n                    <th> </th>\n                    <th> </th>\n                    <th> </th>\n                    <th> </th>\n                    <th> </th>\n                    <th> </th>\n                </tr>\n                <tr>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                </tr>\n                <tr>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                </tr>\n                <tr>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                </tr>\n                <tr>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                </tr>\n                <tr>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                </tr>\n                <tr>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                </tr>\n                <tr>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                </tr>\n                <tr>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                </tr>\n                <tr>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                </tr>\n                <tr>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                    <td> </td>\n                </tr>\n            </table>\n        </div>\n\n        <div class=\"row\" style=\"margin-top: 25px;\">\n            <h4><i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i> Status</h4>\n        </div>\n        <div class=\"row\" style=\"margin-left: 45px; color: orange;\">\n            All systems dead inside and cannot be woken up.\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(82)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./favorites.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <h3><i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> Favorites</h3>\n        </div>\n\n        <div class=\"row\" style=\"margin-left: 45px;\">\n            <table class=\"u-full-width\">\n                <thead>\n                    <tr>\n                        <th>Location</th>\n                        <th>Coords</th>\n                        <th></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>Kitchen</td>\n                        <td>(69, 420)</td>\n                        <td><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></td>\n                    </tr>\n                    <tr>\n                        <td>The Bedroom :^)</td>\n                        <td>(1337, 360)</td>\n                        <td><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n";

/***/ }
/******/ ]);