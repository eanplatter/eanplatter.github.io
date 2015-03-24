var React = require('react');

var Point = React.createClass({
  render: function() {
    var styles = {
      text: {
        marginTop: '14px',
        padding: '10px',
        border: '1px solid #37474F'
      }
    }
    return (
      <div>
        <p onClick={this.props.click} target="_blank" data-toggle="collapse" data-target={this.props.toggle} style={styles.text}> <a href={this.props.url}>{this.props.text}</a> <span className="pull-right">{this.props.date}</span></p>
        <div className="collapse" id={this.props.pid}>
          <div className="well">
          <h2>{this.props.position}</h2>
          <p>{this.props.details}</p>
          <hr />
          <h4>Technologies</h4>
          <p>{this.props.technologies}</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Point;