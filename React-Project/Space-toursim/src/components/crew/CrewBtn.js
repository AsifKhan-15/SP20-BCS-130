import { NavLink } from "react-router-dom";
import classes from "./CrewBtn.module.css";

function CrewBtn() {
  return (
    <nav className={classes.nav}>
        <NavLink to="/crew/douglas" activeClassName={classes.active}><div></div></NavLink>
        <NavLink to="/crew/mark" activeClassName={classes.active}><div></div></NavLink>
        <NavLink to="/crew/victor" activeClassName={classes.active}><div></div></NavLink>
        <NavLink to="/crew/ansari" activeClassName={classes.active}><div></div></NavLink>
    </nav>
  )
}

export default CrewBtn;