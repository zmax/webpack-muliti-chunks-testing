require.ensure(['modules/a'], function(require) {

    console.log('module a loaded.');
    
    var A = require('modules/a');
    console.log(A);
    var a = new A();
    console.log(a.showFoo());

}, "a");

require.ensure(['modules/b'], function(require) {

    console.log("module b loaded.");
    var B = require('modules/b');
    console.log(B);
    var b = new B();

    console.log(b);
    console.log(b.showFoo());

}, "b");

require.ensure([], function(require) {
    var D = require('modules/d');
    var d = React.createElement(React.createFactory(D)());

    console.log('d: ', d);
}, "d");

require('./index.css');
