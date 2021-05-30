import React, { Component } from 'react';
import { Tooltip } from 'chart.js';
import { XAxis, YAxis, BarChart, CartesianGrid, Legend, Bar, LabelList } from 'recharts';


let data = [
    {
        position: 'Investment', offered: 20, on_hold: 4, approved: 12
    },
    {
        position: 'Technology', offered: 10, on_hold: 2, approved: 7
    },
    {
        position: 'Research', offered: 13, on_hold: 1, approved: 10
    },
    {
        position: 'Finance', offered: 20, on_hold: 0, approved: 17
    },
];

const colorConfig = {
    "offered": "lightblue",
    "on_hold": "orange",
    "approved": "grey"
};

class StackChartComponent extends Component {
    render() {
        return (
            <div>
                <center>
                    <BarChart width = {600} height = {400} data = {data}>
                    <CartesianGrid strokeDasharray = "3 3"/>
                    <XAxis dataKey = "position" interval = {0} />
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey = "offered" stackId = "x" fill = {colorConfig["offered"]}>
                        <LabelList dataKey = "offered" style = {{ fill: "#FFF"}}/>
                    </Bar>
                    <Bar dataKey = "on_hold" stackId = "x" fill = {colorConfig["on_hold"]}>
                        <LabelList dataKey = "on_hold" style = {{ fill: "#FFF"}}/>
                    </Bar>
                    <Bar dataKey = "approved" stackId = "x" fill = {colorConfig["approved"]}>
                        <LabelList dataKey = "approved" style = {{ fill: "#FFF"}}/>
                    </Bar>
                </BarChart>
                </center> 
            </div>
        );
    }
}

export default StackChartComponent;