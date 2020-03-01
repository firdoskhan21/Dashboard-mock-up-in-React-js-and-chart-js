import React from "react";

import BarChart from "./dash-widget/barChart";
import LineChart from "./dash-widget/lineChart";
import DoughnutChart from "./dash-widget/doughnut";
import { Paper } from "@material-ui/core";

import { Grid } from "@material-ui/core";
var Chart = require("chart.js");

function getRandomArray(numItems) {
  // Create random array of objects
  let names = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let data = [];
  for (var i = 0; i < numItems; i++) {
    data.push({
      label: names[i],
      value: Math.round(20 + 80 * Math.random())
    });
  }
  return data;
}

function getRandomDateArray(numItems) {
  // Create random array of objects (with date)
  let data = [];
  let baseTime = new Date("2018-05-01T00:00:00").getTime();
  let dayMs = 24 * 60 * 60 * 1000;
  for (var i = 0; i < numItems; i++) {
    data.push({
      time: new Date(baseTime + i * dayMs),
      value: Math.round(20 + 80 * Math.random())
    });
  }
  return data;
}
function getData() {
  let data = [];

  data.push({
    type: "BarChart",
    title: "Visits",
    data: getRandomDateArray(150)
  });

  data.push({
    title: "Categories",
    data: getRandomArray(20)
  });

  data.push({
    title: "Categories",
    data: getRandomArray(10)
  });

  data.push({
    title: "Data 4",
    data: getRandomArray(6)
  });

  return data;
}
const PlotData = getData();
export default class DashboardWidget extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    // items: 6,
    items: [
      { type: "Bar Chart", id: 1 },
      { type: "Line Chart", id: 2 },
      { type: "Doughnut Chart", id: 3 }
    ],

    cols: 8
  };

  constructor(props) {
    super(props);
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  render() {
    return (
      <Grid
        container
        direction="row"
        component={Paper}
        style={{
          borderRadius: "3px",
          height: "100%"
        }}
        spacing={2}
      >
        {this.props.items.map(i => (
          <Grid
            style={{
              borderRadius: "3px",
              height: "100%"
            }}
            item
            md={4}
            key={i.id}
          >
            <div>
              {i.type == "Bar Chart" && i.id == 1 ? <b>{i.type}</b> : null}
              {i.type == "Line Chart" && i.id == 2 ? <b>{i.type}</b> : null}
              {i.type == "Doughnut Chart" && i.id == 3 ? <b>{i.type}</b> : null}
              {i.type == "Pie Chart" && i.id == 4 ? <b>{i.type}</b> : null}
              {i.type == "Stackbar Chart" && i.id == 5 ? <b>{i.type}</b> : null}
              {i.type == "Radar Chart" && i.id == 6 ? <b>{i.type}</b> : null}
            </div>
            {i.type == "Bar Chart" && i.id == 1 ? (
              <BarChart
                data={PlotData[2].data}
                title={PlotData[2].title}
                color="#BB86FC"
              />
            ) : null}
            {i.type == "Line Chart" && i.id == 2 ? (
              <LineChart
                data={PlotData[0].data}
                title={PlotData[0].title}
                // color="#03DAC6"
                color="#661FFF"
              />
            ) : null}
            {i.type == "Doughnut Chart" && i.id == 3 ? (
              <DoughnutChart
                data={PlotData[3].data}
                title={PlotData[3].title}
                colors={[
                  "#bb86fc",
                  "#c690ff",
                  "#d19aff",
                  "#dca5ff",
                  "#daaef6",
                  "#d8bcea"
                ]}
              />
            ) : null}
          </Grid>
        ))}
      </Grid>
    );
  }
}
