import React from "react";
import DashboardWidget from "./dashboard-widget";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles(theme => ({}));

export default function Dashboard() {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);
  const [loading, setloading] = React.useState(true);

  React.useEffect(() => {
    function progress() {
      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
      if (completed == 100) {
        setloading(false);
      }
    }
    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{ fontFamily: "Rajdhani, sans-serif", marginTop: "-10px" }}>
      <div
        style={{
          marginTop: "-23px",
          marginLeft: "-24px",
          marginRight: "-24px"
        }}
      >
        {loading ? (
          <LinearProgress variant="determinate" value={completed} />
        ) : null}
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          tincidunt sodales lacus, rhoncus ultricies sapien sagittis vitae.
          Pellentesque laoreet volutpat ipsum sed dapibus. In hac habitasse
          platea dictumst. Sed erat eros, vulputate at rutrum vitae, efficitur
          id nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec volutpat ac elit vel dapibus. Etiam malesuada scelerisque
          congue.{" "}
        </p>
      </div>

      <DashboardWidget style={{ height: "500px" }} />
    </div>
  );
}
