import classes from "./Europa.module.css";

const Europa = () => {
  return (
    <div className={classes.europa}>
      <img src="/destination/image-europa.png" alt="europa" />
      <div className={classes["europa-div"]}>
        <h3 className={classes.m1}>EUROPA</h3>
        <p className={classes.m2}>
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </p>
        <div className={classes["distance-div"]}>
          <div className={classes.distance}>
            <h3 className={classes.m3}>AVG. DISTANCE</h3>
            <h3 className={classes.m4}>628 MIL. km</h3>
          </div>
          <div className={classes.travel}>
            <h3 className={classes.m3}>Est. travel time</h3>
            <h3 className={classes.m4}>3 YEARS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Europa;
