import Header from "../components/Home/Header";
import Launch from "../components/technology/Launch";
import MeetTech from "../components/technology/MeetTech";
import classes from "./FirstTech.module.css";

const FirstTech = () => {
  return (
    <div className={classes.tech}>
        <Header />
        <MeetTech />
        <Launch />
    </div>
  )
};

export default FirstTech;