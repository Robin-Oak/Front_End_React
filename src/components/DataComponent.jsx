import React, { Component } from 'react';
import DataService from '../services/DataService';

class DataComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            data : ""
        }
    }
    
    componentDidMount(){
        DataService.getData().then((res)=>{
            this.setState({data : res.data});
        });
    }

    render() {
        return (
            <div>
                <center>
                <br />
                <br />
                <h2>{this.state.data}</h2>
                <a className="btn btn-primary" href="/" role="button">Back</a>
                </center>
            </div>
        );
    }
}

export default DataComponent;