/**
 *  ModuleB
 */

// require.ensure(['modules/c'], function(require) {

//     console.log(module);
//     console.log('module c loaded.');
//     var C = require('modules/c');

//     // console.log( React.createFactory(C());
//     module.exports.c = C;

// }, 'c');

require('./a.css');
require('./b.css');

var C = require('modules/c');

var ModuleB = function() {
    this.foo = React.createFactory(C);
    this.showFoo = function() {
        return this.foo;
    };
};

module.exports = ModuleB;
