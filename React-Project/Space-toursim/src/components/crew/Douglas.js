import CrewBtn from "./CrewBtn";
import classes from "./Douglas.module.css";

function Douglas() {
  return (
    <div className={classes.douglas}>
      <div className={classes.div1}>
        <div className={classes.div2}>
          <div className={classes.div3}>
            <h3>Commander </h3>
            <h4>Douglas Hurley</h4>
            <p>
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
          <CrewBtn />
        </div>
        <div className={classes.divImg}>
        <img src="/crew/image-douglas-hurley.png" alt="douglas" />
        </div>
      </div>
    </div>
  );
}

export default Douglas;
