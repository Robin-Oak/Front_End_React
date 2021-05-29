import React, { Component } from 'react';

class HomeComponent extends Component {

    render() {
        return (
            <div>
                <center>
                <h1> Welcome to React App! </h1>
                <h2>Click below to get data from backend!</h2>
                <a class="btn btn-primary" href="/data" role="button">Click</a>
                </center>
            </div>
        );
    }
}

export default HomeComponent;