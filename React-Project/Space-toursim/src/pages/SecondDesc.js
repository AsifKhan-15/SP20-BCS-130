import classes from "./SecondDesc.module.css";
import Header from "../components/Home/Header";
import DescLink from "../components/destination/DescLink";
import Mars from "../components/destination/Mars";

const SecondDesc = () => {
    return (
        <div className={classes.destination}>
            <Header />
            <DescLink />
            <Mars />
        </div>
    )
};

export default SecondDesc;