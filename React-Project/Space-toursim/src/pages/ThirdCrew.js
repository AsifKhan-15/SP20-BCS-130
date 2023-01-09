import classes from "./FirstCrew.module.css";
import Header from "../components/Home/Header"
import Meet from "../components/crew/Meet";
import Victor from "../components/crew/Victor";

const ThirdCrew = () => {
  return (
    <div className={classes.crew}>
        <Header />
        <Meet />
        <Victor />
    </div>
  )
};

export default ThirdCrew;