var React = require('react');

var Contact = React.createClass({

  render: function() {
    return (
      <div>
        <h1>Find me</h1>
        <h3><a href="https://twitter.com/eanplatter">Twitter</a></h3>
        <h3><a href="https://linkedin.com/in/eplatter">LinkedIn</a></h3>
        <h3><a href="https://medium.com/@eanplatter">Blog</a></h3>
        <h3>eanplatter@gmail.com</h3>
      </div>
    );
  }
});

module.exports = Contact;