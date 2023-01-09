import DescLink from "../components/destination/DescLink";
import Titan from "../components/destination/Titan";
import Header from "../components/Home/Header";
import classes from "./FourthDesc.module.css";
 
const FourthDesc = () => {
   return (
    <div className={classes.destination}>
        <Header />
        <DescLink />
        <Titan />
    </div>
   )
};

export default FourthDesc;