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

	'use strict';

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	var _reactDom = __webpack_require__(2);

	var _demo_app = __webpack_require__(3);

	var _demo_app2 = _interopRequireDefault(_demo_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	(0, _reactDom.render)(React.createElement(_demo_app2.default, null), document.getElementById("content")); /**
	                                                                                                           * Created by Aaron on 12/21/2015.
	                                                                                                           */

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	var _ = __webpack_require__(4);

	var _2 = _interopRequireDefault(_);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Aaron on 12/21/2015.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var gh_pages_key = "6LfKmBMTAAAAAEEk10iOxbp11HWyhq1v_jGdyyOA";

	var DemoApp = (function (_React$Component) {
	    _inherits(DemoApp, _React$Component);

	    function DemoApp() {
	        _classCallCheck(this, DemoApp);

	        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	    }

	    DemoApp.prototype.render = function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'h1',
	                null,
	                'react-recaptcha2 Demo App'
	            ),
	            React.createElement(
	                'h3',
	                null,
	                'Explicit Rendering'
	            ),
	            React.createElement(_2.default, { id: 'demo_recaptcha', render: 'explicit', sitekey: gh_pages_key }),
	            React.createElement(
	                'h3',
	                null,
	                'with dark theme'
	            ),
	            React.createElement(_2.default, { id: 'demo_recaptcha2', render: 'explicit', theme: 'dark',
	                sitekey: gh_pages_key }),
	            React.createElement(
	                'h3',
	                null,
	                'with compact size'
	            ),
	            React.createElement(_2.default, { id: 'demo_recaptcha3', render: 'explicit', size: 'compact',
	                sitekey: gh_pages_key }),
	            React.createElement(
	                'h3',
	                null,
	                'with audio type (may not display differently)'
	            ),
	            React.createElement(_2.default, { id: 'demo_recaptcha4', render: 'explicit', type: 'audio',
	                sitekey: gh_pages_key })
	        );
	    };

	    return DemoApp;
	})(React.Component);

	exports.default = DemoApp;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Aaron on 12/21/2015.
	 */

	module.exports = __webpack_require__( 5 );


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/****
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2015 Aaron Trent
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 * 
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 * SOFTWARE.
	 * 
	 * 
	 ****/
	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var React = _interopRequireWildcard(_react);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by novacrazy on 6/17/2015.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var ReCaptcha = (function (_React$Component) {
	    _inherits(ReCaptcha, _React$Component);

	    function ReCaptcha() {
	        var _temp, _this, _ret;

	        _classCallCheck(this, ReCaptcha);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	            verified: false,
	            expired: false,
	            widget_id: null
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    //Made static to the ReCaptcha component so it can be changed

	    //Also made static so they can be changed

	    /*
	     * This is just a very simpler script loader, and can be overriden by a better one if needed
	     * */

	    ReCaptcha.prototype.loadScript = function loadScript() {
	        var options = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];

	        var self = this;

	        var src = options.src;
	        var onLoad = options.onLoad;
	        var _options$async = options.async;
	        var async = _options$async === void 0 ? true : _options$async;
	        var _options$defer = options.defer;
	        var defer = _options$defer === void 0 ? true : _options$defer;
	        var _options$type = options.type;
	        var type = _options$type === void 0 ? 'text/javascript' : _options$type;
	        var _options$document = options.document;
	        var document = _options$document === void 0 ? window.document : _options$document;

	        var head = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];

	        var script = document.createElement('script');

	        script.src = src;
	        script.type = type;

	        /*
	         * The following two if-in statements mimic how Modernizr tests for it
	         * */

	        if ('async' in script) {
	            script.async = async;
	        }

	        if ('defer' in script) {
	            script.defer = defer;
	        }

	        var ran = false;

	        script.onload = script.onreadystatechange = function () {
	            var rs = this.readyState;

	            if (!ran && (rs === 'complete' || rs === 'loaded')) {
	                ran = true;

	                if (typeof onLoad === 'function') {
	                    onLoad();
	                }
	            }
	        };

	        head.appendChild(script);
	    };

	    ReCaptcha.prototype.onExpired = function onExpired() {
	        this.setState({
	            verified: false,
	            expired: true
	        });

	        var onExpired = this.props.onExpired;

	        if (typeof onExpired === 'function') {
	            onExpired();
	        }
	    };

	    ReCaptcha.prototype.onVerify = function onVerify() {
	        this.setState({
	            verified: true,
	            expired: false
	        });

	        var onVerify = this.props.onVerify;

	        if (typeof onVerify === 'function') {
	            onVerify();
	        }
	    };

	    ReCaptcha.prototype.onLoad = function onLoad() {
	        var _props = this.props;
	        var id = _props.id;
	        var sitekey = _props.sitekey;
	        var onVerify = _props.onVerify;
	        var onLoad = _props.onLoad;
	        var theme = _props.theme;
	        var type = _props.type;
	        var size = _props.size;
	        var tabindex = _props.tabindex;
	        var _window = window;
	        var grecaptcha = _window.grecaptcha;

	        if (!grecaptcha || typeof grecaptcha.render !== 'function') {
	            alert("ReCaptcha failed to load. Please reload the page.");

	            return false;
	        } else {
	            var widget_id = grecaptcha.render(id, {
	                'sitekey': sitekey,
	                'callback': this.onVerify.bind(this),
	                'expired-callback': this.onExpired.bind(this),
	                'theme': theme,
	                'type': type,
	                'size': size,
	                'tabindex': tabindex
	            });

	            this.setState({ widget_id: widget_id });
	        }

	        if (typeof onLoad === 'function') {
	            onLoad();
	        }

	        ReCaptcha.loaded = true;
	        ReCaptcha.loading = false;
	    };

	    ReCaptcha.prototype.reset = function reset() {
	        var widget_id = this.state.widget_id;
	        var _window2 = window;
	        var grecaptcha = _window2.grecaptcha;

	        return grecaptcha.reset(widget_id);
	    };

	    ReCaptcha.prototype.getResponse = function getResponse() {
	        var widget_id = this.state.widget_id;
	        var _window3 = window;
	        var grecaptcha = _window3.grecaptcha;

	        return grecaptcha.getResponse(widget_id);
	    };

	    ReCaptcha.prototype.componentDidMount = function componentDidMount() {
	        var _this2 = this;

	        var _props2 = this.props;
	        var id = _props2.id;
	        var render = _props2.render;

	        var src = ReCaptcha.API_URL;

	        if (render === 'explicit') {
	            if (ReCaptcha.loaded) {
	                return this.onLoad();
	            }

	            var onLoadCallback = window[ReCaptcha.onLoadCallbackName];

	            if (typeof onLoadCallback === 'function') {
	                (function () {
	                    var oldOnLoadCallback = onLoadCallback;

	                    onLoadCallback = function () {
	                        oldOnLoadCallback();

	                        _this2.onLoad();
	                    };
	                })();
	            } else {
	                onLoadCallback = this.onLoad.bind(this);
	            }

	            window[ReCaptcha.onLoadCallbackName] = onLoadCallback;

	            src += '?onload=' + ReCaptcha.onLoadCallbackName + '&render=explicit';
	        } else {
	            if (ReCaptcha.loading || ReCaptcha.loaded) {
	                throw new Error('Only one ReCaptcha instance can be used with onLoad rendering');
	            }

	            window[ReCaptcha.onVerifyCallbackName] = this.onVerify.bind(this);
	            window[ReCaptcha.onExpiredCallbackName] = this.onExpired.bind(this);
	        }

	        if (!ReCaptcha.loading) {
	            ReCaptcha.loading = true;

	            this.loadScript({ src: src });
	        }
	    };

	    ReCaptcha.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return false;
	    };

	    ReCaptcha.prototype.render = function render() {
	        var _props3 = this.props;
	        var id = _props3.id;
	        var render = _props3.render;
	        var noscriptText = _props3.noscriptText;

	        if (render === 'explicit') {
	            return React.createElement(
	                'div',
	                null,
	                !!noscriptText ? React.createElement(
	                    'noscript',
	                    null,
	                    React.createElement('br', null),
	                    noscriptText,
	                    React.createElement('br', null)
	                ) : '',
	                React.createElement('div', { id: id, className: 'g-recaptcha',
	                    'data-callback': ReCaptcha.onVerifyCallbackName,
	                    'data-expired-callback': ReCaptcha.onExpiredCallbackName })
	            );
	        } else {
	            var _props4 = this.props;
	            var sitekey = _props4.sitekey;
	            var theme = _props4.theme;
	            var type = _props4.type;
	            var size = _props4.size;
	            var tabindex = _props4.tabindex;

	            return React.createElement(
	                'span',
	                null,
	                !!noscriptText ? React.createElement(
	                    'noscript',
	                    null,
	                    React.createElement('br', null),
	                    noscriptText,
	                    React.createElement('br', null)
	                ) : '',
	                React.createElement('div', { id: id, className: 'g-recaptcha',
	                    'data-callback': ReCaptcha.onVerifyCallbackName,
	                    'data-expired-callback': ReCaptcha.onExpiredCallbackName,
	                    'data-sitekey': sitekey,
	                    'data-theme': theme,
	                    'data-type': type,
	                    'data-size': size,
	                    'data-tabindex': tabindex })
	            );
	        }
	    };

	    return ReCaptcha;
	})(React.Component);

	ReCaptcha.displayName = 'ReCaptcha';
	ReCaptcha.API_URL = 'https://www.google.com/recaptcha/api.js';
	ReCaptcha.onLoadCallbackName = 'onReCaptchaLoadCallback';
	ReCaptcha.onVerifyCallbackName = 'onReCaptchaVerifyCallback';
	ReCaptcha.onExpiredCallbackName = 'onReCaptchaExpiredCallback';
	ReCaptcha.propTypes = {
	    onLoad: React.PropTypes.func,
	    onVerify: React.PropTypes.func,
	    onExpired: React.PropTypes.func,
	    id: React.PropTypes.string.isRequired,
	    sitekey: React.PropTypes.string.isRequired,
	    theme: React.PropTypes.oneOf(['light', 'dark']),
	    type: React.PropTypes.oneOf(['image', 'audio']),
	    render: React.PropTypes.oneOf(['explicit', 'onLoad']),
	    size: React.PropTypes.oneOf(['compact', 'normal']),
	    tabindex: React.PropTypes.number,
	    noscriptText: React.PropTypes.node
	};
	ReCaptcha.defaultProps = {
	    theme: 'light',
	    type: 'image',
	    render: 'onLoad',
	    size: 'normal',
	    tabindex: 0,
	    noscriptText: "You have JavaScript disabled and will be unable to verify your identity through reCAPTCHA."
	};
	ReCaptcha.loaded = false;
	ReCaptcha.loading = false;
	exports.default = ReCaptcha;


/***/ }
/******/ ]);