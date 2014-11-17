webpackJsonp([2],{

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {/**
	 *  ModuleB
	 */

	// require.ensure(['modules/c'], function(require) {

	//     console.log(module);
	//     console.log('module c loaded.');
	//     var C = require('modules/c');

	//     // console.log( React.createFactory(C());
	//     module.exports.c = C;

	// }, 'c');

	var C = __webpack_require__(7);

	var ModuleB = function() {
	    this.foo = React.createFactory(C);
	    this.showFoo = function() {
	        return this.foo;
	    };
	};

	module.exports = ModuleB;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }

});