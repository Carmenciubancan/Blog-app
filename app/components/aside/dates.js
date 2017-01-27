import React from 'react';


export default class month extends React.Component {
    render () {
        return (
            <div>
               <h4><small className="glyphicon glyphicon-time"></small>Month</h4>
               <ul className="nav nav-pills nav-stacked">                                   
                     <li role="presentation"><a href="#" className="list-group-item"></a></li>
                     <li role="presentation"><a href="#" className="list-group-item"></a></li>
                     <li role="presentation"><a href="#" className="list-group-item"></a></li>
                     <li role="presentation"><a href="#" className="list-group-item"></a></li>
                     <li role="presentation"><a href="#" className="list-group-item"></a></li> 
                </ul>   
            </div>
        )
    }
}