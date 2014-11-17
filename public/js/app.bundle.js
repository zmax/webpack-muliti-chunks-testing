webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__.e/*nsure*/(1, function(require) {

	    console.log('module a loaded.');
	    
	    var A = __webpack_require__(3);
	    console.log(A);
	    var a = new A();
	    console.log(a.showFoo());

	}, 0);

	__webpack_require__.e/*nsure*/(2, function(require) {

	    console.log("module b loaded.");
	    var B = __webpack_require__(4);
	    console.log(B);
	    var b = new B();

	    console.log(b);
	    console.log(b.showFoo());

	}, 0);

	__webpack_require__.e/*nsure*/(3, function(require) {/* WEBPACK VAR INJECTION */(function(React) {
	    var D = __webpack_require__(5);
	    var d = React.createElement(React.createFactory(D)());

	    console.log('d: ', d);
	
	/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))}, 0);

	__webpack_require__(19);


/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(22)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/zmax/Work/labs/webpack/muliti-chunk/node_modules/css-loader/index.js!/Users/zmax/Work/labs/webpack/muliti-chunk/app/index.css", function() {
			var newContent = require("!!/Users/zmax/Work/labs/webpack/muliti-chunk/node_modules/css-loader/index.js!/Users/zmax/Work/labs/webpack/muliti-chunk/app/index.css");
			if(typeof newContent === 'string') newContent = [module.id, newContent, ''];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(62)();
	exports.push([module.id, "/*\n */\n\n\n body {\n    font-size: 1.2em;\n    margin: 15px;\n }", ""]);

/***/ }

});