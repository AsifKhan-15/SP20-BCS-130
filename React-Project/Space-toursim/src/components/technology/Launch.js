import LaunchText from "./LaunchText";
import TechBtn from "./TechBtn";
import classes from "./Launch.module.css";

function Launch() {
  return (
    <div className={classes.launch}>
      <div className={classes.grp}>
        <TechBtn />
        <LaunchText /> 
      </div>
      <div>
      <img className={classes.portrait} src="/technology/image-launch-vehicle-portrait.jpg" alt="launch-vehicle" />
      <img className={classes.landscrape} src="/technology/image-launch-vehicle-landscape.jpg" alt="launch-vehicle" />
      </div>
    </div>
  );
}

export default Launch;
