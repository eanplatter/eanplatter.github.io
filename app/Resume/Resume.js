var React = require('react');
var Timeline = require('./Timeline');


var Resume = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Résumé</h1>
        <Timeline />
      </div>
    );
  }
});

module.exports = Resume;