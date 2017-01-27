import React from 'react';

export default class List extends React.Component {
    
    render() {
        return (
            <div>
                <h4><small className="glyphicon {this.props.icon}"></small>{this.props.title}</h4>
                <ul className="nav nav-pills nav-stacked">                                   
                    <li role="presentation"><a href="#" className="list-group-item">Angular JS</a></li>
                </ul>
            </div>
        )
    }
}