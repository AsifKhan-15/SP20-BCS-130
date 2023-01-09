import Header from "../components/Home/Header";
import Space from "../components/technology/Space";
import MeetTech from "../components/technology/MeetTech";
import classes from "./FirstTech.module.css";

const SecondTech = () => {
  return (
    <div className={classes.tech}>
        <Header />
        <MeetTech />
        <Space />
    </div>
  )
};

export default SecondTech;