import CrewBtn from "./CrewBtn";
import classes from "./Douglas.module.css";

function Ansari() {
  return (
    <div className={classes.douglas}>
      <div className={classes.div1}>
        <div className={classes.div2}>
          <div className={classes.div3}>
            <h3>Flight Engineer </h3>
            <h4>Anousheh Ansari</h4>
            <p>
              Anousheh Ansari is an Iranian American engineer and co-founder of
              Prodea Systems. Ansari was the fourth self-funded space tourist,
              the first self-funded woman to fly to the ISS, and the first
              Iranian in space.
            </p>
          </div>
          <CrewBtn />
        </div>
        <div className={classes.divImg}>
          <img src="/crew/image-anousheh-ansari.png" alt="douglas" />
        </div>
      </div>
    </div>
  );
}

export default Ansari;
