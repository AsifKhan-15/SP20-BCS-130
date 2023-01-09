import classes from "./Moon.module.css";

const Moon = () => {
  return (
    <div className={classes.moon}>
      <img src="/destination/image-moon.png" alt="moon" />
      <div className={classes["moon-div"]}>
        <h3 className={classes.m1}>MOON</h3>
        <p className={classes.m2}>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <div className={classes["distance-div"]}>
            <div className={classes.distance}>
                <h3 className={classes.m3}>AVG. DISTANCE</h3>
                <h3 className={classes.m4}>384,400 km</h3>
            </div>
            <div className={classes.travel}>
                <h3 className={classes.m3}>Est. travel time</h3>
                <h3 className={classes.m4}>3 days</h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Moon;
