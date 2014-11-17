/** @jsx React.DOM */

var React = require('react');

/**
 * ModuleC
 */
var ModuleC = React.createClass({

    render: function() {
        return (
            <div className="module-c btn btn-primary">
                Module C
            </div>
        );
    }

});

$(document).ready(function() {

    $(".component").each(function(index, element) {
        React.render(<ModuleC />, element);
    });
    
});

module.exports = ModuleC;