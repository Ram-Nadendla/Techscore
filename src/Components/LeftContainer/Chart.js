import React from 'react';
import ReactApexChart from 'react-apexcharts';
import Divider from '@mui/material/Divider';
class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            series: [44, 55],
            options: {
                chart: {
                    width: 380,
                    type: 'donut',
                },

                dataLabels: {
                    enabled: true
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            show: false
                        }
                    }
                }],
                legend: {
                    position: 'right',
                    offsetY: 0,
                    height: 230,
                    display: 'hidden',
                    show: false
                }
            },


        };
    }

    render() {
        return (

            <div id="chart" style={{ border: '15px solid #FFFAF5', margin: '10px', display: 'flex', width: '100%' }}>
                <div style={{ width: '30%' }}>
                    <ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
                </div>

                <div style={{ width: '70%', textAlign: 'center',display:'flex' }}>
                    <div style={{fontSize:'22px',padding: '10px',width:'400px'}}>
                        Your Score 
                        <div style={{fontSize: '50px',color: '#1789fc',fontWeight: 'bold'}}>44</div> 
                        <div>
                        as of April 01, 2021
                        </div>
                    </div>
                    <Divider orientation="vertical"/>
                    <div style={{fontSize:'22px',width:'400px',padding:'10px'}}>
                        Your Target 
                        <div style={{fontSize: '50px',color: 'lightgrey',fontWeight: 'bold'}}>55</div> 
                        <div>
                        by June 01, 2021
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Chart;