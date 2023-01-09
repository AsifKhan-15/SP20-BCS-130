import CrewBtn from "./CrewBtn";
import classes from "./Douglas.module.css";

function Mark() {
  return (
    <div className={classes.douglas}>
      <div className={classes.div1}>
        <div className={classes.div2}>
          <div className={classes.div3}>
            <h3>Mission Specialist </h3>
            <h4>MARK SHUTTLEWORTH</h4>
            <p>
              Mark Richard Shuttleworth is the founder and CEO of Canonical, the
              company behind the Linux-based Ubuntu operating system.
              Shuttleworth became the first South African to travel to space as
              a space tourist.
            </p>
          </div>
          <CrewBtn />
        </div>
        <div className={classes.divImg}>
          <img src="/crew/image-mark-shuttleworth.png" alt="douglas" />
        </div>
      </div>
    </div>
  );
}

export default Mark;
