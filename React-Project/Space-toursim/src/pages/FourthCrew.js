import classes from "./FirstCrew.module.css";
import Header from "../components/Home/Header"
import Meet from "../components/crew/Meet";
import Ansari from "../components/crew/Ansari";

const FourthCrew = () => {
  return (
    <div className={classes.crew}>
        <Header />
        <Meet />
        <Ansari />
    </div>
  )
};

export default FourthCrew;