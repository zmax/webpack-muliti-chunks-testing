require.include('react');
require.include('backbone');
require.include('vendor/jquery');
// var $ = require('vendor/jquery');
// var React = require('react');
// var Backbone = require('backbone');

// Bootstrap CSS & Javascripts
require('vendor/bootstrap/index');

// Ensures that the dependency is available, but don't execute it. This can be use for optimizing the position of a module in the chunks.
// put c in common.bundle.js
require.include('modules/c');

// module.exports = {
//     React: React,
//     $: $,
//     jQuery: $,
//     Backbone: Backbone,
//     customJQuery: $
// };
