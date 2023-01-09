import DescLink from "../components/destination/DescLink";
import Header from "../components/Home/Header";
import classes from "./FirstDesc.module.css"
import Moon from "../components/destination/Moon";

const FirstDesc = () => {
  return (
    <div className={classes.destination}>
        <Header />
        <DescLink />
        <Moon />
    </div>
  )
};

export default FirstDesc;