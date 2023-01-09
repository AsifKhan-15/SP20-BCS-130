import classes from "./FirstCrew.module.css";
import Header from "../components/Home/Header"
import Meet from "../components/crew/Meet";
import Mark from "../components/crew/Mark";

const SecondCrew = () => {
  return (
    <div className={classes.crew}>
        <Header />
        <Meet />
        <Mark />
    </div>
  )
};

export default SecondCrew;