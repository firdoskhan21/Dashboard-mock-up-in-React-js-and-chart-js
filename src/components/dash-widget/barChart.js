import React from "react";
import Chart from "chart.js";

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidUpdate() {
    this.myChart.data.labels = this.props.data.map(d => d.label);
    this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
    this.myChart.update();
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: "bar",
      options: {
        cornerRadius: 20,
        maintainAspectRatio: false,
        scales: {
          fontFamily: "Roboto,Arial,sans-serif",
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100
              }
            }
          ]
        },
        legend: {
          align: "start",
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
            label: this.props.title,
            data: this.props.data.map(d => d.value),
            backgroundColor: this.props.color
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

export default BarChart;
