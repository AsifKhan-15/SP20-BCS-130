import TechBtn from "./TechBtn";
import classes from "./Launch.module.css";
import CapsuleText from "./CapsuleText";

function Capsule() {
  return (
    <div className={classes.launch}>
      <div className={classes.grp}>
        <TechBtn />
        <CapsuleText /> 
      </div>
      <div>
      <img className={classes.portrait} src="/technology/image-space-capsule-portrait.jpg" alt="launch-vehicle" />
      <img className={classes.landscrape} src="/technology/image-space-capsule-landscape.jpg" alt="launch-vehicle" />
      </div>
    </div>
  );
}

export default Capsule;
