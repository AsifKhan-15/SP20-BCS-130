import classes from "./ThirdDesc.module.css";
import Header from "../components/Home/Header";
import DescLink from "../components/destination/DescLink";
import Europa from "../components/destination/Europa";


const ThirdDesc = () => {
   return (
    <div className={classes.destination}>
        <Header />
        <DescLink />
        <Europa />
    </div>
   )
};

export default ThirdDesc;