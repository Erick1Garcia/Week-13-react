import React from 'react';
import Form from './form';
import NavBar from './navbar';
import '../App.css'


export default class Container extends React.Component {
    render () {
        return (
            <div className = 'container-fluid'>
                < div className ="row">
                    <div className ="col-13">
                        <NavBar />
                    </div>
                </div>
                
                < div className ="row">
                    < div className ="col-4 mx-auto">
                        <h3> Log in:</h3>
                        <Form />
                    </div>
                </div>
                
            </div>
        )
    }
}