import { Link } from "react-router-dom";
import classes from "./DescLink.module.css";

const DescLink = () => {
  return (
    <main className={classes.desc}>
      <h2>
        <span>01</span>Pick your destination
      </h2>
      <nav>
        <ul>
          <li>
            <Link to="/destination/moon" activeClassName={classes.active}>
              MOON
            </Link>
          </li>
          <li>
            <Link to="/destination/mars" activeClassName={classes.active}>
              MARS
            </Link>
          </li>
          <li>
            <Link to="/destination/europa" activeClassName={classes.active}>
              EUROPA
            </Link>
          </li>
          <li>
            <Link to="/destination/titan" activeClassName={classes.active}>
              TITAN
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default DescLink;
