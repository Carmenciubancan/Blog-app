import React from 'react';


export default class category extends React.Component {
    render () {
        return (
            <div>   
              <h4><small className="glyphicon glyphicon-tag"></small>Category</h4>
              <ul className="nav nav-pills nav-stacked">                                   
                 <li role="presentation"><a href="#" className="list-group-item">Angular JS</a></li>
                 <li role="presentation"><a href="#" className="list-group-item">Grunt</a></li>
                 <li role="presentation"><a href="#" className="list-group-item">JavaScript</a></li>
                 <li role="presentation"><a href="#" className="list-group-item">jQuery</a></li>
                 <li role="presentation"><a href="#" className="list-group-item">Tools</a></li>  
             </ul>
        </div>
        )
    }
}