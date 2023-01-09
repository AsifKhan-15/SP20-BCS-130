import classes from "./Mars.module.css";

const Mars = () => {
  return (
    <div className={classes.mars}>
      <img src="/destination/image-mars.png" alt="mars" />
      <div className={classes["mars-div"]}>
        <h3 className={classes.m1}>MARS</h3>
        <p className={classes.m2}>
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!
        </p>
        <div className={classes["distance-div"]}>
          <div className={classes.distance}>
            <h3 className={classes.m3}>AVG. DISTANCE</h3>
            <h3 className={classes.m4}>225 MIL. km</h3>
          </div>
          <div className={classes.travel}>
            <h3 className={classes.m3}>Est. travel time</h3>
            <h3 className={classes.m4}>9 months</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mars;
