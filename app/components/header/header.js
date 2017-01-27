import React from 'react';



export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Carmen's Blog</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Posts</a></li>
              <li><a href="#">Admin</a></li>
            </ul>
          </div>
        </div>  
      </nav>
    )
  }
}
