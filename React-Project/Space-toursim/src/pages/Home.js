import classes from "./Home.module.css";
import Header from "../components/Home/Header";
import Text from "../components/Home/Text";

const Home = () => {
    return (
        <div className={classes.home}>
         <Header />
         <Text />
        </div>
    )
};

export default Home;