import SpaceText from "./SpaceText";
import TechBtn from "./TechBtn";
import classes from "./Launch.module.css";

function Space() {
  return (
    <div className={classes.launch}>
      <div className={classes.grp}>
        <TechBtn />
        <SpaceText />
      </div>
      <div>
      <img className={classes.portrait} src="/technology/image-spaceport-portrait.jpg" alt="spaceport" />
      <img className={classes.landscrape} src="/technology/image-spaceport-landscape.jpg" alt="spaceport" />
      </div>
    </div>
  );
}

export default Space;
