import CrewBtn from "./CrewBtn";
import classes from "./Douglas.module.css";

function Victor() {
  return (
    <div className={classes.douglas}>
      <div className={classes.div1}>
        <div className={classes.div2}>
          <div className={classes.div3}>
            <h3>PILOT</h3>
            <h4>Victor Glover</h4>
            <p>
              Pilot on the first operational flight of the SpaceX Crew Dragon to
              the International Space Station. Glover is a commander in the U.S.
              Navy where he pilots an F/A-18.He was a crew member of Expedition
              64, and served as a station systems flight engineer.
            </p>
          </div>
          <CrewBtn />
        </div>
        <div className={classes.divImg}>
          <img src="/crew/image-victor-glover.png" alt="douglas" />
        </div>
      </div>
    </div>
  );
}

export default Victor;
