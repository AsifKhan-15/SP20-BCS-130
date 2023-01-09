import classes from "./Titan.module.css";

const Titan = () => {
  return (
    <div className={classes.titan}>
      <img src="/destination/image-titan.png" alt="titan" />
      <div className={classes["titan-div"]}>
        <h3 className={classes.m1}>TITAN</h3>
        <p className={classes.m2}>
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
        </p>
        <div className={classes["distance-div"]}>
          <div className={classes.distance}>
            <h3 className={classes.m3}>AVG. DISTANCE</h3>
            <h3 className={classes.m4}>1.6 BIL. km</h3>
          </div>
          <div className={classes.travel}>
            <h3 className={classes.m3}>Est. travel time</h3>
            <h3 className={classes.m4}>7 YEARS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Titan;
