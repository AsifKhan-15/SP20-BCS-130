import Header from "../components/Home/Header";
import MeetTech from "../components/technology/MeetTech";
import classes from "./FirstTech.module.css";
import Capsule from "../components/technology/Capsule";

const SecondTech = () => {
  return (
    <div className={classes.tech}>
        <Header />
        <MeetTech />
        <Capsule />
    </div>
  )
};

export default SecondTech;