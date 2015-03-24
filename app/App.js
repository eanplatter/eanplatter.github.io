var React = require('react');
var Router = require('react-router');
var Portfolio = require('./Portfolio');
var Resume = require('./Resume/Resume');
var Contact = require('./Contact');
var Splash = require('./Splash');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function() {
    var styles = {
      navColor: {
        background: '#D95B43'
      },
      brand: {
        color: '#FFF'
      }
    }
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top" style={styles.navColor}>
          <div className="container-fluid">
            <div className="navbar-header">
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="spash">Home</Link></li>
              <li><Link to="resume">Résumé</Link></li>
              <li><Link to="contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <div>
          <div className="container">
            <div className="jumbotron">
              <RouteHandler />
            </div>
          </div>
        </div>
      </div>
    );
  }
});


var routes = (
  <Route name='app' path='/' handler={App}>
    <Route name="resume" handler={Resume} />
    <Route name="spash" handler={Splash} />
    <Route name="portfolio" handler={Portfolio} />
    <Route name="contact" handler={Contact} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});


