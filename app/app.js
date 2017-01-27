import React from 'react';
import Header from './components/header/header';
import Content from './components/content/content';
import  Aside from './components/aside/aside';




export default class App extends React.Component {
    render () {
        return (
            <div>
              <Header />
                <div className="container">
                    <Content />
                    <Aside />
                </div>
            </div>
        )
    }
}
