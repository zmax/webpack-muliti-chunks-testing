/**
 * ModuleA
 */
var ModuleA = function() {
    this.foo = 0;
    this.showFoo = function() {
        return this.foo;
    }
};

module.exports = ModuleA;