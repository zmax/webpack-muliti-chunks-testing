require.ensure(['modules/c'], function(require) {

    var C = require('modules/c');

    module.exports = C;

}, "d");