import classes from "./FirstCrew.module.css";
import Header from "../components/Home/Header"
import Meet from "../components/crew/Meet";
import Douglas from "../components/crew/Douglas";

const FirstCrew = () => {
  return (
    <div className={classes.crew}>
        <Header />
        <Meet />
        <Douglas />
    </div>
  )
};

export default FirstCrew;