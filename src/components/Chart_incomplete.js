import React from 'react';
import {Bar} from 'react-chartjs-2';

let positions = ['Investment', 'Technology', 'Research', 'Finance'];
let offered = [ 20, 10, 13, 20];
let on_hold = [4, 2, 1, 0];
let approved = [12, 7, 10, 17];

const Barchart = ()=> {
    return (
        <div>
            <Bar
            data = {{
                labels: positions,
                datasets: [{
                    label: 'Offered',
                    data: offered,
                    backgroundColor: 'lightblue'
                },
                {
                    label: 'On Hold',
                    data: on_hold,
                    backgroundColor: 'lightgreen'
                },
                {
                    label: 'Approved',
                    data: approved,
                    backgroundColor: 'pink'
                },
            ],
                //labels: positions,
                // datasets: [{
                    // label: 'On Hold',
                    // data: on_hold,
                    // backgroundColor: 'lightgreen'
                // }]
            }}
            height= {400}
            width = {600}
            options = {
                {
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: 
                        [{ stacked: true}],
                        yAxes: 
                        [
                            {
                                ticks: {
                                    beginAtZero: true
                                },
                                stacked: true,                                
                            }
                        ]
                }

            }
        }
            />
        </div>
    )
}

export default Barchart;