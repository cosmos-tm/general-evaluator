import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';

// const data = [
//   { argument: 1, value: 3 },
//   { argument: 2, value: 5 },
//   { argument: 3, value: 4 },
//   { argument: 4, value: 3 },
//   { argument: 5, value: 5 },
// ];

interface ILineChartProps {
  dataPoints: number[]
}

class LineChart extends React.Component<ILineChartProps, {}> {
  public render() {
    // console.log(this.props.dataPoints)
    let data: any = [];
    for(let i = 0; i<this.props.dataPoints.length; i++) {
      data.push({argument: (i+1), value: this.props.dataPoints[i]});
    }

    return (
      <Paper>
        <Chart
          data={data}
        >
          <ArgumentAxis />
          <ValueAxis />

          <LineSeries valueField="value" argumentField="argument" />
        </Chart>
      </Paper>
    )
  }
}

export default LineChart;
