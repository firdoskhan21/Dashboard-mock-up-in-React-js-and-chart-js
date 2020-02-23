import React from "react";
import Chart from "chart.js";
class DoughnutChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidUpdate() {
    this.myChart.data.labels = this.props.data.map(d => d.label);
    this.myChart.data.datasets[0].davta = this.props.data.map(d => d.value);
    this.myChart.update();
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: "doughnut",
      options: {
        elements: {
          arc: {
            borderWidth: 0
          }
        },
        cutoutPercentage: 70,
        maintainAspectRatio: false,
        legend: {
          display: false,
          position: "bottom",
          labels: {
            // fontColor: "#333",
            fontFamily: "Roboto,Arial,sans-serif"
          }
        }
      },
      data: {
        labels: this.props.data.map(d => d.label),
        datasets: [
          {
            data: this.props.data.map(d => d.value),
            backgroundColor: this.props.colors
          }
        ]
      }
    });
  }

  render() {
    return (
      <div style={{ height: "calc(100% - 60px)" }}>
        <canvas ref={this.canvasRef} />
      </div>
    );
  }
}
export default DoughnutChart;
