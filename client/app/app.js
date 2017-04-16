import {IndexRoute, Router, Route, hashHistory} from 'react-router';
const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component{
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="index.html">
                        <img src="img/umass.png" height="30" width="90" />
                    </a>
                </div>
            </div>
        </nav>
          <div className="container centered">
            <div className="col-md-4">
            </div>
            <div className="col-md-4">
                <div className="text-center">
                    <div className="btn-group-vertical" role="group">
                        <a href="calendar.html" type="button" className="btn btn-lg btn-raised btn-default">
                          <h1>Request a New Ride</h1>
                        </a>
                        <a href="viewRide.html" type="button" className="btn btn-lg btn-raised btn-default">
                          <h1>View Your Ride</h1>
                        </a>
                      </div>
                    </div>
            </div>
            <div className="col-md-4">
            </div>
          </div>
          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <a href="index.html" type="button" className="btn btn-default align-left">Home</a>
              </div>
            </div>
          </footer>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('App')
);
