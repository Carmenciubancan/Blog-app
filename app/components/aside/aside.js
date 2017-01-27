import React from 'react';
import Categories from './categories'
import Author from './author'
import Dates from './dates'
import List from '../List/List';

require ('./aside.css');

export default class Aside extends React.Component {
    render () {
        return (
            <div className="wellsContainer">
                <div className="well">
                    <div>
                         <div class="form-group">
                              <h3>Search</h3>
                            <input type="search" className="form-control searchInput">
                            </input>
                                <a href="#" className="searchIcon">
                                <span className="glyphicon glyphicon-search"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="well">
                    <div>
                        <h3>Filter Posts</h3>
                        <ul className="nav nav-pills nav-stacked">
                            <li role="presentation" className="active"><a className="list-group-item">Show All Postst</a></li>       
                        </ul>
                        <List title="Category" />
                    </div>
                </div>
             </div>
        )
    }
}
