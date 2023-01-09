import { NavLink } from "react-router-dom";
import classes from "./TechBtn.module.css";

function TechBtn() {
  return (
    <nav className={classes.nav}>
        <NavLink to="/technology/launch" activeClassName={classes.active}><div>1</div></NavLink>
        <NavLink to="/technology/space" activeClassName={classes.active}><div>2</div></NavLink>
        <NavLink to="/technology/capsule" activeClassName={classes.active}><div>3</div></NavLink>
    </nav>
  )
}

export default TechBtn;