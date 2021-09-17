import React from 'react';
import ReactApexChart from 'react-apexcharts';
class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [70],
            options: {
                chart: {
                    height: 350,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                        }
                    },
                },
                labels: ['Senior Java Developer'],
            },


        };
    }
    render() {
        return (

            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
            </div>
        );
    }
}
export default Chart;