var React = require('react');
var Point = require('./Point');

var Timeline = React.createClass({
  render: function() {
    var styles = {
      segment: {
        height: '50px',
        width: '2px',
        background: '#37474F'
      }
    }
    return (
      <div>
        <div style={styles.segment}></div>
        <Point 
        text="DevMountain" 
        url="http://devmtn.com"
        pid='1' 
        toggle="#1" 
        date="September 2014 - April 2015" 
        details="Worked as a fullstack engineer building and consuming APIs for internal tools as well as DevMountain's SaaS app CodeCard.io." 
        technologies="NodeJS, AngularJS, MongoDB, MongooseODM, JavaScript, HTML5, CSS3, Bootstrap, Git"
        position="Software Engineer" />
        <div style={styles.segment}></div>
        <Point 
        text="RepDrive"  
        url="http://repdrive.com/"
        pid="2" 
        toggle="#2" 
        date="October 2014 - January 2015"  
        details="Worked as a UI engineer building mobile interfaces for RepDrive's flagship product. Led the initial development of an Ionic based mobile application." 
        technologies="JavaScript, AngularJS, HTML5, CSS3, Ionic, Cordova, Ruby on Rails, SCSS, MySQL, Git"
        position="Front End Developer" />
        <div style={styles.segment}></div>
        <Point 
        text="Wheelbarrow Media" 
        url="http://www.wheelbarrowmedia.com/"
        pid="3" 
        toggle="#3" 
        date="April 2014 - September 2014"  
        details="Worked as a Front End Developer mostly in the realm of design and HTML / CSS. Built out static websites for marketing projects and consulting clients." 
        technologies="HTML5, CSS3, jQuery, PHP, JavaScript, Git"
        position="Front End Developer" />
        <div style={styles.segment}></div>
        <Point 
        text="Talloo"  
        url="http://www.talloo.com/"
        pid="4" 
        toggle="#4" 
        date="January 2014 - April 2014" 
        details="Worked as a UI engineer building out mobile interfaces for hybrid HTML5 web application." 
        technologies="Ruby on Rails, HTML5, CSS3, JavaScript, MySQL, Heroku, Git"
        position="Front End Developer" />
      </div>
    );
  }
});

module.exports = Timeline;